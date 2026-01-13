import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from "react-hook-form";

type FileUploadProps = {
  label: string;
  registration: UseFormRegisterReturn;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  accept?: string;
  multiple?: boolean;
};

export default function FileUpload({
  label,
  registration,
  error,
  accept,
  multiple = false,
}: FileUploadProps) {
  return (
    <div className="space-y-1">
      {/* LABEL */}
      <label className="block font-medium">
        {label}
      </label>

      {/* FILE INPUT */}
      <input
        type="file"
        {...registration}
        accept={accept}
        multiple={multiple}
        className="
          w-full cursor-pointer
          rounded-xl
          py-3
          text-sm text-[#2c2c2c] dark:text-white
          file:mr-4 file:rounded-xl
          file:border-0 
          file:bg-[#f06500]
          file:px-4 file:py-3
          file:text-sm file:font-semibold
          file:text-white
          hover:file:bg-[#fd8606]
          focus:outline-none
        "
      />

      {/* ERROR MESSAGE */}
      {typeof error?.message === "string" && (
        <p className="text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}
