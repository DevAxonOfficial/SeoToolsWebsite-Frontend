"use client";
import { useEffect, useRef } from "react";

export const Adsterra = ({ slot }) => {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current.firstChild && slot) {
      const atAsyncOptions = {
        key: slot,
        format: "js",
        async: true,
        container: getId(slot),
        params: {},
      };
      const src =
        "//www.topcreativeformat.com/32574d71c95c68d56e8efa676b6849a4/invoke.js";

      const conf = document.createElement("script");
      conf.innerHTML = `
        if (typeof atAsyncOptions !== 'object') var atAsyncOptions = [];
        atAsyncOptions.push(${JSON.stringify(atAsyncOptions, null, 2)});
      `;
      conf.type = "text/javascript";

      const script = document.createElement("script");
      script.async = true;
      script.src = src;
      script.type = "text/javascript";

      if (ref.current) {
        ref.current.append(conf);
        ref.current.append(script);
      }
    }
  }, [slot]);

  const getId = (slot) => `atContainer-${slot}`;

  return (
    <>
      <div ref={ref} />
      <div className="  flex justify-center mt-10" id={getId(slot)} />
    </>
  );
};

export const Adsterra1 = ({ slot }) => {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current.firstChild && slot) {
      const atAsyncOptions = {
        key: slot,
        format: "js",
        async: true,
        container: getId(slot),
        params: {},
      };
      const src =
        "//www.topcreativeformat.com/1a26ef3314cb0fb63793eb96ad8c870c/invoke.js";

      const conf = document.createElement("script");
      conf.innerHTML = `
        if (typeof atAsyncOptions !== 'object') var atAsyncOptions = [];
        atAsyncOptions.push(${JSON.stringify(atAsyncOptions, null, 2)});
      `;
      conf.type = "text/javascript";

      const script = document.createElement("script");
      script.async = true;
      script.src = src;
      script.type = "text/javascript";

      if (ref.current) {
        ref.current.append(conf);
        ref.current.append(script);
      }
    }
  }, [slot]);

  const getId = (slot) => `atContainer-${slot}`;

  return (
    <>
      <div ref={ref} />
      <div className="  flex justify-center mt-10" id={getId(slot)} />
    </>
  );
};
export const Adsterra2 = ({ slot }) => {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current.firstChild && slot) {
      const atAsyncOptions = {
        key: slot,
        format: "js",
        async: true,
        container: getId(slot),
        params: {},
      };
      const src = "//balmyrind.com/bbd1e0f4c54c1cb2ae6f3aaabd762788/invoke.js";

      const conf = document.createElement("script");
      conf.innerHTML = `
        if (typeof atAsyncOptions !== 'object') var atAsyncOptions = [];
        atAsyncOptions.push(${JSON.stringify(atAsyncOptions, null, 2)});
      `;
      conf.type = "text/javascript";

      const script = document.createElement("script");
      script.async = true;
      script.src = src;
      script.type = "text/javascript";

      if (ref.current) {
        ref.current.append(conf);
        ref.current.append(script);
      }
    }
  }, [slot]);

  const getId = (slot) => `atContainer-${slot}`;

  return (
    <>
      <div ref={ref} />
      <div className="  flex justify-center mt-10" id={getId(slot)} />
    </>
  );
};

export const AdsterraSocialBarAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//balmyrind.com/c4/61/a1/c461a1e31aa51af7a2cfc2b9f88a73c8.js";
    script.async = true;
    document.head.appendChild(script);

    // Additional logic to adjust the ad position after script load
    script.onload = () => {
      const adsterraContainer = document.getElementById(
        "adsterra-social-bar-ad"
      );
      if (adsterraContainer) {
        adsterraContainer.classList.add(
          "fixed",
          "bottom-0",
          "right-0",
          "m-10",
          "z-50"
        );
      }
    };

    return () => {
      // Cleanup script when the component is unmounted
      document.head.removeChild(script);
    };
  }, []);

  return <div id="adsterra-social-bar-ad"></div>;
};

export const PopUnderAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//pl22348080.toprevenuegate.com/01/ed/3c/01ed3cf3664a31413433412bb5f8bed6.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export const NativeBanner = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "//pl22348347.toprevenuegate.com/7d1f24d96b93385c60fccb44cde42705/invoke.js";
    document
      .getElementById("container-7d1f24d96b93385c60fccb44cde42705")
      .appendChild(script);

    return () => {
      // Cleanup code if necessary
    };
  }, []);

  return (
    <div
      className="mt-10"
      id="container-7d1f24d96b93385c60fccb44cde42705"
    ></div>
  );
};
