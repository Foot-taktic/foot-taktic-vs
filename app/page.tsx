<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FOOT | TAKTIC - Football Hub</title>
    <style>
        :root {
            --bg-color: #000;
            --main-text-color: #fff;
            --highlight-color: #bfff00; /* Neon Lime-Yellow */
            --sub-text-color: #ccc;
            --card-bg-color: #1a1a1a;
            --accent-color: #333;
        }

        body {
            font-family: 'Montserrat', sans-serif; /* Modern, clean sans-serif */
            background-color: var(--bg-color);
            color: var(--main-text-color);
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        /* Top Bar */
        .top-bar {
            background-color: #000;
            color: var(--highlight-color);
            text-align: center;
            padding: 5px 0;
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-bottom: 1px solid var(--accent-color);
        }

        /* Nav Bar */
        .nav-bar {
            background-color: #000;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 40px;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            display: flex;
            align-items: center;
        }

        .logo span {
            color: var(--highlight-color);
            margin: 0 5px;
        }

        .nav-menu ul {
            list-style: none;
            display: flex;
            gap: 20px;
            margin: 0;
            padding: 0;
        }

        .nav-menu li a {
            text-transform: uppercase;
            font-size: 0.9rem;
            letter-spacing: 1px;
        }

        .nav-icons {
            display: flex;
            gap: 15px;
            align-items: center;
        }

        .nav-icons i {
            color: var(--main-text-color);
            cursor: pointer;
        }

        /* Hero Section */
        .hero {
            background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80');
            background-size: cover;
            background-position: center;
            color: var(--main-text-color);
            padding: 100px 20px 60px 20px;
            text-align: center;
        }

        .hero h1 {
            font-size: 4rem;
            text-transform: uppercase;
            font-weight: 800;
            margin: 0 0 20px 0;
        }

        .host-countries {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-bottom: 40px;
        }

        .country {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .flag-img {
            width: 30px;
            height: auto;
            border-radius: 3px;
        }

        .countdown {
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 50px;
        }

        .countdown-label {
            color: var(--highlight-color);
            font-size: 1rem;
            font-weight: bold;
            margin-bottom: 15px;
        }

        .countdown-boxes {
            display: flex;
            justify-content: center;
            gap: 15px;
        }

        .countdown-box {
            background-color: rgba(0,0,0,0.7);
            border: 1px solid var(--accent-color);
            border-radius: 8px;
            padding: 15px 25px;
            min-width: 100px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        }

        .countdown-time {
            font-size: 3rem;
            font-weight: 800;
        }

        .countdown-tag {
            color: var(--sub-text-color);
            font-size: 0.8rem;
            margin-top: 5px;
        }

        .quick-actions {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 30px;
        }

        .quick-btn {
            background-color: rgba(191, 255, 0, 0.2);
            color: var(--highlight-color);
            border: none;
            padding: 12px 25px;
            border-radius: 20px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .quick-btn-icon {
            font-size: 1.2rem;
        }

        /* Main Content */
        .main-content {
            padding: 40px 40px;
        }

        .section-header {
            color: var(--highlight-color);
            font-size: 1.1rem;
            text-transform: uppercase;
            font-weight: bold;
            letter-spacing: 1px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        /* Latest Analysis */
        .analysis-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-bottom: 40px;
        }

        .analysis-card {
            background-color: var(--card-bg-color);
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid var(--accent-color);
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            display: flex;
            flex-direction: column;
        }

        .analysis-thumb {
            width: 100%;
            height: 180px;
            background-color: var(--accent-color);
            background-size: cover;
            background-position: center;
        }

        .analysis-card-content {
            padding: 20px;
        }

        .analysis-card-content h3 {
            margin: 0 0 10px 0;
            font-size: 1.2rem;
        }

        .analysis-card-content p {
            color: var(--sub-text-color);
            font-size: 0.9rem;
            margin: 0;
        }

        /* Featured Post */
        .featured-post-container {
            margin-bottom: 40px;
        }

        .featured-post-card {
            background-color: var(--card-bg-color);
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid var(--accent-color);
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            display: flex;
            flex-direction: column;
        }

        .featured-post-thumb {
            width: 100%;
            height: 350px;
            background-color: var(--accent-color);
            background-size: cover;
            background-position: center;
        }

        .featured-post-content {
            padding: 20px;
        }

        .featured-post-content h2 {
            margin: 0 0 10px 0;
            font-size: 1.6rem;
        }

        .featured-post-content p {
            color: var(--sub-text-color);
            font-size: 0.9rem;
            margin: 0;
        }

        /* Main Content Grid */
        .main-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-bottom: 40px;
        }

        /* Latest News */
        .news-section {
            grid-column: 4 / 5;
        }

        .news-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .news-item {
            display: flex;
            gap: 15px;
            margin-bottom: 20px;
        }

        .news-item-thumb {
            width: 70px;
            height: 70px;
            background-color: var(--accent-color);
            border-radius: 8px;
            background-size: cover;
            background-position: center;
        }

        .news-item-details {
            flex: 1;
        }

        .news-item-title {
            font-size: 0.95rem;
            margin: 0 0 5px 0;
        }

        .news-item-time {
            color: var(--sub-text-color);
            font-size: 0.8rem;
        }

        /* Latest Articles */
        .articles-section {
            grid-column: 1 / 4;
        }

        .articles-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }

        .article-card {
            background-color: var(--card-bg-color);
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid var(--accent-color);
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            display: flex;
            flex-direction: column;
        }

        .article-thumb {
            width: 100%;
            height: 180px;
            background-color: var(--accent-color);
            background-size: cover;
            background-position: center;
        }

        .article-content {
            padding: 20px;
        }

        .article-content h3 {
            margin: 0 0 10px 0;
            font-size: 1.2rem;
        }

        .article-content p {
            color: var(--sub-text-color);
            font-size: 0.9rem;
            margin: 0;
        }

        /* Placeholders & Icons (using Font Awesome) */
        .placeholder-icon {
            display: inline-block;
            width: 1em;
            height: 1em;
            vertical-align: middle;
            fill: currentColor;
        }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet">
</head>
<body>

    <div class="top-bar">
        OFFICIAL SITE
    </div>

    <nav class="nav-bar">
        <div class="logo">
            FOOT <span>|</span> TAKTIC
        </div>
        <div class="nav-menu">
            <ul>
                <li><a href="#">NEWS</a></li>
                <li><a href="#">MATCHES</a></li>
                <li><a href="#">TRANSFERS</a></li>
                <li><a href="#">ANALYSIS</a></li>
                <li><a href="#">VIDEOS</a></li>
            </ul>
        </div>
        <div class="nav-icons">
            <i class="fas fa-search"></i>
            <i class="fas fa-user-circle"></i>
        </div>
    </nav>

    <section class="hero">
        <h1>WORLD CUP 2026</h1>
        <div class="host-countries">
            <div class="country">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png" alt="USA Flag" class="flag-img">
                USA
            </div>
            <div class="country">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/320px-Flag_of_Canada_%28Pantone%29.svg.png" alt="Canada Flag" class="flag-img">
                CANADA
            </div>
            <div class="country">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/320px-Flag_of_Mexico.svg.png" alt="Mexico Flag" class="flag-img">
                MEXICO
            </div>
        </div>
        <div class="countdown">
            <div class="countdown-label">COUNTDOWN TO KICK-OFF</div>
            <div class="countdown-boxes">
                <div class="countdown-box">
                    <div class="countdown-time">18</div>
                    <div class="countdown-tag">DAYS</div>
                </div>
                <div class="countdown-box">
                    <div class="countdown-time">23</div>
                    <div class="countdown-tag">HOURS</div>
                </div>
                <div class="countdown-box">
                    <div class="countdown-time">06</div>
                    <div class="countdown-tag">MINUTES</div>
                </div>
                <div class="countdown-box">
                    <div class="countdown-time">42</div>
                    <div class="countdown-tag">SECONDS</div>
                </div>
            </div>
        </div>
        <div class="quick-actions">
            <button class="quick-btn">
                <i class="fas fa-signal quick-btn-icon"></i>
                LIVE
            </button>
            <button class="quick-btn">
                <i class="fas fa-newspaper quick-btn-icon"></i>
                NEWS
            </button>
            <button class="quick-btn">
                <i class="fas fa-exchange-alt quick-btn-icon"></i>
                TRANSFERS
            </button>
        </div>
    </section>

    <main class="main-content">
        <section class="latest-analysis">
            <div class="section-header">
                // LATEST ANALYSIS
            </div>
            <div class="analysis-grid">
                <div class="analysis-card">
                    <div class="analysis-thumb" style="background-image: url('https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');"></div>
                    <div class="analysis-card-content">
                        <h3>Real Madrid's New System Explained</h3>
                        <p>2 HOURS AGO</p>
                    </div>
                </div>
                <div class="analysis-card">
                    <div class="analysis-thumb" style="background-image: url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');"></div>
                    <div class="analysis-card-content">
                        <h3>Manchester City Tactical Breakdown</h3>
                        <p>4 HOURS AGO</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="featured-post-container">
            <div class="section-header">
                // FEATURED POST
            </div>
            <div class="featured-post-card">
                <div class="featured-post-thumb" style="background-image: url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80');"></div>
                <div class="featured-post-content">
                    <h2>Everything You Need to Know About World Cup 2026</h2>
                    <p>1 DAY AGO</p>
                </div>
            </div>
        </section>

        <div class="main-grid">
            <section class="articles-section">
                <div class="section-header">
                    // LATEST ARTICLES
                </div>
                <div class="articles-grid">
                    <div class="article-card">
                        <div class="article-thumb" style="background-image: url('https://images.unsplash.com/photo-1551958219-acbc608c6d3c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');"></div>
                        <div class="article-content">
                            <h3>Player Spotlight: Jude Bellingham</h3>
                            <p>3 HOURS AGO</p>
                        </div>
                    </div>
                    <div class="article-card">
                        <div class="article-thumb" style="background-image: url('https://images.unsplash.com/photo-1518091043644-c1d4457512c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');"></div>
                        <div class="article-content">
                            <h3>Transfer Talk: Where will Mbappé go?</h3>
                            <p>5 HOURS AGO</p>
                        </div>
                    </div>
                </div>
            </section>

            <aside class="news-section">
                <div class="section-header">
                    // LATEST NEWS
                </div>
                <ul class="news-list">
                    <li class="news-item">
                        <div class="news-item-thumb" style="background-image: url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80');"></div>
                        <div class="news-item-details">
                            <h4 class="news-item-title">Mbappé Future Decision Coming Soon</h4>
                            <p class="news-item-time">1 HOUR AGO</p>
                        </div>
                    </li>
                    <li class="news-item">
                        <div class="news-item-thumb" style="background-image: url('https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/150px-FC_Barcelona_%28crest%29.svg.png'); background-color: white; border-radius: 5px;"></div>
                        <div class="news-item-details">
                            <h4 class="news-item-title">Barcelona Eye Young Midfield Star</h4>
                            <p class="news-item-time">2 HOURS AGO</p>
                        </div>
                    </li>
                    <li class="news-item">
                        <div class="news-item-thumb" style="background-image: url('https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80');"></div>
                        <div class="news-item-details">
                            <h4 class="news-item-title">Champions League Round of 16 Draw</h4>
                            <p class="news-item-time">3 HOURS AGO</p>
                        </div>
                    </li>
                </ul>
            </aside>
        </div>
    </main>

</body>
</html>
