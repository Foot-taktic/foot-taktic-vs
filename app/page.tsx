<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>FOOT | TAKTIC - Football Hub</title>

<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet">

<style>
:root{
  --bg:#000;
  --text:#fff;
  --accent:#bfff00;
  --muted:#aaa;
  --card:#141414;
  --border:#2a2a2a;
}

*{box-sizing:border-box}

body{
  margin:0;
  font-family:Montserrat, sans-serif;
  background:var(--bg);
  color:var(--text);
}

/* TOP */
.top-bar{
  text-align:center;
  padding:6px;
  font-size:12px;
  letter-spacing:2px;
  color:var(--accent);
  border-bottom:1px solid var(--border);
}

/* NAV */
.nav{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:15px 40px;
  position:sticky;
  top:0;
  background:#000;
  border-bottom:1px solid var(--border);
}

.logo{
  font-weight:800;
  font-size:20px;
}
.logo span{color:var(--accent)}

.nav a{
  color:var(--text);
  margin:0 10px;
  text-decoration:none;
  font-size:13px;
}

.nav a:hover{color:var(--accent)}

/* HERO */
.hero{
  text-align:center;
  padding:80px 20px;
  background:linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.9)),
  url('https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1600') center/cover;
}

.hero h1{
  font-size:60px;
  margin:0;
  font-weight:800;
}

.countries{
  display:flex;
  justify-content:center;
  gap:20px;
  margin-top:10px;
  color:var(--muted);
}

/* COUNTDOWN */
.countdown{
  display:flex;
  justify-content:center;
  gap:12px;
  margin-top:30px;
  flex-wrap:wrap;
}

.box{
  background:rgba(20,20,20,.8);
  padding:15px;
  border:1px solid var(--border);
  border-radius:10px;
  min-width:90px;
}

.box h2{
  margin:0;
  font-size:28px;
  color:var(--accent);
}

.box small{
  color:var(--muted);
}

/* BUTTONS */
.btns{
  margin-top:25px;
}

.btn{
  background:var(--accent);
  border:none;
  padding:10px 18px;
  margin:5px;
  font-weight:bold;
  cursor:pointer;
  border-radius:8px;
  transition:.3s;
}

.btn:hover{
  transform:scale(1.05);
}

/* CONTENT */
.container{
  max-width:1100px;
  margin:auto;
  padding:40px 20px;
}

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:15px;
}

.card{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:12px;
  overflow:hidden;
  transition:.3s;
}

.card:hover{
  transform:translateY(-5px);
}

.card img{
  width:100%;
  height:160px;
  object-fit:cover;
}

.card-content{
  padding:15px;
}

.card-content h3{
  margin:0;
  font-size:16px;
}

.card-content p{
  color:var(--muted);
  font-size:13px;
}

/* FOOTER */
footer{
  text-align:center;
  padding:25px;
  color:#666;
  border-top:1px solid var(--border);
}

/* RESPONSIVE */
@media(max-width:768px){
  .hero h1{font-size:32px}
  .nav{flex-direction:column;gap:10px}
}
</style>
</head>

<body>

<div class="top-bar">OFFICIAL FOOTBALL HUB</div>

<div class="nav">
  <div class="logo">FOOT<span>|</span>TAKTIC</div>
  <div>
    <a href="#">NEWS</a>
    <a href="#">LIVE</a>
    <a href="#">TRANSFERS</a>
  </div>
</div>

<section class="hero">
  <h1>WORLD CUP 2026</h1>

  <div class="countries">
    <span>🇺🇸 USA</span>
    <span>🇨🇦 CANADA</span>
    <span>🇲🇽 MEXICO</span>
  </div>

  <div class="countdown">
    <div class="box"><h2 id="d">00</h2><small>DAYS</small></div>
    <div class="box"><h2 id="h">00</h2><small>HOURS</small></div>
    <div class="box"><h2 id="m">00</h2><small>MIN</small></div>
    <div class="box"><h2 id="s">00</h2><small>SEC</small></div>
  </div>

  <div class="btns">
    <button class="btn">LIVE</button>
    <button class="btn">NEWS</button>
    <button class="btn">TRANSFERS</button>
  </div>
</section>

<div class="container">
  <h2 style="color:var(--accent)">LATEST ARTICLES</h2>

  <div class="grid">
    <div class="card">
      <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2" />
      <div class="card-content">
        <h3>Manchester City Analysis</h3>
        <p>Latest tactical breakdown</p>
      </div>
    </div>

    <div class="card">
      <img src="https://images.unsplash.com/photo-1547347298-4074fc3086f0" />
      <div class="card-content">
        <h3>World Cup Preparation</h3>
        <p>Teams ready for 2026</p>
      </div>
    </div>

    <div class="card">
      <img src="https://images.unsplash.com/photo-1522778119026-d647f0596c20" />
      <div class="card-content">
        <h3>Transfer News</h3>
        <p>Big moves coming soon</p>
      </div>
    </div>
  </div>
</div>

<footer>© 2026 FOOT TAKTIC</footer>

<script>
const target = new Date("2026-06-11T00:00:00").getTime();

function update(){
  const now = new Date().getTime();
  const diff = target - now;

  document.getElementById("d").innerText = Math.floor(diff/(1000*60*60*24));
  document.getElementById("h").innerText = Math.floor((diff/(1000*60*60))%24);
  document.getElementById("m").innerText = Math.floor((diff/(1000*60))%60);
  document.getElementById("s").innerText = Math.floor((diff/1000)%60);
}

setInterval(update,1000);
update();
</script>

</body>
</html>
