// components/FileUpload.jsx
'use client'
import { useState } from 'react';

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transcribe`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      alert("Uploaded Successfully!");
      // optionally store summary data in localStorage or state and navigate
    } catch (err) {
      console.error(err);
      alert("Upload failed.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button 
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" 
        onClick={handleUpload}
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}
