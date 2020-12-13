import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";

export default ({ setDocument }) => {
  return (
    <div className="bg-white  w-full max-w-2xl p-3 m-5 mt-3 mb-3 flex flex-col items-center rounded-md shadow box-border">
      <AceEditor
        style={{ width: "100%" }}
        mode="markdown"
        theme="textmate"
        name="document"
        // onLoad={this.onLoad}
        onChange={setDocument}
        fontSize={18}
        showPrintMargin={false}
        showGutter={false}
        highlightActiveLine={false}
        value={document}
        height="100%"
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
