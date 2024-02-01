"use client";
import { useEffect, useRef } from "react";

export default function AdScript({ atOptions, scriptSrc }) {
  const banner = useRef();

  useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = scriptSrc;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      banner.current.append(conf);
      banner.current.append(script);
    }
  }, [banner, atOptions, scriptSrc]);

  return (
    <div
      className="mx-2 my-5  flex justify-center items-center text-white text-center"
      ref={banner}
    ></div>
  );
}
