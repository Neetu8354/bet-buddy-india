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
  const homeLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${SITE}/#webpage`,
      url: SITE,
      name: "YOLO365 — India's Trusted Online Cricket Betting ID & Live Casino",
      isPartOf: { "@id": `${SITE}/#website` },
      inLanguage: "en-IN",
      about: { "@id": `${SITE}/#organization` },
      description:
        "YOLO365 is a trusted online cricket betting exchange in India. Get your IPL betting ID on WhatsApp in 60 seconds.",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How do I get a YOLO365 betting ID?", acceptedAnswer: { "@type": "Answer", text: "Click any 'Get ID' button on yolo365.live. It opens WhatsApp where our team shares your ID and password within 60 seconds." } },
        { "@type": "Question", name: "Is YOLO365 safe and legal in India?", acceptedAnswer: { "@type": "Answer", text: "Yes. YOLO365 uses bank-grade SSL encryption to protect your data and transactions." } },
        { "@type": "Question", name: "What is the minimum deposit on YOLO365?", acceptedAnswer: { "@type": "Answer", text: "You can start with as little as ₹100. YOLO365 accepts UPI, PhonePe, GPay, Paytm, IMPS and net banking with instant credit." } },
        { "@type": "Question", name: "How long do YOLO365 withdrawals take?", acceptedAnswer: { "@type": "Answer", text: "Most withdrawals are processed within 5 minutes directly to your Indian bank account, with no hidden fees." } },
        { "@type": "Question", name: "Can I bet on IPL 2026 on YOLO365?", acceptedAnswer: { "@type": "Answer", text: "Yes. YOLO365 covers every IPL 2026 match, international cricket (T20, ODI, Test), domestic leagues and women's cricket — with the sharpest odds in India." } },
        { "@type": "Question", name: "Does YOLO365 have live casino games?", acceptedAnswer: { "@type": "Answer", text: "YOLO365 offers live Teen Patti, Andar Bahar, Roulette, Dragon Tiger, Blackjack, Baccarat and 1,000+ slot games with real dealers from Evolution, Ezugi and Pragmatic Play." } },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="YOLO365 — India's Trusted Online Cricket Betting ID, IPL & Live Casino 2026"
        description="YOLO365 is a trusted online cricket betting exchange in India. Get your IPL betting ID on WhatsApp in 60 seconds, instant INR deposits, 5-minute withdrawals, live Teen Patti, Andar Bahar & 1000+ casino games."
        canonical="/"
        jsonLd={homeLd}
        hreflang={[
          { lang: "en-IN", href: "https://yolo365.live/" },
          { lang: "x-default", href: "https://yolo365.live/" },
        ]}
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
