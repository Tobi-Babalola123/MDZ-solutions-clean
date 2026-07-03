import { useState, useEffect, useRef } from "react";
import { BadgeCheck } from "lucide-react";

import { RiVerifiedBadgeFill } from "react-icons/ri";
import {
  Sun,
  Battery,
  Droplets,
  Building2,
  Home,
  House,
  Leaf,
  ChevronDown,
  Star,
  Phone,
  Mail,
  MapPin,
  Check,
  ArrowRight,
  Menu,
  X,
  Shield,
  ShieldCheck,
  Award,
  Clock,
  Wrench,
  Zap,
  Globe,
  Headphones,
  BatteryCharging,
} from "lucide-react";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

// ── Hooks ─────────────────────────────────────────────────────

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useCountUp(target: number, duration = 2000, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
}

// ── Data ──────────────────────────────────────────────────────

const NAV_LINKS = [
  "Services",
  "Projects",
  "About",
  "Financing",
  "FAQ",
  "Contact",
];

const SERVICES = [
  {
    icon: Home,
    title: "Residential Solar",
    desc: "Power your home and reduce electricity bills by up to 80%. We design bespoke solar systems for every home size and budget.",
    img: "https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?w=600&h=400&fit=crop&auto=format",
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    desc: "Slash operating costs for your office, factory, or retail business with industrial-grade commercial solar installations.",
    img: "https://images.unsplash.com/photo-1671917057421-677f9cd99721?w=600&h=400&fit=crop&auto=format",
  },
  {
    icon: Battery,
    title: "Battery Storage",
    desc: "Never suffer grid outages again. Our high-capacity lithium battery systems guarantee 24/7 reliable power for your property.",
    img: "https://images.unsplash.com/flagged/photo-1566838803980-56bfa5300e8c?w=600&h=400&fit=crop&auto=format",
  },
  {
    icon: Leaf,
    title: "Agricultural Solar",
    desc: "Maximize farm productivity with solar-powered irrigation, lighting, and equipment tailored for Nigerian agriculture.",
    img: "https://images.unsplash.com/photo-1776918570518-a4304917c52c?w=600&h=400&fit=crop&auto=format",
  },
  {
    icon: Droplets,
    title: "Solar Water Pumping",
    desc: "Deliver clean, reliable water for your farm, estate, or community using our efficient solar-powered pump systems.",
    img: "https://images.unsplash.com/photo-1753881110611-00755160afd2?w=600&h=400&fit=crop&auto=format",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Protect your investment with comprehensive maintenance plans. Our certified engineers are always just a call away.",
    img: "https://images.unsplash.com/photo-1635424825057-7fb6dcd651ef?w=600&h=400&fit=crop&auto=format",
  },
];

const WHY_CHOOSE = [
  {
    icon: Award,
    title: "Certified Installers",
    desc: "Every installation is carried out by NEMSA-certified engineers with verifiable credentials and professional indemnity insurance.",
  },
  {
    icon: Shield,
    title: "Premium Equipment",
    desc: "We supply only Tier-1 solar panels and inverters from globally recognised manufacturers with proven field performance records.",
  },
  {
    icon: Clock,
    title: "Long-term Warranty",
    desc: "Enjoy up to 25-year panel performance warranties, 10-year inverter coverage, and a 2-year workmanship guarantee.",
  },
  {
    icon: Headphones,
    title: "After-Sales Support",
    desc: "Dedicated 24/7 customer support line and scheduled maintenance visits after every installation we complete.",
  },
  {
    icon: Zap,
    title: "Financing Available",
    desc: "Flexible payment plans and partnerships with leading Nigerian banks make solar accessible and affordable for everyone.",
  },
  {
    icon: Globe,
    title: "Nationwide Service",
    desc: "Operating across all 36 states with dedicated regional teams ensuring fast, prompt service delivery to your doorstep.",
  },
];

