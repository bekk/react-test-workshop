import React from "react";

type InputWithLabelProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

function InputWithLabel({ label, value, onChange }: InputWithLabelProps) {
  return (
    <>
      <label style={{ display: "block" }} htmlFor="input-with-label">
        {label}
      </label>
      <input
        type="text"
        id="input-with-label"
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default InputWithLabel;
