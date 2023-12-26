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
  const deleteFile = (fileName) => {
    const updatedFiles = files.filter((file) => file.name !== fileName);
    setFiles(updatedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "application/pdf",
  });

  return (
    <div className=" flex justify-center ">
      <div className="flex items-center justify-center mb-32 ">
        <div
          {...getRootProps()}
          className="text-sm text-center mr-16 p-2 relative "
        >
          <Image
            src="/img/Rectangle23.png"
            alt="background"
            width={1330}
            height={469}
            className=" mb-2 mt-[60px] md:ml-0 ml-8 md:w-[1030px] md:h-[490px] w-[1000px]  h-[250px]"
          />
          <input {...getInputProps()} />
          {isDragActive ? <p></p> : <p></p>}
        </div>

        {/* Display preview of added files */}
        <div className="flex flex-wrap md:mt-36 absolute md:ml-[550px] ">
          {files.map((file) => (
            <div
              key={file.name}
              className="md:ml-4 ml-[200px] mb-16 md:mb-4 text-xs md:text-base"
            >
              <div>{file.name}</div>
              <div>
                <Image
                  src={file.preview}
                  alt={file.name}
                  width={150}
                  height={150}
                  className="rounded-xl md:w-[150px] w-[70px]"
                />
                <button
                  className="text-sm md:text-base"
                  onClick={() => deleteFile(file.name)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <Image
          src="/img/Group14.png"
          alt="remove logo"
          width={110}
          height={90}
          className="absolute flex md:w-[110px] w-[65px]  items-baseline md:mr-14 md:mb-[230px] mb-[70px] "
        />
        <h1 className="absolute md:mr-14 md:mb-[50px] mb-0 md:mt-0 mt-6 md:text-4xl text-xl font-bold">
          Merge Pdf
        </h1>
        <p className="absolute md:text-lg text-xs text-center md:mt-[50px] mt-20 leading-5">
          Simplify your document management with our <br /> quick and intuitive{" "}
          <strong className="font-bold">Pdf Merge Tool.</strong>
        </p>
        <div className="hidden md:block flex-col absolute justify-end items-end ml-72 mt-[220px]">
          <Image
            src="/img/group12.png"
            alt="logo"
            width={52}
            height={40}
            className=""
          />
          <Image
            src="/img/group13.png"
            alt="logo"
            width={45}
            height={35}
            className="ml-[3px]"
          />
        </div>
        <div className="absolute ">
          <button className="md:p-8 p-3 md:w-[300px] text-sm md:text-xl mr-20 md:ml-0 ml-16 bg-gray-400 rounded-full text-white font-semibold mt-[200px] md:mt-[250px]">
            Select Pdf file
          </button>

          <div {...getRootProps()} className="text-sm text-center md:mr-16 p-2">
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop files here...</p>
            ) : (
              <p className="md:text-base text-xs ">
                Drag and drop PDF files here
              </p>
            )}
          </div>
        </div>
        <div className="hidden mt-32 w-[140px] h-[600px] bg-gray-300 absolute right-12 md:flex justify-center items-center font-bold">
          Ad
        </div>
        <div className="hidden mt-32 w-[100px] h-[600px] bg-gray-300 absolute left-16 md:flex justify-center items-center font-bold">
          Ad
        </div>
        <div className="w-[350px] md:w-[800px] h-[130px] bg-gray-300 absolute mt-[800px]  flex justify-center items-center font-bold">
          Ad
        </div>
      </div>
    </div>
  );
};

export default Page;
