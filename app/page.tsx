"use client";

export default function Home() {
  return (
    <>
      {/* هاد السطر هو اللي غايجيب الألوان والديزاين بزز ويصلح المشكل */}
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      
      <div className="min-h-screen bg-black text-white font-sans selection:bg-[#85fe00] selection:text-black">
        
        {/* 1. الشريط الفوقاني الأخضر الفسفوري */}
        <div className="bg-[#85fe00] text-black text-center text-xs font-black tracking-[0.25em] py-2 uppercase">
          Official Site
        </div>

        {/* 2. الـ Navbar الرئيسي */}
        <nav className="bg-black py-6 px-6 md:px-12 flex justify-center items-center border-b border-gray-800">
          <div className="text-3xl font-black tracking-tighter uppercase text-white">
            FOOT<span className="text-[#85fe00] mx-1">|</span>TAKTIC
          </div>
        </nav>

        {/* 3. الواجهة الرئيسية (Hero Section) */}
        <main className="max-w-6xl mx-auto px-4 py-12">
          
          {/* الكرت الكبير */}
          <div className="relative rounded-[2rem] overflow-hidden bg-gray-900 border border-gray-800 p-8 md:p-16 text-center shadow-2xl min-h-[460px] flex flex-col justify-center items-center">
            
            <div className="relative z-10 w-full max-w-xl mx-auto">
              <h1 className="text-4xl md:text-7xl font-black tracking-tight uppercase mb-2 text-white">
                World Cup 2026
              </h1>
              <p className="text-[#85fe00] text-xl font-black tracking-[0.25em] uppercase mb-8">
                Countdown
              </p>

              {/* العداد د الوقت متناسق مع الصورة */}
              <div className="flex justify-center items-center gap-4 bg-black border border-gray-800 px-6 py-4 rounded-2xl mb-10 max-w-md mx-auto shadow-md">
                <div className="flex items-center gap-2 px-3">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Days:</span>
                  <span className="text-2xl font-black text-white">18</span>
                </div>
                <span className="text-gray-800 font-bold text-xl">|</span>
                <div className="flex items-center gap-2 px-3">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Hours:</span>
                  <span className="text-2xl font-black text-white">23</span>
                </div>
                <span className="text-gray-800 font-bold text-xl">|</span>
                <div className="flex items-center gap-2 px-3">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Min:</span>
                  <span className="text-2xl font-black text-[#85fe00]">06</span>
                </div>
              </div>

              {/* الأزرار الثلاثة الفسفورية */}
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-[#85fe00] text-black font-black uppercase text-xs tracking-widest px-8 py-3.5 rounded-xl hover:bg-[#73dd00] transition-colors cursor-pointer">
                  Live
                </button>
                <button className="bg-[#85fe00] text-black font-black uppercase text-xs tracking-widest px-8 py-3.5 rounded-xl hover:bg-[#73dd00] transition-colors cursor-pointer">
                  News
                </button>
                <button className="bg-[#85fe00] text-black font-black uppercase text-xs tracking-widest px-8 py-3.5 rounded-xl hover:bg-[#73dd00] transition-colors cursor-pointer">
                  Transfers
                </button>
              </div>
            </div>
          </div>

          {/* 4. الأقسام التحتانية */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
            
            <div>
              <h2 className="text-lg font-black tracking-tight uppercase mb-6 text-white">
                <span className="text-[#85fe00]">//</span> Latest Analysis
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 h-36 flex items-end hover:border-gray-700 transition-colors cursor-pointer">
                  <span className="text-gray-400 font-black text-xs uppercase tracking-wider">Analysis 1</span>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 h-36 flex items-end hover:border-gray-700 transition-colors cursor-pointer">
                  <span className="text-gray-400 font-black text-xs uppercase tracking-wider">Analysis 2</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-black tracking-tight uppercase mb-6 text-white">
                <span className="text-[#85fe00]">//</span> Featured Posts
              </h2>
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 h-36 flex items-end hover:border-gray-700 transition-colors cursor-pointer">
                <span className="text-gray-400 font-black text-xs uppercase tracking-wider">Featured Post Big</span>
              </div>
            </div>

          </div>

        </main>

        <footer className="border-t border-gray-900 mt-20 py-6 text-center text-[10px] text-gray-600 font-bold uppercase tracking-widest">
          &copy; 2026 Foot Taktic. Official Platform.
        </footer>

      </div>
    </>
  );
}
