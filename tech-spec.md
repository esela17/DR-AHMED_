# د. أحمد — Premium Ophthalmology Brand Website — Tech Spec

## 1. Development Environment

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | 19 |
| Language | TypeScript | 5.x |
| Bundler | Vite | 6.x |
| Styling | Tailwind CSS | 3.x |
| Component Library | shadcn/ui | latest |

---

## 2. Dependencies

### Core (pre-installed with Vite+React+Tailwind)
- `react` ^19.0.0
- `react-dom` ^19.0.0
- `typescript` ^5.7.0
- `vite` ^6.0.0
- `tailwindcss` ^3.4.0
- `postcss` ^8.4.0
- `autoprefixer` ^10.4.0

### Routing
- `react-router-dom` ^7.0.0 — Client-side routing for homepage, blog listing, and article pages

### Animation
- `gsap` ^3.12.0 — Core animation engine, ScrollTrigger plugin for section pinning, timeline orchestration, counter animations
- `lenis` ^1.1.0 — Smooth scroll with inertia, synced to GSAP ScrollTrigger ticker

### shadcn/ui Components (installed via CLI)
- `select` — Service dropdown (booking form, hero widget, blog filter)
- `input` — Form text fields
- `textarea` — Notes field
- `label` — Form labels
- `separator` — Visual dividers (trust items, stats row)
- `badge` — Category tags, status indicators
- `scroll-area` — Blog category tabs horizontal scroll on mobile
- `accordion` — Mobile TOC on article pages
- `dropdown-menu` — Mobile language toggle (alternative to visible button)

### Lucide React Icons (pre-installed with shadcn/ui)

### Fonts (loaded via Google Fonts `<link>` in index.html)
- Cairo (weights: 400, 500, 600, 700) — Arabic content
- Outfit (weights: 400, 500, 600, 700) — English content and UI chrome

### Dev Dependencies
- `@types/react` ^19.0.0
- `@types/react-dom` ^19.0.0
- `@vitejs/plugin-react` ^4.0.0
- `@types/node` ^22.0.0

---

## 3. Component Inventory

### 3.1 shadcn/ui Components

| Component | Installation | Usage | Customization |
|-----------|-------------|-------|---------------|
| `select` | `npx shadcn add select` | Booking form (service, time slot), hero widget (service), blog filter (category) | Glassmorphism variant for hero widget; custom border-radius (10px); focus ring color Medical Blue |
| `input` | `npx shadcn add input` | Booking form (name, phone, date), blog search, newsletter email | Focus border Medical Blue; Egyptian phone format; date min/max validation |
| `textarea` | `npx shadcn add textarea` | Booking form notes field | 3-row default; resize: vertical |
| `label` | `npx shadcn add label` | Form field labels | Right-aligned in RTL mode |
| `separator` | `npx shadcn add separator` | Trust stats dividers, trust items row, footer columns | Color override: Glass Border |
| `badge` | `npx shadcn add badge` | Section label badges, blog category tags, featured tag | Custom color variants: Soft Blue/Medical Blue, Gold variant, dark bg variant |
| `scroll-area` | `npx shadcn add scroll-area` | Blog category tabs horizontal scroll on mobile | Custom scrollbar styling to match theme |
| `accordion` | `npx shadcn add accordion` | Mobile table of contents on article page | Styling: Medical Blue active indicator |

### 3.2 Custom Components

#### Layout & Navigation

| Component | Props | Description |
|-----------|-------|-------------|
| `Navigation` | `lang: 'ar' \| 'en'`, `onLangToggle: () => void`, `activeSection: string` | Fixed top nav with scroll-reactive background, RTL-aware link ordering, language toggle, CTA button. Hides on scroll-down, shows on scroll-up. Mobile: full-screen overlay menu. |
| `Footer` | `lang: 'ar' \| 'en'` | 4-column footer (brand, links, services, contact). WhatsApp CTA in contact column. Bottom bar with copyright and legal links. |
| `EmergencyButton` | — | Fixed circular button (bottom-right/bottom-left per RTL). Pulse ring animation. Phone icon. Tooltip on hover. |
| `WhatsAppButton` | — | Fixed circular button above Emergency. Trust Green. Same pulse animation. Tooltip on hover. |
| `ScrollProgress` | — | 3px vertical bar on page edge. Fill height driven by GSAP ScrollTrigger scrub tied to document scroll progress. |

