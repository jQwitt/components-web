import React from "react";

const Builder: React.FC = () => {
  const [codeView, setCodeView] = React.useState(true);

  return (
    <div className="builder">
      <div className="builder__editor">controls</div>
      {codeView ? (
        <div className="builder__preview-code">code</div>
      ) : (
        <div className="builder__preview-live">live</div>
      )}
      <div className="toggle">
        <button className="btn" onClick={() => setCodeView((prev) => !prev)}>
          <i className={`fa-solid fa-${codeView ? "cube" : "code"}`}></i>
        </button>
      </div>
    </div>
  );
};

export default Builder;
