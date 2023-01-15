import Favicon from "@/public/favicon/favicon.ico";
import logo from "@/public/logo.png";
import manifest from "@/public/favicon/manifest.json";
import siteMetadata from "@/data/siteMetadata";

export default function Head() {
  return (
    <>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <meta charSet="utf-8" />
      <link rel="icon" href={`${Favicon.src}`} />
      <meta name="theme-color" content="#000000" />
      <link rel="apple-touch-icon" href={`${logo.src}`} />
      <link rel="manifest" href={`${manifest}`} />
      <title key="title">{`${siteMetadata.title}`}</title>
      <meta
        key="description"
        name="description"
        content={`${siteMetadata.description}`}
      />
    </>
  );
}
