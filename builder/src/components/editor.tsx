import React from "react";
import { useProperties } from "../providers/properties-provider";

// add interface for props
const Editor: React.FC<any> = () => {
  const { state, dispatch } = useProperties();
  // TODO: make configurable?
  const properties = ["padding", "margin", "border-radius"];

  return (
    <div className="editor">
      <button className="btn" onClick={() => console.log(state)}>
        log state to console
      </button>
      {properties.map((property) => (
        <>
          <p>{property}</p>
          <input
            type="range"
            min="1"
            max="100"
            onChange={({ target }) => {
              dispatch({
                type: "style",
                payload: {
                  style: property,
                  value: target.value,
                  units: null,
                },
              });
            }}
          />
        </>
      ))}
    </div>
  );
};

export default Editor;
