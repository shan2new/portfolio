const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Define your routes
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/work', changefreq: 'daily', priority: 0.8 },
  { url: '/techstack', changefreq: 'daily', priority: 0.8 },
  { url: '/contact', changefreq: 'daily', priority: 0.8 }
];

// Create a stream to write to
const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
const sitemap = new SitemapStream({ hostname: 'https://shan2new.in' });
const writeStream = createWriteStream(sitemapPath);

// Handle errors
writeStream.on('error', (err) => {
  console.error('Error writing sitemap:', err);
});

// Pipe your stream to the file
sitemap.pipe(writeStream);

// Add links to the sitemap
links.forEach(link => {
  sitemap.write(link);
});

// End the sitemap stream
sitemap.end();

// Log completion
writeStream.on('finish', () => {
  console.log('Sitemap created successfully');
});
