"use client";
import { useEffect, useRef, useMemo } from "react";

export default function AdScript() {
  const banner = useRef();

  const atOptions = useMemo(
    () => ({
      key: "1a26ef3314cb0fb63793eb96ad8c870c",
      format: "iframe",
      height: 60,
      width: 468,
      params: {},
    }),
    []
  ); // Empty dependency array for one-time memoization

  useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//www.topcreativeformat.com/1a26ef3314cb0fb63793eb96ad8c870c/invoke.js";
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      banner.current.append(conf);
      banner.current.append(script);
    }
  }, [banner, atOptions]);

  return (
    <div
      className="mx-2 my-5  flex justify-center items-center text-white text-center"
      ref={banner}
    ></div>
  );
}

// "use client";
// import Script from "next/script";
// import { useEffect } from "react";

// const AdScript = () => {
//   useEffect(() => {
//     if (process.env.NODE_ENV === "production") {
//       const script = document.createElement("script");
//       script.type = "text/javascript";
//       script.id = "AD";
//       script.src =
//         "//www.topcreativeformat.com/1a26ef3314cb0fb63793eb96ad8c870c/invoke.js";
//       script.async = true;
//       script.onload = () => {
//         // Additional onLoad logic here
//       };

//       document.head.appendChild(script);

//       return () => {
//         // Cleanup: Remove the script when the component is unmounted
//         document.head.removeChild(script);
//       };
//     }
//   }, []);

//   return null; // You don't need to render anything for this component
// };

// export default AdScript;
