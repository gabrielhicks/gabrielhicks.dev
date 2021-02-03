/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { google } from 'googleapis';

let googleAuth;

export default async (_, res) => {
  googleAuth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY
    },
    scopes: ['https://www.googleapis.com/auth/analytics.readonly']
  });

  const analytics = google.analytics({
    auth,
    version: 'v3'
  });

  const startDate = req.query.startDate;
  const response = await analytics.data.ga.get({
    'end-date': 'today',
    ids: 'G-2FHE2V2W9T',
    metrics: 'ga:pageviews',
    'start-date': startDate
  });

  return res.status(200).json({
    pageViews: response.data.rows[0][0]
  });
};
