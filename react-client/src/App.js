import "./App.css";
import React from "react";
import { useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [readFileData, setReadFileData] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  // handle file upload
  const handleFileUpload = async () => {
    if (selectedFile) {
      // Check if selected file is a PDF
      if (selectedFile.type !== "application/pdf") {
        console.error("Only PDF files are allowed");
        toast.error("Only PDF files are allowed!!");
        setSelectedFile(null);
        setUploadProgress(0);
        return;
      }

      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const uploadResponse = await axios.post("/api/upload", formData, {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            setUploadProgress(progress);
          },
        });
        console.log(uploadResponse);
        if (
          uploadResponse &&
          uploadResponse.data.status_code === 201 &&
          uploadResponse.status === 200
        ) {
          console.log("File uploaded successfully");
          toast.success("File uploaded successfully");
          setIsFileUploaded(true);
        } else {
          console.log("Error Occured, While uploading file.");
          toast.error("Error Occured, While uploading file.");
        }
      } catch (error) {
        console.error(error);
        toast.error("Error Occured, While uploading file.");
        // Handle error
      }
    }
  };

  // handle file delete
  const handleFileDelete = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("fileName", selectedFile.name);
      // Delete file from backend
      try {
        await axios.post("/api/delete", formData);

        console.log("File deleted successfully");
        toast.success("File deleted successfully");
      } catch (error) {
        console.error(error);
        toast.success("Error deleting file");
        // Handle error
      }
    }

    setSelectedFile(null);
    setUploadProgress(0);
    setIsFileUploaded(false);
    setReadFileData(null);
    fileInputRef.current.value = ""; // Reset the file input value
  };

  // handle file delete
  const handleFileRead = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("fileName", selectedFile.name);
      // Delete file from backend
      try {
        const readResponse = await axios.post("/api/read", formData);
        setReadFileData(readResponse);
        console.log("File read successfully");
        toast.success("File read successfully");
      } catch (error) {
        console.error(error);
        toast.success("Error reading file");
        // Handle error
      }
    }

    // setSelectedFile(null);
    setUploadProgress(0);
    // setIsFileUploaded(false);
  };

  return (
    <>
      <ToastContainer position="bottom-right" />
      <main>
        <h1 className="text-xl md:text-5xl text-center font-bold py-10 border-b">
          PDF Reader - Extract text from pdf
        </h1>
        <div className="flex flex-col items-center my-5">
          <label
            htmlFor="file-input"
            className="mb-4 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Select File
          </label>
          <input
            disabled={selectedFile !== null && isFileUploaded}
            id="file-input"
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <p>**Only PDF Files are allowed.</p>
          {selectedFile && (
            <div className="mt-4">
              <span className="font-bold">Selected File:</span>{" "}
              {selectedFile.name}
            </div>
          )}
          {uploadProgress > 0 && (
            <div className="mt-4">
              <progress
                className="w-full"
                value={uploadProgress}
                max="100"
              ></progress>
              <span className="text-sm">{uploadProgress}% uploaded</span>
            </div>
          )}
          <div className="flex gap-3">
            <button
              disabled={!selectedFile || isFileUploaded}
              hidden={isFileUploaded}
              className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleFileUpload}
            >
              Upload File
            </button>
            <button
              disabled={!selectedFile}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleFileDelete}
            >
              Delete File
            </button>
            <button
              disabled={!isFileUploaded}
              hidden={!isFileUploaded}
              className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleFileRead}
            >
              Read PDF
            </button>
          </div>
          <div className="container mx-auto my-5">
            {readFileData && <p>{readFileData.data.contents}</p>}
          </div>
        </div>
      </main>
    </>
  );
}
