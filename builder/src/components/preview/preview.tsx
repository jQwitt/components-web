import React from "react";

import { useProperties } from "../../providers/properties-provider";
import Button from "../common/button";
import PreviewCode from "./preview-code";
import PreviewLive from "./preview-live";

const Preview: React.FC = () => {
  const [codeView, setCodeView] = React.useState<boolean>(false);
  const { state, dispatch } = useProperties();

  const handleClick = React.useCallback(() => {
    setCodeView((prev) => !prev);
  }, [setCodeView]);

  return (
    <div className="preview">
      {codeView ? <PreviewCode /> : <PreviewLive />}
      <Button icon={codeView ? "code" : "cube"} onClick={handleClick} toggle />
    </div>
  );
};

export default Preview;
