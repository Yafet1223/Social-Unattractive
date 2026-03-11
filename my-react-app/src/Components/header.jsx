import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];



const STATS = [
  { value: "2.7h", label: "avg daily scroll time" },
  { value: "86%", label: "feel worse after scrolling" },
  { value: "4x", label: "more productive with unscroll" },
];

const FEATURES = [
  { icon: "⏱", title: "Screen Time Enforcer", desc: "Hard limits that actually stick. Real blocks that respect your own rules.", tag: "CONTROL" },
  { icon: "🧠", title: "Dopamine Detox Mode", desc: "Grayscale feeds, hidden likes, stripped notifications. Make apps boring on purpose.", tag: "DETOX" },
  { icon: "📊", title: "Addiction Analytics", desc: "See your patterns exposed. Which app steals the most, which hour is your weakest.", tag: "INSIGHT" },
  { icon: "🔒", title: "Focus Lock", desc: "Schedule deep work windows. All social apps become inaccessible. No exceptions.", tag: "FOCUS" },
  { icon: "🌙", title: "Sleep Guard", desc: "Auto-disable everything 90 min before bed. Protect your sleep from the algorithm.", tag: "HEALTH" },
  { icon: "🎯", title: "Intention Check", desc: "Before opening any app, state why. A 3-second pause that changes everything.", tag: "MINDFUL" },
];

const STEPS = [
  { num: "01", title: "Download the app", desc: "Available on iOS and Android. Setup takes under 2 minutes." },
  { num: "02", title: "Get your addiction score", desc: "Our AI maps your usage patterns and calculates exactly how hooked you are." },
  { num: "03", title: "Set hard limits", desc: "You decide the rules. We enforce them. Even when you try to override at 2am." },
  { num: "04", title: "Reclaim your time", desc: "Watch the hours come back. Use them for something that actually matters." },
];

const TESTIMONIALS = [
  { name: "Sarah K.", role: "Product Designer", avatar: "SK", text: "I was spending 4 hours a day on TikTok. After 2 weeks with unscroll I'm down to 30 minutes. The intention check alone changed everything.", stars: 5 },
  { name: "Marcus T.", role: "Software Engineer", avatar: "MT", text: "The Focus Lock feature is insane. I've shipped more code in the last month than the previous 3 combined. This app is genuinely life changing.", stars: 5 },
  { name: "Priya M.", role: "Student", avatar: "PM", text: "My GPA went from 2.8 to 3.6 in one semester. I didn't change my study habits — I just stopped doomscrolling at midnight.", stars: 5 },
];

const PRICING = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["Basic screen time tracking", "1 app limit", "Weekly report", "Intention Check"],
    cta: "Download Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$7",
    period: "per month",
    features: ["Unlimited app limits", "AI addiction analytics", "Focus Lock & Sleep Guard", "Dopamine Detox Mode", "Daily coaching", "Priority support"],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Annual",
    price: "$49",
    period: "per year",
    features: ["Everything in Pro", "Save 42%", "Family sharing (5 members)", "Advanced AI insights", "Custom detox programs"],
    cta: "Best Value",
    highlight: false,
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 5%",
      background: scrolled ? "rgba(5,5,5,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      transition: "all 0.4s ease",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: 72,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 34, height: 34, background: "linear-gradient(135deg, #ff3b3b, #ff8c00)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 900 }}>✕</div>
        <span style={{ fontFamily: "'Courier New', monospace", fontWeight: 700, fontSize: 17, color: "#fff", letterSpacing: "-0.5px" }}>unscroll</span>
      </div>
      <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
        {NAV_LINKS.map((l) => (
          <a key={l.label} href={l.href} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 13, fontFamily: "'Courier New', monospace", letterSpacing: "0.08em", textTransform: "uppercase", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "#fff"}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.5)"}
          >{l.label}</a>
        ))}
        <a href="#" style={{
          color: "#fff", textDecoration: "none", fontSize: 13,
          fontFamily: "'Courier New', monospace", letterSpacing: "0.08em", textTransform: "uppercase",
          padding: "8px 20px", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 6,
          background: "linear-gradient(135deg, #ff3b3b, #ff6b00)",
          transition: "all 0.2s",
        }}>Download</a>
      </div>
    </nav>
  );
}

