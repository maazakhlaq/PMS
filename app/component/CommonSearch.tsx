import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const CommonSearch: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    
      
      <input
        {...props}
        
        className="px-2 py-1   rounded-xl border border-inputBorder text-xs 
         focus:outline-none
         focus:bg-gray-100 text-inputText
          placeholder-placeholder bg-inputBg disabled:bg-disabled"
      />
   
  );
};

export default CommonSearch;
