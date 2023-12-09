// SelectInput.tsx
import React, { ChangeEvent } from "react";

interface SelectInputProps {
  label: string;
  options: { value: string; label: string }[];
  onChange: (selectedValue: string) => void;
  defaultValue?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  onChange,
  defaultValue,
}) => {
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
  };

  return (
    <div className="flex flex-col gap-1 flex-auto">
      <label htmlFor={label}>{label}</label>
      <select
        id={label}
        className="py-2 px-6 border rounded"
        onChange={handleSelectChange}
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <option key={option.value} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
