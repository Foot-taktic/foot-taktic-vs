"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const targetDate = new Date("2026-06-11T00:00:00").getTime();
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // لمنع مشاكل الـ Hydration في Next.js ولتحديث العداد
  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // مصفوفة المقالات مع صور مخصصة لكل مقال لتفادي التكرار
  const articles = [
    { title: "World Cup 2026 Guide", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600" },
    { title: "USA Tactical Breakdown", img: "https://images.unsplash.com/photo-1551958219-acbc608c6d3c?q=80&w=600" },
    { title: "Canada Rising Stars", img: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=600" },
    { title: "Mexico Strategy Review", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600" },
    { title: "Transfer Market Trends", img: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=600" },
    { title: "Champions League Update", img: "https://images.unsplash.com/photo-1624880351068-803664c39158?q=80&w=600" },
  ];

  const boxStyle = {
    background: "rgba(18, 21, 27, 0.6)",
    padding: "20px 24px",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    minWidth: "120px",
    textAlign: "center",
    backdropFilter: "blur(12px)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.4)",
  };

  return (
    <div
      style={{
        background: "#0a0c10",
        color: "#ffffff",
        minHeight: "100vh",
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          background: "#d8ff1a",
          color: "#000",
          textAlign: "center",
          padding: "8px",
          fontWeight: "800",
          fontSize: "12px",
          letterSpacing: "4px",
          textTransform: "uppercase",
        }}
      >
        ★ Official Football Hub ★
      </div>

      {/* NAVIGATION */}
      <nav
        style={{
          padding: "20px 40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          background: "rgba(10, 12, 16, 0.8)",
          backdropFilter: "blur(10px)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <span style={{ fontSize: "24px", fontWeight: "900", letterSpacing: "1px" }}>
          FOOT<span style={{ color: "#d8ff1a" }}>•</span>TAKTIC
        </span>
      </nav>

      {/* HERO SECTION */}
      <section
        style={{
          textAlign: "center",
          padding: "120px 20px",
          background:
            "linear-gradient(rgba(10, 12, 16, 0.5), #0a0c10), url('https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "#d8ff1a",
            fontWeight: "bold",
            letterSpacing: "6px",
            fontSize: "14px",
            marginBottom: "12px",
          }}
        >
          ROAD TO GLORY
        </span>
        <h1
          style={{
            fontSize: "clamp(40px, 6vw, 80px)",
            fontWeight: "900",
            margin: 0,
            letterSpacing: "-1px",
            lineHeight: "1.1",
            textTransform: "uppercase",
          }}
        >
          World Cup 2026
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            marginTop: "15px",
            fontSize: "18px",
            fontWeight: "500",
            letterSpacing: "2px",
          }}
        >
          USA • CANADA • MEXICO
        </p>

        {/* COUNTDOWN */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginTop: "45px",
          }}
        >
          <div style={boxStyle}>
            <div style={{ fontSize: "36px", fontWeight: "800", color: "#fff" }}>
              {mounted ? timeLeft.days : "00"}
            </div>
            <div style={{ fontSize: "11px", color: "#rgba(255,255,255,0.4)", fontWeight: "700", letterSpacing: "1px", marginTop: "4px" }}>DAYS</div>
          </div>
          <div style={boxStyle}>
            <div style={{ fontSize: "36px", fontWeight: "800", color: "#fff" }}>
              {mounted ? String(timeLeft.hours).padStart(2, "0") : "00"}
            </div>
            <div style={{ fontSize: "11px", color: "#rgba(255,255,255,0.4)", fontWeight: "700", letterSpacing: "1px", marginTop: "4px" }}>HOURS</div>
          </div>
          <div style={boxStyle}>
            <div style={{ fontSize: "36px", fontWeight: "800", color: "#fff" }}>
              {mounted ? String(timeLeft.minutes).padStart(2, "0") : "00"}
            </div>
            <div style={{ fontSize: "11px", color: "#rgba(255,255,255,0.4)", fontWeight: "700", letterSpacing: "1px", marginTop: "4px" }}>MINUTES</div>
          </div>
          <div style={boxStyle}>
            <div style={{ fontSize: "36px", fontWeight: "800", color: "#d8ff1a" }}>
              {mounted ? String(timeLeft.seconds).padStart(2, "0") : "00"}
            </div>
            <div style={{ fontSize: "11px", color: "rgba(216, 255, 26, 0.6)", fontWeight: "700", letterSpacing: "1px", marginTop: "4px" }}>SECONDS</div>
          </div>
        </div>

        {/* INTERACTIVE BUTTONS */}
        <div style={{ marginTop: "45px", display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
          {["LIVE SCORE", "NEWS HUB", "TRANSFERS"].map((btn, idx) => (
            <button
              key={btn}
              style={{
                background: idx === 0 ? "#d8ff1a" : "transparent",
                color: idx === 0 ? "#000" : "#fff",
                border: idx === 0 ? "none" : "1px solid rgba(255,255,255,0.15)",
                padding: "14px 28px",
                borderRadius: "12px",
                fontWeight: "700",
                fontSize: "14px",
                letterSpacing: "0.5px",
                cursor: "pointer",
                transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                if (idx === 0) {
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(216, 255, 26, 0.3)";
                } else {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "#d8ff1a";
                }
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                if (idx !== 0) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                }
              }}
            >
              {btn}
            </button>
          ))}
        </div>
      </section>

      {/* ARTICLES SECTION */}
      <section style={{ maxWidth: "1200px", margin: "40px auto 100px", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "800", letterSpacing: "-0.5px", margin: 0 }}>
            Latest Intelligence
          </h2>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }}></div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {articles.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#11141a",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.04)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = "rgba(216, 255, 26, 0.2)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ width: "100%", height: "200px", overflow: "hidden", position: "relative" }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "19px", fontWeight: "700", margin: "0 0 10px 0", lineHeight: "1.4" }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", margin: "0 0 20px 0", lineHeight: "1.6" }}>
                  In-depth tactical analysis, expert breaking updates, and statistical scouting reports.
                </p>

                <button
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "10px 18px",
                    borderRadius: "10px",
                    fontWeight: "600",
                    fontSize: "13px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    width: "100%",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#d8ff1a";
                    e.currentTarget.style.color = "#000";
                    e.currentTarget.style.border = "1px solid #d8ff1a";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)";
                  }}
                >
                  Read Analysis
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "40px 20px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          color: "rgba(255,255,255,0.3)",
          fontSize: "13px",
          letterSpacing: "0.5px",
        }}
      >
        © 2026 FOOT TAKTIC — Engineered for Football Enthusiasts.
      </footer>
    </div>
  );
}
