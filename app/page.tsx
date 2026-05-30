export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <header className="w-full border-t-4 border-lime-400 bg-black px-8 py-5 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-wide">
          FOOT<span className="text-lime-400">TAKTIC</span>
        </h1>

        <nav className="hidden md:flex gap-8 text-sm font-semibold">
          <a href="#">NEWS</a>
          <a href="#">MATCHES</a>
          <a href="#">TRANSFERS</a>
          <a href="#">ANALYSIS</a>
          <a href="#">VIDEOS</a>
        </nav>
      </header>

      {/* HERO */}
      <section
        className="relative h-[85vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6">
          <h2 className="text-6xl md:text-8xl font-extrabold tracking-wider mb-8">
            WORLD CUP 2026
          </h2>

          <div className="flex justify-center gap-8 text-2xl mb-8">
            <span>🇺🇸 USA</span>
            <span>🇨🇦 CANADA</span>
            <span>🇲🇽 MEXICO</span>
          </div>

          {/* COUNTDOWN */}
          <div className="bg-black/70 rounded-2xl px-8 py-6 flex gap-8 justify-center mb-8">
            <div>
              <p className="text-5xl font-bold">18</p>
              <span className="text-lime-400">DAYS</span>
            </div>

            <div>
              <p className="text-5xl font-bold">23</p>
              <span className="text-lime-400">HOURS</span>
            </div>

            <div>
              <p className="text-5xl font-bold">06</p>
              <span className="text-lime-400">MINUTES</span>
            </div>

            <div>
              <p className="text-5xl font-bold">42</p>
              <span className="text-lime-400">SECONDS</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button className="bg-lime-400 text-black px-6 py-3 rounded-lg font-bold">
              LIVE
            </button>

            <button className="bg-lime-400 text-black px-6 py-3 rounded-lg font-bold">
              NEWS
            </button>

            <button className="bg-lime-400 text-black px-6 py-3 rounded-lg font-bold">
              TRANSFERS
            </button>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="px-8 py-16">
        <h3 className="text-lime-400 text-2xl font-bold mb-8">
          // Latest Analysis
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h4 className="text-xl font-semibold">
                Real Madrid’s New System Explained
              </h4>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1543357480-c60d40007a3f?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h4 className="text-xl font-semibold">
                Manchester City Tactical Breakdown
              </h4>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h4 className="text-xl font-semibold">
                Everything About World Cup 2026
              </h4>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
