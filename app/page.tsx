"use client";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif', padding: '0', margin: '0' }}>
      
      {/* 1. الشريط الفوقاني الفسفوري */}
      <div style={{ backgroundColor: '#85fe00', color: '#000000', textAlign: 'center', fontSize: '11px', fontWeight: 'bold', padding: '8px 0', letterSpacing: '2px' }}>
        OFFICIAL SITE
      </div>

      {/* 2. الـ Navbar الرئيسي */}
      <nav style={{ padding: '20px', textTransform: 'uppercase', fontWeight: '900', fontSize: '24px', textAlign: 'center', borderBottom: '1px solid #111111' }}>
        FOOT TAKTIC
      </nav>

      {/* 3. الواجهة الرئيسية (Hero Section) */}
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '30px 15px' }}>
        
        {/* الكرت الكبير بالأسود الغامق د التيران */}
        <div style={{ backgroundColor: '#0a0a0a', border: '1px solid #1c1c1c', borderRadius: '24px', padding: '50px 20px', textAlign: 'center' }}>
          
          <h2 style={{ color: '#555555', fontSize: '12px', fontWeight: 'bold', letterSpacing: '3px', margin: '0 0 10px 0' }}>
            WORLD CUP 2026
          </h2>
          
          <h1 style={{ fontSize: '48px', fontWeight: '900', margin: '0 0 20px 0', letterSpacing: '1px' }}>
            COUNTDOWN
          </h1>

          {/* العداد د الوقت متناسق ومقاد */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', backgroundColor: '#000000', border: '1px solid #222222', padding: '15px 20px', borderRadius: '12px', maxWidth: '340px', margin: '0 auto 30px auto' }}>
            <div>
              <span style={{ color: '#666666', fontSize: '11px', fontWeight: 'bold' }}>DAYS </span>
              <span style={{ fontSize: '20px', fontWeight: '900', color: '#ffffff' }}>18</span>
            </div>
            <div style={{ color: '#333333', fontWeight: 'bold' }}>:</div>
            <div>
              <span style={{ color: '#666666', fontSize: '11px', fontWeight: 'bold' }}>HOURS </span>
              <span style={{ fontSize: '20px', fontWeight: '900', color: '#ffffff' }}>23</span>
            </div>
            <div style={{ color: '#333333', fontWeight: 'bold' }}>:</div>
            <div>
              <span style={{ color: '#666666', fontSize: '11px', fontWeight: 'bold' }}>MIN </span>
              <span style={{ fontSize: '20px', fontWeight: '900', color: '#85fe00' }}>06</span>
            </div>
          </div>

          {/* الأزرار الثلاثة الفسفورية بحال الصورة */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button style={{ backgroundColor: '#85fe00', color: '#000000', fontWeight: '900', fontSize: '11px', padding: '12px 35px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
              LIVE
            </button>
            <button style={{ backgroundColor: '#85fe00', color: '#000000', fontWeight: '900', fontSize: '11px', padding: '12px 35px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
              NEWS
            </button>
            <button style={{ backgroundColor: '#85fe00', color: '#000000', fontWeight: '900', fontSize: '11px', padding: '12px 35px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
              TRANSFERS
            </button>
          </div>

        </div>

        {/* 4. الأقسام التحتانية */}
        <div style={{ marginTop: '40px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          
          <div style={{ flex: '1', minWidth: '280px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '900', margin: '0 0 15px 0' }}> LATEST ANALYSIS</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <div style={{ backgroundColor: '#85fe00', color: '#000000', fontWeight: '900', fontSize: '11px', padding: '20px', borderRadius: '12px', height: '100px', width: '50%', display: 'flex', alignItems: 'flex-end' }}>
                ANALYSIS 1
              </div>
              <div style={{ backgroundColor: '#85fe00', color: '#000000', fontWeight: '900', fontSize: '11px', padding: '20px', borderRadius: '12px', height: '100px', width: '50%', display: 'flex', alignItems: 'flex-end' }}>
                ANALYSIS 2
              </div>
            </div>
          </div>

          <div style={{ flex: '1', minWidth: '280px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '900', margin: '0 0 15px 0' }}> FEATURED POSTS</h3>
            <div style={{ backgroundColor: '#85fe00', color: '#000000', fontWeight: '900', fontSize: '11px', padding: '20px', borderRadius: '12px', height: '100px', display: 'flex', alignItems: 'flex-end' }}>
              FEATURED POST BIG
            </div>
          </div>

        </div>

      </main>

      <footer style={{ borderTop: '1px solid #111111', marginTop: '60px', padding: '20px 0', textAlign: 'center', fontSize: '10px', color: '#333333', fontWeight: 'bold' }}>
        &copy; 2026 FOOT TAKTIC. OFFICIAL PLATFORM.
      </footer>

    </div>
  );
}