#### Shared UI Primitives

| Component | Props | Description |
|-----------|-------|-------------|
| `GlassmorphismCard` | `children`, `className?`, `variant: 'dark' \| 'light'` | Reusable glassmorphism panel with `backdrop-filter: blur(20px)`, configurable border/background per variant. Used in hero overlay, hero widget, floating credential card. |
| `SectionBadge` | `label: string`, `variant: 'light' \| 'dark'` | Pill-shaped label with left/right border accent. Soft Blue bg for light sections, translucent blue for dark. |
| `PrimaryButton` | `children`, `onClick?`, `href?`, `loading?`, `success?`, `fullWidth?`, `className?` | Medical Blue CTA with hover lift + shadow transition. Loading spinner state. Success morph to green. |
| `SecondaryButton` | `children`, `onClick?`, `href?`, `className?` | Outline button with transparent bg, white border. Hover fills with 10% white. |
| `StatCounter` | `target: number`, `suffix?: string`, `label: string`, `icon: LucideIcon` | Animated counter from 0 to target using GSAP ScrollTrigger. Arabic numeral formatting. |
| `ServiceCard` | `service: ServiceData` | Card with icon circle, title, description, benefits list, learn-more link. Hover: lift + shadow + icon color inversion. |
| `TestimonialCard` | `testimonial: TestimonialData` | White card with star row, quote, divider, avatar + name + meta. Hover lift effect. |
| `BlogCard` | `article: ArticleData`, `featured?: boolean` | Image thumbnail, category badge, title, excerpt, read time, date. Hover lift. Featured variant: horizontal layout, larger. |
| `BookingForm` | `lang: 'ar' \| 'en'`, `compact?: boolean` | 5-field form (name, phone, service, date, time, optional notes). Client-side validation. Submit loading/success states. Privacy note. |

#### Section Components

| Component | Description |
|-----------|-------------|
| `HeroSection` | Full-viewport with procedural canvas, glassmorphism content card, floating booking widget, mouse indicator. Desktop: ScrollTrigger pinned. |
| `TrustBarSection` | Horizontal stat row with 4 animated counters. Dividers. Icon float animation. |
| `AboutSection` | 2-column: portrait image + credential card overlay, headline, narrative, credentials row, vision block. |
| `ServicesSection` | Section header + 4-column grid of ServiceCards. Bottom CTA row. |
| `TestimonialsSection` | Dual-column infinite scroll (desktop) / horizontal carousel (mobile). 8 testimonial cards. Bottom trust signal row. |
| `BookingSection` | 2-column: trust content (features list + contact buttons) + BookingForm card. |
| `BlogPage` | Page header with search/filter, featured article, category tabs, article grid (6 cards), load-more button, newsletter CTA banner. |
| `ArticlePage` | Hero image, breadcrumb, article header, body content (white card), author bio, tags, share buttons, related articles. Sidebar: TOC + mini booking CTA. |

#### Page Components

| Component | Route | Description |
|-----------|-------|-------------|
| `HomePage` | `/` | Assembles all homepage sections. Manages global scroll context. |
| `BlogListPage` | `/blog` | Blog listing with search, filter, category tabs, grid. |
| `ArticlePage` | `/blog/:slug` | Individual article with rich content, TOC sidebar, related articles. |

---

## 4. Animation Implementation Plan

