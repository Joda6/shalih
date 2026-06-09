"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1B2B] text-white border-t border-white/10 mt-20">

      <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold">
            <span className="text-[#38E8D6]">الشاليهات</span> الذهبية
          </h2>

          <p className="text-white/60 mt-3 text-sm leading-6">
            تجربة فاخرة وسط الطبيعة في وادي الدواسر، تجمع بين الراحة، الهدوء والفخامة.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-bold text-[#38E8D6] mb-3">
            تواصل معنا
          </h3>

          <p className="text-white/70 text-sm">
             +966 53 264 3170
          </p>

          <p className="text-white/50 text-sm mt-2">
            متواجدون 24/7 للرد على الاستفسارات
          </p>
        </div>

        {/* NAV LINKS (PAGES) */}
        <div>
          <h3 className="font-bold text-[#38E8D6] mb-3">
            روابط مهمة
          </h3>

          <Link href="/" className="block text-white/60 hover:text-[#38E8D6] transition text-sm">
            الرئيسية
          </Link>

          <Link href="/services" className="block text-white/60 hover:text-[#38E8D6] transition text-sm">
            خدماتنا
          </Link>

          <Link href="/about" className="block text-white/60 hover:text-[#38E8D6] transition text-sm">
            من نحن
          </Link>

          <Link href="/booking" className="block text-white/60 hover:text-[#38E8D6] transition text-sm">
            الحجز
          </Link>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/40">

  <p>
    © {new Date().getFullYear()} جميع الحقوق محفوظة{" "}
    <span className="text-white">الشاليهات الذهبية</span>
  </p>

        <p className="mt-2">
          صنع هذا الموقع من طرف{" "}
          <a
            href="https://dipdev-portfolio-murex.vercel.app/"
            target="_blank"
            className="text-[#38E8D6] hover:underline"
          >
            Dip Dev
          </a>
        </p>

      </div>

    </footer>
  );
}