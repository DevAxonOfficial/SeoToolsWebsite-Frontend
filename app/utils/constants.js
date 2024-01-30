export const SPLIT_TOOL_PROPS = {
  backgroundImage: "/img/Rectangle24.png",
  logoImage: "/img/Split.png",
  toolName: "Split Pdf",
  toolSpec: " Split PDF",
  bgColor: "bg-[#DBF3F2]",
  apiEndpoint: "/api/splitPdf",
};
export const REMOVE_TOOL_PROPS = {
  backgroundImage: "/img/Rectangle22.png",
  logoImage: "/img/remove.png",
  toolName: "Remove Pages",
  toolSpec: " Remove Pages",
  bgColor: "bg-[#FDF8E1]",
  apiEndpoint: "/api/removePdf",
};
export const MERGE_TOOL_PROPS = {
  backgroundImage: "/img/Rectangle23.png",
  logoImage: "/img/Merge.png",
  toolName: "Merge Pdf",
  toolSpec: " Merge PDF",
  bgColor: "bg-[#FDE1E1]",
  apiEndpoint: "/api/mergePdf",
};
export const COMPRESS_TOOL_PROPS = {
  backgroundImage: "/img/Rectangle25.png",
  logoImage: "/img/Compress.png",
  toolName: "Compress Pdf",
  toolSpec: " Compress PDF",
  bgColor: "bg-[#EAEFF0]",
  apiEndpoint: "/api/compressPdf",
};
export const WORD_TOOL_PROPS = {
  backgroundImage: "/img/Rectangle26.png",
  logoImage: "/img/WORD.png",
  toolName: "Word To Pdf",
  toolSpec: " Word To PDF",
  bgColor: "bg-[#EEE6FF]",
  apiEndpoint: "/api/wordToPdf",
};
export const CSV_TOOL_PROPS = {
  backgroundImage: "/img/Rectangle26.png",
  logoImage: "/img/WORD.png",
  toolName: "CSV To Pdf",
  toolSpec: " CSV To PDF",
  bgColor: "bg-[#EEE6FF]",
  apiEndpoint: "/api/anythingToPdf",
  fileType: "CSV",
};
export const TXT_TOOL_PROPS = {
  backgroundImage: "/img/Rectangle26.png",
  logoImage: "/img/WORD.png",
  toolName: "TXT To Pdf",
  toolSpec: " TXT To PDF",
  bgColor: "bg-[#EEE6FF]",
  apiEndpoint: "/api/anythingToPdf",
  fileType: "TXT",
};

export const ARRAY_OF_CARDS = [
  {
    bgcolor: "#e4fbfe",
    logoimage: "/img/Compress.png",
    heading: "Compress Pdf",
    img2: "/img/Group1.png",
    Link: "/compress-pdf",
  },
  {
    bgcolor: "#fde1e1",
    logoimage: "/img/Merge.png",
    heading: "Merge Pdf",
    img2: "/img/Group2.png",
    Link: "/merge-pdf",
  },
  {
    bgcolor: "#dbf3f2",
    logoimage: "/img/Split.png",
    heading: "Split Pdf",
    img2: "/img/Group3.png",
    Link: "/split-pdf",
  },
  {
    bgcolor: "#fdf8e1",
    logoimage: "/img/remove.png",
    heading: "Remove Pages",
    img2: "/img/Group4.png",
    Link: "/remove-pages",
  },
  {
    bgcolor: "#eee6ff",
    logoimage: "/img/WORD.png",
    heading: "Word to Pdf",
    img2: "/img/Group15.png",
    Link: "/word-to-pdf",
  },
  {
    bgcolor: "#fde9fd",
    logoimage: "/img/Group16.png",
    heading: "CSV to Pdf",
    img2: "/img/Group17.png",
    Link: "/csv-to-pdf",
  },
  {
    bgcolor: "#fde9fd",
    logoimage: "/img/Group16.png",
    heading: "TXT to Pdf",
    img2: "/img/Group17.png",
    Link: "/txt-to-pdf",
  },
];

export const CARDS = [
  {
    heading: "Fast & Effective Conversion:",
    imgurl: "/img/Group6.png",
    detail: "Our cutting-edge technology ensures that your files are converted",
  },
  {
    heading: "No Software Installation:",
    imgurl: "/img/Group7.png",
    detail:
      "Our web-based PDF converter eliminates the need for downloads or installations, allowing you to convert files hassle-free.",
  },
  {
    heading: "24/7 Positive Feedback:",
    imgurl: "/img/Group8.png",
    detail:
      "Receive comprehensive assistance whenever you require it, thanks to our 24/7 customer support.",
  },
  {
    heading: "Cost-Effective Solutions:",
    imgurl: "/img/Group9.png",
    detail:
      "Enjoy the benefits of a feature-rich PDF converter tool without breaking the bank.",
  },
  {
    heading: "People Trust Us:",
    imgurl: "/img/Group10.png",
    detail:
      "Our service has been utilized by over a billion users, streamlining their tasks with digital documents.",
  },
  {
    heading: "Regular Updates and Support:",
    imgurl: "/img/Group11.png",
    detail:
      "Our team is dedicated to providing regular updates to enhance functionality and address user needs.`",
  },
];
export const ArrayOfUl = [
  {
    UiHeading: "Convert & Compress",
    UrlLink: "/compress-pdf",
    Image: "/img/Compress.png",
    Alt: "compress logo",
    LiName: "Compress PDF",
  },
];

export const ALL_TOOLS = {
  convert_and_compress: [
    {
      UrlLink: "/compress-pdf",
      Image: "/img/Compress.png",
      Alt: "compress logo",
      LiName: "Compress PDF",
      bgColor: "bg-[#185058]",
    },
  ],
  Organize: [
    {
      UrlLink: "/merge-pdf",
      Image: "/img/Merge.png",
      Alt: "Merge logo",
      LiName: "Merge PDF",
      bgColor: "bg-[#f56767]",
    },
    {
      UrlLink: "/split-pdf",
      Image: "/img/Split.png",
      Alt: "Merge logo",
      LiName: "Split PDF",
      bgColor: "bg-[#4bc5bc]",
    },
    {
      UrlLink: "/remove-pages",
      Image: "/img/remove.png",
      Alt: "Remove Pages logo",
      LiName: "Remove Pages",
      bgColor: "bg-[#f0d54d]",
    },
  ],
  Convert_to_PDF: [
    {
      UrlLink: "/word-to-pdf",
      Image: "/img/WORD.png",
      Alt: "Word To Pdf logo",
      LiName: "Word To Pdf",
      bgColor: "bg-[#a981ff]",
    },
    {
      UrlLink: "/txt-to-pdf",
      Image: "/img/WORD.png",
      Alt: "TXT To Pdf logo",
      LiName: "TXT To Pdf",
      bgColor: "bg-[#a981ff]",
    },
    {
      UrlLink: "/csv-to-pdf",
      Image: "/img/WORD.png",
      Alt: "CSV To Pdf logo",
      LiName: "CSV To Pdf",
      bgColor: "bg-[#a981ff]",
    },
  ],
};
export const Tools = [
  { name: "Merge", url: "/merge-pdf" },
  { name: "Compress", url: "/compress-pdf" },
  { name: "Split", url: "/split-pdf" },
];
