import React, { ReactNode, SelectHTMLAttributes } from "react";

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: any;
}

const Dropdown: React.FC<InputProps> = ({ label, options, ...props }) => {
  return (
    <div className="flex flex-col m-2">
      {label && (
        <label className="text-labelText text-xs font-semibold mb-1">
          {label}
        </label>
      )}
      <select
        {...props} // now you can still pass name, required, disabled, etc.
 className="px-1 py-1 h-6 border border-inputBorder text-xs 
         focus:outline-none
         focus:bg-gray-100 text-inputText
          placeholder-placeholder bg-inputBg disabled:bg-disabled"
      >
        <option value="">Please Select {label}</option>
        {options.map((i: any) => (
          <option key={i.id} value={i.id}>
            {i.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
