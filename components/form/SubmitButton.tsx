"use client";

import { FaSpinner } from "react-icons/fa";

type Props = {
  loading: boolean;
  label?: string;
};

export default function SubmitButton({
  loading,
  label = "Submit",
}: Props) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="
        inline-flex items-center justify-center gap-2
        rounded-xl
        bg-gradient-to-b from-[#484848] to-[#2c2c2c]
        px-6 py-3
        text-base font-semibold
        text-[#f06500]
        transition
        hover:opacity-90
        disabled:cursor-not-allowed
        disabled:opacity-70
      "
    >
      {loading ? (
        <FaSpinner
          className="animate-spin text-[#f06500]"
          size={18}
          aria-label="Loading"
        />
      ) : (
        label
      )}
    </button>
  );
}
