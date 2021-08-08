import Head from 'next/head';

import Footer from 'src/elements/Footer';
import Main from 'src/elements/Main';
import SiteTitle from 'src/components/SiteTitle';
import Timeline from 'src/components/Timeline';
import VisuallyHidden from 'src/elements/VisuallyHidden';

import {footer, index} from 'src/utils/metadata';

function HomePage() {
  return (
    <>
      <Head>
        <title>{index.title}</title>
        <meta name="description" content={index.description} />
      </Head>
      <Main.Index>
        <VisuallyHidden as="h1">Translating Japanese Gardens</VisuallyHidden>
        <SiteTitle ariaHidden />
        <Timeline indexPage />
      </Main.Index>
      <Footer>
        <Footer.BottomBackground>
          <Footer.P>
            <Footer.DropCap /> {footer.text}
          </Footer.P>
          <Footer.P centerAligned>
            <Footer.Small>{footer.copyrightNotice}</Footer.Small>
          </Footer.P>
        </Footer.BottomBackground>
      </Footer>
    </>
  ); // see https://codepen.io/masakudamatsu/pen/QWpbELb
}

export default HomePage;
