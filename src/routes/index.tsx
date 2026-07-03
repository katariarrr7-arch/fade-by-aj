import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Scissors, MapPin, Phone, Clock, Star, Instagram, Facebook, Calendar, MessageCircle, Check } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import cut1 from "@/assets/cut1.jpg";
import cut2 from "@/assets/cut2.jpg";
import cut3 from "@/assets/cut3.jpg";
import shopImg from "@/assets/shop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fade by AJ — Phnom Penh's Sharpest Barbershop" },
      { name: "description", content: "Precision fades, scissor cuts, and beard trims in Phnom Penh. Rated 4.3 stars. Walk-ins welcome. Book your chair at Fade by AJ." },
      { property: "og:title", content: "Fade by AJ — Phnom Penh's Sharpest Barbershop" },
      { property: "og:description", content: "Precision fades, scissor cuts, and beard trims in Phnom Penh." },
    ],
  }),
  component: Home,
});

const services = [
  { name: "Signature Fade", price: "$8", desc: "The cut that made us famous. Skin, low, mid, or high — dialed to the millimeter." },
  { name: "Scissor Cut", price: "$10", desc: "Textured, tailored, timeless. Every strand placed with intention." },
  { name: "Beard Sculpt", price: "$6", desc: "Hot towel, straight razor, precision line-up. You'll feel reborn." },
  { name: "The Full Ritual", price: "$18", desc: "Cut, beard, hot towel, styling. The complete Fade by AJ experience." },
];

