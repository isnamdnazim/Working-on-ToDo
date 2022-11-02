import React, { useState } from "react";
import { iHidePass, iShowPass } from "../../app/const";

const CommonInput = ({
  onClick,
  onChange,
  name,
  warningBorder = false,
  value,
  type = "text",
  label,
  placeholder,
  className = "",
  className2 = "",
  className3 = "",
  className4 = "",
  max_input,
  min_input,
  min_number,
  is_readonly = false,
  no_label = false,
  icon = null,
  pipe = false,
  textarea = false,
  rows,
  cols = 15,
  togglePasswordBtn = false,
  required = false,
  disabled = false,
  startDate,
  inputIcon = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState(type);

  return (
    <div>
      {!no_label && (
        <div
          className={`text-cInputLabel text-fs16 mb-s15 font-medium capitalize w-full ${
            required === true ? "req-field" : ""
          }`}
        >
          {label}
        </div>
      )}

      <div
        className={`${className2} ${
          icon && "relative flex justify-center items-center w-full"
        }`}
      >
        <div
          className={`${togglePasswordBtn === true ? "relative" : ""} relative`}
        >
          {inputIcon && (
            <div className="absolute left-0 pb-s14 pt-s10 ml-s10 mr-s10">
              <img className="w-s18 h-s18" src={inputIcon} alt="" />
            </div>
          )}
          {!textarea && (
            <input
              disabled={disabled}
              required={required}
              onClick={onClick}
              onChange={onChange}
              type={inputType}
              name={name}
              value={value && value}
              data-date-format={type === "date" ? "DD MMMM YYYY" : ""}
              maxLength={max_input ? max_input : 4096}
              minLength={min_input ? min_input : 0}
              min={
                type === "number"
                  ? min_number
                  : type === "date"
                  ? startDate
                    ? startDate
                    : new Date().toISOString().split("T")[0]
                  : ""
              }
              className={`bg-white border  ${
                warningBorder ? "border-cRed" : "border-cNmSelect "
              }   ${
                !inputIcon ? "px-5" : "px-10"
              }  py-s7 w-full rounded-md text-cTextBlack ${className3} ${
                togglePasswordBtn === true ? "pr-s50" : ""
              }
                ${disabled ? "cursor-not-allowed" : "cursor-default"}
              `}
              placeholder={placeholder}
              readOnly={is_readonly}
            />
          )}
          {togglePasswordBtn === true ? (
            <img
              onClick={() => {
                setShowPassword(!showPassword);
                if (inputType === "password") {
                  setInputType("text");
                } else {
                  setInputType("password");
                }
              }}
              src={showPassword === true ? iShowPass : iHidePass}
              alt="show-hide-icon"
              className="absolute top-1 right-3 p-2 cursor-pointer"
            />
          ) : (
            ""
          )}
        </div>

        {textarea && (
          <textarea
            // autoComplete={autoComplete}
            name={name}
            required={required}
            onChange={onChange}
            value={value && value}
            className={`h-full w-full resize-none rounded-md px-5 py-3 border border-cNmSelect text-cTextBlack ${className3}`}
            rows={rows}
            cols={cols}
            placeholder={placeholder}
          ></textarea>
        )}

        {icon && (
          <div
            className={`absolute right-1 px-2 ${
              pipe && "border-l"
            } border-cInputBorder text-gray-600 ${className4}`}
          >
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonInput;
