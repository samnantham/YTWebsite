"use client";

type Props = {
  loading: boolean;
};

export default function SubmitButton({ loading }: Props) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="bg-gradient-to-b from-[#484848] to-[#2c2c2c] text-[#f06500] px-4 py-2 rounded text-base font-semibold"
    >
      {loading ? "Sending..." : "Send Message"}
    </button>
  );
}
