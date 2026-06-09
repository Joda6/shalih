import Services from "./service"
export const metadata = {
  title: "خدماتنا",
  description:
    "استكشف خدمات الشاليهات الذهبية: مجالس فاخرة، مسبح خاص، مطبخ مجهز، حمام راقي وحدائق جميلة.",
  keywords: [
    "خدمات الشاليه",
    "المجالس",
    "المسبح",
    "المطبخ",
    "الشاليهات الذهبية",
  ],
  openGraph: {
    title: "خدماتنا | الشاليهات الذهبية",
    description:
      "كل ما تحتاجه لتجربة إقامة فاخرة داخل الشاليهات.",
    images: ["/logo.png"],
  },
};
export default function Home() {
  return (
   <Services></Services>
  );
}
