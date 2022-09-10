import React from "react";

import { Editor, Preview } from "../components";
import { PropertiesProvider } from "../providers/properties-provider";

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
