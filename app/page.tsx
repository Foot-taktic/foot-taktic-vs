"use client";

export default function Home() {
  const articles = [
    "Real Madrid Transfer News",
    "Barcelona Tactical Analysis",
    "Premier League Title Race",
    "Champions League Preview",
    "Top Young Talents",
    "World Cup 2026 Update",
  ];

  return (
    <div
      style={{
        background: "#0c0d12",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "#dcfd21",
          color: "#000",
          textAlign: "center",
          padding: "8px",
          fontWeight: "bold",
          fontSize: "12px",
        }}
      >
        OFFICIAL SITE
      </div>

      <nav
        style={{
          textAlign: "center",
          padding: "20px",
          fontSize: "28px",
          fontWeight: "900",
          borderBottom: "1px solid #222",
        }}
      >
        FOOT <span style={{ color: "#dcfd21" }}>TAKTIC</span>
      </nav>

      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background:
            "linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url('https://images.unsplash.com/photo-1486286701208-1d58e9338013?q=80&w=1600&auto=format&fit=crop') center/cover",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "900",
            marginBottom: "10px",
          }}
        >
          WORLD CUP 2026
        </h1>

        <h2
          style={{
            color: "#dcfd21",
            marginBottom: "30px",
          }}
        >
          COUNTDOWN
        </h2>

        <div
          style={{
            display: "inline-flex",
            gap: "20px",
            background: "rgba(0,0,0,.6)",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "25px",
          }}
        >
          <div>18 DAYS</div>
          <div>23 HOURS</div>
          <div style={{ color: "#dcfd21" }}>06 MIN</div>
        </div>

        <div>
          <button
            style={{
              background: "#dcfd21",
              border: "none",
              padding: "12px 25px",
              margin: "5px",
              fontWeight: "bold",
              borderRadius: "8px",
            }}
          >
            LIVE
          </button>

          <button
            style={{
              background: "#dcfd21",
              border: "none",
              padding: "12px 25px",
              margin: "5px",
              fontWeight: "bold",
              borderRadius: "8px",
            }}
          >
            NEWS
          </button>

          <button
            style={{
              background: "#dcfd21",
              border: "none",
              padding: "12px 25px",
              margin: "5px",
              fontWeight: "bold",
              borderRadius: "8px",
            }}
          >
            TRANSFERS
          </button>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "50px auto",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            marginBottom: "25px",
            fontSize: "30px",
          }}
        >
          Latest Articles
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
          }}
        >
          {articles.map((article, index) => (
            <div
              key={index}
              style={{
                background: "#16181f",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid #252832",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop"
                alt={article}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "20px" }}>
                <h3>{article}</h3>

                <p style={{ color: "#aaa" }}>
                  Latest football news, transfers and tactical analysis.
                </p>

                <button
                  style={{
                    background: "#dcfd21",
                    border: "none",
                    padding: "10px 18px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  Read More
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
          borderTop: "1px solid #222",
          color: "#777",
        }}
      >
        © 2026 FOOT TAKTIC
      </footer>
    </div>
  );
}
