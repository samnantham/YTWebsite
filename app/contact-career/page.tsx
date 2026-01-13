"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  bannerVariant,
  slideLeft,
  slideRight,
} from "@/lib/animations";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";

import TextInput from "@/components/form/TextInput";
import TextArea from "@/components/form/TextArea";
import PhoneNumberInput from "@/components/form/PhoneInput";
import SubmitButton from "@/components/form/SubmitButton";

import {
  contactSchema,
  ContactFormData,
} from "@/lib/contactSchema";

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
        {/* BACKGROUND IMAGE */}
        <Image
          src="/assets/slider/slide2.jpg"
          alt="About Us Banner"
          fill
          priority
          className="object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/20" />

        {/* ✅ ANIMATED GRADIENT CONTENT */}
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
          <div className="mx-auto max-w-5xl px-4 text-center flex flex-col items-center justify-center">
            <h1 className="mb-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-widest drop-shadow-md">
              Welcome to Turbine Axis
            </h1>

            <p className="max-w-3xl text-base sm:text-lg md:text-xl text-white/85 leading-relaxed drop-shadow">
              Turbine Axis is one of the leading Aviation Services Company in the
              Middle East Region, established at Sharjah Airport International
              Free (SAIF) Zone, Sharjah with vast industry expertise.
            </p>
          </div>
        </motion.div>
      </div>

      <section className="py-20 bg-zinc-50 dark:bg-black">
        <div className="mx-auto max-w-5xl px-6">

          {/* HEADER */}
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-[#f06500] uppercase tracking-widest">
              Contact Us
            </h1>
            <p className="mt-4 text-[#484848] dark:text-white/70">
              Get in touch with us. We’d love to hear from you.
            </p>
          </div>

          {/* FORM CARD */}

          <form onSubmit={handleSubmit(onSubmit)} className="
           space-y-6
    rounded-2xl
    bg-white dark:bg-[#2c2c2c]
    p-8
    shadow-lg
    border border-zinc-200 dark:border-white/10
          ">
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
                label="Email Id"
                type="email"
                registration={register("email")}
                error={errors.email}
              />

              <PhoneNumberInput
                label="Contact Number"
                name="phone"
                control={control}
                error={errors.phone}
                inputClassName="
    bg-zinc-50
    dark:bg-[#1f1f1f]
    border-zinc-300
    dark:border-white/20
    text-zinc-900
    dark:text-white
  "
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

            <SubmitButton loading={isSubmitting} />
          </form>

        </div>
      </section>
    </div>
  );
}
