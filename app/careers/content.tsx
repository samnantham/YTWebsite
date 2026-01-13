"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import {
    bannerVariant
} from "@/lib/animations";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile } from "@marsidev/react-turnstile";

import TextInput from "@/components/form/TextInput";
import TextArea from "@/components/form/TextArea";
import PhoneNumberInput from "@/components/form/PhoneInput";
import SubmitButton from "@/components/form/SubmitButton";
import FileUpload from "@/components/form/FileUpload";

import {
    careerSchema,
    CareerFormData,
} from "@/lib/careerSchema";

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
    } = useForm<CareerFormData>({
        resolver: zodResolver(careerSchema),
    });

    async function onSubmit(data: CareerFormData) {
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
                    src="/assets/slider/slide3.jpg"
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
                        <h1 className="mb-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-widest drop-shadow-md uppercase">
                            Career
                        </h1>
                        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-white/85 leading-relaxed drop-shadow">
                            Join our team and be part of a workplace where innovation, collaboration, and growth are at the heart of everything we do. We are always looking for passionate individuals who are eager to learn, contribute, and grow with us.</p>
                    </div>
                </motion.div>
            </div>

            {/* =======================
         MAP + CONTACT INFO
      ======================= */}
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-6">

                    {/* HEADER */}
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#f06500] uppercase tracking-widest">
                            Why Work With Us
                        </h2>
                        <p className="md:text-lg text-base mt-4 text-[#484848] dark:text-white/70 max-w-4xl mx-auto">
                            At <span className="font-bold">Turbine Axis</span>, we believe our people are our greatest strength. We foster a positive work environment that encourages creativity, ownership, and continuous learning.
                        </p>
                    </div>


                    {/* BULLET POINTS */}
                    <ul className="mx-auto max-w-4xl space-y-4">
                        {[
                            "Collaborative and inclusive workplace culture",
                            "Opportunities for continuous learning and professional growth",
                            "Exposure to global aviation projects and clients",
                            "Strong focus on quality, safety, and innovation",
                            "Supportive leadership and transparent communication",
                        ].map((text, index) => (
                            <li
                                key={index}
                                className="
        group flex items-center gap-3
        cursor-default
      "
                            >
                                <FaChevronRight
                                    size={18}
                                    className="text-[#f06500]  transition-all duration-300" />
                                {/*group-hover:text-[#f06500]
         group-hover:translate-x-1
         group-hover:scale-110 */}
                                <p className="text-[#484848] dark:text-white/80">
                                    {text}
                                </p>
                            </li>
                        ))}
                    </ul>


                </div>
            </section>



            {/* =======================
         CONTACT FORM
      ======================= */}
            <section className="py-20 bg-zinc-100 dark:bg-black">
                <div className="mx-auto max-w-5xl px-6">

                    <div className="mb-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#f06500] uppercase tracking-widest">
                            Apply now and grow with us
                        </h2>
                        <p className="mt-4 text-[#484848] dark:text-white/70">
                            Ready to take the next step in your career?
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

                            <TextInput
                                label="Subject"
                                registration={register("subject")}
                                error={errors.subject}
                            />
                        </div>
                        <TextArea
                            label="Comments"
                            registration={register("message")}
                            error={errors.message}
                        />

                        <FileUpload
                            label="Upload Resume"
                            registration={register("resume")}
                            error={errors.resume}
                            accept=".pdf,.doc,.docx"
                        />

                        <Turnstile
                            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                            onSuccess={(token) => setValue("token", token)}
                        />

                        <SubmitButton loading={isSubmitting} label="Apply Now" />
                    </form>
                </div>
            </section>

        </div>
    );
}
