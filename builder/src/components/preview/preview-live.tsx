import React from "react";

import { useProperties } from "../../providers/properties-provider";

const PreviewLive: React.FC = () => {
  const { state, dispatch } = useProperties();

  return <div className="preview-live"></div>;
};

export default PreviewLive;
