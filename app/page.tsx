"use client";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      
      {/* 1. الشريط الفوقاني الفسفوري */}
      <div style={{ backgroundColor: '#85fe00', color: '#000000', textAlign: 'center', fontSize: '12px', fontWeight: '900', letterSpacing: '0.25em', padding: '10px 0', textTransform: 'uppercase' }}>
        Official Site
      </div>

      {/* 2. الـ Navbar الرئيسي */}
      <nav style={{ backgroundColor: '#000000', padding: '20px', textAlign: 'center', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ fontSize: '28px', fontWeight: '900', letterSpacing: '-0.05em', uppercase: 'true' }}>
          FOOT<span style={{ color: '#85fe00', margin: '0 4px' }}>|</span>TAKTIC
        </div>
      </nav>

      {/* 3. الواجهة الرئيسية (Hero Section) */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* الكرت الكبير الخلفية ديالو كحلة رمادية بحال الصورة */}
        <div style={{ position: 'relative', borderRadius: '32px', backgroundColor: '#0a0a0a', border: '1px solid #1f1f1f', padding: '60px 20px', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
          
          <h2 style={{ color: '#666666', fontSize: '13px', fontWeight: '900', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '10px' }}>
            World Cup 2026
          </h2>
          <h1 style={{ fontSize: '50px', fontWeight: '900', textTransform: 'uppercase', margin: '0 0 10px 0', letterSpacing: '-0.02em' }}>
            Countdown
          </h1>

          {/* العداد د الوقت متناسق */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', backgroundColor: '#000000', border: '1px solid #262626', padding: '15px 25px', borderRadius: '16px', margin: '30px auto', maxWidth: '380px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#666666', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>Days:</span>
              <span style={{ fontSize: '22px', fontWeight: '900', color: '#ffffff' }}>18</span>
            </div>
            <span style={{ color: '#262626', fontWeight: 'bold', fontSize: '20px' }}>|</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#666666', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>Hours:</span>
              <span style={{ fontSize: '22px', fontWeight: '900', color: '#ffffff' }}>23</span>
            </div>
            <span style={{ color: '#262626', fontWeight: 'bold', fontSize: '20px' }}>|</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#666666', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>Min:</span>
              <span style={{ fontSize: '22px', fontWeight: '900', color: '#85fe00' }}>06</span>
            </div>
          </div>

          {/* الأزرار الثلاثة الفسفورية بحال الصورة بالظبط */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', marginTop: '30px' }}>
            <button style={{ backgroundColor: '#85fe00', color: '#000000', fontWeight: '900', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.15em', padding: '14px 40px', borderRadius: '12px', border: 'none', cursor: 'pointer', boxShadow: '0 0 20px rgba(133,254,0,0.2)' }}>
              Live
            </button>
            <button style={{ backgroundColor: '#85fe00', color: '#000000', fontWeight: '900', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.15em', padding: '14px 40px', borderRadius: '12px', border: 'none', cursor: 'pointer', boxShadow: '0 0 20px rgba(133,254,0,0.2)' }}>
              News
            </button>
            <button style={{ backgroundColor: '#85fe00', color: '#000000', fontWeight: '900', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.15em', padding: '14px 40px', borderRadius: '12px', border: 'none', cursor: 'pointer', boxShadow: '0 0 20px rgba(133,254,0,0.2)' }}>
              Transfers
            </button>
          </div>

        </div>

        {/* 4. الأقسام التحتانية د المقالات */}
        <div style={{ marginTop: '60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          
          {/* قسم الـ Latest Analysis */}
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '0.05em' }}>
              <span style={{ color: '#85fe00', marginRight: '8px' }}>//</span> Latest Analysis
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div style={{ backgroundColor: '#85fe00', borderRadius: '20px', padding: '20px', height: '140px', display: 'flex', alignItems: 'flex-end', cursor: 'pointer' }}>
                <span style={{ color: '#000000', fontWeight: '900', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Analysis 1</span>
              </div>
              <div style={{ backgroundColor: '#85fe00', borderRadius: '20px', padding: '20px', height: '140px', display: 'flex', alignItems: 'flex-end', cursor: 'pointer' }}>
                <span style={{ color: '#000000', fontWeight: '900', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Analysis 2</span>
              </div>
            </div>
          </div>

          {/* قسم الـ Featured Posts */}
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '0.05em' }}>
              <span style={{ color: '#85fe00', marginRight: '8px' }}>//</span> Featured Posts
            </h2>
            <div style={{ backgroundColor: '#85fe00', borderRadius: '20px', padding: '20px', height: '140px', display: 'flex', alignItems: 'flex-end', cursor: 'pointer' }}>
              <span style={{ color: '#000000', fontWeight: '900', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Featured Post Big</span>
            </div>
          </div>

        </div>

      </main>

      {/* الفوتر */}
      <footer style={{ borderTop: '1px solid #1a1a1a', marginTop: '80px', padding: '25px 0', textAlign: 'center', fontSize: '10px', color: '#444444', fontWeight: 'bold', letterSpacing: '0.2em' }}>
        &copy; 2026 FOOT TAKTIC. OFFICIAL PLATFORM.
      </footer>

    </div>
  );
}
