"use client";
import { Timer, ArrowLeft, ArrowRight, Newspaper, Tv, RefreshCw } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#85fe00] selection:text-black overflow-x-hidden">
      
      {/* 1. الشريط الفوقاني كاع (Official Site) */}
      <div className="bg-[#85fe00] text-black text-center text-[10px] font-black tracking-[0.25em] py-1.5 uppercase italic">
        Official Site
      </div>

      {/* 2. الـ Navbar الرئيسي */}
      <nav className="border-b border-zinc-900 bg-black/60 backdrop-blur-md sticky top-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter">
          FOOT<span className="text-[#85fe00] mx-0.5">|</span>TAKTIC
        </div>
        <div className="flex items-center gap-6 text-sm font-bold tracking-wide uppercase text-zinc-400">
          <span className="text-white border-b-2 border-[#85fe00] pb-1 cursor-pointer">Home</span>
          <span className="hover:text-white transition cursor-pointer">Matches</span>
          <span className="hover:text-white transition cursor-pointer">Analysis</span>
        </div>
      </nav>

      {/* 3. القسم الرئيسي (Hero Section) مع صورة التيران ف الخلفية */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        
        <div className="relative rounded-[2.5rem] overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl min-h-[500px] flex flex-col justify-center items-center p-8 text-center">
          
          {/* تأثير الإضاءة ف الخلفية حيت مازال ما حطيناش الصورة د التيران */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(133,254,0,0.08)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-zinc-500 text-sm md:text-base font-black tracking-[0.3em] uppercase mb-3">
              World Cup 2026
            </h2>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tight uppercase leading-none mb-6">
              Countdown
            </h1>

            {/* العداد د الوقت احترافي (Countdown Timer) */}
            <div className="flex justify-center items-center gap-6 bg-black/60 border border-zinc-800/80 backdrop-blur-xl px-8 py-5 rounded-3xl mb-10 shadow-xl max-w-md mx-auto">
              <div className="text-center min-w-[60px]">
                <span className="block text-3xl md:text-4xl font-black text-white tracking-tight">18</span>
                <span className="text-[10px] uppercase font-black text-zinc-500 tracking-widest mt-1 block">Days</span>
              </div>
              <span className="text-zinc-700 font-bold text-2xl animate-pulse">:</span>
              <div className="text-center min-w-[60px]">
                <span className="block text-3xl md:text-4xl font-black text-[#85fe00] tracking-tight">23</span>
                <span className="text-[10px] uppercase font-black text-zinc-500 tracking-widest mt-1 block">Hours</span>
              </div>
              <span className="text-zinc-700 font-bold text-2xl animate-pulse">:</span>
              <div className="text-center min-w-[60px]">
                <span className="block text-3xl md:text-4xl font-black text-white tracking-tight">06</span>
                <span className="text-[10px] uppercase font-black text-zinc-500 tracking-widest mt-1 block">Min</span>
              </div>
            </div>

            {/* الأزرار الفسفورية الثلاثة */}
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#85fe00] text-black font-black uppercase text-xs tracking-widest px-10 py-3.5 rounded-xl shadow-[0_0_30px_rgba(133,254,0,0.2)] hover:bg-[#73dd00] hover:scale-105 transition duration-300">
                Live
              </button>
              <button className="bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-white font-black uppercase text-xs tracking-widest px-10 py-3.5 rounded-xl hover:scale-105 transition duration-300">
                News
              </button>
              <button className="bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-white font-black uppercase text-xs tracking-widest px-10 py-3.5 rounded-xl hover:scale-105 transition duration-300">
                Transfers
              </button>
            </div>

          </div>
        </div>

        {/* 4. الأقسام التحتانية (Latest Analysis & Featured Posts) */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">
          
          {/* قسم التحليلات */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg md:text-xl font-black tracking-tight uppercase flex items-center gap-2">
                <span className="text-[#85fe00]">//</span> Latest Analysis
              </h2>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-600 transition">
                  <ArrowLeft size={16} />
                </button>
                <button className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-[#85fe00] hover:border-[#85fe00] transition">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* كرت التحليل الكبير */}
            <div className="bg-zinc-950 border border-zinc-900 rounded-[2rem] p-2 hover:border-zinc-800 transition duration-300 cursor-pointer group">
              <div className="w-full h-52 bg-gradient-to-br from-zinc-900 to-black border border-zinc-900 rounded-[1.75rem] flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md border border-white/5 px-3 py-1 rounded-full flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                  <Tv size={12} className="text-[#85fe00]" /> Video Breakdown
                </div>
                <span className="text-zinc-800 font-black text-6xl uppercase tracking-widest opacity-20 group-hover:scale-110 transition duration-500">TACTICS</span>
              </div>
              <div className="p-6">
                <span className="inline-block bg-[#85fe00] text-black text-[9px] font-black tracking-widest px-3 py-1 rounded-full uppercase mb-3">
                  Tactics
                </span>
                <h3 className="text-xl font-black leading-tight uppercase group-hover:text-[#85fe00] transition">
                  The Evolution of 4-3-3: How Modern Wingers Exploit Space
                </h3>
              </div>
            </div>
          </div>

          {/* قسم المقالات المميزة */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg md:text-xl font-black tracking-tight uppercase flex items-center gap-2">
                <span className="text-[#85fe00]">//</span> Featured Posts
              </h2>
            </div>

            {/* كرت المقالات الكبير */}
            <div className="bg-zinc-950 border border-zinc-900 rounded-[2rem] p-2 hover:border-zinc-800 transition duration-300 cursor-pointer group">
              <div className="w-full h-52 bg-gradient-to-bl from-zinc-900 to-black border border-zinc-900 rounded-[1.75rem] flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md border border-white/5 px-3 py-1 rounded-full flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                  <Newspaper size={12} className="text-[#85fe00]" /> Exclusive Article
                </div>
                <span className="text-zinc-800 font-black text-6xl uppercase tracking-widest opacity-20 group-hover:scale-110 transition duration-500">NEWS</span>
              </div>
              <div className="p-6">
                <span className="inline-block border border-zinc-800 text-zinc-400 text-[9px] font-black tracking-widest px-3 py-1 rounded-full uppercase mb-3">
                  World Cup
                </span>
                <h3 className="text-xl font-black leading-tight uppercase group-hover:text-[#85fe00] transition">
                  Morocco's Tactical Strategy & Preparedness for World Cup 2026
                </h3>
              </div>
            </div>
          </div>

        </div>

      </main>

      {/* 5. الفوتر السفلي (Footer) */}
      <footer className="border-t border-zinc-900 mt-20 py-8 px-6 text-center text-xs text-zinc-600 font-bold uppercase tracking-wider">
        &copy; 2026 Foot Taktic. All Rights Reserved.
      </footer>

    </div>
  );
}