const reviews = [
  { name: "Joseph", role: "Local Guide · 190 photos", text: "Highly recommend this shop. Tutu was my barber. He fixed me right up. Did a very detailed job. They play good music and are very welcoming to foreigners. This is my go-to spot from now on." },
  { name: "Tim Kan", role: "Local Guide · 33 reviews", text: "I went in asking for a high bald-fade and a short trim off the top. The barber did an excellent job. Best faders in Phnom Penh." },
  { name: "Calum Thomson", role: "Local Guide · 13 reviews", text: "Great haircut for $8. Tidied up a short mullet with good clippers and scissor work. My barber was focused and clearly cared about doing a good job." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <Scissors className="h-5 w-5 text-gold" />
            <span className="font-display text-2xl tracking-widest">FADE <span className="text-gold">BY AJ</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-muted-foreground">
            <a href="#services" className="hover:text-gold transition">Services</a>
            <a href="#work" className="hover:text-gold transition">Work</a>
            <a href="#reviews" className="hover:text-gold transition">Reviews</a>
            <a href="#book" className="hover:text-gold transition">Book</a>
          </nav>
          <a href="#book" className="bg-gold-gradient text-primary-foreground px-5 py-2.5 text-sm font-semibold tracking-wider uppercase rounded-sm hover:opacity-90 transition shadow-gold">
            Book Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
        <img src={heroImg} alt="Master barber giving a precision fade" width={1600} height={1200} className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.3em]">Est. Phnom Penh</span>
            </div>
            <h1 className="font-display text-6xl md:text-8xl leading-none mb-6">
              SHARP CUTS.<br/>
              <span className="text-gold italic font-serif font-light">Sharper</span> <span className="italic font-serif font-light">Confidence.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              Phnom Penh's most obsessed-over fades. Sit in our chair — walk out looking like the best version of yourself.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#book" className="bg-gold-gradient text-primary-foreground px-8 py-4 text-sm font-bold tracking-widest uppercase rounded-sm hover:opacity-90 transition shadow-gold">
                Book Your Chair
              </a>
              <a href="#services" className="border border-gold/40 text-gold px-8 py-4 text-sm font-bold tracking-widest uppercase rounded-sm hover:bg-gold/10 transition">
                See Services
              </a>
            </div>
            <div className="flex items-center gap-6 mt-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <span><span className="text-foreground font-semibold">4.3</span> · 63 Google reviews</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-muted-foreground animate-pulse">
          Scroll
        </div>
      </section>

      {/* STRIP */}
      <section className="border-y border-border py-6 bg-card overflow-hidden">
        <div className="flex gap-16 animate-[scroll_30s_linear_infinite] whitespace-nowrap font-display text-3xl tracking-widest text-muted-foreground/40">
          {[..."FADES · BEARDS · HOT TOWELS · SCISSOR WORK · LINE-UPS · STRAIGHT RAZORS · ".repeat(4)]}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-20">
            <span className="text-gold text-xs uppercase tracking-[0.3em]">— The Menu</span>
            <h2 className="font-display text-5xl md:text-7xl mt-4 mb-6">Cuts crafted with obsession.</h2>
            <p className="text-muted-foreground text-lg">Every service starts with a consultation. We study your face, your hair, your lifestyle — then build the cut around you.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {services.map((s) => (
              <div key={s.name} className="bg-background p-10 group hover:bg-card transition-colors">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="font-display text-3xl tracking-wide group-hover:text-gold transition">{s.name}</h3>
                  <span className="font-serif italic text-3xl text-gold">{s.price}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-32 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-gold text-xs uppercase tracking-[0.3em]">— The Work</span>
              <h2 className="font-display text-5xl md:text-7xl mt-4">Recent chairs.</h2>
            </div>
            <p className="text-muted-foreground max-w-sm">A glimpse of what walks out of our shop. No filters. Just clippers, scissors, and skill.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[cut1, cut2, cut3].map((src, i) => (
              <div key={i} className="relative overflow-hidden aspect-[4/5] group">
                <img src={src} alt={`Cut ${i + 1}`} loading="lazy" width={800} height={1000} className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="h-px w-8 bg-gold mb-3" />
                  <p className="font-display text-2xl tracking-wide">{["Skin Fade", "Beard Sculpt", "Textured Crop"][i]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={shopImg} alt="Fade by AJ barbershop interior" loading="lazy" width={1400} height={900} className="w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-8 -right-8 hidden md:block bg-gold-gradient text-primary-foreground p-8 max-w-xs shadow-gold">
              <p className="font-display text-5xl leading-none">63+</p>
              <p className="text-xs uppercase tracking-widest mt-2 font-semibold">Five-star reviewers can't be wrong</p>
            </div>
          </div>
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.3em]">— About</span>
            <h2 className="font-display text-5xl md:text-6xl mt-4 mb-8">More than a cut. It's a ritual.</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>Fade by AJ isn't a chop shop. It's a room where music plays, coffee's on, and every barber cares about the millimeter between good and unforgettable.</p>
              <p>We welcome everyone — locals, expats, first-timers, and the guys who've been coming for years. Language is never a barrier. Great hair is a universal language.</p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <p className="font-display text-4xl text-gold">4.3<span className="text-2xl">★</span></p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">Google Rated</p>
              </div>
              <div>
                <p className="font-display text-4xl text-gold">$8+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">From</p>
              </div>
              <div>
                <p className="font-display text-4xl text-gold">7d</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">Open Weekly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-32 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-gold text-xs uppercase tracking-[0.3em]">— The Chair Talks</span>
            <h2 className="font-display text-5xl md:text-7xl mt-4">What our clients say.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="border border-border bg-background p-8 hover:border-gold/40 transition">
                <div className="flex text-gold mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="font-serif italic text-lg leading-relaxed mb-8">"{r.text}"</p>
                <div className="pt-6 border-t border-border">
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{r.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK */}
      <section id="book" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-gradient opacity-5" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-xs uppercase tracking-[0.3em]">— Book Online</span>
            <h2 className="font-display text-5xl md:text-7xl mt-6 mb-6">Reserve <span className="italic font-serif font-light text-gold">your chair.</span></h2>
            <p className="text-muted-foreground text-lg">Fill in the details below and we'll confirm your slot straight to WhatsApp. Takes 30 seconds.</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <BookingForm />

            <div className="lg:col-span-2 space-y-4">
              <div className="border border-border p-6 hover:border-gold/40 transition bg-card">
                <MapPin className="h-6 w-6 text-gold mb-3" />
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Find Us</p>
                <p className="font-semibold">GWQ8+GJX, St 456</p>
                <p className="text-muted-foreground text-sm">Phnom Penh, Cambodia</p>
              </div>
              <div className="border border-border p-6 hover:border-gold/40 transition bg-card">
                <Phone className="h-6 w-6 text-gold mb-3" />
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Prefer to Call?</p>
                <a href="tel:+85598800895" className="font-semibold hover:text-gold text-lg">098 800 895</a>
                <p className="text-muted-foreground text-sm">Walk-ins welcome too</p>
              </div>
              <div className="border border-border p-6 hover:border-gold/40 transition bg-card">
                <Clock className="h-6 w-6 text-gold mb-3" />
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Hours</p>
                <p className="font-semibold">Open until 7:00 PM</p>
                <p className="text-muted-foreground text-sm">7 days a week</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Scissors className="h-5 w-5 text-gold" />
            <span className="font-display text-xl tracking-widest">FADE <span className="text-gold">BY AJ</span></span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Fade by AJ · Phnom Penh</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-gold transition"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-gold transition"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

const WHATSAPP_NUMBER = "85598800895"; // +855 98 800 895 (leading 0 dropped)
const SERVICE_OPTIONS = ["Signature Fade — $8", "Scissor Cut — $10", "Beard Sculpt — $6", "The Full Ritual — $18"];
const TIME_SLOTS = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];

function BookingForm() {
  const today = new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: SERVICE_OPTIONS[0],
    date: today,
    time: "10:00 AM",
    notes: "",
  });
  const [sent, setSent] = useState(false);

  const buildMessage = () => {
    const lines = [
      "*New Booking — Fade by AJ*",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Date: ${form.date}`,
      `Time: ${form.time}`,
    ];
    if (form.notes.trim()) lines.push(`Notes: ${form.notes}`);
    return encodeURIComponent(lines.join("\n"));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildMessage()}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const smsUrl = `sms:+${WHATSAPP_NUMBER}?body=${buildMessage()}`;

  const input = "w-full bg-background border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition rounded-sm";
  const label = "block text-xs uppercase tracking-widest text-muted-foreground mb-2";

  return (
    <form onSubmit={handleSubmit} className="lg:col-span-3 border border-border bg-card p-8 md:p-10 space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className={label}>Your Name</label>
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={input} placeholder="John Doe" />
        </div>
        <div>
          <label className={label}>Phone Number</label>
          <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={input} placeholder="+855 12 345 678" />
        </div>
      </div>

      <div>
        <label className={label}>Service</label>
        <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={input}>
          {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className={label}>Preferred Date</label>
          <input type="date" min={today} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={input} />
        </div>
        <div>
          <label className={label}>Preferred Time</label>
          <select value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className={input}>
            {TIME_SLOTS.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className={label}>Notes <span className="normal-case tracking-normal text-muted-foreground/60">(optional)</span></label>
        <textarea rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className={input} placeholder="Anything your barber should know — style references, allergies, etc." />
      </div>

      <div className="pt-2 space-y-3">
        <button type="submit" className="w-full bg-gold-gradient text-primary-foreground py-4 text-sm font-bold tracking-widest uppercase rounded-sm hover:opacity-90 transition shadow-gold flex items-center justify-center gap-3">
          <MessageCircle className="h-5 w-5" />
          Book via WhatsApp
        </button>
        <div className="grid grid-cols-2 gap-3">
          <a href={smsUrl} className="border border-gold/40 text-gold py-3 text-xs font-bold tracking-widest uppercase rounded-sm hover:bg-gold/10 transition flex items-center justify-center gap-2">
            <Calendar className="h-4 w-4" /> Send SMS
          </a>
          <a href="tel:+85598800895" className="border border-gold/40 text-gold py-3 text-xs font-bold tracking-widest uppercase rounded-sm hover:bg-gold/10 transition flex items-center justify-center gap-2">
            <Phone className="h-4 w-4" /> Call Instead
          </a>
        </div>
        {sent && (
          <div className="flex items-center gap-2 text-sm text-gold pt-2">
            <Check className="h-4 w-4" /> Request sent — we'll confirm your slot on WhatsApp shortly.
          </div>
        )}
        <p className="text-xs text-muted-foreground/70 text-center pt-2">Your booking opens WhatsApp with all details filled in. Just hit send.</p>
      </div>
    </form>
  );
}
