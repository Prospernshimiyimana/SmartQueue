import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <HeroSection />

      {/* STATS */}
      <section className="max-w-5xl mx-auto px-6 -mt-20 relative z-10">
        <StatsSection />
      </section>

      {/* FEATURES */}
      <FeaturesSection />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}