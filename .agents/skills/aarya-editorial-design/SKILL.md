---
name: aarya-editorial-design
description: Design system guidelines, color palette, typography rules, glassmorphic styling, and animation standards for the Aarya Eye Care website.
---

# Aarya Eye Care Editorial Design System

This skill encodes the premium editorial SaaS aesthetic refined for the Aarya Eye Care hospital website. It governs layout framing, color harmony, typography weights, frosted glassmorphism, and choreographed motion.

---

## 1. Brand Color Palette

| Token Role | Hex Code | Tailwind / RGBA Equivalent | Usage |
|---|---|---|---|
| **Outer Bezel & Framing** | `#F9D2BA` | `bg-[#F9D2BA]`, `border-[#F9D2BA]` | Surrounding outer bezels, navbar surface, section margins |
| **Primary Deep Surface** | `#5E3122` | `bg-[#5E3122]`, `text-[#5E3122]` | Hero main card, footer container, dark card backgrounds |
| **Primary Surface Gradient** | `linear-gradient(145deg, #5E3122 0%, #52291B 50%, #441F13 100%)` | Rich satin chocolate background for hero and prominent cards |
| **Interactive CTA & Buttons**| `#1D4533` | `bg-[#1D4533] hover:bg-[#163628]` | Primary action buttons, active filters, WhatsApp buttons |
| **Brand Tagline & Accents** | `#B85338` | `text-[#B85338]`, `border-[#B85338]` | "Darkness to Light" tagline, badge accents, category tags |
| **Glass Card Background** | `rgba(255, 255, 255, 0.45-0.50)` | `bg-white/45 backdrop-blur-xl` | Floating badges, floating stat & eyewear cards |
| **Glass Card Border** | `rgba(29, 69, 51, 0.40)` | `border border-[#1D4533]/40` | Subtle green-tinted borders for glass elements |
| **Glass Card Text** | `#1D4533` | `text-[#1D4533]` | Primary text inside frosted glass cards |
| **Parallax Section** | `#1D4533` & `#FFFFF0` | `bg-dark-green text-ivory text-leaf` | Bold statement section with `#52B788` serif italic accent |

---

## 2. Typography Rules

1. **Brand Logo Mark**:
   - Font: `AvantGarde Demi` (ITC Avant Garde Gothic Demi, Century Gothic, geometric sans).
   - Style: `font-avantgarde font-semibold tracking-tight leading-none text-[#5E3122]`.
2. **Headings**:
   - Primary display: `font-serif font-medium` (Playfair Display) or clean modern sans with relaxed weights.
   - Avoid aggressive `font-black` (900); prefer `font-medium` (500) to `font-bold` (700).
3. **Brand Tagline ("Darkness to Light")**:
   - Always uppercase: `DARKNESS TO LIGHT`
   - Wide tracking: `tracking-[0.22em]` or `tracking-[0.24em]`
   - Color: `#B85338` (warm terracotta/copper)
   - Size: `text-[8px]` to `text-[11px]` font-bold.
4. **Nav Links Interaction**:
   - Hover underline: Animated expanding bottom line (`h-[2px] bg-[#5E3122] origin-left duration-300 ease-out scale-x-0 group-hover/nav:scale-x-100`).
5. **Body Copy & Subtitles**:
   - Clean geometric sans: `font-sans font-normal` (Plus Jakarta Sans).
   - Generous line height and comfortable letter spacing.

---

## 3. Glassmorphism & Card Design

- **Frosted Translucency**: Use `backdrop-blur-xl` with semi-opaque white fill (`bg-white/45` to `bg-white/50`).
- **Borders**: Hairline borders using `#1D4533`/40 or `white/35` (`border border-[#1D4533]/40`).
- **Shadows**: Soft diffused ambient shadows (`shadow-[0_20px_45px_rgba(0,0,0,0.18)]`).
- **Corner Radii**: Generous pill and rounded corners (`rounded-[24px]` to `rounded-full`).

---

## 4. Motion & Animation Principles

1. **Staging Curve**:
   - Standard easing: `ease: [0.16, 1, 0.3, 1]` (smooth Apple-style deceleration curve).
2. **Choreographed Staggering**:
   - Container reveal: `duration: 0.85s, delay: 0s`
   - Social proof badge: `delay: 0.15s`
   - Headline (with subtle blur reveal): `delay: 0.25s`
   - Horizontal dividers (expanding `scaleX: 0 -> 1`): `delay: 0.35s` & `delay: 0.55s`
   - Subtitle & Action buttons: `delay: 0.42s` & `0.62s`
   - Right visual pillar: `delay: 0.35s`
   - Floating badges: `delay: 0.6s` to `0.75s`
3. **Continuous Infinite Tickers**:
   - Partner & accreditation logos loop seamlessly via CSS `animate-ticker` translating `-50%` with two identical sets.
   - Hover state keeps moving continuously: `hover:[animation-play-state:running]`.
4. **Morphing Scroll Navigation**:
   - Single unified navbar component starting flat/embedded at the top of `#home` and morphing into a floating rounded pill at `scrollY > 25`.
