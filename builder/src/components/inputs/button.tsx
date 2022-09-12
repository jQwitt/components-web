import React from "react";

interface ButtonProps {
  icon?: string;
  className?: string;
  onClick?: () => void;
  toggle?: boolean;
  text?: string;
}

const Button: React.FC<ButtonProps> = ({
  icon,
  className,
  onClick,
  toggle,
  text,
}) => {
  const handleClick = () => {
    onClick?.();
  };

  const buttonContent = React.useMemo(() => {
    if (icon && text) {
      return (
        <div className="flex-row">
          <i className={`fa-solid fa-${icon}`}></i>
          <p className="btn-text">{text}</p>
        </div>
      );
    } else if (icon) {
      return <i className={`fa-solid fa-${icon}`}></i>;
    } else if (text) {
      return <p className="btn-text">{text}</p>;
    }
    return null;
  }, [icon, text]);

  return (
    <button
      className={`${toggle ? "toggle" : ""} btn ${className}`}
      onClick={handleClick}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
