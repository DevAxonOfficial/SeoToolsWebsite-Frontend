"use client";
import { MdDeleteForever } from "react-icons/md";
import React, { useEffect, useMemo, useState } from "react";
import * as PDFJS from "pdfjs-dist/build/pdf";
import * as PDFJSWorker from "pdfjs-dist/build/pdf.worker";
import Image from "next/image";
PDFJS.GlobalWorkerOptions.workerSrc = PDFJSWorker;
import { PDFDocument } from "pdf-lib";

export default function FileConverter({ pdfUrl }) {
  const myRef = React.createRef();
  const [loading, setLoading] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);
  useEffect(() => {
    setLoading(false);
  }, [imageUrls]);

  const UrlUploader = (url) => {
    fetch(url).then((response) => {
      response.blob().then((blob) => {
        let reader = new FileReader();
        reader.onload = (e) => {
          const data = atob(e.target.result.replace(/.*base64,/, ""));
          renderPage(data);
        };
        reader.readAsDataURL(blob);
      });
    });
  };

  useMemo(() => {
    UrlUploader(pdfUrl);
  }, []);

  const renderPage = async (data) => {
    setLoading(true);
    const imagesList = [];
    const canvas = document.createElement("canvas");
    canvas.setAttribute("className", "canv");
    const pdf = await PDFJS.getDocument({ data }).promise;
    const n = pdf.numPages;
    for (let i = 1; i <= n; i++) {
      var PAGES = await pdf.getPage(i);
      var viewport = PAGES.getViewport({ scale: 1.5 });
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      var render_context = {
        canvasContext: canvas.getContext("2d"),
        viewport: viewport,
      };
      await PAGES.render(render_context).promise;
      let img = canvas.toDataURL("image/png");
      imagesList.push({ url: img, page: i });
    }
    setImageUrls(imagesList);
  };
  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [imageUrls]);

  const deletepages = (index) => {
    setImageUrls((prevImageUrls) => {
      const updatedImageUrls = prevImageUrls.filter((x) => x.page !== index);
      return updatedImageUrls;
    });
  };
  const mergeAndDownload = async () => {
    const mergedPdf = await PDFDocument.create();
    for (const { url, page } of imageUrls) {
      const response = await fetch(url);
      const imageBytes = await response.arrayBuffer();
      const image = await mergedPdf.embedPng(imageBytes);
      const pageObj = mergedPdf.addPage();
      pageObj.drawImage(image, {
        x: 0,
        y: 0,
        width: 612,
        height: 792,
      });
    }
    const pdfBytes = await mergedPdf.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "merged.pdf";
    downloadLink.click();
  };

  return (
    <div className="mt-9" ref={myRef} id="image-container">
      {loading ? (
        <div>
          <div className="flex items-center justify-center ">
            <div className="border-t-8 border-solid border-teal-400 rounded-full w-16 h-16 animate-spin"></div>
          </div>
        </div>
      ) : (
        <>
          {imageUrls.length > 0 && (
            <>
              <div className="  flex justify-evenly flex-wrap ">
                {imageUrls.map(({ url, page }, index) => (
                  <div className="relative" key={index}>
                    <Image
                      className=" rounded-lg overflow-hidden border-4 border-gray-300 my-3"
                      src={url}
                      alt={`Page ${index + 1}`}
                      width={200}
                      height={200}
                    />
                    <MdDeleteForever
                      onClick={() => deletepages(page)}
                      className="text-red-600 hover:text-black hover:cursor-pointer absolute left-3  top-5 text-2xl"
                    />
                  </div>
                ))}
              </div>
              {imageUrls.length > 0 && (
                <div className="text-center mt-4">
                  <button
                    onClick={mergeAndDownload}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Download Merged PDF
                  </button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
