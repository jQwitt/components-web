import React from "react";

import { Editor, Preview } from "../../views";
import { PropertiesProvider } from "../../providers";

const Builder: React.FC = () => {
  return (
    <div className="builder">
      <PropertiesProvider>
        <Editor />
        <Preview />
      </PropertiesProvider>
    </div>
  );
};

export default Builder;
