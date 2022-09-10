import React from "react";

import { useProperties } from "../../providers/properties-provider";

const PreviewCode: React.FC = () => {
  const { state, dispatch } = useProperties();

  return <div className="preview-code"></div>;
};

export default PreviewCode;
