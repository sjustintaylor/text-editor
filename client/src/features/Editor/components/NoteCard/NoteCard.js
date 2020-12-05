import {
  TrashIcon,
  IconButton,
  DragHandleVerticalIcon,
  Button,
  Textarea,
} from "evergreen-ui";
import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";

export default ({ id, content, placeholder, saveNote, deleteNote }) => {
  return (
    <div className="p-2 mb-2 w-11/12  flex flex-col rounded-lg shadow  hover:shadow-lg bg-white">
      <div className="w-full h-full">
        <AceEditor
          style={{ width: "100%" }}
          mode="markdown"
          theme="textmate"
          name={`note-${id}`}
          // onLoad={this.onLoad}
          onChange={(value) => saveNote(id, value)}
          fontSize={18}
          showPrintMargin={false}
          showGutter={false}
          highlightActiveLine={false}
          value={content}
          minLines={3}
          placeholder={placeholder}
          maxLines={Infinity}
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
      <div className="w-full flex flex-row item justify-between mt-3 pt-2 border-t-2 border-gray-100">
        <Button
          intent="none"
          appearance="minimal"
          iconBefore={DragHandleVerticalIcon}
        >
          Drag note
        </Button>
        <IconButton
          appearance="minimal"
          icon={TrashIcon}
          onClick={() => deleteNote(id)}
        />
      </div>
    </div>
  );
};
