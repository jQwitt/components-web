import React from "react";

import { useProperties } from "../../providers/properties-provider";

const PreviewLive: React.FC = () => {
  const { state } = useProperties();

  return (
    <div className="preview-live">
      <div id="component" style={state.styles}>
        I am a component
      </div>
    </div>
  );
};

export default PreviewLive;
