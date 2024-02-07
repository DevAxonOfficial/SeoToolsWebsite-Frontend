import { S3Client,PutObjectCommand} from "@aws-sdk/client-s3";

const client = new S3Client({
  apiVersion: "2006-03-01",
  region: "us-east-1",
  credentials: {
    accessKeyId: "AKIAY3AKF77QJB5HEQPI",
    secretAccessKey: "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",
  },
});

const BUCKET = "raw-files-1";

export const uploadToS3 = async (file, fileName, bucket = BUCKET) => {
  try {
    const uniqueKey = fileName;

    const putCommand = new PutObjectCommand({
      Bucket: bucket,
      Key: uniqueKey,
      Body: file,
      ContentType: file.type,
    });

    const response = await client.send(putCommand);
    return response;
  } catch (error) {
    return Response.error({ error }, { status: 500 });
  }
};
const imgBucket = "images-raw-seo";

export const getPreSignedURL = (key) => {
  try {
    return `https://${imgBucket}.s3.amazonaws.com/${key}`;
  } catch (error) {
    return Response.error({ error }, { status: 500 });
  }
};
