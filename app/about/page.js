import About from "./abou"
export const metadata = {
  title: "من نحن",
  description:
    "تعرف على قصة الشاليهات الذهبية، تجربة فاخرة تجمع بين الراحة، الخصوصية والطبيعة في وادي الدواسر.",
  keywords: [
    "من نحن",
    "الشاليهات الذهبية",
    "تجربة شاليه",
    "وادي الدواسر",
  ],
  openGraph: {
    title: "من نحن | الشاليهات الذهبية",
    description:
      "نقدم تجربة إقامة فاخرة وسط الطبيعة مع أعلى مستويات الراحة والخصوصية.",
    images: ["/logo.png"],
  },
};
export default function Home() {
  return (
   <About></About>
  );
}
