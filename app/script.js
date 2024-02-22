import Image from "next/image";
import Script from "next/script";
import React from "react";

const ScriptTags = () => {
  return (
    <>
      {/* Other meta tags */}

      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.min.js"
        defer
      ></script>

      {/* Google tag (gtag.js) */}
      <Script
        id="google_tag"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BEE6K8PYPF"
      />
      <Script
        id="google_html"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BEE6K8PYPF');
            `,
        }}
      />

      {/* Meta Pixel Code */}
      <Script
        id="meta_tag"
        dangerouslySetInnerHTML={{
          __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '952354016465602');
              fbq('track', 'PageView');
            `,
        }}
      />
      <noscript>
        <Image
          src="https://www.facebook.com/tr?id=952354016465602&ev=PageView&noscript=1"
          width={1}
          height={1}
          style={{ display: "none" }}
          alt="facebook"
        />
      </noscript>
      {/* End Meta Pixel Code */}
    </>
  );
};

export default ScriptTags;
