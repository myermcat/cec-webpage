# CEC — Computer Engineering Conference

Website for the Computer Engineering Conference (CEC), a student-driven conference at uOttawa.

---

## ✏️ How to edit content (pics, names, dates, links)

**Edit one file:** **`src/content.ts`**

Everything that appears on the site as “content” lives there. No need to touch component code.

| To change… | Edit in `src/content.ts`… |
|------------|----------------------------|
| **Event date, time, or venue** | `event.date`, `event.time`, `event.venue` |
| **Hero tagline** (e.g. “Spring 2026 • Registration Open”) | `hero.tagline` |
| **Registration link** (e.g. Luma) | `links.registration` |
| **Contact email** | `links.email` |
| **Instagram / LinkedIn** URL or handle | `links.instagram.url`, `links.instagram.handle`, `links.linkedin.url`, `links.linkedin.handle` |
| **Speaker name, photo, or bio** | `speakers` array — each item has `name`, `focus`, `bio`, `image` (use image URL) |
| **Team member name, photo, or role** | `team` array — each item has `name`, `role`, `image` (use image URL) |
| **FAQ questions or answers** | `faqs` array — each item has `question` and `answer` |

**Changing a picture:** set the `image` field to the image URL (e.g. `'https://...'` or a path like `'/images/speaker.jpg'` if you put the file in `public/`).

**Changing a name:** edit the `name` (or `handle`) in the right place in `src/content.ts` (e.g. in `speakers`, `team`, or `links`).

Save the file; the dev server will reload. No need to edit any `.tsx` files for content changes.

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
