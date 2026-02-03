# CEC — Computer Engineering Conference

Website for the Computer Engineering Conference (CEC), a student-driven conference at uOttawa.

---

## ✏️ How to edit content (pics, names, dates, links)

Content is split by language: **`src/content/en.ts`** (English) and **`src/content/fr.ts`** (French). Keep both in sync when changing event data, links, or copy.

| To change… | Edit in `content/en.ts` and `content/fr.ts`… |
|------------|---------------------------------------------|
| **Event date, time, or venue** | `event.date`, `event.time`, `event.venue` |
| **Hero tagline** (e.g. “Spring 2026 • Registration Open”) | `hero.tagline` |
| **Registration link** (e.g. Luma) | `links.registration` |
| **Contact email** | `links.email` |
| **Instagram / LinkedIn** URL or handle | `links.instagram`, `links.linkedin` |
| **Speaker name, photo, or bio** | `speakers` array — each item has `name`, `focus`, `bio`, `image` |
| **Team member name, photo, or role** | `team` array — each item has `name`, `role`, `image` |
| **FAQ questions or answers** | `faqs` array — each item has `question` and `answer` |
| **UI labels, section titles, buttons** | `ui` object (nav, hero, about, event, speakers, team, contact, footer, notFound, meta) |

**Changing a picture:** set the `image` field to the image URL or a path like `'/team/name.jpg'` if the file is in `public/`.

**Stay Updated (newsletter) signups:** The Contact section has a “Stay Updated” form. To actually save emails, use [Formspree](https://formspree.io) (free): create a form with one field (e.g. “email”), get the form endpoint (e.g. `https://formspree.io/f/xxxxx`), and set **`links.newsletterFormEndpoint`** to that URL in both **`content/en.ts`** and **`content/fr.ts`**. Submissions will appear in your Formspree dashboard (and you can export or get notified). Leave it empty to keep the current behaviour (toast only, no save).

Save the file; the dev server will reload. No need to edit any `.tsx` files for content changes.

---

## 🌐 How the French version works

The site is bilingual (English and French) with **no i18n library**: everything is driven by URL and two content files.

- **URLs:** English is at `/` (or `/cec-webpage` when deployed). French is at `/fr` (or `/cec-webpage/fr`). The locale is read from the path, so the French page has its own shareable link and works with the existing GitHub Pages base path.
- **Content:** All user-visible text lives in **`src/content/en.ts`** and **`src/content/fr.ts`**. Each file exports the same shape: `event`, `links`, `hero`, `speakers`, `team`, `faqs`, and a `ui` object for nav labels, section titles, buttons, form labels, footer, 404 copy, and meta (title, description, etc.). Components never hardcode strings; they read from the active locale’s content via **`LocaleContext`**.
- **Switcher:** The nav bar and footer include an **EN** / **FR** link that goes to `/` or `/fr` (with basename applied). Clicking it changes the URL and the whole page re-renders in the other language.
- **Document head:** The page title and meta tags (description, keywords, Open Graph) are set in React from `content.ui.meta` when the locale changes, so search and social previews use the correct language.

To add or change French copy, edit **`src/content/fr.ts`** and keep its structure in sync with **`src/content/en.ts`**.

**Reload / direct link:** On GitHub Pages, paths like `/cec-webpage/fr` don’t exist as files. The build copies `index.html` to `404.html` so that when you open or reload `/cec-webpage/fr`, GitHub serves the SPA; the URL stays correct and the app shows the French version.

---

## Run locally

```sh
npm i
npm run dev
```

Open the URL shown (usually http://localhost:8080).

## Tech

- Vite, React, TypeScript
- Tailwind CSS, shadcn/ui

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run preview` — preview production build
