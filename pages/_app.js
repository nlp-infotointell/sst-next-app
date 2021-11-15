
import Script from "next/script";
import "@fortawesome/fontawesome-svg-core/styles.css";


import "../styles/bootstrap.min.css";
import "../styles/en.css";





function MyApp({ Component, pageProps }) {

  return (
    <>
        <Script
          strategy="lazyOnload"
          src="https://infotointell.fra1.digitaloceanspaces.com/Bots/i2iBot-84/newWebchat.js"
        />
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-XEM6WKJNMX"
        />
        <Script id="datalayer" strategy="lazyOnload">
  {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XEM6WKJNMX');`}
</Script>
      
          
      <Component {...pageProps} />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { req, res } = context;
  if (req.headers.host.match(/^www/) !== null) {
    res.writeHead(301, {
      location: "https://" + req.headers.host.replace(/^www./, "") + req.url,
    });
    res.end();
  }
  return { props: {} };
};

export default MyApp;
