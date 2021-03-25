import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-2FHE2V2W9T`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-2FHE2V2W9T', {
                      page_path: window.location.pathname,
                    });
                  `
            }}
          />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta name="msapplication-TileColor" content="#ffc40d" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="google-site-verification"
            content="CGNWZAaIZRZMwDbjxZa8poGnOkax1lxdQ3DNzdRKnUo"
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
