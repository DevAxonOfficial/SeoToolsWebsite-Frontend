"use client";
import React from "react";

const Page = (props) => {
  const {
    params: { slug },
  } = props;

  return <div>{JSON.stringify(props)}</div>;
};

export default Page;
