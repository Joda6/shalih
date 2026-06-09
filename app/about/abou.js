"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FaHeart, FaLock, FaLeaf } from "react-icons/fa";

export default function About() {

  const { scrollY } = useScroll();
  const imageScale = useTransform(scrollY, [0, 400], [1, 1.08]);

  return (
    <main className="bg-[#0A1624] text-white overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">

        <Image
          src="/majliss2.png"
          alt="about"
          fill
          className="object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-light">
            من نحن
          </h1>

          <p className="text-white/70 mt-4">
            تجربة فاخرة تجمع بين الراحة والطبيعة
          </p>
        </motion.div>

      </section>

      {/* ================= STORY (LUXURY PARALLAX) ================= */}
      <section className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-14 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-light text-[#38E8D6]">
            قصتنا
          </h2>

          <p className="text-white/60 mt-8 leading-8 text-[15px]">
            بدأت الشاليهات الذهبية بفكرة بسيطة ولكن طموحة:
            خلق مكان يجمع بين الفخامة والهدوء وسط الطبيعة.

            <br /><br />

            مع الوقت، تحول هذا الحلم إلى تجربة حقيقية يعيشها زوارنا،
            حيث يجدون الخصوصية، الراحة، والتفاصيل الدقيقة التي تصنع الفرق.

            <br /><br />

            نحن لا نقدم مجرد إقامة… بل تجربة لا تُنسى.
          </p>
        </motion.div>

        {/* IMAGE (PARALLAX + HOVER) */}
        <motion.div
          style={{ scale: imageScale }}
          className="relative h-[380px] rounded-2xl overflow-hidden"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            <Image
              src="/majliss4.png"
              alt="story"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

      </section>

      {/* ================= VALUES (ICONS + LIFT EFFECT) ================= */}
      <section className="bg-[#0F1C2E] py-24">

        <h2 className="text-center text-3xl font-light text-[#38E8D6] mb-14">
          قيمنا
        </h2>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {[
            {
              title: "الراحة",
              desc: "نوفر أعلى مستويات الراحة لضيوفنا.",
              icon: <FaHeart />
            },
            {
              title: "الخصوصية",
              desc: "مساحة خاصة بعيداً عن الإزعاج.",
              icon: <FaLock />
            },
            {
              title: "الطبيعة",
              desc: "تجربة وسط بيئة طبيعية هادئة ومريحة.",
              icon: <FaLeaf />
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group bg-[#0A1624] p-8 rounded-2xl border border-white/10 cursor-pointer"
            >

              {/* ICON */}
              <div className="text-[#38E8D6] text-3xl mb-4 group-hover:scale-125 transition">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-light group-hover:text-[#38E8D6] transition">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-white/60 mt-3 text-sm leading-6">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </section>

      {/* ================= FINAL EXPERIENCE ================= */}
      <section className="py-24 text-center px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-light"
        >
          تجربة لا تُنسى
        </motion.h2>

        <p className="text-white/60 mt-6 max-w-2xl mx-auto leading-7">
          في الشاليهات الذهبية، كل لحظة مصممة لتكون هادئة، فاخرة، ومليئة بالراحة.
          هدفنا هو أن تعيش تجربة مختلفة تماماً عن أي مكان آخر.
        </p>

        <motion.a
          href="/booking"
          whileHover={{ scale: 1.05 }}
          className="mt-10 inline-block bg-gradient-to-r from-[#38E8D6] to-[#60A5FA] text-black px-8 py-3 rounded-full font-bold"
        >
          احجز الآن
        </motion.a>

      </section>

    </main>
  );
}