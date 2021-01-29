/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable camelcase */
export const GA_TRACKING_ID = 'G-2WPL02Y9BX';

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value
  });
};