"use client";

import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  label: string;
  error?: FieldError;
  registration: UseFormRegisterReturn;
};

export default function TextArea({
  label,
  error,
  registration,
}: Props) {
  return (
    <div className="space-y-1">
      <label className="block font-medium">{label}</label>
      <textarea
        {...registration}
        className="w-full rounded-xl border border-zinc-300
                px-4 py-3
                text-[#2c2c2c]
                focus:border-[#f06500]
                focus:outline-none focus:ring-2 focus:ring-[#f06500]/30"
        rows={4}
      />
      {error && <p className="mt-1 text-red-500 text-sm">{error.message}</p>}
    </div>
  );
}