// Phone mockup component
function PhoneMockup() {
  return (
    <div style={{ position: "relative", width: 260, height: 520, flexShrink: 0 }}>
      {/* Phone shell */}
      <div style={{
        width: "100%", height: "100%",
        background: "linear-gradient(145deg, #1a1a1a, #0a0a0a)",
        borderRadius: 44,
        border: "2px solid rgba(255,255,255,0.12)",
        boxShadow: "0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
        overflow: "hidden",
        position: "relative",
        display: "flex", flexDirection: "column",
      }}>
        {/* Notch */}
        <div style={{ width: 90, height: 26, background: "#0a0a0a", borderRadius: "0 0 18px 18px", margin: "0 auto", zIndex: 10, flexShrink: 0 }} />

        {/* Screen content */}
        <div style={{ flex: 1, padding: "12px 16px", overflow: "hidden", display: "flex", flexDirection: "column", gap: 10 }}>
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "'Courier New', monospace", fontSize: 11, color: "#ff3b3b", fontWeight: 700 }}>unscroll</span>
            <span style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", fontFamily: "'Courier New', monospace" }}>MON 9:41</span>
          </div>

          {/* Score card */}
          <div style={{ background: "linear-gradient(135deg, rgba(255,59,59,0.15), rgba(255,140,0,0.1))", border: "1px solid rgba(255,59,59,0.2)", borderRadius: 14, padding: "14px 12px", textAlign: "center" }}>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", fontFamily: "'Courier New', monospace", letterSpacing: "0.1em", marginBottom: 4 }}>ADDICTION SCORE</div>
            <div style={{ fontSize: 36, fontFamily: "'Georgia', serif", fontWeight: 900, color: "#ff3b3b", lineHeight: 1 }}>74</div>
            <div style={{ fontSize: 8, color: "rgba(255,255,255,0.3)", fontFamily: "'Courier New', monospace", marginTop: 4 }}>HIGH RISK — DAY 3 OF DETOX</div>
          </div>

          {/* Today's usage */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "10px 12px" }}>
            <div style={{ fontSize: 8, color: "rgba(255,255,255,0.3)", fontFamily: "'Courier New', monospace", marginBottom: 8, letterSpacing: "0.1em" }}>TODAY'S USAGE</div>
            {[
              { app: "TikTok", time: "1h 20m", pct: 75, color: "#ff3b3b" },
              { app: "Instagram", time: "45m", pct: 45, color: "#ff8c00" },
              { app: "Twitter", time: "20m", pct: 20, color: "#ffcc00" },
            ].map((a, i) => (
              <div key={i} style={{ marginBottom: 6 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                  <span style={{ fontSize: 9, color: "#fff", fontFamily: "'Courier New', monospace" }}>{a.app}</span>
                  <span style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", fontFamily: "'Courier New', monospace" }}>{a.time}</span>
                </div>
                <div style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2 }}>
                  <div style={{ height: "100%", width: `${a.pct}%`, background: a.color, borderRadius: 2, transition: "width 1s ease" }} />
                </div>
              </div>
            ))}
          </div>

          {/* Focus mode button */}
          <div style={{ background: "linear-gradient(135deg, #ff3b3b, #ff6b00)", borderRadius: 12, padding: "10px", textAlign: "center", cursor: "pointer" }}>
            <div style={{ fontSize: 9, color: "#fff", fontFamily: "'Courier New', monospace", fontWeight: 700, letterSpacing: "0.1em" }}>🔒 ACTIVATE FOCUS LOCK</div>
            <div style={{ fontSize: 8, color: "rgba(255,255,255,0.7)", fontFamily: "'Courier New', monospace", marginTop: 2 }}>Block all apps for 2 hours</div>
          </div>

          {/* Streak */}
          <div style={{ display: "flex", justifyContent: "space-between", gap: 4 }}>
            {["M","T","W","T","F","S","S"].map((d, i) => (
              <div key={i} style={{ flex: 1, textAlign: "center" }}>
                <div style={{ width: "100%", aspectRatio: "1", background: i < 4 ? "linear-gradient(135deg, #ff3b3b, #ff6b00)" : "rgba(255,255,255,0.05)", borderRadius: 6, marginBottom: 3 }} />
                <span style={{ fontSize: 7, color: "rgba(255,255,255,0.3)", fontFamily: "'Courier New', monospace" }}>{d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Home indicator */}
        <div style={{ width: 80, height: 4, background: "rgba(255,255,255,0.15)", borderRadius: 2, margin: "8px auto 12px" }} />
      </div>

      {/* Glow under phone */}
      <div style={{ position: "absolute", bottom: -40, left: "50%", transform: "translateX(-50%)", width: 180, height: 60, background: "radial-gradient(ellipse, rgba(255,59,59,0.2), transparent)", filter: "blur(20px)", pointerEvents: "none" }} />
    </div>
  );
}

function AppStoreButtons() {
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      {/* App Store */}
      <button style={{
        display: "flex", alignItems: "center", gap: 10,
        background: "#fff", color: "#000",
        border: "none", borderRadius: 12,
        padding: "12px 20px", cursor: "pointer",
        transition: "all 0.2s",
      }}
        onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
        onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
      >
        <span style={{ fontSize: 24 }}>🍎</span>
        <div style={{ textAlign: "left" }}>
          <div style={{ fontSize: 9, fontFamily: "'Courier New', monospace", letterSpacing: "0.05em" }}>DOWNLOAD ON THE</div>
          <div style={{ fontSize: 15, fontFamily: "'Georgia', serif", fontWeight: 700, lineHeight: 1.1 }}>App Store</div>
        </div>
      </button>

      {/* Google Play */}
      <button style={{
        display: "flex", alignItems: "center", gap: 10,
        background: "#fff", color: "#000",
        border: "none", borderRadius: 12,
        padding: "12px 20px", cursor: "pointer",
        transition: "all 0.2s",
      }}
        onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
        onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
      >
        <span style={{ fontSize: 24 }}>▶</span>
        <div style={{ textAlign: "left" }}>
          <div style={{ fontSize: 9, fontFamily: "'Courier New', monospace", letterSpacing: "0.05em" }}>GET IT ON</div>
          <div style={{ fontSize: 15, fontFamily: "'Georgia', serif", fontWeight: 700, lineHeight: 1.1 }}>Google Play</div>
        </div>
      </button>
    </div>
  );
}

