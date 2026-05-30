{/* Latest Articles */}
<section
  style={{
    maxWidth: "1100px",
    margin: "60px auto",
    padding: "0 20px",
  }}
>
  <h2
    style={{
      fontSize: "28px",
      fontWeight: "900",
      marginBottom: "25px",
      textTransform: "uppercase",
    }}
  >
    Latest Articles
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "25px",
    }}
  >
    {[
      "Real Madrid Transfer News",
      "Barcelona Tactical Analysis",
      "Premier League Title Race",
      "Champions League Predictions",
      "Top Young Talents 2026",
      "World Cup Countdown Update",
    ].map((title, index) => (
      <article
        key={index}
        style={{
          background: "#111319",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid #1f222b",
          transition: "0.3s",
        }}
      >
        <div
          style={{
            height: "180px",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div style={{ padding: "20px" }}>
          <span
            style={{
              color: "#dcfd21",
              fontSize: "11px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Football
          </span>

          <h3
            style={{
              marginTop: "12px",
              fontSize: "20px",
              fontWeight: "800",
              lineHeight: "1.4",
            }}
          >
            {title}
          </h3>

          <p
            style={{
              color: "#9c9c9c",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            Read the latest football news, tactical analysis and transfer
            updates from around the world.
          </p>

          <button
            style={{
              marginTop: "15px",
              background: "#dcfd21",
              color: "#000",
              border: "none",
              padding: "10px 18px",
              borderRadius: "8px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Read More
          </button>
        </div>
      </article>
    ))}
  </div>
</section>
