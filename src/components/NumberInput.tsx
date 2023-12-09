// NumberInput.tsx
import React, { ChangeEvent } from "react";

interface NumberInputProps {
  label: string;
  value: number;
  onChange: (newValue: number) => void;
  placeholder?: string;
}

const NumberInput: React.FC<NumberInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    onChange(isNaN(newValue) ? 0 : newValue);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2" htmlFor={label}>
        {label}
      </label>
      <input
        type="number"
        id={label}
        className="p-2 border rounded-md w-full"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default NumberInput;