const trustItems = [
  {
    icon: Star,
    title: "Trusted by Homeowners",
    color: "text-yellow-500",
  },
  {
    icon: BadgeCheck,
    title: "Industry Best Practices",
    color: "text-green-600",
  },
  {
    icon: Zap,
    title: "Clean Energy Solutions",
    color: "text-amber-500",
  },
  {
    icon: ShieldCheck,
    title: "Quality Workmanship",
    color: "text-emerald-600",
  },
  {
    icon: House,
    title: "Residential & Commercial",
    color: "text-[#1b5e37]",
  },
];

const PROJECTS = [
  {
    title: "Lekki Residence — Lagos",
    kw: "15 kWp",
    type: "Residential",
    tall: true,
    img: "https://images.unsplash.com/photo-1655300256335-beef51a914fe?w=500&h=650&fit=crop&auto=format",
  },
  {
    title: "Agro-Processing Facility — Ogun",
    kw: "120 kWp",
    type: "Agricultural",
    tall: false,
    img: "https://images.unsplash.com/photo-1635424709870-cdc6e64f0e20?w=500&h=360&fit=crop&auto=format",
  },
  {
    title: "Commercial Complex — Abuja",
    kw: "80 kWp",
    type: "Commercial",
    tall: false,
    img: "https://images.unsplash.com/photo-1671917057421-677f9cd99721?w=500&h=380&fit=crop&auto=format",
  },
  {
    title: "Estate Development — Port Harcourt",
    kw: "200 kWp",
    type: "Residential",
    tall: true,
    img: "https://images.unsplash.com/photo-1583345237708-add35a664d77?w=500&h=580&fit=crop&auto=format",
  },
  {
    title: "Solar Irrigation Project — Kano",
    kw: "45 kWp",
    type: "Agricultural",
    tall: false,
    img: "https://images.unsplash.com/photo-1635424824800-692767998d07?w=500&h=360&fit=crop&auto=format",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Free Consultation",
    desc: "Speak with our energy experts about your power needs, budget, and goals — at absolutely no cost to you.",
  },
  {
    num: "02",
    title: "Site Survey",
    desc: "Our certified engineers assess your property, roof structure, and electrical infrastructure for optimal system design.",
  },
  {
    num: "03",
    title: "Custom Proposal",
    desc: "Receive a detailed proposal with system design, equipment specs, project timeline, and fully transparent pricing.",
  },
  {
    num: "04",
    title: "Professional Installation",
    desc: "Our NEMSA-certified team installs your system with care and precision, typically completed within 1–3 days.",
  },
  {
    num: "05",
    title: "Ongoing Support",
    desc: "Scheduled maintenance, remote system monitoring, and 24/7 customer support keep your system performing optimally.",
  },
];

const TESTIMONIALS = [
  {
    name: "Adaeze Okonkwo",
    location: "Lekki, Lagos",
    text: "MDZ Solutions transformed our home completely. We went from spending ₦80,000 monthly on diesel to virtually nothing. The installation was clean, professional, and done in two days. I recommend them to everyone.",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Emeka Eze",
    location: "Asokoro, Abuja",
    text: "Our office building had constant power problems until MDZ installed a 60 kWp system. Operations are now seamless. Their team is deeply knowledgeable and the after-sales support is genuinely exceptional.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Funmilayo Adeyemi",
    location: "Ibadan, Oyo State",
    text: "The financing plan made solar possible for us without a huge upfront cost. The system has been running perfectly for 18 months. MDZ has set the gold standard for solar installation in Nigeria.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format",
  },
];

