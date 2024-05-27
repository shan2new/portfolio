import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize(process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID);
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
};
