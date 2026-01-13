"use client";

import PhoneInput from "react-phone-number-input";
import {
  Controller,
  Control,
  FieldError,
} from "react-hook-form";

import "react-phone-number-input/style.css";

type Props = {
  label: string;
  name: string;
  control: Control<any>;
  error?: FieldError;

  /** styling */
  wrapperClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
};

export default function PhoneNumberInput({
  label,
  name,
  control,
  error,
  wrapperClassName = "",
  inputClassName = "",
  labelClassName = "",
}: Props) {
  return (
    <div className={`space-y-1 ${wrapperClassName}`}>
      <label className={`block font-medium ${labelClassName}`}>
        {label}
      </label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <PhoneInput
            {...field}
            international
            defaultCountry="IN"
            limitMaxLength
            smartCaret={false}
            className={`
              flex
              rounded-xl
              border
              px-4 py-3
              bg-zinc-50
              dark:bg-[#1f1f1f]
              border-zinc-300
              dark:border-white/20
              text-zinc-900
              dark:text-white
              focus-within:ring-0
              focus-within:outline-none
              ${inputClassName}
            `}
          />
        )}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}
