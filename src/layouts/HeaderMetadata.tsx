import * as React from "react";
import Head from "next/head";

export default function HeaderMetadata(): React.JSX.Element {
  return (
    <Head>
      <title>Taufik Hidayat&apos;s Portfolio Website</title>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="subject"
        content="Taufik Hidayat, Full Stack Web Developer"
      />
      <meta
        name="description"
        content="Hello Everyone👋 I'am Taufik Hidayat. A Full Stack Web Developer from Indonesia. This is my personal portfolio website that created using Next.js and Chakra UI"
      />
      <meta
        name="author"
        content="Taufik Hidayat"
      />

      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
  );
}
