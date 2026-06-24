import { openWhatsApp } from "@/lib/wa";
import { MessageCircle } from "lucide-react";

const Testimonials = () => (
  <section className="container py-16">
    <div className="text-center mb-10 max-w-2xl mx-auto">
      <div className="eyebrow mb-2">Player community</div>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Join Indian players on YOLO365</h2>
      <p className="text-muted-foreground mt-3 text-sm md:text-base">
        Verified player reviews will appear here once we collect feedback from real users. If you've played on YOLO365, share your experience with us on WhatsApp.
      </p>
    </div>
    <div className="text-center">
      <button onClick={openWhatsApp} className="inline-flex items-center gap-2 px-6 h-12 rounded-md bg-gold text-primary-foreground font-semibold hover:opacity-90">
        <MessageCircle className="w-4 h-4" /> Share your feedback
      </button>
    </div>
  </section>
);

export default Testimonials;
