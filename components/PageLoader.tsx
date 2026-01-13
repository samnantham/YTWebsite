"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaSpinner } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // 1️⃣ Show loader
    setVisible(true);

    // 2️⃣ Disable body scroll
    document.body.style.overflow = "hidden";

    // 3️⃣ Scroll to top immediately on route change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });

    const timer = setTimeout(() => {
      // 4️⃣ Hide loader
      setVisible(false);

      // 5️⃣ Re-enable body scroll
      document.body.style.overflow = "";
    }, 1500); // ⏱ duration in ms

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-black gap-4">
      <Image
        src="/assets/logo.svg"
        alt="Turbine Axis"
        width={320}
        height={50}
        priority
      />
      <FaSpinner
        size={28}
        className="animate-spin text-[#f06500]"
      />
    </div>
  );
}
