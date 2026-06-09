import Booking from "./bookin"
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
       images: ["/logo.png"],
  },
};
export default function Home() {
  return (
   <Booking></Booking>
  );
}
