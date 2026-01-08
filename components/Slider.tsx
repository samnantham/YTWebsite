"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { autoplay } from "@/lib/keenAutoplay";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { createRipple } from "@/lib/ripple";

const slides = [
  {
    image: "/assets/slider/slide1.jpeg",
    title: "Innovative Solutions",
    text: "We deliver high-quality products & services",
  },
  {
    image: "/assets/slider/slide2.jpg",
    title: "Trusted Partner",
    text: "Quality and reliability you can trust",
  },
  {
    image: "/assets/slider/slide3.jpg",
    title: "Future Ready",
    text: "Building tomorrow’s technology today",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: { perView: 1 },
      created() {
        setLoaded(true);
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [autoplay(4000)]
  );

  return (
    <section className="w-full relative">
      <div
        ref={sliderRef}
        className="
          keen-slider relative w-full overflow-hidden
          h-[380px] sm:h-[440px] md:h-[520px] lg:h-[640px]
        "
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="keen-slider__slide relative w-full h-full"
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
              <div
                className="
    relative left-1/2 right-1/2
    -ml-[50vw] -mr-[50vw]
    w-screen
    animate-fade-up
    px-8 py-6 md:py-5
    bg-gradient-to-b from-[#484848]/35 to-[#2c2c2c]/35
    backdrop-blur-[2px]
  "
              >
                <div className="mx-auto max-w-5xl px-4 text-center flex flex-col items-center justify-center">
                  <h1 className="mb-2 text-3xl sm:text-4xl md:text-5xl font-bold text-[#f06500] drop-shadow-md">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-[#f06500]/80 drop-shadow">
                    {slide.text}
                  </p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* NAVIGATION ARROWS */}
      {loaded && instanceRef.current && (
        <>
          <button
            onClick={(e) => {
              createRipple(e);
              instanceRef.current?.prev();
            }}
            className="
              absolute left-4 top-1/2 z-20
              -translate-y-1/2
              h-12 w-12 rounded-full
              bg-black/40 text-white
              flex items-center justify-center
              transition hover:bg-[#f06500]
            "
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={(e) => {
              createRipple(e);
              instanceRef.current?.next();
            }}
            className="
              absolute right-4 top-1/2 z-20
              -translate-y-1/2
              h-12 w-12 rounded-full
              bg-black/40 text-white
              flex items-center justify-center
              transition hover:bg-[#f06500]
            "
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>
        </>
      )}

      {/* INDICATORS / DOTS */}
      {loaded && instanceRef.current && (
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`
                h-3 w-3 rounded-full transition
                ${currentSlide === idx
                  ? "bg-[#f06500]"
                  : "bg-white/60 hover:bg-white"
                }
              `}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
