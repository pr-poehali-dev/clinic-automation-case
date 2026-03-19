import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import FinanceSection from "@/components/sections/FinanceSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Index() {
  return (
    <div className="case-page font-golos">
      <HeroSection />
      <ProblemSection />
      <FinanceSection />
      <ContactSection />
    </div>
  );
}
