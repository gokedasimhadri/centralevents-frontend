# 🎟️ EventPulse - Modern Events Management Web Application

A fast, responsive, modern Events Management web application built with **React 18 + Vite + Tailwind CSS**, styled with an engineering blueprint grid design system featuring **Aditya Orange (`#FF5500`)** and **Space Grotesk + Space Mono** typography.

---

## 🎨 Theme & Visual Identity

- **Color Palette**:
  - **Primary Accent**: Vibrant Orange (`#FF5500` / `#E64A00`)
  - **Dark Neutral**: Deep Charcoal Black (`#111114`)
  - **Background**: Warm Off-White (`#FBFBF9`) with an engineering technical graph-paper grid pattern
  - **Borders & Dividers**: Crisp technical borders (`#E6E6DE`)
- **Typography System**:
  - **`Space Grotesk` (`font-display`)**: Bold geometric headlines, brand marks, and card titles
  - **`Space Mono` (`font-mono`)**: Technical badges, metadata, dates, filter pills, and counters
  - **`Plus Jakarta Sans` (`font-sans`)**: Crisp, readable body descriptions and form inputs

---

## ✨ Key Features & Capabilities

- **Curated Multi-Category Events**:
  - Displays diverse event categories: *Technology, Music, Business, Design, Sports, Culture, Food & Dining, Gaming*.
- **Direct Clickable Action Links**:
  - Direct **"Open Event Link"** button on every card opens the official registration or ticketing site in a new tab immediately.
  - Interactive **Details Modal** with complete event highlights, speaker profiles, live capacity meter, and direct action buttons.
  - **Add to Google Calendar** and **Google Maps** one-click integrations.
- **Digital Pass & Ticket Generator**:
  - Users can reserve passes and generate an instant, validated digital entry badge with a unique Ticket ID and print/download capabilities.
- **Real-Time Search & Multi-Criteria Filtering**:
  - Instant live keyword search by title, organizer, city, or venue.
  - Category filter pills (*Technology, Music, Business, Design, Sports, Culture, Food & Dining, Gaming*).
  - Format filters (*In-Person vs Online / Virtual*).
  - Pricing filters (*Free Only vs Paid Only*).
  - Sorting options (*Upcoming Date, Most Popular, Alphabetical A-Z*).
- **Add New Event with Custom Direct Links**:
  - Interactive modal to publish custom events with destination links, banner image previews, venue locations, and ticket prices.
  - Stored persistently in the browser's `localStorage`.
- **Bookmarks & Saved Events**:
  - Bookmark favorite events with the heart icon and manage them in the Saved Events drawer.

---

## 🚀 How to Run the Application

In your terminal or PowerShell:

```bash
# 1. Navigate to the project directory
cd "c:\Users\Mic_Lab\Documents\Events\Events-au"

# 2. Start the Vite development server (Port 2220)
npm run dev
```

Open your web browser at:
👉 **`http://localhost:2220`** (or port specified in terminal)

To create an optimized production build:
```bash
npm run build
```

---

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Icon Set**: Lucide React
- **Data Layer**: LocalStorage persistence + Initial curated events
