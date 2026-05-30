"use client";

export default function Home() {
return (
<div
style={{
background: "#07090d",
color: "#fff",
minHeight: "100vh",
fontFamily: "Arial, sans-serif",
}}
>
<div
style={{
background: "#d8ff1a",
color: "#000",
textAlign: "center",
padding: "8px",
fontWeight: "bold",
letterSpacing: "3px",
}}
>
OFFICIAL SITE
</div>

  <nav
    style={{
      padding: "20px",
      textAlign: "center",
      fontSize: "34px",
      fontWeight: "900",
      borderBottom: "1px solid #1d1f24",
    }}
  >
    FOOT<span style={{ color: "#d8ff1a" }}>|</span>TAKTIC
  </nav>

  <section
    style={{
      textAlign: "center",
      padding: "80px 20px",
      background:
        "linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.75)), url('https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1600&auto=format&fit=crop')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <h1
      style={{
        fontSize: "72px",
        margin: 0,
        fontWeight: "900",
      }}
    >
      WORLD CUP 2026
    </h1>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        flexWrap: "wrap",
        marginTop: "25px",
        fontSize: "28px",
        fontWeight: "bold",
      }}
    >
      <span>🇺🇸 USA</span>
      <span>🇨🇦 CANADA</span>
      <span>🇲🇽 MEXICO</span>
    </div>

    <h2
      style={{
        color: "#d8ff1a",
        marginTop: "30px",
        letterSpacing: "3px",
      }}
    >
      COUNTDOWN TO KICK-OFF
    </h2>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "25px",
      }}
    >
      {["18 DAYS", "23 HOURS", "06 MIN", "42 SEC"].map((item) => (
        <div
          key={item}
          style={{
            background: "rgba(0,0,0,.75)",
            padding: "20px",
            borderRadius: "10px",
            minWidth: "120px",
            border: "1px solid #2d3139",
            fontWeight: "bold",
          }}
        >
          {item}
        </div>
      ))}
    </div>

    <div style={{ marginTop: "30px" }}>
      {["LIVE", "NEWS", "TRANSFERS"].map((btn) => (
        <button
          key={btn}
          style={{
            background: "#d8ff1a",
            color: "#000",
            border: "none",
            margin: "5px",
            padding: "14px 28px",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {btn}
        </button>
      ))}
    </div>
  </section>

  <section style={{ maxWidth: "1200px", margin: "50px auto", padding: "20px" }}>
    <h2 style={{ color: "#d8ff1a" }}>LATEST ARTICLES</h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        gap: "20px",
        marginTop: "25px",
      }}
    >
      {[
        "World Cup 2026 Guide",
        "USA Team Analysis",
        "Canada Rising Stars",
        "Mexico Tactical Review",
        "Transfer Market Update",
        "Champions League News",
      ].map((title) => (
        <div
          key={title}
          style={{
            background: "#12151b",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid #242932",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop"
            alt={title}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
            }}
          />

          <div style={{ padding: "20px" }}>
            <h3>{title}</h3>

            <p style={{ color: "#aaa" }}>
              Latest football news, transfers and World Cup coverage.
            </p>

            <button
              style={{
                background: "#d8ff1a",
                color: "#000",
                border: "none",
                padding: "10px 18px",
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

  <footer
    style={{
      textAlign: "center",
      padding: "30px",
      borderTop: "1px solid #1d1f24",
      color: "#777",
    }}
  >
    © 2026 FOOT TAKTIC
  </footer>
</div>

);
}