### 4.1 Animation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| **Procedural RGB-split canvas** | Vanilla Canvas 2D API | Custom `useCanvas` hook with `setInterval` at 30 FPS. 32x32 grid, 3 color passes (R/G/B) with sinusoidal noise + mouse offset. 0.4x backing resolution with `image-rendering: pixelated`. Mouse position stored in ref, applied per frame. | **High** |
| **Hero entrance sequence** | GSAP timeline | Single timeline: badge(0.3s) → headline(0.5s) → subtitle(0.8s) → CTAs(1.0s) → stats(1.2s) → widget(1.4s) → indicator(1.6s). Each: `opacity 0→1`, `translateY→0`. Fires once on mount. | **Medium** |
| **Hero scroll exit (desktop)** | GSAP ScrollTrigger | `pin: true`, `end: "+=130%"`. Overlay: `opacity 1→0`, `translateY(0→-60px)` scrubbed. Canvas: `opacity 1→0.3` scrubbed. | **Medium** |
| **Section pinning (desktop)** | GSAP ScrollTrigger | Hero: `pin`, `scrub`, `end: "+=130%"`. About: `pin`, `scrub`, `end: "+=120%"`. Services: `pin`, `scrub`, `end: "+=140%"`. Testimonials: `pin`, `scrub`, `end: "+=120%"`. Booking: `pin`, `scrub`, `end: "+=110%"`. Each with internal staggered timeline. Mobile: no pinning. | **High** |
| **Smooth scrolling** | Lenis + GSAP | Lenis instance with `lerp: 0.1`, synced via `gsap.ticker.add()`. ScrollTrigger updated on Lenis scroll event. | **Low** |
| **Trust bar counter animation** | GSAP ScrollTrigger | `gsap.to()` on a proxy object, `onUpdate` writes to DOM. Trigger at threshold 0.3. Duration 2.5s, `power2.out`, stagger 0.2s. Arabic numeral formatting via `toLocaleString('ar-EG')`. | **Medium** |
| **Trust bar icon float** | CSS @keyframes | `@keyframes float { 0%,100% { translateY(0) } 50% { translateY(-4px) } }`. Staggered `animation-delay` (0, 0.5s, 1s, 1.5s) for wave effect. | **Low** |
| **About section entrance** | GSAP ScrollTrigger | Staggered timeline: badge → headline → subtitle (parallel) → portrait slide-in → credential card → paragraphs stagger → credentials row → vision block → CTA. All `opacity` + `translateY/X`, threshold 0.2. | **Medium** |
| **Services card grid entrance** | GSAP ScrollTrigger | Batch: `opacity 0→1`, `translateY(40→0)`, `scale(0.97→1)`, stagger 0.1s. Trigger at threshold 0.15. | **Low** |
| **Service card hover** | CSS transitions | `translateY(0→-6px)`, `box-shadow` increase, `border-color` shift. Icon circle: `bg IceBlue → Medical Blue`, icon `Medical Blue → White`. `transition: all 0.35s cubic-bezier(0.4,0,0.2,1)`. | **Low** |
| **Testimonials dual-column infinite scroll** | CSS @keyframes | Each column contains 2x duplicated card sets. Col 1: `@keyframes scroll-up { to { translateY(-50%) } }` 40s linear infinite. Col 2: `@keyframes scroll-down` reverse. `animation-play-state: paused` on hover. | **Medium** |
| **Testimonials mobile carousel** | CSS scroll-snap | `scroll-snap-type: x mandatory`, cards `scroll-snap-align: center`. Auto-advance via `setInterval` (5s), cleared on touch. Navigation dots with active state. | **Medium** |
| **Testimonial card entrance** | GSAP ScrollTrigger | Header elements fade-up sequence. Columns: `opacity 0→1` at 1s delay. Bottom trust signal: fade-up at 1.5s. | **Low** |
| **Booking section entrance** | GSAP ScrollTrigger | Left column: staggered fade-up (badge → headline → subtitle → trust items → contact buttons). Right: form card `opacity 0→1`, `translateY(40→0)`, `scale(0.97→1)`, 1s, delay 0.2s. | **Medium** |
| **Scroll progress bar** | GSAP ScrollTrigger | Single ScrollTrigger on body: `scrub: true`. `onUpdate` sets fill height to `self.progress * 100%`. | **Low** |
| **Nav show/hide** | GSAP | `translateY(-100%→0)` on scroll-up, reverse on scroll-down. Scroll direction detected via Lenis `scroll` event. Always visible within 100px of top. | **Low** |
| **Nav background transition** | CSS transition | Background transitions from `transparent` to `rgba(7,26,43,0.95)` + `backdrop-filter: blur(12px)` when `scrollY > 100`. CSS `transition: all 0.3s ease`. | **Low** |
| **Floating button pulse** | CSS @keyframes | `@keyframes pulse { 0% { opacity: 0.6; scale: 1 } 100% { opacity: 0; scale: 1.6 } }`. Pseudo-element `::after` with `animation: pulse 2s infinite`. | **Low** |
| **Text reveal (global)** | GSAP ScrollTrigger | Reusable pattern: `opacity 0→1`, `translateY(30→0)`, `duration: 0.8s`, `ease: power3.out`. Stagger 0.1s. Triggered via IntersectionObserver or ScrollTrigger. | **Low** |
| **Card entrance (global)** | GSAP ScrollTrigger | Reusable pattern: `opacity 0→1`, `translateY(40→0)`, `scale(0.95→1)`, stagger 0.15s, `ease: power3.out`. | **Low** |
| **Mobile menu overlay** | GSAP | Full-screen overlay slide-down with staggered link entrance. Reverse on close. | **Low** |
| **Mouse indicator fade** | GSAP | Arrow bounce: `@keyframes bounce { 0%,100% { translateY(0) } 50% { translateY(6px) } }` 1.5s infinite. Auto-fade: `opacity→0` after 3s delay. | **Low** |
| **Blog page entrance** | GSAP | Header fade-up (0.6s) → featured article (0.8s, delay 0.2s) → tabs (0.5s, delay 0.3s) → cards stagger (0.5s, stagger 0.1s, delay 0.4s). | **Low** |
| **Article page entrance** | GSAP | Hero image (0.6s) → header (0.6s, delay 0.2s) → body (0.8s, delay 0.3s) → sidebar (0.6s, delay 0.5s). | **Low** |
| **TOC active highlight** | IntersectionObserver | Observe each H2 in article. On intersection: update active TOC link state (color Medical Blue + border indicator). | **Low** |
| **Form submit success** | GSAP | Button morphs to green with checkmark icon swap. Optional: brief confetti burst (2s) using a lightweight canvas confetti effect. | **Low** |

