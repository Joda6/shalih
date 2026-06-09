"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaTrash,
} from "react-icons/fa";

export const metadata = {
  title: "الحجز",
  description:
    "احجز شاليهك بسهولة في الشاليهات الذهبية. تجربة فاخرة بأسعار واضحة وشفافة.",
  keywords: [
    "حجز شاليه",
    "booking",
    "الشاليهات الذهبية",
    "حجز وادي الدواسر",
  ],
  openGraph: {
    title: "الحجز | الشاليهات الذهبية",
    description:
      "احجز الآن واستمتع بتجربة فاخرة وسط الطبيعة.",
  },
};
export default function Booking() {
  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (
      !form.firstName ||
      !form.lastName ||
      !form.phone ||
      !form.date
    ) {
      setError(" المرجو ملء جميع الخانات");
      return;
    }

    if (form.date < today) {
      setError(" لا يمكن الحجز في تاريخ ماضٍ");
      return;
    }

    setSuccess(true);
  };

  const cancelBooking = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      date: "",
    });
    setSuccess(false);
    setError("");
  };

  return (
    <main className="min-h-screen bg-[#0A1624] text-white px-6 py-20">

      {/* MAP */}
      <div className="max-w-6xl mx-auto mb-10 rounded-2xl overflow-hidden border border-white/10">
        <iframe
          src="https://www.google.com/maps?q=20.417093,44.7304611&output=embed"
          className="w-full h-[300px]"
        />
      </div>

      {/* SUCCESS */}
      {success ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl mx-auto text-center bg-[#0F1C2E] p-10 rounded-2xl"
        >
          <FaCheckCircle className="text-green-400 text-5xl mx-auto" />

          <h2 className="text-3xl text-[#38E8D6] font-bold mt-4">
             مبروك! تم تأكيد الحجز
          </h2>

          <p className="text-white/60 mt-3">
            تم تسجيل طلبك بنجاح وسيتم التواصل معك قريباً
          </p>

          <button
            onClick={cancelBooking}
            className="mt-8 flex items-center justify-center gap-2 bg-red-500 px-6 py-3 rounded-full mx-auto hover:scale-105 transition"
          >
            <FaTrash />
            إلغاء الحجز
          </button>
        </motion.div>
      ) : (
        <>
          {/* ERROR */}
          {error && (
            <div className="max-w-2xl mx-auto mb-4 bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-lg flex items-center gap-2">
              <FaTimesCircle />
              {error}
            </div>
          )}

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto bg-[#0F1C2E] p-8 rounded-2xl space-y-4"
          >

            {/* NAME */}
            <div className="flex gap-4">
              <Input icon={<FaUser />} name="firstName" placeholder="الاسم" form={form} onChange={handleChange} />
              <Input icon={<FaUser />} name="lastName" placeholder="الكنية" form={form} onChange={handleChange} />
            </div>

            {/* EMAIL */}
            <Input icon={<FaEnvelope />} name="email" placeholder="الإيميل" form={form} onChange={handleChange} />

            {/* PHONE */}
            <Input icon={<FaPhone />} name="phone" placeholder="رقم الهاتف" form={form} onChange={handleChange} />

            {/* CALENDAR (ONE ONLY) */}
            <div className="bg-[#0A1624] p-4 rounded-lg flex items-center gap-2">
              <FaCalendarAlt />
              <input
                type="date"
                name="date"
                min={today}
                className="bg-transparent w-full outline-none"
                onChange={handleChange}
                value={form.date}
              />
            </div>

            {/* PRICE INFO ONLY (NO CALCULATION) */}
            <div className="text-center text-[#38E8D6] text-sm leading-7">
              <p> وسط الأسبوع: 350 ريال سعودي</p>
              <p> الخميس والجمعة: 450 ريال سعودي</p>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#38E8D6] to-[#60A5FA] text-black py-3 rounded-full font-bold hover:scale-105 transition"
            >
              تأكيد الحجز
            </button>

          </motion.form>
        </>
      )}
    </main>
  );
}

/* INPUT */
function Input({ icon, name, placeholder, form, onChange }) {
  return (
    <div className="flex items-center gap-2 w-full bg-[#0A1624] p-3 rounded-lg">
      {icon}
      <input
        name={name}
        placeholder={placeholder}
        className="bg-transparent w-full outline-none"
        value={form[name]}
        onChange={onChange}
      />
    </div>
  );
}