import { openWhatsApp } from "@/lib/wa";
import { MessageCircle } from "lucide-react";

const CTABanner = () => (
  <section className="container py-16">
    <div className="relative rounded-lg overflow-hidden border hairline bg-card/40 p-10 md:p-16 text-center">
      <div className="absolute inset-0 opacity-[0.08]" style={{ background: "radial-gradient(circle at 50% 0%, hsl(var(--gold)) 0%, transparent 60%)" }} />
      <div className="relative max-w-2xl mx-auto">
        <div className="eyebrow mb-3">Ready when you are</div>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">Ready to play like a pro?<br /><span className="text-gold">Claim your YOLO365 ID in 60 seconds.</span></h2>
        <p className="text-sm md:text-base text-muted-foreground mb-8">A million Indian players already trust YOLO365 for IPL 2026, live casino and the fastest payouts in the country. You're one WhatsApp message away.</p>
        <button onClick={openWhatsApp} className="inline-flex items-center gap-2 px-6 h-12 rounded-md bg-gold text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity btn-glow">
          <MessageCircle className="w-4 h-4" /> Get my free ID
        </button>
      </div>
    </div>
  </section>
);

export default CTABanner;
