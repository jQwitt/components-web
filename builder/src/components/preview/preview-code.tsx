import React from "react";

import { useProperties } from "../../providers/properties-provider";

const PreviewCode: React.FC = () => {
  const { state, dispatch } = useProperties();

  return (
    <div className="preview-code">
      <pre>{JSON.stringify(state.styles, null, 2)}</pre>
    </div>
  );
};

export default PreviewCode;
