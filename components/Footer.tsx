import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaChevronRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footerNav = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Quality", href: "/quality" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "Products & Services", href: "/services" },
      { name: "Solutions", href: "/solutions" },
      { name: "Industries", href: "/industries" },
      { name: "Technology", href: "/technology" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "News", href: "/news" },
      { name: "Downloads", href: "/downloads" },
      { name: "Documentation", href: "/docs" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "/help" },
      { name: "FAQs", href: "/faq" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24">

      {/* FOOTER NAV SECTION (ORANGE BG) */}
      <div className="bg-gradient-to-b from-[#fd9900] to-[#ea6001]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {footerNav.map((column) => (
              <div key={column.title}>
                <h4 className="mb-4 text-lg font-semibold text-[#2c2c2c] uppercase">
                  {column.title}
                </h4>

                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="
      group flex items-center gap-2
      text-white/90 transition
      hover:text-[#2c2c2c] hover:font-bold
    "
                      >
                        <FaChevronRight
                          size={12}
                          className="text-[#2c2c2c]"
                        />
                          {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER (GRADIENT + SOCIAL) */}
      <div className="bg-gradient-to-b from-[#484848] to-[#2c2c2c]">
        <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-base font-semibold text-white text-center md:text-left">
            © TURBINE AXIS {new Date().getFullYear()}
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 text-white">
            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              className="transition hover:text-[#f06500]"
            >
              <FaFacebookF size={18} />
            </Link>

            <Link
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
              className="transition hover:text-[#f06500]"
            >
              <FaXTwitter size={18} />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              className="transition hover:text-[#f06500]"
            >
              <FaLinkedinIn size={18} />
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
