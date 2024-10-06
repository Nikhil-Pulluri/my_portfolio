import React, { useEffect, useRef } from 'react';

const CodeEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (window.CodeMirror) {
      const editorInstance = window.CodeMirror(editorRef.current, {
        mode: "javascript",
        theme: "dracula",
        lineNumbers: true,
        autoCloseBrackets: true,
        readOnly: true,
      });

      const codeContent = `function helloWorld() {
  console.log("Hello, World!");
}
helloWorld();`;

      let index = 0;

      const typeCode = () => {
        if (index < codeContent.length) {
          editorInstance.replaceRange(codeContent.charAt(index), editorInstance.posFromIndex(index));
          index++;
          setTimeout(typeCode, 100);  // Adjust speed
        } else {
          editorInstance.setOption('readOnly', false);
        }
      };

      setTimeout(typeCode, 500);
    }
  }, []);

  return <div ref={editorRef}></div>;
};

export default CodeEditor;
