import React from "react";

import { Button } from "../../components";
import PreviewCode from "./preview-code";
import PreviewLive from "./preview-live";

const Preview: React.FC = () => {
  const [codeView, setCodeView] = React.useState<boolean>(false);

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
