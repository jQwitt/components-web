import React from "react";
import { useProperties } from "../../providers/properties-provider";
import { ActionType } from "../../types/reducers";

const EditorHTML: React.FC<any> = () => {
  const [input, setInput] = React.useState<string>("I am a component");
  const { dispatch } = useProperties();

  React.useEffect(() => {
    const timeOutId = setTimeout(
      () => dispatch({ type: ActionType.HTML, payload: { value: input } }),
      1000
    );
    return () => clearTimeout(timeOutId);
  }, [input]);

  return (
    <div className="editor-html">
      <h3>HTML</h3>
      <textarea
        onChange={(event) => setInput(event.target.value)}
        placeholder="I am a component"
      ></textarea>
    </div>
  );
};

export default EditorHTML;
