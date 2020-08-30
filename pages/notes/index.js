import Head from "next/head";

export default function Notes() {
  return (
    <div className="container">
      <Head>
        <title>Notes</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Next JS" />
        <meta name="keywords" content="SSR, JavaScript" />
        <meta name="author" content="sina" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <main>
        <h1 className="title">Notes</h1>
      </main>
    </div>
  );
}
