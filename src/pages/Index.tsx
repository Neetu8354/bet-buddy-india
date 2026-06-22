import Header from "@/components/Header";
import TickerBar from "@/components/TickerBar";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import PromoSlider from "@/components/PromoSlider";
import SportsSection from "@/components/SportsSection";
import CasinoSection from "@/components/CasinoSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import PaymentMethods from "@/components/PaymentMethods";
import Providers from "@/components/Providers";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import WhatsAppChatbot from "@/components/WhatsAppChatbot";

const SITE = "https://yolo365.live";

const Index = () => {
  const homeLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE}/#webpage`,
    url: SITE,
    name: "YOLO365 — India's #1 Online Cricket Betting ID & Live Casino",
    isPartOf: { "@id": `${SITE}/#website` },
    inLanguage: "en-IN",
    about: { "@id": `${SITE}/#organization` },
    description:
      "YOLO365 is India's most trusted online cricket betting exchange. Get your IPL betting ID on WhatsApp in 60 seconds.",
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="YOLO365 — India's #1 Online Cricket Betting ID, IPL & Live Casino 2026"
        description="YOLO365 is India's most trusted online cricket betting exchange. Get your IPL betting ID on WhatsApp in 60 seconds, instant INR deposits, 5-minute withdrawals, live Teen Patti, Andar Bahar & 1000+ casino games."
        canonical="/"
        keywords="YOLO365, online cricket betting India, IPL 2026 betting ID, live casino India, Teen Patti online, Andar Bahar real money, kabaddi betting, instant withdrawal betting"
        jsonLd={homeLd}
      />
      <TickerBar />
      <Header />
      <main>
        <Hero />
        <PromoSlider />
        <SportsSection />
        <CasinoSection />
        <HowItWorks />
        <Features />
        <PaymentMethods />
        <Providers />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

export default Index;
