import React from "react";

import { useProperties } from "../../providers/properties-provider";
import PreviewCode from "./preview-code";
import PreviewLive from "./preview-live";

const Preview: React.FC = () => {
  const [codeView, setCodeView] = React.useState<boolean>(true);
  const { state, dispatch } = useProperties();

  const handleClick = React.useCallback(() => {
    setCodeView((prev) => !prev);
  }, [setCodeView]);

  return (
    <div className="preview">
      {codeView ? <PreviewCode /> : <PreviewLive />}
      <button className="toggle btn" onClick={handleClick}>
        <i className={`fa-solid fa-${codeView ? "cube" : "code"}`}></i>
      </button>
    </div>
  );
};

export default Preview;
