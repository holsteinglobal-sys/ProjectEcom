// const uploadResumeToCloudinary = async () => {
//   const formData = new FormData();
//   formData.append("file", resume);
//   formData.append("upload_preset", "resume");

//   const res = await fetch(
//     "https://api.cloudinary.com/v1_1/Resume/raw/upload",
//     {
//       method: "POST",
//       body: formData,
//     }
//   );

//   const data = await res.json();
//     console.log("Cloudinary response:", data);

//   if (!data.secure_url) {
//     throw new Error("Upload failed");
//   }

//   return data.secure_url;
// };



// src/lib/cloudinary.js

export const uploadResumeToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "resume");

  const response = await fetch(
    "https://api.cloudinary.com/v1_1/resume/raw/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  console.log("Cloudinary full response:", data); // 🔥 DO NOT REMOVE

  if (!response.ok) {
    throw new Error(data.error?.message || "Cloudinary upload failed");
  }

  return data.secure_url;
};
