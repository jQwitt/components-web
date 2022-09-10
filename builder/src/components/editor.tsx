import React from "react";
import { useProperties } from "../providers/properties-provider";
import Button from "./common/button";
import Slider from "./common/slider";

// add interface for props
const Editor: React.FC<any> = () => {
  const { state, dispatch } = useProperties();
  // TODO: make configurable?
  const properties: StyleProperty[] = [
    { style: "padding", value: "0", units: "rem" },
    { style: "borderRadius", value: "100", units: "rem" },
    { style: "backgroundColor", value: "red", units: null },
  ];
  // TODO: input type= color

  const formatLabel = (s: string) => s[0].toUpperCase() + s.substring(1);

  return (
    <div className="editor">
      <h3>CSS</h3>
      {properties.map(({ style, units }) => (
        <div key={"_" + style}>
          <Slider
            label={formatLabel(style)}
            onChange={(value: string) => {
              dispatch({
                type: "style",
                payload: {
                  style,
                  value: value,
                  units,
                },
              });
            }}
          />
        </div>
      ))}
      <Button text="click me!" icon="cube" />
    </div>
  );
};

export default Editor;
