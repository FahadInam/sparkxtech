import {
  Header,
  Footer,
  HeroSection,
  CoreProductsSection,
  ClaimsCommandSection,
  WhyChooseSparxSection,
  ValuePropositionSection,
  IndustriesServedSection,
  TrustedImpactSection,
} from "../components";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <CoreProductsSection />
      <ClaimsCommandSection />
      <WhyChooseSparxSection />
      <ValuePropositionSection />
      <IndustriesServedSection />
      <TrustedImpactSection />
      <Footer />
    </div>
  );
}
