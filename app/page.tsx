<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FOOT | TAKTIC - كأس العالم 2026</title>
    <style>
        /* إعدادات الخط الأساسية */
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');

        body {
            font-family: 'Montserrat', sans-serif;
            background-color: #0c0d12;
            color: #ffffff;
            margin: 0;
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        /* تعريف الألوان الأساسية */
        :root {
            --neon-green: #dcfd21;
            --header-dark: #07080a;
            --background-dark: #121316;
        }

        /* --- الشريط العلوي --- */
        header {
            width: 100%;
            height: 70px;
            background-color: var(--header-dark);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 50px;
            box-sizing: border-box;
            border-bottom: 1px solid #1a1b1d;
            position: fixed;
            top: 0;
            z-index: 1000;
        }

        .header-logo-ar {
            font-size: 1.2rem;
            color: #ffffff;
        }

        .header-main {
            font-weight: 900;
            font-size: 1.5rem;
            text-transform: uppercase;
        }

        .logo-part {
            color: var(--neon-green);
        }

        /* --- القسم الرئيسي (Hero) --- */
        .hero-section {
            width: 100%;
            height: 100vh;
            background-image: linear-gradient(to bottom, rgba(7, 8, 10, 0.9), rgba(12, 13, 18, 0.7)), url('https://images.unsplash.com/photo-1579803111005-ae1c8a1e2f3d?q=80&w=2940&auto=format&fit=crop'); /* رابط لصورة ملعب مشابهة */
            background-size: cover;
            background-position: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding-top: 70px; /* للتعويض عن الهيدر */
        }

        .countdown-title {
            font-size: 1rem;
            font-weight: 400;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: var(--neon-green);
            margin-bottom: 0.5rem;
        }

        .world-cup-title {
            font-size: 3rem;
            font-weight: 900;
            text-transform: uppercase;
            margin: 0;
            line-height: 1.1;
        }

        /* العداد التنازلي */
        .countdown-timer {
            margin: 2rem 0;
            display: flex;
            gap: 1.5rem;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 1.5rem 2.5rem;
            border-radius: 12px;
            border: 1px solid rgba(220, 253, 33, 0.2);
            box-shadow: 0 4px 3
