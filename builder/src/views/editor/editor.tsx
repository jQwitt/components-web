import React from "react";
import { useProperties } from "../../providers/properties-provider";
import { ColorPicker, Slider } from "../../components";

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
                  value,
                  units,
                },
              });
            }}
          />
        </div>
      ))}
      <ColorPicker
        label="Background Color"
        onChange={(value: string) => {
          console.log(value);
          dispatch({
            type: "style",
            payload: {
              style: "backgroundColor",
              value,
              units: null,
            },
          });
        }}
      />
    </div>
  );
};

export default Editor;
