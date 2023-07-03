import Head from 'next/head';

import GlobalStyle from 'src/utils/GlobalStyle';

import {index} from 'src/utils/metadata';

const title = index.title;
const description = index.description;
const url = 'https://translating-japanese-gardens.pages.dev';

const structuredData = {
  applicationCategory: 'DesignApplication',
  genre: 'color',
  softwareVersion: '1.0.0',
}; // See https://developers.google.com/search/docs/data-types/software-app#softwareapplication

const socialMediaLink = {
  imageUrl: '',
  imageFileType: 'image/png',
  imageHeight: '630',
  imageWidth: '1200',
  imageAltText: '',
  createrTwitterId: '',
}; // See https://masakudamatsu.medium.com/webdev-survey-meta-tags-for-sharing-the-link-on-facebook-and-twitter-b597a735d372

export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*** Favicon (https://dev.to/masakudamatsu/favicon-nightmare-how-to-maintain-sanity-3al7) ***/}
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#214F5A" />
        {/*** Structured data ***/}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'WebApplication',
              name: title,
              url: url,
              applicationCategory: structuredData.applicationCategory,
              genre: structuredData.genre,
              browserRequirements: 'Requires JavaScript. Requires HTML5.',
              softwareVersion: structuredData.softwareVersion,
              operatingSystem: 'All',
              offers: {
                '@type': 'Offer',
                price: '0',
              },
            }),
          }}
          key="structured-data"
        />
        {/*** Styling the link on social media ***/}
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={socialMediaLink.imageUrl} />
        <meta
          property="og:image:height"
          content={socialMediaLink.imageHeight}
        />
        <meta property="og:image:width" content={socialMediaLink.imageWidth} />
        <meta name="twitter:image:alt" content={socialMediaLink.imageAltText} />
        <meta
          property="og:image:type"
          content={socialMediaLink.imageFileType}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={socialMediaLink.createrTwitterId}
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />{' '}
    </>
  );
}
