import { openWhatsApp } from "@/lib/wa";
import { MessageCircle } from "lucide-react";

const steps = [
  { n: "01", t: "60-second onboarding", d: "One WhatsApp message — name and preferred ID. No KYC paperwork, no app downloads, no waiting room." },
  { n: "02", t: "Credentials in chat", d: "Our team replies with your username and password before your tea goes cold." },
  { n: "03", t: "Fund in INR, instantly", d: "UPI, PhonePe, GPay, Paytm or IMPS — funds credited in under 30 seconds, zero fees." },
  { n: "04", t: "Play. Win. Withdraw.", d: "Bet across cricket, kabaddi and live casino. Cash out to your bank in five minutes flat." },
];

const HowItWorks = () => (
  <section className="border-y hairline bg-card/30">
    <div className="container py-16">
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <div className="eyebrow mb-2">Get started</div>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">From WhatsApp to <span className="text-gold">first bet</span> in 60 seconds</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((s) => (
          <div key={s.n} className="card-premium rounded-lg p-6">
            <div className="text-xs font-medium text-gold tracking-widest mb-3">{s.n}</div>
            <h3 className="font-semibold text-base mb-1.5 tracking-tight">{s.t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button onClick={openWhatsApp} className="inline-flex items-center gap-2 px-6 h-11 rounded-md bg-gold text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
          <MessageCircle className="w-4 h-4" /> Start on WhatsApp
        </button>
      </div>
    </div>
  </section>
);

export default HowItWorks;
