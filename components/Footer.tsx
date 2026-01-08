import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#484848] to-[#2c2c2c]">
      <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-base font-semibold text-[#f06500] text-center md:text-left">
          © TURBINE AXIS <span className="text-[#fff]">{new Date().getFullYear()} </span>
        </p>

        {/* Social Icons */}
         <div className="flex gap-6 text-[#f06500]">
         <Link
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
            className="transition hover:text-white"
          >
            <FaFacebookF size={18} />
          </Link>

          <Link
            href="https://twitter.com"
            target="_blank"
            aria-label="Twitter"
            className="transition hover:text-white"
          >
            <FaXTwitter size={18} />
          </Link>

          <Link
            href="https://linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
            className="transition hover:text-white"
          >
            <FaLinkedinIn size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
