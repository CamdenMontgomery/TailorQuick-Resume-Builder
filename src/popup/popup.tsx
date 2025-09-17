import { useState } from "react";
import TunnelService from "../services/tunnelService";
import ResumePreview from "../resume-preview/resumePreview";

export default function Popup() {
  const [jd, setJd] = useState("");

    const getTags = async () => {
        const tags = await TunnelService.getJobTagsTunneled(jd)
        console.log(tags)
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
        onClick={getTags}
      >
        Save
      </button>
      <ResumePreview data={{}}></ResumePreview>
    </div>
  );
}