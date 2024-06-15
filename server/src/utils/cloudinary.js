import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { ApiError } from "./ApiError.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      console.log("No file path provided for upload");
      return null;
    }

    console.log("Uploading file:", localFilePath);

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    fs.unlinkSync(localFilePath);
    console.log("File uploaded successfully:", response.secure_url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.error("Error while uploading image on cloudinary:", error);
    throw new ApiError(500, "Error uploading image to Cloudinary");
  }
};

export { uploadOnCloudinary };