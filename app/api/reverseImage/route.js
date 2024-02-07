import { uploadToS3 } from "../../utils/AWSS3/action";
export async function POST(req) {
    try {
      const formData = await req.formData();
  
      const files = formData.getAll("files");
  
      const [fileName] = JSON.parse(formData.get("fileNames"));
  
      for (let i = 0; i < files.length; i++) {
        const fileBuffer = await files[i].arrayBuffer();
        await uploadToS3(fileBuffer, fileName);
      }
      return Response.json({ });
    }
      catch (error) {
        return Response.error({ error }, { status: 500 });
      }
    }