const FAQS = [
  {
    q: "How much does a residential solar installation cost in Nigeria?",
    a: "Costs vary based on your energy needs and property size. A typical 5 kWp home system ranges from ₦4M–₦8M all-inclusive. We offer free consultations and fully itemised quotes so you know exactly what you're getting before committing.",
  },
  {
    q: "How long does the installation process take?",
    a: "Most residential installations are completed within 1–3 days. Larger commercial and industrial projects may take 1–2 weeks depending on scope, system size, and site conditions.",
  },
  {
    q: "Do you provide financing options for solar?",
    a: "Yes. We partner with leading Nigerian banks and microfinance institutions to offer flexible payment plans with low down payments and competitive interest rates, making solar accessible for all income levels.",
  },
  {
    q: "What warranty do you offer on your solar systems?",
    a: "We offer up to 25-year performance warranties on panels, 10-year warranties on inverters and battery systems, and a comprehensive 2-year installation workmanship guarantee on all our projects.",
  },
  {
    q: "Will the system work during rainy season or cloudy days?",
    a: "Yes. Modern solar panels generate power even under diffused light and overcast conditions. Paired with a battery storage system, you maintain reliable power supply throughout the year regardless of weather.",
  },
  {
    q: "Do you serve locations outside Lagos and Abuja?",
    a: "Absolutely. We operate nationwide across all 36 states and the FCT, with dedicated regional teams based in Port Harcourt, Kano, Enugu, and Ibadan ensuring prompt, local service delivery.",
  },
];

const CERTS = [
  "NEMSA Certified",
  "NAFDAC Approved",
  "SON Certified",
  "REA Partner",
  "World Bank Approved",
  "ISO 9001:2015",
];