### 4.2 Animation Strategy Notes

**GSAP ScrollTrigger Plugin Registration**: All ScrollTrigger instances require `gsap.registerPlugin(ScrollTrigger)` once at app initialization.

**Pinned Section Coordinates**: Pinned sections are desktop-only (`min-width: 1025px`). On mobile (`< 768px`) and tablet (`768–1024px`), sections flow naturally with IntersectionObserver-triggered fade-up entrances. This is detected via `window.matchMedia` or a custom `useMediaQuery` hook.

**Lenis + ScrollTrigger Integration**:
```typescript
const lenis = new Lenis({ lerp: 0.1, duration: 1.2 });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

**Canvas Performance**: The RGB-split canvas uses a backing store at 0.4x CSS dimensions on desktop and 0.25x on mobile. The render loop runs at 30 FPS via `setInterval` (not `requestAnimationFrame`) to reduce CPU load. On `prefers-reduced-motion`, render a static frame once and stop the loop.

---

## 5. State & Logic Plan

### 5.1 State Management

No external state library needed. React built-in state + context is sufficient.

#### Global Language State (React Context)

```typescript
interface LanguageContextType {
  lang: 'ar' | 'en';
  toggleLang: () => void;
  dir: 'rtl' | 'ltr';
  t: (key: string) => string; // translation lookup
}
```

- `LanguageProvider` wraps the app at root level
- `lang` stored in `localStorage` for persistence across sessions
- `dir` derived from `lang` — drives `document.documentElement.dir` and `document.documentElement.lang`
- All component props that need bilingual content receive `lang` or use the context
- Navigation links, section labels, button text, form placeholders all go through the translation function

#### Navigation Active Section State

```typescript
const [activeSection, setActiveSection] = useState<string>('hero');
```

- Updated by ScrollTrigger `onEnter`/`onLeaveBack` callbacks on each homepage section
- Used by `Navigation` to highlight the current nav link

#### Form State (Local, per form instance)

```typescript
interface BookingFormState {
  name: string;
  phone: string;
  service: string;
  date: string;
  timeSlot: string;
  notes: string;
}

