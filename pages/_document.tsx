import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("DOCUMENT - PAGES ROUTER");
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />
        
        {/** SEO */}
        <meta
          name="keyword"
          content={"nestar, nestar.uz, devex mern, mern nestjs fullstack"}
        />
        <meta
          name="description"
          content={
            "Buy and sell properties anytime in South Korea. | " +
            "Покупайте и продавайте недвижимость в Южной Корее в любое время. | " +
            "대한민국에서 언제든지 부동산을 사고파세요."
          }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