function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <section style={{
      minHeight: "100vh",
      background: "#050505",
      display: "flex", alignItems: "center",
      padding: "120px 5% 80px",
      position: "relative", overflow: "hidden",
      gap: 60,
      justifyContent: "center",
      flexWrap: "wrap",
    }}>
      {/* Glow */}
      <div style={{ position: "absolute", top: "40%", left: "30%", transform: "translate(-50%,-50%)", width: 600, height: 600, background: "radial-gradient(circle, rgba(255,50,50,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Left: Text */}
      <div style={{ maxWidth: 560, flex: "1 1 300px" }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(255,59,59,0.1)", border: "1px solid rgba(255,59,59,0.25)",
          borderRadius: 100, padding: "6px 16px", marginBottom: 32,
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s cubic-bezier(0.22,1,0.36,1)",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff3b3b", display: "inline-block" }} />
          <span style={{ fontFamily: "'Courier New', monospace", fontSize: 11, color: "#ff6b6b", letterSpacing: "0.1em", textTransform: "uppercase" }}>Now on iOS & Android</span>
        </div>

        <h1 style={{ fontSize: "clamp(40px, 6vw, 80px)", fontFamily: "'Georgia', serif", fontWeight: 900, lineHeight: 1.0, color: "#fff", margin: "0 0 8px", letterSpacing: "-2.5px", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(30px)", transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s" }}>
          Stop the
        </h1>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 80px)", fontFamily: "'Georgia', serif", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-2.5px", margin: "0 0 28px", background: "linear-gradient(90deg, #ff3b3b 0%, #ff8c00 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(30px)", transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s" }}>
          Endless Scroll.
        </h1>

        <p style={{ fontSize: "clamp(15px, 1.8vw, 18px)", color: "rgba(255,255,255,0.45)", maxWidth: 460, lineHeight: 1.7, margin: "0 0 40px", fontFamily: "'Georgia', serif", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s" }}>
          The AI-powered mobile app that breaks your social media addiction and gives you back control of your time. For good.
        </p>

        {/* App store buttons */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.4s", marginBottom: 32 }}>
          <AppStoreButtons />
        </div>

        {/* Social proof */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, opacity: visible ? 1 : 0, transition: "opacity 1s ease 0.6s" }}>
          <div style={{ display: "flex" }}>
            {["SK","MT","PM","JL","AR"].map((a, i) => (
              <div key={i} style={{ width: 28, height: 28, borderRadius: "50%", background: `hsl(${i * 40 + 10}, 70%, 40%)`, border: "2px solid #050505", marginLeft: i > 0 ? -8 : 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#fff", fontFamily: "'Courier New', monospace", fontWeight: 700 }}>{a}</div>
            ))}
          </div>
          <div>
            <div style={{ display: "flex", gap: 2, marginBottom: 2 }}>{"★★★★★".split("").map((s, i) => <span key={i} style={{ color: "#ff8c00", fontSize: 11 }}>{s}</span>)}</div>
            <span style={{ fontFamily: "'Courier New', monospace", fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: "0.05em" }}>50,000+ people reclaimed their time</span>
          </div>
        </div>
      </div>

      {/* Right: Phone mockup */}
      <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: "all 1s cubic-bezier(0.22,1,0.36,1) 0.3s", flexShrink: 0 }}>
        <PhoneMockup />
      </div>
    </section>
  );
}