const [formData, setFormData] = useState<BookingFormState>({...});
const [errors, setErrors] = useState<Partial<BookingFormState>>({});
const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
```

- Client-side validation: required fields (name, phone, service), Egyptian phone regex (`^01[0-2,5]{1}[0-9]{8}$`)
- Date input: `min={today}`, `max={today + 90 days}`
- On submit: simulate API call (setTimeout), transition through loading → success states

#### Blog Filter State

```typescript
const [searchQuery, setSearchQuery] = useState('');
const [activeCategory, setActiveCategory] = useState<string>('all');
const [visibleCount, setVisibleCount] = useState(6);
```

- Articles filtered by category + search query (title + excerpt match)
- "Load More" increments `visibleCount` by 6
- Filtered array derived via `useMemo`

#### Testimonials Carousel State (Mobile only)

```typescript
const [activeSlide, setActiveSlide] = useState(0);
```

- Auto-advance via `setInterval` (5s), paused on touch
- Navigation dots update `activeSlide`

### 5.2 Data Flow Architecture

```
App.tsx
├── LanguageProvider (Context)
│   ├── lenis instance (ref, shared)
│   ├── ScrollTrigger coordinator (hook)
│   ├── Navigation (reads: lang, activeSection)
│   ├── ScrollProgress (reads: scroll progress)
│   ├── EmergencyButton (no props)
│   ├── WhatsAppButton (no props)
│   └── Routes
│       ├── HomePage (self-contained sections)
│       │   ├── HeroSection
│       │   ├── TrustBarSection
│       │   ├── AboutSection
│       │   ├── ServicesSection
│       │   ├── TestimonialsSection
│       │   └── BookingSection
│       ├── BlogListPage
│       │   ├── SearchBar (local state)
│       │   ├── CategoryTabs (local state)
│       │   ├── FeaturedArticle
│       │   ├── BlogCard[] (x6 visible)
│       │   └── NewsletterCTA
│       └── ArticlePage
│           ├── ArticleHero
│           ├── ArticleContent (local TOC state)
│           ├── SidebarTOC
│           ├── AuthorBio
│           ├── ShareButtons
│           └── RelatedArticles
└── Footer (reads: lang)
```

### 5.3 Business Logic

**Translation System**: A flat key-value object with dot-notation keys:
```typescript
const translations = {
  'nav.home': { ar: 'الرئيسية', en: 'Home' },
  'hero.badge': { ar: 'أفضل دكتور عيون في مصر', en: 'Best Eye Doctor in Egypt' },
  // ... all UI strings
};
```
The `t(key)` function looks up by key and returns the string for the current language. This is lightweight and avoids the complexity of i18n libraries for a two-language site.

**Scroll Direction Detection** (for nav hide/show):
```typescript
const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
const lastScrollY = useRef(0);

// In Lenis scroll callback:
const currentY = lenis.scroll;
setScrollDirection(currentY > lastScrollY.current ? 'down' : 'up');
lastScrollY.current = currentY;
```

**Canvas Mouse Position**: Stored in a `useRef` (not state) to avoid React re-renders on every mouse move. The canvas render loop reads the ref directly each frame.

**RTL Layout Adaptation**: The `dir` value from LanguageContext drives:
- `document.documentElement.dir` attribute
- Tailwind RTL variants (e.g., `rtl:ml-auto`, `ltr:mr-auto`)
- CSS logical properties: `margin-inline-start` instead of `margin-left`
- GSAP animation directions: `translateX(-40)` in LTR → `translateX(40)` in RTL
- Navigation link order reversal
- Floating button position swap (right↔left)

### 5.4 Routing

```typescript
// App.tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/blog" element={<BlogListPage />} />
    <Route path="/blog/:slug" element={<ArticlePage />} />
  </Routes>
