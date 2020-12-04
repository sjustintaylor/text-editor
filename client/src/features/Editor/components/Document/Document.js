import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-min-noconflict/ext-searchbox";
import useHooks from "./hooks";

export default () => {
  const { document, setDocument } = useHooks();
  return (
    <div className="bg-white h-screen w-full p-3 pt-5 flex flex-col items-center">
      <AceEditor
        mode="markdown"
        theme="textmate"
        name="document"
        // onLoad={this.onLoad}
        onChange={setDocument}
        fontSize={18}
        showPrintMargin={false}
        showGutter={false}
        highlightActiveLine={true}
        value={document}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: false,
          tabSize: 2,
          wrap: true,
          wrapBehavioursEnabled: true,
          fontFamily: "'Cutive Mono', monospace",
        }}
      />
    </div>
  );
};
