"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const targetDate = new Date("2026-06-11T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) return;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const boxStyle = {
    background: "rgba(0,0,0,0.7)",
    padding: "18px",
    borderRadius: "12px",
    border: "1px solid #2d3139",
    minWidth: "110px",
    textAlign: "center",
    fontWeight: "bold",
    backdropFilter: "blur(10px)",
    transition: "0.3s",
  };

  const btnStyle = {
    background: "#d8ff1a",
    color: "#000",
    border: "none",
    margin: "6px",
    padding: "12px 22px",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  };

  return (
    <div
      style={{
        background: "#07090d",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          background: "#d8ff1a",
          color: "#000",
          textAlign: "center",
          padding: "6px",
          fontWeight: "bold",
          letterSpacing: "3px",
        }}
      >
        OFFICIAL FOOTBALL HUB
      </div>

      {/* NAV */}
      <nav
        style={{
          padding: "18px",
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "900",
          borderBottom: "1px solid #1d1f24",
        }}
      >
        FOOT<span style={{ color: "#d8ff1a" }}>|</span>TAKTIC
      </nav>

      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          padding: "90px 20px",
          background:
            "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.85)), url('https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "900",
            margin: 0,
            letterSpacing: "2px",
          }}
        >
          WORLD CUP 2026
        </h1>

        <p style={{ color: "#aaa", marginTop: "10px" }}>
          USA • CANADA • MEXICO
        </p>

        {/* COUNTDOWN */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <div style={boxStyle}>
            {timeLeft.days}
            <div style={{ fontSize: "12px", color: "#aaa" }}>DAYS</div>
          </div>
          <div style={boxStyle}>
            {timeLeft.hours}
            <div style={{ fontSize: "12px", color: "#aaa" }}>HOURS</div>
          </div>
          <div style={boxStyle}>
            {timeLeft.minutes}
            <div style={{ fontSize: "12px", color: "#aaa" }}>MIN</div>
          </div>
          <div style={boxStyle}>
            {timeLeft.seconds}
            <div style={{ fontSize: "12px", color: "#aaa" }}>SEC</div>
          </div>
        </div>

        {/* BUTTONS */}
        <div style={{ marginTop: "30px" }}>
          {["LIVE", "NEWS", "TRANSFERS"].map((btn) => (
            <button
              key={btn}
              style={btnStyle}
              onMouseOver={(e) =>
                (e.target.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            >
              {btn}
            </button>
          ))}
        </div>
      </section>

      {/* ARTICLES */}
      <section style={{ maxWidth: "1100px", margin: "60px auto", padding: "20px" }}>
        <h2 style={{ color: "#d8ff1a", marginBottom: "20px" }}>
          LATEST ARTICLES
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "18px",
          }}
        >
          {[
            "World Cup 2026 Guide",
            "USA Tactical Breakdown",
            "Canada Rising Stars",
            "Mexico Strategy Review",
            "Transfer Market Trends",
            "Champions League Update",
          ].map((title) => (
            <div
              key={title}
              style={{
                background: "#12151b",
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid #242932",
                transition: "0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <img
                src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200"
                style={{ width: "100%", height: "160px", objectFit: "cover" }}
              />

              <div style={{ padding: "15px" }}>
                <h3 style={{ fontSize: "16px" }}>{title}</h3>

                <p style={{ fontSize: "13px", color: "#aaa" }}>
                  Latest football analysis and updates.
                </p>

                <button
                  style={{
                    marginTop: "10px",
                    background: "#d8ff1a",
                    border: "none",
                    padding: "8px 14px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                  }}
                >
                  READ MORE
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
          padding: "25px",
          borderTop: "1px solid #1d1f24",
          color: "#666",
        }}
      >
        © 2026 FOOT TAKTIC — All Rights Reserved
      </footer>
    </div>
  );
}
