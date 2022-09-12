import React from "react";
import { Color, ColorResult, SketchPicker } from "react-color";
import Button from "./button";

const DEFAULT_COLOR: Color = "#FFF";

interface ColorPickerProps {
  label?: string;
  onChange?: (value: any) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label, onChange }) => {
  const handleChange = (color: ColorResult) => {
    const { hex } = color;
    setValue(hex);
    onChange?.(hex);
  };
  const handleClick = () => {
    setVisible(!visible);
  };

  const [visible, setVisible] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<Color>(DEFAULT_COLOR);

  return (
    <div className="colorpicker">
      {label && <p className="colorpicker-label">{label}</p>}
      <Button
        className="colorpicker-button"
        onClick={handleClick}
        icon="paintbrush"
      />
      {visible && (
        <SketchPicker
          className="colorpicker-input"
          onChange={handleChange}
          color={value}
        />
      )}
    </div>
  );
};

export default ColorPicker;
