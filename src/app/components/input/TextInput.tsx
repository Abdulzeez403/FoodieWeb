import { ErrorMessage, Field, useField } from "formik";
import React, { useEffect } from "react";

interface IProps {
  label?: string;
  type?: string;
  name: string;
  className?: string;
  placeHolder?: string;
  // onChange?:(value:string)=>void;
  props?: {
    [x: string]: any;
  };
  containerClass?: string;
  icon?: React.ReactNode
}

export const ApTextInput: React.FC<IProps> = ({
  label,
  type,
  name,
  className,
  placeHolder,
  icon,
  containerClass,
  ...props
}) => {
  const [field, meta] = useField(name);

  return (
    <div
      style={{ marginBottom: 10, display: "flex", flexDirection: "column" }}
      className={`relative z-0 px-2   ${containerClass}`}
    >

      <label className="text-11 font-bold text-gray-900 dark:text-gray-300 bg-white  relative px-1 ">
        <div className="flex gap-2">
          <div>{icon}</div>
          <div>{label}</div>
        </div>
      </label>

      {type == "textarea" ? (
        <textarea
          className={`form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        ${className}`}
          {...field}
          {...props}
          name={name}
          rows={4}
          placeholder={placeHolder}
        ></textarea>
      ) : (
        <Field
          type={type}
          {...field}
          {...props}
          name={name}
          className={`
       
          block         
          text-base
          font-normal
          border
          rounded
          transition
          ease-in-out
          m-0
          h-12 text-[11px] text-10 py-55-rem p-2.5
          placeholder:text-lg
        
          ${className}`}
          placeholder={placeHolder}
        />
      )}
      {meta.touched && meta.error && (
        <div className="text-red-500">{meta.error}</div>
      )}
      {/* <ErrorMessage className="text-red-500" name={name} component="div" /> */}
    </div>
  );
};