</BrowserRouter>
```

- `HomePage` contains all 6 sections with their own ScrollTrigger instances
- `BlogListPage` and `ArticlePage` are separate routes with their own scroll contexts
- Navigation "Blog" link navigates to `/blog` via React Router
- Service "Learn More" links navigate to `/blog/:slug` for relevant articles

---

## 6. Tailwind Configuration

### Extended Theme

```javascript
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#071A2B',
        'medical-blue': '#1E5DB4',
        'electric-blue': '#3B8DFF',
        'trust-green': '#10B981',
        'soft-blue': '#E8F0FE',
        'ice-blue': '#D6E6FF',
        'warm-gold': '#C9A96E',
        'slate': '#64748B',
        'light-slate': '#94A3B8',
        'divider': '#E2E8F0',
      },
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
      maxWidth: {
        'content': '1200px',
        'article': '900px',
      },
      borderRadius: {
        'card': '16px',
        'button': '10px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 20px 40px rgba(7, 26, 43, 0.08)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.15)',
        'form': '0 24px 64px rgba(0, 0, 0, 0.2)',
        'cta': '0 8px 24px rgba(30, 93, 180, 0.35)',
      },
      backdropBlur: {
        'glass': '20px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        'bounce-arrow': 'bounce-arrow 1.5s ease-in-out infinite',
        'scroll-up': 'scroll-up 40s linear infinite',
        'scroll-down': 'scroll-down 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        'pulse-ring': {
          '0%': { opacity: '0.6', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(1.6)' },
        },
        'bounce-arrow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        'scroll-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'scroll-down': {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
```

---

## 7. Project File Structure

```
├── public/
│   ├── images/
│   │   ├── doctor-portrait.jpg          # About section portrait
│   │   ├── avatars/                     # 8 testimonial avatars
│   │   │   ├── avatar-1.jpg
│   │   │   ├── avatar-2.jpg
│   │   │   └── ... (avatar-3 through avatar-8)
│   │   └── blog/                        # 7 article thumbnails
│   │       ├── blog-lasik.jpg
│   │       ├── blog-cataract.jpg
│   │       ├── blog-mistakes.jpg
│   │       ├── blog-diabetic.jpg
│   │       ├── blog-lens.jpg
│   │       ├── blog-story.jpg
│   │       └── blog-featured.jpg
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/                          # shadcn/ui components (auto-generated)
│   │   │   ├── select.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── label.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   └── accordion.tsx
│   │   ├── layout/
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── EmergencyButton.tsx
│   │   │   ├── WhatsAppButton.tsx
│   │   │   └── ScrollProgress.tsx
│   │   ├── shared/
│   │   │   ├── GlassmorphismCard.tsx
│   │   │   ├── SectionBadge.tsx
│   │   │   ├── PrimaryButton.tsx
│   │   │   ├── SecondaryButton.tsx
│   │   │   ├── StatCounter.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   ├── BlogCard.tsx
│   │   │   └── BookingForm.tsx
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── TrustBarSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── ServicesSection.tsx
│   │       ├── TestimonialsSection.tsx
│   │       └── BookingSection.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── BlogListPage.tsx
│   │   └── ArticlePage.tsx
│   ├── hooks/
│   │   ├── useLanguage.tsx              # Language context + translation
│   │   ├── useCanvas.ts                 # Canvas lifecycle management
│   │   ├── useScrollTrigger.ts          # GSAP ScrollTrigger setup/cleanup
│   │   ├── useLenis.ts                  # Lenis smooth scroll instance
│   │   ├── useMediaQuery.ts             # Responsive breakpoint detection
│   │   ├── useInView.ts                 # IntersectionObserver wrapper
│   │   └── useCounter.ts                # Animated number counter
│   ├── context/
│   │   └── LanguageContext.tsx
│   ├── data/
│   │   ├── translations.ts              # All bilingual strings
│   │   ├── services.ts                  # 8 services data
│   │   ├── testimonials.ts              # 8 testimonials data
│   │   ├── articles.ts                  # All blog articles data
│   │   └── stats.ts                     # Trust bar stats
│   ├── types/
│   │   └── index.ts
│   ├── lib/
│   │   └── utils.ts                     # cn() utility + helpers
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                        # Global styles, font imports, CSS variables
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── components.json                      # shadcn/ui configuration
└── package.json
```

---

## 8. CSS Global Setup

```css
/* index.css — key global styles */
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --deep-navy: #071A2B;
    --medical-blue: #1E5DB4;
    --electric-blue: #3B8DFF;
    --trust-green: #10B981;
    --soft-blue: #E8F0FE;
    --ice-blue: #D6E6FF;
    --warm-gold: #C9A96E;
    --slate: #64748B;
    --light-slate: #94A3B8;
    --divider: #E2E8F0;
    --glass-white: rgba(255, 255, 255, 0.08);
    --glass-border: rgba(255, 255, 255, 0.15);
  }

  html {
    scroll-behavior: auto; /* Lenis handles smooth scroll */
  }

  html[dir="rtl"] body {
    font-family: 'Cairo', 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  html[dir="ltr"] body {
    font-family: 'Outfit', 'Cairo', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  body {
    background-color: var(--deep-navy);
    color: #ffffff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}

@layer components {
  .glassmorphism {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(20px) saturate(150%);
    -webkit-backdrop-filter: blur(20px) saturate(150%);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 16px;
  }

  .content-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 64px;
  }

  @media (max-width: 767px) {
    .content-container {
      padding: 0 20px;
    }
  }
}
```

---

## 9. Asset Inventory

### Images (to be generated)

| Asset | Dimensions | Ratio | Format | Transparency | Usage |
|-------|-----------|-------|--------|-------------|-------|
| `doctor-portrait.jpg` | 800×1067 | 3:4 | JPG | No | About section portrait |
| `avatar-1.jpg` – `avatar-8.jpg` | 200×200 | 1:1 | JPG | No | Testimonial patient photos |
| `blog-featured.jpg` | 1200×675 | 16:9 | JPG | No | Featured article hero |
| `blog-lasik.jpg` | 800×500 | 16:10 | JPG | No | LASIK article thumbnail |
| `blog-cataract.jpg` | 800×500 | 16:10 | JPG | No | Cataract article thumbnail |
| `blog-mistakes.jpg` | 800×500 | 16:10 | JPG | No | Eye mistakes article thumbnail |
| `blog-diabetic.jpg` | 800×500 | 16:10 | JPG | No | Diabetic retina article thumbnail |
| `blog-lens.jpg` | 800×500 | 16:10 | JPG | No | Lens implant article thumbnail |
| `blog-story.jpg` | 800×500 | 16:10 | JPG | No | Patient story article thumbnail |

Total: 17 images. No video assets required (hero is procedural canvas).

---

## 10. Responsive Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 768px | No section pinning, single column, reduced typography, canvas 0.25x resolution, testimonials → horizontal carousel, booking widget hidden |
| Tablet | 768–1024px | No pinning, 2-column grids where applicable, reduced padding |
| Desktop | > 1024px | Full pinned sections, 4-column service grid, dual-column testimonials, all animations active |

Detected via `useMediaQuery` hook:
```typescript
const isMobile = useMediaQuery('(max-width: 767px)');
const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');
const isDesktop = useMediaQuery('(min-width: 1025px)');
```

---

## 11. Performance Considerations

1. **Canvas resolution scaling**: 0.4x desktop / 0.25x mobile backing store. `image-rendering: pixelated` for intentional chunky aesthetic.
2. **Canvas render rate**: 30 FPS via `setInterval`, not `requestAnimationFrame`, to reduce CPU load.
3. **GSAP ScrollTrigger**: All triggers cleaned up in `useEffect` return to prevent memory leaks on unmount.
4. **Font loading**: Google Fonts with `display=swap` to prevent FOIT.
5. **Image optimization**: All images served as optimized JPGs. Avatar images kept small (200×200).
6. **Bundle size**: No heavy animation libraries beyond GSAP. No i18n library (flat translation object instead).
7. **Lazy loading**: Blog article images use `loading="lazy"`. Below-fold sections don't need eager loading.
8. **Reduced motion**: All animations respect `prefers-reduced-motion: reduce`.

---

## 12. Accessibility

1. **Keyboard navigation**: All interactive elements (buttons, links, form fields) are keyboard-accessible
2. **Focus indicators**: Visible focus rings (Medical Blue) on all interactive elements
3. **ARIA labels**: Canvas has `role="img"` and `aria-label` describing the visual
4. **Semantic HTML**: Proper heading hierarchy (h1 → h2 → h3), nav landmarks, main/section/article elements
5. **Reduced motion**: Full support via `prefers-reduced-motion`
6. **Color contrast**: All text meets WCAG AA contrast ratios against its background
7. **RTL support**: Full bidirectional text and layout support