function Stats() {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", display: "flex" }}>
        {STATS.map((s, i) => (
          <div key={i} style={{ flex: 1, padding: "40px 0", borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: inView ? 1 : 0, transition: `opacity 0.7s ease ${i * 0.15}s` }}>
            <span style={{ fontSize: 36, fontFamily: "'Georgia', serif", fontWeight: 900, color: "#fff", letterSpacing: "-1px" }}>{s.value}</span>
            <span style={{ fontSize: 10, fontFamily: "'Courier New', monospace", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center", padding: "0 10px" }}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Features() {
  const [ref, inView] = useInView();
  return (
    <section id="features"ref={ref} style={{ background: "#050505", padding: "120px 5%" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
          <div style={{ width: 40, height: 1, background: "#ff3b3b" }} />
          <span style={{ fontFamily: "'Courier New', monospace", fontSize: 11, color: "#ff3b3b", letterSpacing: "0.15em", textTransform: "uppercase" }}>Features</span>
        </div>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "#fff", letterSpacing: "-2px", margin: "0 0 64px", lineHeight: 1.1, opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(30px)", transition: "all 0.7s ease", maxWidth: 600 }}>
          Built to fight the algorithm.<br />Not work with it.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 2 }}>
          {FEATURES.map((f, i) => (
            <FeatureCard key={i} feature={f} delay={i * 0.07} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, delay, inView }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ background: hovered ? "rgba(255,59,59,0.04)" : "rgba(255,255,255,0.02)", border: hovered ? "1px solid rgba(255,59,59,0.2)" : "1px solid rgba(255,255,255,0.05)", borderRadius: 4, padding: "36px 32px", transition: "all 0.3s ease", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(30px)", transitionDelay: `${delay}s` }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
        <span style={{ fontSize: 28 }}>{feature.icon}</span>
        <span style={{ fontFamily: "'Courier New', monospace", fontSize: 9, letterSpacing: "0.15em", color: "#ff3b3b", background: "rgba(255,59,59,0.1)", padding: "4px 10px", borderRadius: 100, border: "1px solid rgba(255,59,59,0.2)" }}>{feature.tag}</span>
      </div>
      <h3 style={{ fontFamily: "'Georgia', serif", fontSize: 20, fontWeight: 700, color: "#fff", margin: "0 0 12px", letterSpacing: "-0.5px" }}>{feature.title}</h3>
      <p style={{ fontFamily: "'Georgia', serif", fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0 }}>{feature.desc}</p>
    </div>
  );
}

function HowItWorks() {
  const [ref, inView] = useInView();
  return (
    <section id="how-it-works"ref={ref} style={{ background: "#080808", padding: "120px 5%", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
          <div style={{ width: 40, height: 1, background: "#ff3b3b" }} />
          <span style={{ fontFamily: "'Courier New', monospace", fontSize: 11, color: "#ff3b3b", letterSpacing: "0.15em", textTransform: "uppercase" }}>How It Works</span>
        </div>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "#fff", letterSpacing: "-2px", margin: "0 0 80px", lineHeight: 1.1, opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: "all 0.7s ease" }}>Four steps to freedom.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 48 }}>
          {STEPS.map((s, i) => (
            <div key={i} style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(30px)", transition: `all 0.7s ease ${i * 0.12}s` }}>
              <div style={{ fontFamily: "'Courier New', monospace", fontSize: 64, fontWeight: 900, color: "rgba(255,255,255,0.05)", lineHeight: 1, marginBottom: 16, letterSpacing: "-2px" }}>{s.num}</div>
              <div style={{ width: 32, height: 2, background: "linear-gradient(90deg, #ff3b3b, transparent)", marginBottom: 20 }} />
              <h3 style={{ fontFamily: "'Georgia', serif", fontSize: 20, fontWeight: 700, color: "#fff", margin: "0 0 12px" }}>{s.title}</h3>
              <p style={{ fontFamily: "'Georgia', serif", fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ background: "#050505", padding: "120px 5%" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
          <div style={{ width: 40, height: 1, background: "#ff3b3b" }} />
          <span style={{ fontFamily: "'Courier New', monospace", fontSize: 11, color: "#ff3b3b", letterSpacing: "0.15em", textTransform: "uppercase" }}>Reviews</span>
        </div>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "#fff", letterSpacing: "-2px", margin: "0 0 64px", lineHeight: 1.1, opacity: inView ? 1 : 0, transition: "all 0.7s ease" }}>
          Real people. Real results.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 2 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 4, padding: "36px 32px", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(30px)", transition: `all 0.7s ease ${i * 0.1}s` }}>
              <div style={{ display: "flex", gap: 2, marginBottom: 20 }}>
                {"★★★★★".split("").map((s, j) => <span key={j} style={{ color: "#ff8c00", fontSize: 14 }}>{s}</span>)}
              </div>
              <p style={{ fontFamily: "'Georgia', serif", fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: "0 0 24px", fontStyle: "italic" }}>"{t.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #ff3b3b, #ff8c00)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#fff", fontFamily: "'Courier New', monospace" }}>{t.avatar}</div>
                <div>
                  <div style={{ fontFamily: "'Courier New', monospace", fontSize: 12, color: "#fff", fontWeight: 700 }}>{t.name}</div>
                  <div style={{ fontFamily: "'Courier New', monospace", fontSize: 10, color: "rgba(255,255,255,0.3)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [ref, inView] = useInView();
  return (
    <section id="pricing"ref={ref} style={{ background: "#080808", padding: "120px 5%", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
          <div style={{ width: 40, height: 1, background: "#ff3b3b" }} />
          <span style={{ fontFamily: "'Courier New', monospace", fontSize: 11, color: "#ff3b3b", letterSpacing: "0.15em", textTransform: "uppercase" }}>Pricing</span>
        </div>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "#fff", letterSpacing: "-2px", margin: "0 0 64px", lineHeight: 1.1, opacity: inView ? 1 : 0, transition: "all 0.7s ease" }}>
          Start free. Go deeper when ready.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 2 }}>
          {PRICING.map((p, i) => (
            <div key={i} style={{
              background: p.highlight ? "rgba(255,59,59,0.06)" : "rgba(255,255,255,0.02)",
              border: p.highlight ? "1px solid rgba(255,59,59,0.3)" : "1px solid rgba(255,255,255,0.06)",
              borderRadius: 4, padding: "40px 32px",
              position: "relative",
              opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(30px)",
              transition: `all 0.7s ease ${i * 0.1}s`,
            }}>
              {p.highlight && <div style={{ position: "absolute", top: -1, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(90deg, #ff3b3b, #ff8c00)", padding: "4px 16px", borderRadius: "0 0 8px 8px", fontFamily: "'Courier New', monospace", fontSize: 9, color: "#fff", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>MOST POPULAR</div>}
              <div style={{ fontFamily: "'Courier New', monospace", fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>{p.name}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 6 }}>
                <span style={{ fontFamily: "'Georgia', serif", fontSize: 48, fontWeight: 900, color: "#fff", letterSpacing: "-2px", lineHeight: 1 }}>{p.price}</span>
              </div>
              <div style={{ fontFamily: "'Courier New', monospace", fontSize: 11, color: "rgba(255,255,255,0.3)", marginBottom: 32 }}>{p.period}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {p.features.map((f, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: "#ff3b3b", fontSize: 12 }}>✓</span>
                    <span style={{ fontFamily: "'Georgia', serif", fontSize: 14, color: "rgba(255,255,255,0.55)" }}>{f}</span>
                  </div>
                ))}
              </div>
              <button style={{
                width: "100%", padding: "14px",
                background: p.highlight ? "linear-gradient(135deg, #ff3b3b, #ff6b00)" : "rgba(255,255,255,0.06)",
                color: "#fff", border: p.highlight ? "none" : "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8, fontFamily: "'Courier New', monospace", fontSize: 13,
                fontWeight: 700, letterSpacing: "0.05em", cursor: "pointer",
                transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.target.style.opacity = "0.85"; }}
                onMouseLeave={e => { e.target.style.opacity = "1"; }}
              >{p.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ background: "#050505", padding: "140px 5%", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, background: "radial-gradient(circle, rgba(255,59,59,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
        <p style={{ fontFamily: "'Courier New', monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#ff3b3b", marginBottom: 24, opacity: inView ? 1 : 0, transition: "opacity 0.7s ease" }}>The algorithm never sleeps. But you should.</p>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 900, color: "#fff", letterSpacing: "-2.5px", lineHeight: 1.05, margin: "0 0 48px", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(30px)", transition: "all 0.7s ease 0.1s" }}>
          Your time is<br />
          <span style={{ background: "linear-gradient(90deg, #ff3b3b, #ff8c00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>worth fighting for.</span>
        </h2>
        <div style={{ opacity: inView ? 1 : 0, transition: "opacity 0.7s ease 0.2s", display: "flex", justifyContent: "center" }}>
          <AppStoreButtons />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "40px 5%", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 28, height: 28, background: "linear-gradient(135deg, #ff3b3b, #ff8c00)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 900 }}>✕</div>
        <span style={{ fontFamily: "'Courier New', monospace", fontWeight: 700, fontSize: 15, color: "#fff" }}>unscroll</span>
      </div>
      <p style={{ fontFamily: "'Courier New', monospace", fontSize: 11, color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em" }}>© 2026 UNSCROLL — TAKE BACK YOUR TIME</p>
      <div style={{ display: "flex", gap: 24 }}>
        {["Privacy", "Terms", "Contact"].map(l => (
          <a key={l} href="#" style={{ fontFamily: "'Courier New', monospace", fontSize: 11, color: "rgba(255,255,255,0.3)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}>{l}</a>
        ))}
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ background: "#050505", minHeight: "100vh" }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #050505; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #ff3b3b44; border-radius: 2px; }
      `}</style>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
