import React from "react";
import { Slider, ColorPicker } from "../../components";
import { useProperties } from "../../providers/properties-provider";

interface EditorCSSProps {
  properties: StylePropertyPayload[];
}

const EditorCSS: React.FC<EditorCSSProps> = ({ properties }) => {
  const { dispatch } = useProperties();

  const formatLabel = (s: string) => s[0].toUpperCase() + s.substring(1);

  return (
    <div className="">
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

export default EditorCSS;
