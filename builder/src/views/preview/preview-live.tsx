import React from "react";

import { useProperties } from "../../providers/properties-provider";

const PreviewLive: React.FC = () => {
  const { state } = useProperties();

  return (
    <div className="preview-live">
      <div
        id="component"
        style={state.styles}
        dangerouslySetInnerHTML={{ __html: state.html }}
      ></div>
    </div>
  );
};

export default PreviewLive;
