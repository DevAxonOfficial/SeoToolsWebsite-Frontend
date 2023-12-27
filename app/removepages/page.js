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
    <div>
      <div className=" flex justify-center h-[750px] ">
        <div className="flex items-center justify-center mb-32 ">
          <div {...getRootProps()} className="">
            <Image
              src="/img/Rectangle22.png"
              alt="background"
              width={810}
              height={469}
              className="h-[250px] w-[500px]  mb-28 md:h-[350px] md:w-[700px] lg:h-[400px] lg:w-[750px] xl:h-[400px] xl:w-[820px]"
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
            src="/img/remove.png"
            alt="remove logo"
            width={100}
            height={90}
            className="md:w-[100px] w-[70px] absolute flex justify-center items-baseline mb-[250px] md:mb-[350px]"
          />
          <h1 className="absolute mb-[150px] md:mb-[220px] text-2xl md:text-3xl font-bold">
            Remove Pages
          </h1>
          <p className="absolute text-center mb-[80px] md:mb-[130px] leading-5 md:text-base text-sm">
            Simplify your document management with our <br /> quick and
            intuitive <strong className="font-bold">Pdf Merge Tool.</strong>
          </p>

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
          <div className="flex absolute justify-between align-middle space-x-[1000px] items-end">
            <div className="hidden w-[100px] h-[550px] bg-gray-300  right-12 lg:flex justify-center items-center font-bold">
              Ad
            </div>
            <div className="hidden w-[100px] h-[550px] bg-gray-300  left-16 lg:flex justify-center items-center font-bold">
              Ad
            </div>
          </div>
        </div>

        <div className="w-[300px] md:w-[800px] h-[130px] bg-gray-300 absolute mt-[530px]   flex justify-center items-center font-bold">
          Ad
        </div>
      </div>
    </div>
  );
};

export default Page;
