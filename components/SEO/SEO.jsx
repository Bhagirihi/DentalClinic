// Next
import Head from "next/head";

export function SEO({ title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Official website of Dental Clinic"
        />
        <link rel="icon" href="/Logo/logo.png" />
      </Head>
    </div>
  );
}
