"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Services() {

  const services = [
    {
      title: "المجالس",
      desc: "مجالس فاخرة بتصميم أنيق وراحة مثالية.",
      images: ["/majliss1.png", "/majliss2.png", "/majliss4.png"]
    },
    {
      title: "المسبح",
      desc: "مسبح خاص مثالي للاسترخاء.",
      images: ["/masba7.png"]
    },
    {
      title: "المطبخ",
      desc: "مطبخ مجهز بالكامل بكل الوسائل الحديثة.",
      images: ["/maba51.png", "/matba52.png","/matba53.png"]
    },
    {
      title: "الحمام",
      desc: "حمام فاخر بتجهيزات عالية الجودة.",
      images: ["/toilet1.png","/toilet2.png","/toilet3.png"]
    },
    {
      title: "الحديقة",
      desc: "حديقة جميلة مجهزة بكل الراحة.",
      images: ["/jardin1.png","/jardin2.png"]
    }
  ];

  return (
    <main className="bg-[#0A1624] text-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <Image
          src="/majliss2.png"
          alt="services"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-4xl font-light">
          خدماتنا
        </h1>
      </section>

      {/* ================= CARDS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 space-y-10">

        {services.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0F1C2E] rounded-2xl overflow-hidden flex flex-col md:flex-row"
          >

            {/* ================= AUTO SLIDER ================= */}
            <AutoSlider images={item.images} />

            {/* CONTENT */}
            <div className="p-6 flex-1 flex flex-col justify-between">

              <div>
                <h2 className="text-2xl font-light">
                  {item.title}
                </h2>

                <p className="text-white/60 mt-3 text-sm leading-6">
                  {item.desc}
                </p>
              </div>

              <a
                href="/booking"
                className="mt-6 inline-block bg-[#38E8D6] text-black px-6 py-2 rounded-full w-fit hover:scale-105 transition"
              >
                احجز الآن
              </a>

            </div>

          </motion.div>
        ))}

      </section>

    </main>
  );
}

/* ================= AUTO SLIDER COMPONENT ================= */
function AutoSlider({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1000); // speed

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full md:w-[45%] h-[240px] md:h-[260px] overflow-hidden">

      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt="service"
            fill
            className="object-cover"
          />
        </div>
      ))}

      {/* subtle overlay */}
      <div className="absolute inset-0 bg-black/20" />

    </div>
  );
}