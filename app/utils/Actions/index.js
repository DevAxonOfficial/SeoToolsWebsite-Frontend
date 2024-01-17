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

    // Extract the download URL from the API response
    // const downloadUrl = apiResponse.data;
    return downloadUrl;
  } catch (error) {
    console.log("Error Merge PDF:", error);
  }
};

export const mergePDF = async (fileNames) => {
  try {
    const apiEndpoint = `${API_ENDPOINT2}/merge-pdf`;
    const apiResponse = await axios.post(apiEndpoint, {
      keys: fileNames,
    });
    const downloadUrl = apiResponse.data.download_url;

    // Extract the download URL from the API response
    // const downloadUrl = apiResponse.data;
    return downloadUrl;
  } catch (error) {
    console.log("Error Merge PDF:", error);
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

    // Extract the download URL from the API response
    // const downloadUrl = apiResponse.data;
    return downloadUrl;
  } catch (error) {
    console.log("Error Merge PDF:", error);
  }
};

export const removePDF = async (key, ranges = 1) => {
  try {
    const apiEndpoint = `${API_ENDPOINT2}/remove-pdf`;
    const apiResponse = await axios.post(apiEndpoint, {
      key,
      page_ranges: ranges,
    });
    const downloadUrl = apiResponse.data.download_url;

    // Extract the download URL from the API response
    // const downloadUrl = apiResponse.data;
    return downloadUrl;
  } catch (error) {
    console.log("Error Merge PDF:", error);
  }
};

export const anythingToPDF = async (uniqueKey) => {
  try {
    // Simulate an API action (you can replace this with your actual API call)
    // For example, waiting for some seconds to simulate processing
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const apiEndpoint = `${API_ENDPOINT}/?filename=${uniqueKey}`;
    const apiResponse = await axios.get(apiEndpoint);
    console.log("====  :", apiResponse);
    const downloadUrl = apiResponse.data.url;

    // Extract the download URL from the API response
    // const downloadUrl = apiResponse.data;
    return downloadUrl;
  } catch (error) {
    console.log("Error : ", error);
  }
};
