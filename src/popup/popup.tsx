import { useState } from "react";

export default function Popup() {
  const [jd, setJd] = useState("");

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
        onClick={() => chrome.storage.local.set({ jobDesc: jd })}
      >
        Save
      </button>
    </div>
  );
}