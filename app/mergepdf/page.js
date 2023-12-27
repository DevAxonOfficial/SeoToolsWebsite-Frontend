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
    <div className=" flex justify-center h-[750px] ">
      <div className="flex items-center justify-center mb-32 ">
        <div {...getRootProps()} className="">
          <Image
            src="/img/Rectangle23.png"
            alt="background"
            width={810}
            height={469}
            className="md:w-auto md:h-auto h-[250px] w-[500px]  mb-28"
          />
          <input {...getInputProps()} />
          {isDragActive ? <p></p> : <p></p>}
        </div>

        {/* Display preview of added files */}
        <div className="flex flex-wrap mt-4 absolute ml-[270px] md:ml-[550px] md:mb-0 mb-[230px]">
          {files.map((file) => (
            <div key={file.name} className="mr-4 mb-4 md:text-base text-sm">
              <div>{file.name}</div>
              <div>
                <Image
                  src={file.preview}
                  alt={file.name}
                  width={100}
                  height={100}
                  className="rounded-xl md:w-[120px] w-[70px]"
                />
                <button onClick={() => deleteFile(file.name)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        <Image
          src="/img/Group14.png"
          alt="remove logo"
          width={90}
          height={90}
          className="md:w-auto w-[70px] absolute flex justify-center items-baseline mb-[250px] md:mb-[350px]"
        />
        <h1 className="absolute mb-[150px] md:mb-[220px] text-2xl md:text-3xl font-bold">
          Merge Pdf
        </h1>
        <p className="absolute text-center mb-[80px] md:mb-[130px] leading-5 md:text-base text-sm">
          Simplify your document management with our <br /> quick and intuitive{" "}
          <strong className="font-bold">Pdf Merge Tool.</strong>
        </p>
        <div className="flex-col absolute justify-end items-end ml-56">
          <Image
            src="/img/group12.png"
            alt="logo"
            width={40}
            height={40}
            className="hidden md:block"
          />
          <Image
            src="/img/group13.png"
            alt="logo"
            width={35}
            height={35}
            className="hidden md:block ml-[3px]"
          />
        </div>
        <div className="absolute ">
          <button className="md:p-7 p-4 w-[150px] md:w-[250px] md:mr-20  bg-gray-400 rounded-full text-white font-semibold mt-[60px] md:mt-10">
            Select Pdf file
          </button>

          <div
            {...getRootProps()}
            className="text-xs md:text-sm text-center md:mt-0 -mt-1 md:mr-16 p-2"
          >
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
        <div className="w-[300px] md:w-[800px] h-[130px] bg-gray-300 absolute mt-[530px]   flex justify-center items-center font-bold">
          Ad
        </div>
      </div>
    </div>
  );
};

export default Page;
