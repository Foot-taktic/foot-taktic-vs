"use client";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#0c0d12', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif', padding: '0', margin: '0' }}>
      
      {/* 1. الشريط الفوقاني الفسفوري */}
      <div style={{ backgroundColor: '#dcfd21', color: '#000000', textAlign: 'center', fontSize: '11px', fontWeight: 'bold', padding: '8px 0', letterSpacing: '2px' }}>
        OFFICIAL SITE
      </div>

      {/* 2. الـ Navbar الرئيسي */}
      <nav style={{ padding: '20px', textTransform: 'uppercase', fontWeight: '900', fontSize: '24px', textAlign: 'center', borderBottom: '1px solid #1a1b1d', backgroundColor: '#07080a' }}>
        FOOT <span style={{ color: '#dcfd21' }}>|</span> TAKTIC
      </nav>

      {/* 3. الواجهة الرئيسية (Hero Section) مع صورة الملعب ف الخلفية */}
      <main>
        <div style={{ 
          width: '100%', 
          minHeight: '60vh', 
          backgroundImage: "linear-gradient(to bottom, rgba(7, 8, 10, 0.85), rgba(12, 13, 18, 0.7)), url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          padding: '60px 20px',
          boxSizing: 'border-box',
          textAlign: 'center'
        }}>
          
          <h2 style={{ color: '#dcfd21', fontSize: '12px', fontWeight: 'bold', letterSpacing: '3px', margin: '0 0 10px 0', textTransform: 'uppercase' }}>
            WORLD CUP 2026
          </h2>
          
          <h1 style={{ fontSize: '48px', fontWeight: '900', margin: '0 0 20px 0', letterSpacing: '1px', textTransform: 'uppercase' }}>
            COUNTDOWN
          </h1>

          {/* العداد د الوقت المظلم والشفاف الفوق د التيران */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', backgroundColor: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(4px)', border: '1px solid rgba(220, 253, 33, 0.2)', padding: '15px 25px', borderRadius: '12px', maxWidth: '340px', margin: '0 auto 30px auto' }}>
            <div>
              <span style={{ color: '#9c9c9c', fontSize: '11px', fontWeight: 'bold' }}>DAYS:</span>
              <span style={{ fontSize: '22px', fontWeight: '900', color: '#ffffff', marginLeft: '5px' }}>18</span>
            </div>
            <div style={{ color: 'rgba(220, 253, 33, 0.4)', fontWeight: 'bold', fontSize: '20px' }}>|</div>
            <div>
              <span style={{ color: '#9c9c9c', fontSize: '11px', fontWeight: 'bold' }}>HOURS:</span>
              <span style={{ fontSize: '22px', fontWeight: '900', color: '#ffffff', marginLeft: '5px' }}>23</span>
            </div>
            <div style={{ color: 'rgba(220, 253, 33, 0.4)', fontWeight: 'bold', fontSize: '20px' }}>|</div>
            <div>
              <span style={{ color: '#9c9c9c', fontSize: '11px', fontWeight: 'bold' }}>MIN:</span>
              <span style={{ fontSize: '22px', fontWeight: '900', color: '#dcfd21', marginLeft: '5px' }}>06</span>
            </div>
          </div>

          {/* الأزرار الثلاثة الفسفورية الطايرة */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button style={{ backgroundColor: '#dcfd21', color: '#0c0d12', fontWeight: '700', fontSize: '12px', padding: '12px 35px', borderRadius: '8px', border: 'none', cursor: 'pointer', textTransform: 'uppercase' }}>
              LIVE
            </button>
            <button style={{ backgroundColor: '#dcfd21', color: '#0c0d12', fontWeight: '700', fontSize: '12px', padding: '12px 35px', borderRadius: '8px', border: 'none', cursor: 'pointer', textTransform: 'uppercase' }}>
              NEWS
            </button>
            <button style={{ backgroundColor: '#dcfd21', color: '#0c0d12', fontWeight: '700', fontSize: '12px', padding: '12px 35px', borderRadius: '8px', border: 'none', cursor: 'pointer', textTransform: 'uppercase' }}>
              TRANSFERS
            </button>
          </div>

        </div>

        {/* 4. الأقسام التحتانية */}
        <div style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px', display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
          
          <div style={{ flex: '1', minWidth: '280px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 20px 0', textTransform: 'uppercase' }}>
              // LATEST ANALYSIS
            </h3>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ backgroundColor: '#dcfd21', color: '#0c0d12', fontWeight: '900', fontSize: '12px', padding: '20px', borderRadius: '12px', height: '120px', width: '50%', display: 'flex', alignItems: 'flex-end', cursor: 'pointer' }}>
                ANALYSIS 1
              </div>
              <div style={{ backgroundColor: '#dcfd21', color: '#0c0d12', fontWeight: '900', fontSize: '12px', padding: '20px', borderRadius: '12px', height: '120px', width: '50%', display: 'flex', alignItems: 'flex-end', cursor: 'pointer' }}>
                ANALYSIS 2
              </div>
            </div>
          </div>

          <div style={{ flex: '1', minWidth: '280px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 20px 0', textTransform: 'uppercase' }}>
              // FEATURED POSTS
            </h3>
            <div style={{ backgroundColor: '#dcfd21', color: '#0c0d12', fontWeight: '900', fontSize: '12px', padding: '20px', borderRadius: '12px', height: '120px', display: 'flex', alignItems: 'flex-end', cursor: 'pointer' }}>
              FEATURED POST BIG
            </div>
          </div>

        </div>

      </main>

      <footer style={{ borderTop: '1px solid #1a1b1d', marginTop: '60px', padding: '25px 0', textAlign: 'center', fontSize: '11px', color: '#666666', fontWeight: 'bold' }}>
        &copy; 2026 FOOT TAKTIC. OFFICIAL PLATFORM.
      </footer>

    </div>
  );
}
