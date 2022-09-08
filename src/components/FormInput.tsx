import React from "react";

// One Instance of the input form, ensuring I DRY

type InputProps = {
  name: string;
  type?: string;
  placeholder?: string;
  className: string;
  value: string;
  label: string;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const FormInput = ({
    name,
    type,
    placeholder,
    className,
    value,
    label,
    disabled = false,
    onChange = () => {},
}: InputProps) => {

    return (
      <div className="mb-7">
        <label
          htmlFor="email"
          className="block text-blueGray-600 text-xs font-bold mb-2"
        >
          {label}
        </label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          className={className}
          disabled = {disabled}
          onChange = {onChange}
          required
          
        />
      </div>
    );
}

FormInput.defaultProps = {
    type: "text",
    className: ""
}

export default FormInput