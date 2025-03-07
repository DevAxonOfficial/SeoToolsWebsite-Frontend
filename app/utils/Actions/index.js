import axios from "axios";

const API_ENDPOINT =
  "https://gbmxwutwksccq5lgd6vqfn3m7i0vkpia.lambda-url.us-east-1.on.aws";
const API_ENDPOINT2 = "http://3.225.44.100";

export const splitPDF = async (uniqueKey) => {
  try {
    const apiEndpoint = `${API_ENDPOINT2}/split-pdf`;
    const apiResponse = await axios.post(apiEndpoint, {
      key: uniqueKey,
    });
    const downloadUrl = apiResponse.data.download_url;

    return downloadUrl;
  } catch (error) {
    return Response.error({ error }, { status: 500 });
  }
};

export const mergePDF = async (fileNames) => {
  try {
    const apiEndpoint = `${API_ENDPOINT2}/merge-pdf`;
    const apiResponse = await axios.post(apiEndpoint, {
      keys: fileNames,
    });
    const downloadUrl = apiResponse.data.download_url;

    return downloadUrl;
  } catch (error) {
    return Response.error({ error }, { status: 500 });
  }
};

export const compressPDF = async (
  fileNames,
  compressionLevel = "recommended"
) => {
  try {
    const apiEndpoint = `${API_ENDPOINT2}/compress-pdf`;
    const apiResponse = await axios.post(apiEndpoint, {
      keys: fileNames,
      compression_level: compressionLevel,
    });
    const downloadUrl = apiResponse.data.download_url;

    return downloadUrl;
  } catch (error) {
    return Response.error({ error }, { status: 500 });
  }
};

export const removePDF = async (key, ranges = "1") => {
  try {
    const apiEndpoint = `${API_ENDPOINT2}/remove-pages`;
    const apiResponse = await axios.post(apiEndpoint, {
      key,
      page_ranges: ranges,
    });
    const downloadUrl = apiResponse.data.download_url;

    return downloadUrl;
  } catch (error) {
    return Response.error({ error }, { status: 500 });
  }
};

export const anythingToPDF = async (uniqueKey) => {
  try {
    const apiEndpoint = `${API_ENDPOINT}/?filename=${uniqueKey}`;
    const apiResponse = await axios.get(apiEndpoint);
    const downloadUrl = apiResponse.data.url;

    return downloadUrl;
  } catch (error) {
    return Response.error({ error }, { status: 500 });
  }
};
export const pdfToWord = async (fileName) => {
  try {
    const apiEndpoint = `${API_ENDPOINT2}/pdf-to-word`;
    const apiResponse = await axios.post(apiEndpoint, {
      key: fileName,
    });
    const downloadUrl = apiResponse.data.download_url;

    return downloadUrl;
  } catch (error) {
    return Response.error({ error }, { status: 500 });
  }
};

export const compressImage = async (fileName) => {
  try {
    const apiEndpoint = `${API_ENDPOINT2}/compress-images`;
    const apiResponse = await axios.post(apiEndpoint, {
      keys: fileName,
    });
    const downloadUrl = apiResponse.data.download_url;

    return downloadUrl;
  } catch (error) {
    return Response.error({ error }, { status: 500 });
  }
};
