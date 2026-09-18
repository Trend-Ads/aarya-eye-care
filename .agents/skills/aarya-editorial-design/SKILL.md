---
name: aarya-editorial-design
description: Design system guidelines, color palette, typography rules, glassmorphic styling, and animation standards for the Aarya Eye Care website.
---

# Aarya Eye Care Editorial Design System

This skill encodes the premium editorial SaaS aesthetic refined for the Aarya Eye Care hospital website. It governs layout framing, color harmony, typography weights, frosted glassmorphism, and choreographed motion.

---

## 1. Brand Color Palette (6-Color System)

| Token Role | Hex Code | Tailwind / RGBA Equivalent | Usage |
|---|---|---|---|
| **Primary Background** | `#F2E9DC` | `bg-[#F2E9DC]`, `text-[#F2E9DC]` | Warm ivory/linen canvas for page body, modal surface, light card backgrounds |
| **Secondary Background** | `#C9A581` | `bg-[#C9A581]`, `border-[#C9A581]` | Warm beige outer framing bezels, subtle card outlines, warm badges |
| **Primary Brand** | `#A55322` | `bg-[#A55322]`, `text-[#A55322]` | Terracotta interactive CTAs, active highlights, taglines, accent badges |
| **Secondary Brand** | `#8A875C` | `bg-[#8A875C]`, `text-[#8A875C]` | Muted sage secondary accents, soft notification pings, organic badges |
| **Dark Accent** | `#675E31` | `bg-[#675E31]`, `border-[#675E31]` | Deep olive hero satin gradient, vision section, dark surface containers |
| **Warm Charcoal Text** | `#30291F` | `text-[#30291F]`, `selection:bg-[#C9A581]/40` | Used everywhere for primary headings, body copy, and UI text |

---

## 2. Typography Rules

1. **Brand Logo Mark**:
   - Font: `AvantGarde Demi` (ITC Avant Garde Gothic Demi, Century Gothic, geometric sans).
   - Style: `font-avantgarde font-semibold tracking-tight leading-none text-[#30291F]` on light, `text-white` on deep cards.
2. **Headings**:
   - Primary display: `font-serif font-medium` (Syne — rigid architectural avant-garde font without bulky boldness).
   - Text color: `#30291F` on ivory/linen surfaces.
3. **Brand Tagline ("Darkness to Light")**:
   - Always uppercase: `DARKNESS TO LIGHT`
   - Wide tracking: `tracking-[0.22em]` or `tracking-[0.24em]`
   - Color: `#A55322` (terracotta)
   - Size: `text-[8px]` to `text-[11px]` font-bold.
4. **Nav Links Interaction**:
   - Hover underline: Animated expanding bottom line (`h-[2px] bg-[#A55322] origin-left duration-300 ease-out scale-x-0 group-hover/nav:scale-x-100`).
5. **Body Copy & Subtitles**:
   - Clean geometric sans: `font-sans font-normal text-[#30291F]/75`.
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
