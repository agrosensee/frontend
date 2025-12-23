AgriSense Frontend
Overview

AgriSense Frontend is the user-facing application of the AgriSense AI platform.
It provides a clean, responsive, and intuitive interface that allows farmers and agricultural stakeholders to monitor water usage, view AI-powered irrigation predictions, and receive actionable insights to reduce water waste.

The frontend translates complex agricultural and AI data into simple, visual, and understandable dashboards.

Goals

Prevent water waste through clear data visualization

Display AI-based irrigation and weather predictions

Improve decision-making for farmers

Provide a smooth user experience on all devices

Features

Interactive dashboards for water usage

AI-based irrigation recommendations

Weather and forecast visualization

User authentication and protected routes

Alerts and notification interface

Location-based data display

Fully responsive design

Tech Stack

React (TypeScript)

SCSS

Redux Toolkit

React Router

Vite

Chart.js / Recharts

Supabase Client SDK

Folder Structure
src/
├── components/
├── pages/
├── redux/
├── services/
├── hooks/
├── styles/
├── utils/
├── assets/
├── App.tsx
└── main.tsx

Authentication

Supabase Authentication

Secure session handling

Route protection for authenticated users

Environment Variables

Create a .env file:

VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

Installation & Run
npm install
npm run dev

UX Principles

Minimal and farmer-friendly interface

Mobile-first approach

Performance-focused rendering

Scalable component architecture

Future Improvements

Advanced AI data visualizations

Offline support for rural areas

Multi-language support

Role-based dashboards

Purpose

The frontend exists to make AI-powered smart agriculture accessible and easy to use, helping reduce water waste and increase efficiency.
