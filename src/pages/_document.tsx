import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";
import React from "react";


class myDocument extends Document {
    static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  render() {
    return (
      <Html lang="en">
        <Head>
 
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"/>
          {/* SEO */}
          <meta name="robots" content="all" />
          {/* social media url preview */}
          <meta property="og:url" content="https://lexir-io-challenge-filipe-martins.vercel.app/" />
          <meta
            property="og:title"
            content="Lexir Frontend Assessment!"
          />
          <meta
            property="og:description"
            content="Lexir Frontend Assessment!"
          />
          {/* <meta
            property="og:image"
            content=""
          /> */}
          <meta
            property="og:site_name"
            content="Lexir Frontend Assessment!"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:site"
            content="https://lexir-io-challenge-filipe-martins.vercel.app/"
          />
          <meta
            name="twitter:creator"
            content="Nuno Filipe Martins - Freelancer Web Developer"
          />
          {/* <meta
            name="twitter:image"
            content=""
          /> */}
        </Head>

        <body className="text-dark bg-light dark:bg-dark dark:text-light transition-all duration-75 lg:duration-500 antialiased scroll-smooth">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default myDocument;
