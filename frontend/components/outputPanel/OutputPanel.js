import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import files from "../inputPanel/files";

const OutputPanel = () => {
  const [fileName, setFileName] = useState("script.js");

  const file = files[fileName];

  return (
    <>
      <h1 className="text-3xl text-white">Output Panel</h1>
      <div className="flex flex-row justify-start">
        <button
          disabled={fileName === "script.js"}
          onClick={() => setFileName("script.js")}
          className="mr-2 mb-2 px-2 py-1 bg-gray-300 rounded-sm"
        >
          script.js
        </button>
        <button
          disabled={fileName === "style.css"}
          onClick={() => setFileName("style.css")}
          className="mr-2 mb-2 px-2 py-1 bg-gray-300 rounded-sm"
        >
          style.css
        </button>
        <button
          disabled={fileName === "index.html"}
          onClick={() => setFileName("index.html")}
          className="mr-2 mb-2 px-2 py-1 bg-gray-300 rounded-sm"
        >
          index.html
        </button>
      </div>

      <Editor
        height="100vh"
        theme="vs-dark"
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
      />
    </>
  );
};

export default OutputPanel;
