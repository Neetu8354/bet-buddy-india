import { openWhatsApp } from "@/lib/wa";

const faqs = [
  { q: "How do I get a YOLO365 betting ID?", a: "Click any 'Get ID' button on yolo365.live. It opens WhatsApp where our team shares your ID and password within 60 seconds." },
  { q: "Is YOLO365 safe and legal in India?", a: "Yes. YOLO365 uses bank-grade SSL encryption to protect your data and transactions." },
  { q: "What is the minimum deposit on YOLO365?", a: "You can start with as little as ₹100. YOLO365 accepts UPI, PhonePe, GPay, Paytm, IMPS and net banking with instant credit." },
  { q: "How long do YOLO365 withdrawals take?", a: "Most withdrawals are processed within 5 minutes directly to your Indian bank account, with no hidden fees." },
  { q: "Can I bet on IPL 2026 on YOLO365?", a: "Yes. YOLO365 covers every IPL 2026 match, international cricket (T20, ODI, Test), domestic leagues and women's cricket — with the sharpest odds in India." },
  { q: "Does YOLO365 have live casino games?", a: "YOLO365 offers live Teen Patti, Andar Bahar, Roulette, Dragon Tiger, Blackjack, Baccarat and 1,000+ slot games with real dealers from Evolution, Ezugi and Pragmatic Play." },
];

const FAQ = () => (
  <section className="container py-16">
    <div className="text-center mb-10 max-w-2xl mx-auto">
      <div className="eyebrow mb-2">FAQ</div>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Frequently asked questions</h2>
    </div>
    <div className="max-w-3xl mx-auto divide-y hairline border-y hairline">
      {faqs.map((f, i) => (
        <details key={i} className="group py-5">
          <summary className="flex items-center justify-between text-left gap-4 cursor-pointer list-none font-medium text-sm md:text-base text-foreground">
            <span>{f.q}</span>
            <span className="text-gold text-lg leading-none group-open:rotate-45 transition-transform">+</span>
          </summary>
          <div className="pt-3 pb-1 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
        </details>
      ))}
    </div>
    <div className="text-center mt-8">
      <button onClick={openWhatsApp} className="text-sm text-foreground/70 hover:text-gold transition-colors">
        Still have questions? Talk to us on WhatsApp →
      </button>
    </div>
  </section>
);

export default FAQ;
