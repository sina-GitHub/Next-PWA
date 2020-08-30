import React from "react";
import Link from "next/link";
import Head from "next/head";

const links = [
  {href: "https://zeit.co/now", label: "ZEIT"},
  {href: "https://github.com/zeit/next.js", label: "GitHub"},
].map((link) => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}));

export default function Home2() {
  return (
    <div className="container">
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js PWA Example</title>

        <link rel="manifest" href="/manifest.json" />
        <link href="/logo192.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/logo512.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/logo512.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>

      <main>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {links.map(({key, href, label}) => (
            <li key={key}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        <style jsx>{`
          :global(body) {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
          }
          nav {
            text-align: center;
          }
          ul {
            display: flex;
            justify-content: space-between;
          }
          nav > ul {
            padding: 4px 16px;
          }
          li {
            display: flex;
            padding: 6px 8px;
          }
          a {
            color: #067df7;
            text-decoration: none;
            font-size: 13px;
          }
        `}</style>
      </main>
    </div>
  );
}
