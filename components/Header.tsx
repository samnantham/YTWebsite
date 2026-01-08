"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { createRipple } from "@/lib/ripple";

const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Products & Services", href: "/products-services" },
    { name: "Quality", href: "/quality" },
    { name: "Contact & Career", href: "/contact-career" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-24 items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center h-full py-3">
                        <Image
                            src="/assets/logo.svg"
                            alt="Company Logo"
                            width={200}
                            height={60}
                            priority
                            className="object-contain max-h-18"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-4">
                        {menuItems.map((item) => {
                            const active = isActive(item.href);

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={createRipple}
                                    className={`
                    relative overflow-hidden
                    rounded-full px-5 py-2.5
                    text-base font-semibold uppercase
                    transition-all duration-300
                    ${active
                                            ? "bg-gradient-to-b from-[#484848] to-[#2c2c2c] text-[#f06500]"
                                            : "text-[#484848] hover:bg-[#fd8606]/15 hover:text-[#f06500]"
                                        }
                  `}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-3xl text-[#2c2c2c]"
                        onClick={() => setOpen(!open)}
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden pb-4 space-y-2">
                        {menuItems.map((item) => {
                            const active = isActive(item.href);

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className={`
                    block rounded-xl px-4 py-3
                    font-semibold uppercase transition
                    ${active
                                            ? "bg-gradient-to-b from-[#484848] to-[#2c2c2c] text-[#f06500]"
                                            : "text-[#484848] hover:bg-[#fd8606]/15 hover:text-[#f06500]"
                                        }
                  `}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </header>
    );
}
