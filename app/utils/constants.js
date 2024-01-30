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

export const PROMPS_POPULAR_PDF_TOOLS = [
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

export const PROMPS_FREE_SEO_TOOLS = [
  {
    Heading: "Fast & Effective Conversion:",
    ImgUrl: "/img/Group6.png",
    Detail: "Our cutting-edge technology ensures that your files are converted",
  },
  {
    Heading: "No Software Installation:",
    ImgUrl: "/img/Group7.png",
    Detail:
      "Our web-based PDF converter eliminates the need for downloads or installations, allowing you to convert files hassle-free.",
  },
  {
    Heading: "24/7 Positive Feedback:",
    ImgUrl: "/img/Group8.png",
    Detail:
      "Receive comprehensive assistance whenever you require it, thanks to our 24/7 customer support.",
  },
  {
    Heading: "Cost-Effective Solutions:",
    ImgUrl: "/img/Group9.png",
    Detail:
      "Enjoy the benefits of a feature-rich PDF converter tool without breaking the bank.",
  },
  {
    Heading: "People Trust Us:",
    ImgUrl: "/img/Group10.png",
    Detail:
      "Our service has been utilized by over a billion users, streamlining their tasks with digital documents.",
  },
  {
    Heading: "Regular Updates and Support:",
    ImgUrl: "/img/Group11.png",
    Detail:
      "Our team is dedicated to providing regular updates to enhance functionality and address user needs.`",
  },
];

export const ALL_TOOLS = {
  convert_and_compress: [
    {
      UrlLink: "/compress-pdf",
      Image: "/img/Compress.png",
      Alt: "compress logo",
      LiName: "Compress PDF",
      BgColor: "bg-[#185058]",
    },
  ],
  Organize: [
    {
      UrlLink: "/merge-pdf",
      Image: "/img/Merge.png",
      Alt: "Merge logo",
      LiName: "Merge PDF",
      BgColor: "bg-[#f56767]",
    },
    {
      UrlLink: "/split-pdf",
      Image: "/img/Split.png",
      Alt: "Merge logo",
      LiName: "Split PDF",
      BgColor: "bg-[#4bc5bc]",
    },
    {
      UrlLink: "/remove-pages",
      Image: "/img/remove.png",
      Alt: "Remove Pages logo",
      LiName: "Remove Pages",
      BgColor: "bg-[#f0d54d]",
    },
  ],
  Convert_to_PDF: [
    {
      UrlLink: "/word-to-pdf",
      Image: "/img/WORD.png",
      Alt: "Word To Pdf logo",
      LiName: "Word To Pdf",
      BgColor: "bg-[#a981ff]",
    },
    {
      UrlLink: "/txt-to-pdf",
      Image: "/img/WORD.png",
      Alt: "TXT To Pdf logo",
      LiName: "TXT To Pdf",
      BgColor: "bg-[#a981ff]",
    },
    {
      UrlLink: "/csv-to-pdf",
      Image: "/img/WORD.png",
      Alt: "CSV To Pdf logo",
      LiName: "CSV To Pdf",
      BgColor: "bg-[#a981ff]",
    },
  ],
};
export const Tools = [
  { Name: "Merge", Url: "/merge-pdf" },
  { Name: "Compress", Url: "/compress-pdf" },
  { Name: "Split", Url: "/split-pdf" },
];
