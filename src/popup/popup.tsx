import { useState } from "react";
import TunnelService from "../services/tunnelService";
import ResumePreview from "../resume-preview/resumePreview";

export default function Popup() {
  const [jd, setJd] = useState("");
  const [previewData, setPreviewData] = useState({})

    const getResumeData = async () => {
        const data = await TunnelService.generateResumeTunneled(jd)
        console.log("we have it", data)
        setPreviewData(data)
    }

  return (
    <div style={{ width: "300px", padding: "10px" }}>
      <h1>Paste Job Description</h1>
      <textarea
        style={{ width: "100%", height: "100px" }}
        value={jd}
        onChange={(e) => setJd(e.target.value)}
      />
      <button
        style={{ marginTop: "10px" }}
        onClick={getResumeData}
      >
        Save
      </button>
      <ResumePreview data={previewData}></ResumePreview>
    </div>
  );
}