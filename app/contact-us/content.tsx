"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";

import {
  bannerVariant,
  slideRight,
  slideLeft
} from "@/lib/animations";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile } from "@marsidev/react-turnstile";

import TextInput from "@/components/form/TextInput";
import TextArea from "@/components/form/TextArea";
import PhoneNumberInput from "@/components/form/PhoneInput";
import SubmitButton from "@/components/form/SubmitButton";

import {
  contactSchema,
  ContactFormData,
} from "@/lib/contactSchema";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

/* GOOGLE MAP (NO SSR) */
const GoogleMapComponent = dynamic(
  () => import("@/components/GoogleMap"),
  { ssr: false }
);

export default function ContactPage() {
  const [token, setToken] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      alert("Submission failed");
      return;
    }

    alert("Message sent successfully!");
  }

  return (
    <div className="bg-white dark:bg-black overflow-x-hidden">

      {/* =======================
         TOP BANNER
      ======================= */}
      <div
        className="
          relative
          h-[300px] sm:h-[380px] md:h-[450px]
          w-screen
          left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
          overflow-hidden
        "
      >
        <Image
          src="/assets/slider/slide2.jpg"
          alt="Contact Banner"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <motion.div
          variants={bannerVariant}
          initial="hidden"
          animate="visible"
          className="
            absolute inset-0 z-10
            flex items-center justify-center
            bg-gradient-to-b from-[#484848]/80 to-[#2c2c2c]/80
            backdrop-blur-[2px]
          "
        >
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h1 className="mb-3 uppercase text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-widest drop-shadow-md">
              Contact Us
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-white/85 leading-relaxed drop-shadow">
              Get in Touch. We’d love to hear from you. Our team is ready to help. Reach out to us using the details below or fill out the contact form, and we’ll get back to you as soon as possible for aviation solutions and global support.
            </p>
          </div>
        </motion.div>
      </div>

      {/* =======================
         MAP + CONTACT INFO
      ======================= */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 items-center">

            {/* CONTACT INFO — NARROW */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-[#f06500] uppercase tracking-wide">
                Contact Info
              </h2>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="mt-1 text-[#f06500]" size={20} />
                <p className="max-w-sm text-base md:text-lg text-[#484848] leading-relaxed">
                  D4--A 19TH FLOOR, CONRAD HOTEL (OFFICES)<br />
                  SHEIKH ZAYED ROAD<br />
                  DUBAI, U.A.E.<br />
                  PO BOX 5610
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#f06500]" size={18} />
                <a
                  href="tel:+971123456789"
                  className="text-base md:text-lg text-[#484848] hover:text-[#f06500] transition"
                >
                  +971 12 345 6789
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#f06500]" size={18} />
                <a
                  href="mailto:info@turbineaxis.com"
                  className="text-base md:text-lg text-[#484848] hover:text-[#f06500] transition"
                >
                  info@turbineaxis.com
                </a>
              </div>
            </motion.div>

            {/* MAP — WIDER */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative h-64 sm:h-72 md:h-96 w-full overflow-hidden rounded-2xl shadow-lg">
                <GoogleMapComponent />
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =======================
         CONTACT FORM
      ======================= */}
      <section className="py-20 bg-zinc-100 dark:bg-black">
        <div className="mx-auto max-w-5xl px-6">

          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#f06500] uppercase tracking-widest">
              Send Us a Message
            </h2>
            <p className="mt-4 text-[#484848] dark:text-white/70">
              We’ll get back to you as soon as possible.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="
              space-y-6
              rounded-2xl
              bg-white dark:bg-[#2c2c2c]
              p-8
              shadow-lg
              border border-zinc-200 dark:border-white/10
            "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextInput
                label="Your Name"
                registration={register("name")}
                error={errors.name}
              />

              <TextInput
                label="Company Name"
                registration={register("company")}
                error={errors.company}
              />

              <TextInput
                label="Email ID"
                type="email"
                registration={register("email")}
                error={errors.email}
              />

              <PhoneNumberInput
                label="Contact Number"
                name="phone"
                control={control}
                error={errors.phone}
              />
            </div>

            <TextInput
              label="Subject"
              registration={register("subject")}
              error={errors.subject}
            />

            <TextArea
              label="Comments"
              registration={register("message")}
              error={errors.message}
            />

            <Turnstile
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              onSuccess={(token) => setValue("token", token)}
            />

            <SubmitButton loading={isSubmitting} label={'Send Message'}/>
          </form>
        </div>
      </section>

    </div>
  );
}
