import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";

const someJSCodeExample = `
{"store":{"book":[{"category":"reference", "sold": false,"author":"Nigel Rees","title":"Sayings of the Century","price":8.95},{"category":"fiction","author":"Evelyn Waugh","title":"Sword of Honour","price":12.99},{"category":"fiction","author":"J. R. R. Tolkien","title":"The Lord of the Rings","act": null, "isbn":"0-395-19395-8","price":22.99}],"bicycle":{"color":"red","price":19.95}}}
`;

const InputPanel = () => {
  const [value, setValue] = useState("");
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor; 
  }

  const onSampleClick = () => {
    setValue(someJSCodeExample);
  };

  const onClearButtonClick = () => {
    console.log("Clear Button Clicked");
  };

  return (
    <>
      <h1 className="text-3xl text-white">Input Panel</h1>
      <div className="flex flex-row justify-start">
        <button className="mr-2 mb-2 px-2 py-1 bg-gray-300 rounded-sm">
          Clipboard
        </button>
        <button
          onClick={onSampleClick}
          className="mr-2 mb-2 px-2 py-1 bg-gray-300 rounded-sm"
        >
          Sample
        </button>
        <button
          onClick={onClearButtonClick}
          className="mr-2 mb-2 px-2 py-1 bg-gray-300 rounded-sm"
        >
          Clear
        </button>
      </div>

      <Editor
        height="100vh"
        theme="vs-dark"
        defaultLanguage="json"
        value={value}
        onMount={handleEditorDidMount}
        scrollbar={{
          vertical: "hidden",
          horizontal: "hidden",
        }}
      />
    </>
  );
};

export default InputPanel;
