# ph0ng.vercel.app

My personal site. Next.js 15 (App Router) + Tailwind + Framer Motion, deployed on Vercel.

## Running it

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Editing content

**All copy lives in [`app/content.ts`](app/content.ts)** — bio, jobs, projects, skills, education, and links. Editing text should never mean touching a component.

- `profile` — name, IPA transcription, bio, what I'm currently doing, contact links
- `roles` — work history, newest first. Each has `org`, `title`, `place`, `start`, `end`, `stack`, `notes`
- `earlierRoles` — the one-line footnote for older roles
- `projects` — each has `name`, `year`, `blurb`, `tech`, and a `links` array (an empty array just hides the link row)
- `toolkit` / `education`

To swap the resume, drop a new PDF at `public/resume.pdf`. To swap the photo, replace `public/profile.png`.

## Design system

Set up in [`tailwind.config.ts`](tailwind.config.ts) and [`app/globals.css`](app/globals.css).

| Token | Value | Used for |
| --- | --- | --- |
| `ink` | `#14131A` | page background |
| `ink-rule` | `#2A2833` | hairline rules and borders |
| `paper` | `#EDE8DE` | primary text |
| `paper-dim` | `#A29CAC` | body copy |
| `paper-faint` | `#6E6879` | labels, timestamps |
| `amber` | `#F0A868` | accent, links, IPA |
| `plum` | `#8A7A9B` | job titles, tech lists |

Type: **Fraunces** (`font-display`), **Instrument Sans** (`font-sans`), **IBM Plex Mono** (`font-mono`), all loaded via `next/font`.

The organizing idea is a dictionary: the hero is entry 01 with an IPA pronunciation and a part-of-speech tag, and each section head is another numbered entry rendered by [`SectionHeading`](app/components/SectionHeading.tsx). If you add a section, give it the next entry number.

## Structure

```
app/
  content.ts              all site copy
  layout.tsx              fonts + metadata
  page.tsx                nav, section order, MotionConfig
  globals.css             base styles, grain texture, reduced-motion
  components/
    HeroSection.tsx
    WorkExperience.tsx
    Projects.tsx
    Toolkit.tsx           skills + education
    ContactSection.tsx
    SectionHeading.tsx    the numbered dictionary-entry heading
```

## Notes

- Motion respects `prefers-reduced-motion` via `MotionConfig reducedMotion="user"` in `page.tsx` plus a CSS fallback in `globals.css`.
- Don't run `npm run build` while `npm run dev` is running — they share `.next` and the dev server will fall over.
- A hydration warning about `data-darkreader-*` attributes comes from the Dark Reader browser extension, not from this code.

---

Originally scaffolded from [this template](https://www.devportfoliotemplates.com/portfolio-templates/backend-developer); very little of it remains.
