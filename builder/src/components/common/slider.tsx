import React from "react";

interface SliderProps {
  startingValue?: string;
  onChange?: (value: any) => void;
  min?: string;
  max?: string;
  step?: string;
  label?: string;
}

const Slider: React.FC<SliderProps> = ({
  startingValue,
  onChange,
  min,
  max,
  step,
  label,
}) => {
  const [value, setValue] = React.useState<string>(startingValue ?? min ?? "0");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    onChange?.(value);
  };

  return (
    <div className="slider">
      {label && <p className="slider-label">{label}</p>}
      <input
        className="slider-input"
        type="range"
        min={min ?? "0"}
        max={max ?? "10"}
        step={step ?? "1"}
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Slider;