// ── Component ─────────────────────────────────────────────────

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    type: "",
    message: "",
  });

  const { ref: statsRef, inView: statsInView } = useInView(0.3);
  const installs = useCountUp(1200, 2200, statsInView);
  const years = useCountUp(12, 1500, statsInView);
  const satisfaction = useCountUp(98, 2000, statsInView);
  const capacity = useCountUp(8500, 2500, statsInView);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="antialiased bg-white text-[#1c2332] overflow-x-hidden"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* ─── NAVIGATION ──────────────────────────────────────── */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-full bg-[#1b5e37] flex items-center justify-center shadow-md">
              <Sun className="w-5 h-5 text-[#c9971c]" />
            </div>
            <span
              className={`font-display text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? "text-[#1c2332]" : "text-white"}`}
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              MDZ <span className="text-[#c9971c]">Solutions</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-[#c9971c] ${scrolled ? "text-[#1c2332]" : "text-white/90"}`}
              >
                {link}
              </a>
            ))}
            <a
              href="#quote"
              className="bg-[#c9971c] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#b8851a] transition-colors shadow-md shadow-[#c9971c]/25"
            >
              Get Free Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-[#1c2332] hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="bg-white border-t border-gray-100 shadow-xl px-4 py-5 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-[#1c2332] font-medium py-3 px-3 rounded-lg hover:bg-[#f0f7f3] hover:text-[#1b5e37] transition-colors text-sm"
              >
                {link}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setMenuOpen(false)}
              className="mt-3 bg-[#c9971c] text-white text-center py-3.5 rounded-xl font-semibold text-sm"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0b2d18]">
        <img
          src="https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?w=1920&h=1080&fit=crop&auto=format"
          alt="Modern Nigerian home with solar panels fitted on the roof"
          className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2616]/95 via-[#0b2d18]/80 to-[#0b2d18]/50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-0 lg:pb-0 grid lg:grid-cols-5 gap-12 items-center min-h-screen">
          {/* Hero copy */}
          <div className="lg:col-span-3">
            {/* <div className="inline-flex items-center gap-2 bg-[#c9971c]/15 border border-[#c9971c]/35 text-[#c9971c] text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-7">
              <Sun className="w-3.5 h-3.5" />
              Nigeria's Premier Solar Energy Company
            </div> */}

            <h1
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[4.25rem] font-bold text-white leading-[0.95] tracking-[-0.02em]  mb-8 mt-24 max-w-4xl"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              Reliable Solar Solutions for{" "}
              <em className="not-italic text-[#c9971c]">Homes & Businesses</em>{" "}
              Across Nigeria
            </h1>

            <p className="text-white/80 text-lg sm:text-xl leading-8 mb-8 max-w-2xl">
              Cut electricity costs by up to 80%, enjoy uninterrupted power, and
              invest in a certified installation built to last. MDZ Solutions
              has powered over 1,200 properties nationwide.
            </p>

            <div className="flex flex-wrap gap-4 mb-9">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#c9971c] to-[#e1b54c] text-white px-8 py-[1.05rem] rounded-[1.2rem] font-semibold text-base shadow-[0_18px_40px_-15px_rgba(201,151,28,0.55)] hover:-translate-y-0.5 hover:shadow-[0_22px_45px_-16px_rgba(201,151,28,0.65)] transition-all duration-300 group"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 border border-white/25 bg-white/10 backdrop-blur-sm text-white px-8 py-[1.05rem] rounded-[1.2rem] font-semibold text-base hover:bg-white/15 hover:-translate-y-0.5 transition-all duration-300"
              >
                View Our Projects
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {[
                "Licensed Installers",
                "Certified Engineers",
                "Residential & Commercial",
                "Nationwide Service",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 text-xs font-medium px-3.5 py-2 rounded-full"
                >
                  <Check className="w-3 h-3 text-[#c9971c]" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Hero stat card */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[1.75rem] p-8 ml-auto max-w-[22rem] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#c9971c] flex items-center justify-center shadow-lg">
                  <Sun className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    Live Network
                  </p>
                  <p className="text-white/60 text-xs">
                    Monitored in real time
                  </p>
                </div>
              </div>

              <div
                className="text-6xl font-bold text-white mb-1"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                1,200+
              </div>
              <div className="text-[#c9971c] text-sm font-semibold mb-7 tracking-[0.2em] uppercase">
                Completed Installations
              </div>

              <div className="space-y-4">
                {(["Lagos", "Abuja", "Port Harcourt", "Kano"] as const).map(
                  (city, i) => {
                    const widths = [85, 72, 56, 41];
                    return (
                      <div key={city}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-white/65 text-xs">{city}</span>
                          <span className="text-white/50 text-xs">
                            {widths[i]}%
                          </span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-1.5">
                          <div
                            className="bg-gradient-to-r from-[#c9971c] to-[#1b5e37] h-1.5 rounded-full"
                            style={{ width: `${widths[i]}%` }}
                          />
                        </div>
                      </div>
                    );
                  },
                )}
              </div>

              <div className="mt-7 pt-5 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white/70 text-xs">
                    All systems operational
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-[10px] tracking-[0.2em] uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* ─── STATS ───────────────────────────────────────────── */}
      <section
        ref={statsRef}
        className="relative overflow-hidden border-b border-[#e7efe8] bg-gradient-to-b from-[#f8faf8] to-white py-24 sm:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`mx-auto max-w-3xl text-center transition-all duration-700 ${statsInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <span className="inline-flex items-center rounded-full border border-[#c9971c]/25 bg-[#fff8e7] px-3.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#c9971c]">
              Our Impact
            </span>
            <h2
              className="mt-5 text-3xl font-bold leading-tight text-[#1c2332] sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              Trusted by Homeowners & Businesses Across Nigeria
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              Our commitment to quality workmanship and reliable solar solutions
              has helped thousands of Nigerians reduce energy costs while
              enjoying uninterrupted power.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                value: installs,
                suffix: "+",
                label: "Completed Installations",
                description: "Across Nigeria",
                badge: "Growing every month",
                icon: House,
              },
              {
                value: years,
                suffix: "+",
                label: "Years of Experience",
                description: "Delivering trusted solar solutions",
                badge: "Proven expertise",
                icon: Award,
              },
              {
                value: satisfaction,
                suffix: "%",
                label: "Customer Satisfaction",
                description: "Verified customer reviews",
                badge: "★★★★★",
                icon: ShieldCheck,
              },
              {
                value: capacity,
                suffix: " kWp",
                label: "Solar Capacity Installed",
                description: "Clean energy delivered",
                badge: "⚡ Renewable power",
                icon: BatteryCharging,
              },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`group rounded-[1.6rem] border border-[#e7efe8] bg-white p-6 shadow-[0_20px_55px_-28px_rgba(27,94,55,0.28)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_28px_70px_-28px_rgba(27,94,55,0.32)] sm:p-7 ${statsInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f7f3] shadow-sm ring-1 ring-[#1b5e37]/10 transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#1b5e37]">
                    <Icon className="h-5 w-5 text-[#c9971c] transition-colors duration-500 group-hover:text-white" />
                  </div>
                  <div
                    className="text-4xl font-bold leading-none text-[#1b5e37] sm:text-5xl lg:text-[2.8rem]"
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                  >
                    {stat.value.toLocaleString()}
                    {stat.suffix}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#1c2332]">
                    {stat.label}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-gray-500">
                    {stat.description}
                  </p>
                  <div className="mt-6 inline-flex items-center rounded-full border border-[#e7efe8] bg-[#f8faf8] px-3 py-1.5 text-xs font-medium text-[#1b5e37]">
                    <span className="mr-2 text-[#c9971c]">✓</span>
                    {stat.badge}
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className={`mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 transition-all duration-700 ${
              statsInView
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            {trustItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group flex items-center gap-3 rounded-2xl border border-[#e7efe8] bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c9971c]/40 hover:shadow-xl"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5faf6]">
                    <Icon className={`h-6 w-6 ${item.color}`} />
                  </div>

                  <span className="text-sm font-semibold leading-snug text-[#1c2332]">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────────── */}
      <section id="services" className="py-24 bg-[#f0f7f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9971c] text-xs font-semibold tracking-[0.18em] uppercase">
              What We Offer
            </span>
            <h2
              className="font-display mt-4 mb-5 text-4xl lg:text-5xl font-bold text-[#1c2332]"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              Comprehensive Solar Services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              From single-family homes to large industrial complexes, we
              engineer solar solutions that deliver real, measurable results for
              every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-[1.75rem] overflow-hidden shadow-[0_20px_60px_-30px_rgba(27,94,55,0.3)] hover:-translate-y-2 hover:shadow-[0_28px_70px_-24px_rgba(27,94,55,0.35)] transition-all duration-500 group cursor-pointer"
              >
                <div className="relative h-56 bg-[#1b5e37]/10 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2d18]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 w-11 h-11 bg-[#1b5e37] rounded-2xl flex items-center justify-center shadow-lg">
                    <s.icon className="w-5 h-5 text-[#c9971c]" />
                  </div>
                </div>
                <div className="p-7">
                  <h3
                    className="font-semibold text-lg text-[#1c2332] mb-3"
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-7 mb-5">
                    {s.desc}
                  </p>
                  <button className="inline-flex items-center gap-1.5 text-[#1b5e37] font-semibold text-sm hover:text-[#c9971c] transition-colors group/btn">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#c9971c] text-xs font-semibold tracking-[0.18em] uppercase">
                Why MDZ
              </span>
              <h2
                className="font-display mt-4 mb-6 text-4xl lg:text-5xl font-bold text-[#1c2332] leading-tight"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                The Standard for Solar Excellence in Nigeria
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                We combine international-grade equipment with deep local
                expertise to deliver solar installations that perform reliably
                in Nigeria's unique climate and grid conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center gap-2 bg-[#1b5e37] text-white px-7 py-4 rounded-[1.1rem] font-semibold hover:bg-[#154d2e] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_14px_30px_-16px_rgba(27,94,55,0.5)]"
                >
                  Start Your Solar Journey
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 border border-[#1b5e37]/25 text-[#1b5e37] px-7 py-4 rounded-[1.1rem] font-semibold hover:bg-[#f0f7f3] hover:-translate-y-0.5 transition-all duration-300"
                >
                  View Projects
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_CHOOSE.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-[#1b5e37]/25 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#f0f7f3] group-hover:bg-[#1b5e37] flex items-center justify-center shrink-0 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-[#1b5e37] group-hover:text-[#c9971c] transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1c2332] text-sm mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ────────────────────────────────────────── */}
      <section id="projects" className="py-24 bg-[#1c2332]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9971c] text-xs font-semibold tracking-[0.18em] uppercase">
              Our Portfolio
            </span>
            <h2
              className="font-display mt-4 mb-5 text-4xl lg:text-5xl font-bold text-white"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              Featured Projects
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Real installations, measurable results. Explore a selection of
              projects delivered across Nigeria.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {PROJECTS.map((p) => (
              <div
                key={p.title}
                className="break-inside-avoid mb-6 group relative overflow-hidden rounded-[1.5rem] cursor-pointer shadow-[0_20px_60px_-30px_rgba(0,0,0,0.45)]"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className={`w-full object-cover transition-all duration-700 group-hover:scale-110 ${p.tall ? "h-[460px]" : "h-[300px]"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2616]/90 via-[#0a2616]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
                <div className="absolute bottom-0 inset-x-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-350">
                  <span className="text-[#c9971c] text-xs font-semibold tracking-wider uppercase block mb-1">
                    {p.type}
                  </span>
                  <h3
                    className="text-white font-semibold text-base leading-snug"
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-white/65 text-sm mt-0.5">{p.kw} System</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border border-white/25 text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/8 transition-colors">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ────────────────────────────────────── */}
      <section className="py-24 bg-[#f0f7f3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9971c] text-xs font-semibold tracking-[0.18em] uppercase">
              Our Process
            </span>
            <h2
              className="font-display mt-4 mb-5 text-4xl lg:text-5xl font-bold text-[#1c2332]"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              How It Works
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From first conversation to a fully operational solar system — our
              proven 5-step process.
            </p>
          </div>

          <div className="relative">
            {/* Centre line — desktop only */}
            <div className="hidden lg:block absolute left-1/2 top-7 bottom-7 w-px bg-[#1b5e37]/15 -translate-x-px" />

            <div className="space-y-10">
              {STEPS.map((step, i) => (
                <div
                  key={step.num}
                  className={`flex items-center gap-6 lg:gap-10 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div
                    className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#1b5e37]/8 hover:shadow-md hover:border-[#1b5e37]/20 transition-all duration-300">
                      <h3
                        className="font-semibold text-[#1c2332] mb-2"
                        style={{
                          fontFamily: "'DM Serif Display', Georgia, serif",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10 shrink-0 w-14 h-14 rounded-full bg-[#1b5e37] border-4 border-[#f0f7f3] flex items-center justify-center shadow-lg">
                    <span
                      className="font-bold text-[#c9971c] text-sm"
                      style={{
                        fontFamily: "'DM Serif Display', Georgia, serif",
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9971c] text-xs font-semibold tracking-[0.18em] uppercase">
              Customer Stories
            </span>
            <h2
              className="font-display mt-4 mb-5 text-4xl lg:text-5xl font-bold text-[#1c2332]"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              Trusted by Thousands of Nigerians
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-[#f0f7f3] rounded-[1.75rem] p-8 sm:p-9 border border-[#1b5e37]/10 hover:-translate-y-1 hover:shadow-[0_24px_70px_-28px_rgba(27,94,55,0.35)] transition-all duration-300 flex flex-col"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#c9971c] text-[#c9971c]"
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-8 text-[0.95rem] italic flex-1 mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-[#1b5e37]/8">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#c9971c]"
                  />
                  <div>
                    <div className="font-semibold text-[#1c2332] text-sm">
                      {t.name}
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 text-xs mt-0.5">
                      <MapPin className="w-3 h-3" />
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ──────────────────────────────────── */}
      <section className="py-16 bg-[#1c2332]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#c9971c] text-xs font-semibold tracking-[0.18em] uppercase">
              Credentials & Partners
            </span>
            <h2
              className="font-display mt-3 text-2xl font-bold text-white"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              Certified, Accredited & Partnered
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-14">
            {CERTS.map((cert) => (
              <div
                key={cert}
                className="flex flex-col items-center gap-2.5 group"
              >
                <div className="w-16 h-16 rounded-full border-2 border-[#c9971c]/30 group-hover:border-[#c9971c] flex items-center justify-center transition-colors duration-300">
                  <Award className="w-7 h-7 text-[#c9971c]" />
                </div>
                <span className="text-white/60 text-xs text-center font-medium leading-tight max-w-[80px]">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────── */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9971c] text-xs font-semibold tracking-[0.18em] uppercase">
              Got Questions?
            </span>
            <h2
              className="font-display mt-4 mb-4 text-4xl font-bold text-[#1c2332]"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Everything you need to know before making the switch to solar
              power.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`rounded-[1.4rem] border transition-all duration-300 overflow-hidden ${isOpen ? "border-[#1b5e37]/30 shadow-[0_16px_45px_-25px_rgba(27,94,55,0.28)]" : "border-gray-100 hover:border-[#1b5e37]/15"}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-7 py-6 text-left hover:bg-[#f9fcfa] transition-colors duration-300"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-[#1c2332] text-base leading-7">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-[#1b5e37] rotate-180" : "bg-[#f0f7f3]"}`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 ${isOpen ? "text-white" : "text-[#1b5e37]"}`}
                      />
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-80" : "max-h-0"}`}
                  >
                    <p className="px-7 pb-6 text-gray-500 text-sm leading-7 border-t border-gray-50 pt-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── QUOTE FORM ──────────────────────────────────────── */}
      <section id="quote" className="py-24 bg-[#1b5e37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left copy */}
            <div>
              <span className="text-[#c9971c] text-xs font-semibold tracking-[0.18em] uppercase">
                Free Consultation
              </span>
              <h2
                className="font-display mt-4 mb-6 text-4xl lg:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                Get Your Free Solar Quote Today
              </h2>
              <p className="text-white/75 text-lg leading-relaxed mb-9">
                Fill in the form and one of our certified energy consultants
                will contact you within 24 hours — no obligation, completely
                free.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  {
                    icon: Phone,
                    label: "Call Us",
                    value: "+234 800 MDZ SOLAR",
                  },
                  {
                    icon: Mail,
                    label: "Email Us",
                    value: "info@mdzsolutions.com.ng",
                  },
                  {
                    icon: MapPin,
                    label: "Head Office",
                    value: "Plot 14, Ikorodu Road, Lagos, Nigeria",
                  },
                ].map((item) => (
                  <div key={item.value} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-[#c9971c]" />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs mb-0.5 uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="text-white/90 text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  "NEMSA Certified",
                  "Licensed Nationwide",
                  "25-Year Warranty",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 border border-white/20 text-white/70 text-xs px-3.5 py-1.5 rounded-full"
                  >
                    <Check className="w-3 h-3 text-[#c9971c]" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Right form */}
            <div className="bg-white rounded-[1.75rem] p-8 sm:p-10 shadow-[0_30px_90px_-35px_rgba(0,0,0,0.35)]">
              {submitted ? (
                <div className="text-center py-14">
                  <div className="w-16 h-16 bg-[#f0f7f3] rounded-full flex items-center justify-center mx-auto mb-5">
                    <Check className="w-8 h-8 text-[#1b5e37]" />
                  </div>
                  <h3
                    className="font-bold text-2xl text-[#1c2332] mb-3"
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                  >
                    Thank You!
                  </h3>
                  <p className="text-gray-500 max-w-xs mx-auto text-sm leading-relaxed">
                    We've received your request and one of our consultants will
                    reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3
                    className="font-bold text-2xl text-[#1c2332] mb-6"
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                  >
                    Request a Free Quote
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Adebayo"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1b5e37] focus:ring-2 focus:ring-[#1b5e37]/10 transition-all bg-gray-50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+234 800 000 0000"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1b5e37] focus:ring-2 focus:ring-[#1b5e37]/10 transition-all bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1b5e37] focus:ring-2 focus:ring-[#1b5e37]/10 transition-all bg-gray-50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
                      Location / State *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lekki, Lagos"
                      value={form.location}
                      onChange={(e) =>
                        setForm({ ...form, location: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1b5e37] focus:ring-2 focus:ring-[#1b5e37]/10 transition-all bg-gray-50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
                      Installation Type *
                    </label>
                    <select
                      required
                      value={form.type}
                      onChange={(e) =>
                        setForm({ ...form, type: e.target.value })
                      }
                      className="w-full h-12 px-4 rounded-[1rem] border border-gray-200 text-sm focus:outline-none focus:border-[#1b5e37] focus:ring-2 focus:ring-[#1b5e37]/10 transition-all bg-gray-50 focus:bg-white text-gray-700"
                    >
                      <option value="">Select installation type</option>
                      <option value="residential">Residential Solar</option>
                      <option value="commercial">Commercial Solar</option>
                      <option value="battery">Battery Storage</option>
                      <option value="agricultural">Agricultural Solar</option>
                      <option value="water-pump">Solar Water Pumping</option>
                      <option value="maintenance">Maintenance & Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
                      Additional Information
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your current power challenges and energy needs..."
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-[1rem] border border-gray-200 text-sm focus:outline-none focus:border-[#1b5e37] focus:ring-2 focus:ring-[#1b5e37]/10 transition-all bg-gray-50 focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#c9971c] to-[#e1b54c] text-white py-[1.05rem] rounded-[1.15rem] font-semibold hover:-translate-y-0.5 transition-all duration-300 shadow-[0_18px_40px_-15px_rgba(201,151,28,0.55)] flex items-center justify-center gap-2 group"
                  >
                    Get My Free Solar Quote
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-gray-400 text-xs pt-1">
                    We respond within 24 hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────── */}
      <footer id="contact" className="bg-[#0d1821] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-full bg-[#1b5e37] flex items-center justify-center">
                  <Sun className="w-5 h-5 text-[#c9971c]" />
                </div>
                <span
                  className="text-xl font-bold"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                >
                  MDZ <span className="text-[#c9971c]">Solutions</span>
                </span>
              </div>
              <p className="text-white/60 text-sm leading-7 mb-6">
                Nigeria's leading solar energy company — powering homes,
                businesses, and communities across the nation since 2012.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: FaFacebookF, href: "#" },
                  { icon: FaXTwitter, href: "#" },
                  { icon: FaInstagram, href: "#" },
                  { icon: FaLinkedinIn, href: "#" },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    aria-label="Social media"
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9971c] hover:bg-[#c9971c]"
                  >
                    <Icon className="text-base text-white/80 transition-colors duration-300 group-hover:text-[#0d1821]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-[#c9971c] text-xs font-semibold tracking-widest uppercase mb-5">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  "Services",
                  "Projects",
                  "About Us",
                  "Financing",
                  "FAQ",
                  "Get a Quote",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/50 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[#c9971c] text-xs font-semibold tracking-widest uppercase mb-5">
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  "Residential Solar",
                  "Commercial Solar",
                  "Battery Storage",
                  "Agricultural Solar",
                  "Solar Water Pumping",
                  "Maintenance",
                ].map((s) => (
                  <li key={s}>
                    <a
                      href="#"
                      className="text-white/50 text-sm hover:text-white transition-colors"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[#c9971c] text-xs font-semibold tracking-widest uppercase mb-5">
                Contact Us
              </h4>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 text-white/50 text-sm">
                  <MapPin className="w-4 h-4 text-[#c9971c] mt-0.5 shrink-0" />
                  <span>
                    Plot 14, Ikorodu Road,
                    <br />
                    Lagos, Nigeria
                  </span>
                </div>
                <div className="flex items-center gap-3 text-white/50 text-sm">
                  <Phone className="w-4 h-4 text-[#c9971c] shrink-0" />
                  <span>+234 800 MDZ SOLAR</span>
                </div>
                <div className="flex items-center gap-3 text-white/50 text-sm">
                  <Mail className="w-4 h-4 text-[#c9971c] shrink-0" />
                  <span>info@mdzsolutions.com.ng</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["NEMSA", "SON", "REA"].map((cert) => (
                  <span
                    key={cert}
                    className="border border-[#c9971c]/30 text-[#c9971c] text-xs px-2.5 py-1 rounded-full"
                  >
                    {cert} Certified
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs">
              © 2024 MDZ Solutions Ltd. All rights reserved. RC: 1234567
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white/30 text-xs hover:text-white/60 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/30 text-xs hover:text-white/60 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/30 text-xs hover:text-white/60 transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
