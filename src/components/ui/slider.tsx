"use client";
import * as React from "react";

type SliderProps = {
  defaultValue: number[];
  max: number;
  step?: number;
  onValueChange: (value: number[]) => void;
  className?: string;
};

export function Slider({ defaultValue, max, step = 1, onValueChange, className }: SliderProps) {
  const [value, setValue] = React.useState(defaultValue[0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setValue(val);
    onValueChange([val]);
  };

  return (
    <input
      type="range"
      min={0}
      max={max}
      step={step}
      value={value}
      onChange={handleChange}
      className={`w-full accent-orange-500 ${className}`}
    />
  );
}
