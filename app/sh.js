"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Shalih() {

  const features = [
    { title: "مجلس فاخر", img: "/majliss1.png" },
    { title: "مسبح خاص", img: "/masba7.png" },
    { title: "مجلس في الطبيعة", img: "/majliss3.png" },
  ];

  const reviews = [
    {
      name: "صالح عبدالله",
      time: "a year ago",
      text: "أفضل شاليه ممتاز أسعار رخيصة والمعاملة كويسة",
    },
    {
      name: "شجاع السهلي",
      time: "3 years ago",
      text: "مفيدة",
    },
    {
      name: "أحمد الزهراني",
      time: "2 years ago",
      text: "مكان هادئ ونظيف وتجربة رائعة",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 70 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" }
    }
  };

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="bg-[#0A1624] text-white overflow-x-hidden">

      {/* ================= HERO (IMPROVED) ================= */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">

        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <Image
            src="/majliss2.png"
            alt="hero"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 max-w-3xl"
        >

          <h1 className="text-4xl md:text-7xl font-light">
            الشاليهات الذهبية
          </h1>

          <p className="text-white/60 mt-6 text-lg md:text-xl">
            تجربة فاخرة وسط الطبيعة في وادي الدواسر
          </p>

          <motion.a
            href="/booking"
            whileHover={{ scale: 1.05 }}
            className="mt-10 inline-block border border-[#38E8D6] text-[#38E8D6] px-10 py-3 rounded-full hover:bg-[#38E8D6] hover:text-black transition"
          >
            احجز الآن
          </motion.a>

        </motion.div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-28 px-6 max-w-6xl mx-auto">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light">لماذا نحن</h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            نوفر لك تجربة إقامة فاخرة تجمع بين الراحة، الطبيعة، والخصوصية الكاملة
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >

          {features.map((item, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="group bg-[#0F1C2E] rounded-2xl overflow-hidden border border-white/10"
            >

              <div className="relative h-[360px] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
              </div>

              <p className="p-5 text-white/70">
                {item.title}
              </p>

            </motion.div>
          ))}

        </motion.div>
      </section>

      {/* ================= EXPERIENCE (LONG STORY) ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-32 text-center bg-[#0F1C2E] px-6"
      >

        <h2 className="text-4xl font-light">
          تجربة الشاليه
        </h2>

        <p className="text-white/50 mt-10 max-w-3xl mx-auto leading-8 text-lg">
          الشاليهات الذهبية ليست مجرد مكان للإقامة، بل هي تجربة متكاملة
          صُممت بعناية لتمنحك لحظات من الهدوء والراحة بعيداً عن ضوضاء المدينة.
          هنا ستعيش تفاصيل الفخامة الحقيقية، من المجالس الراقية إلى المسبح الخاص
          والهواء النقي وسط الطبيعة.
          <br /><br />
          نحن نؤمن أن الراحة ليست رفاهية بل أسلوب حياة، لذلك حرصنا على توفير كل
          ما تحتاجه لتجربة لا تُنسى مع العائلة أو الأصدقاء.
        </p>

      </motion.section>

      {/* ================= REVIEWS ================= */}
      <section className="py-24 text-center overflow-hidden">

        <h2 className="text-4xl font-light mb-12">
          آراء الزبناء
        </h2>

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >

          {[...reviews, ...reviews].map((r, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="w-[320px] bg-[#0F1C2E] border border-white/10 rounded-2xl p-5 flex-shrink-0 text-right"
            >

              <div className="flex justify-between mb-3">
                <p className="font-bold text-sm">{r.name}</p>
                <span className="text-white/40 text-xs">{r.time}</span>
              </div>

              <div className="text-[#38E8D6] text-sm mb-3">
                ★★★★★
              </div>

              <p className="text-white/70 text-sm leading-6">
                {r.text}
              </p>

            </motion.div>
          ))}

        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="py-28 text-center bg-[#0F1C2E]"
      >

        <h2 className="text-4xl font-light">
          مستعد للتجربة؟
        </h2>

        <p className="text-white/50 mt-6">
          احجز الآن واستمتع بأفخم إقامة
        </p>

        <motion.a
          href="/booking"
          whileHover={{ scale: 1.05 }}
          className="mt-10 inline-block border border-[#38E8D6] text-[#38E8D6] px-10 py-3 rounded-full hover:bg-[#38E8D6] hover:text-black transition"
        >
          احجز الآن
        </motion.a>

      </motion.section>

    </main>
  );
}