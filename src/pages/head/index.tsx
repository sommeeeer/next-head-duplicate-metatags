import type { InferGetServerSidePropsType } from "next";
import Head from "next/head";

export async function getServerSideProps() {
  return {
    props: {
      time: new Date().toISOString(),
    },
  };
}

export default function Page({
  time,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>OpenNext head</title>
        <meta
          property="og:title"
          content={`OpenNext pages router head`}
        />
        <meta property="time" content={time} />
        <meta
          name="description"
          content="OpenNext takes the Next.js build output and converts it into packages that can be deployed across a variety of environments. Natively OpenNext has support for AWS Lambda, Cloudflare, and classic Node.js Server."
        />
      </Head>
      <p>This is a page!</p>
    </div>
  );
}
