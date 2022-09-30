import React from "react";
import { useProperties } from "../../providers/properties-provider";
import EditorCSS from "./editor-css";
import EditorHTML from "./editor-html";
import EditorJS from "./editor-js";

// add interface for props
const Editor: React.FC<any> = () => {
  const { dispatch } = useProperties();
  // TODO: make configurable?
  // TODO remove this typing
  const properties: StylePropertyPayload[] = [
    { style: "padding", value: "0", units: "rem" },
    { style: "borderRadius", value: "100", units: "rem" },
  ];
  // TODO: input type= color

  return (
    <div className="editor">
      <EditorHTML />
      <EditorCSS properties={properties} />
      <EditorJS />
    </div>
  );
};

export default Editor;
