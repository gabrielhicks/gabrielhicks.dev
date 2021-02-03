/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/no-danger */

import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

import { GA_TRACKING_ID } from '../lib/gtag';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `
            }}
          /> */}
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta name="msapplication-TileColor" content="#ffc40d" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            content="Pp_AlJMcynTuCnFnUOlynldmgPukRP_AY5lxl6N1qPM"
            name="google-site-verification"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicons/favicon.ico"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/favicons/safari-pinned-tab.svg"
            color="#b1b62b"
          />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
