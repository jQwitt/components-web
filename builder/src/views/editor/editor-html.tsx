import React from "react";
import { useProperties } from "../../providers/properties-provider";

const EditorHTML: React.FC<any> = () => {
  const [input, setInput] = React.useState<string>("");
  const { dispatch } = useProperties();

  React.useEffect(() => {
    const timeOutId = setTimeout(() => console.log(input), 1000);
    return () => clearTimeout(timeOutId);
  }, [input]);

  return (
    <div className="editor-html">
      <h3>HTML</h3>
      <textarea onChange={(event) => setInput(event.target.value)}></textarea>
    </div>
  );
};

export default EditorHTML;
