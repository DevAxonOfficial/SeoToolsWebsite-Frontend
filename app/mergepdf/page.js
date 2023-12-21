"use client";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import React from "react";
import Image from "next/image";

const Page = () => {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "application/pdf",
  });

  return (
    <div className=" flex justify-center h-[750px] ">
      <div className="flex items-center justify-center mb-32 ">
        <div
          {...getRootProps()}
          className="text-sm text-center mr-16 p-2 relative "
        >
          <Image
            src="/img/Rectangle23.png"
            alt="background"
            width={830}
            height={469}
            className="object-contain mb-28"
          />
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop files here...</p>
          ) : (
            <p>Drag and drop PDF files here</p>
          )}
        </div>

        {/* Display preview of added files */}
        <div className="flex flex-wrap mt-4 absolute ml-[550px]">
          {files.map((file) => (
            <div key={file.name} className="mr-4 mb-4">
              <div>{file.name}</div>
              <div>
                <Image
                  src={file.preview}
                  alt={file.name}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          ))}
        </div>
        <Image
          src="/img/Group14.png"
          alt="remove logo"
          width={90}
          height={90}
          className="absolute flex justify-center items-baseline mb-[350px]"
        />
        <h1 className="absolute mb-[220px] text-3xl font-bold">Merge Pdf</h1>
        <p className="absolute text-center mb-[130px] leading-5">
          Simplify your document management with our <br /> quick and intuitive{" "}
          <strong className="font-bold">Pdf Merge Tool.</strong>
        </p>
        <div className="flex-col absolute justify-end items-end ml-56">
          <Image
            src="/img/group12.png"
            alt="logo"
            width={40}
            height={40}
            className=""
          />
          <Image
            src="/img/group13.png"
            alt="logo"
            width={35}
            height={35}
            className="ml-[3px]"
          />
        </div>
        <div className="absolute ">
          <button className="p-7 w-[250px] mr-20 bg-gray-400 rounded-full text-white font-semibold mt-10">
            Select Pdf file
          </button>

          <div {...getRootProps()} className="text-sm text-center mr-16 p-2">
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop files here...</p>
            ) : (
              <p>Drag and drop PDF files here</p>
            )}
          </div>
        </div>
        <div className="hidden w-[100px] h-[550px] bg-gray-300 absolute right-12 md:flex justify-center items-center font-bold">
          Ad
        </div>
        <div className="hidden w-[100px] h-[550px] bg-gray-300 absolute left-16 md:flex justify-center items-center font-bold">
          Ad
        </div>
        <div className="w-[800px] h-[130px] bg-gray-300 absolute mt-[530px]   flex justify-center items-center font-bold">
          Ad
        </div>
      </div>
    </div>
  );
};

export default Page;
