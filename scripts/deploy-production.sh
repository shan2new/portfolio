#!/bin/bash

# Define variables
REMOTE_DIR="/var/www/html"

# Run build command
echo "Building the React application..."
npm run build

# Check if the build was successful
if [ $? -eq 0 ]; then
  echo "Build successful. Preparing to deploy..."
else
  echo "Build failed. Exiting."
  exit 1
fi

# Copy files to the remote server
echo "Deploying files to EC2 instance..."
scp -i $MAIN_SERVER_KEY_PATH -r $PORTFOLIO_REPO_DIR/build/* $MAIN_SERVER_USER@$MAIN_SERVER_HOST:$REMOTE_DIR

# Check if the copy was successful
if [ $? -eq 0 ]; then
  echo "Deployment successful."
else
  echo "Deployment failed."
  exit 1
fi
