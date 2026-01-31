every point of this plan first has to be discussed and proceed only after confirmation

## CLEANUP
[x] change every mention of 2025 year to 2026. same cec'25 -> cec'26
[x] remove the "scroll thingie"
1. clean up all that came from lovable:
    [x] find all mentions (text, logo, images), and write them out here.
    **Lovable mentions found and handled:**
    - **package.json** — `lovable-tagger` devDependency → removed
    - **vite.config.ts** — `componentTagger` from lovable-tagger → removed
    - **index.html** — `og:image` and `twitter:image` pointed to lovable.dev → replaced with `/favicon.ico` (replace with a proper CEC social image when you have one)
    - **README.md** — Lovable project boilerplate → replaced with CEC-specific readme
    [x] remove all of them. skip those that cannot be simply removed and need to be replaced and mention them in the chat as soon as all that could be removed is removed.
1.1 [x] remove "capacity" block and center the rest: date, time, venue

2. [x] all text that needs to be moved to strings, move to strings. Like conference date, location, time, etc. speakers names, team names. speakers and team headshots? email, instagram, linkedin? registration link, all other links?
    **Done:** Single content file `src/content.ts` now holds: `event` (date, time, venue, ctaSubtext), `links` (registration, email, instagram url+handle, linkedin url+handle), `hero` (tagline, title lines, subtitle), `speakers`, `team`, `faqs`. All components import from there.
    - what do you think about moving all those things outside to some document or db idk for easier access and so other ppl can edit it and not only me? **Recommendation:** Keeping everything in `src/content.ts` is enough for now—version-controlled, one place to edit. Others can edit that file (or you can add a simple CMS / Google Sheet → build step later if you want non-devs editing without touching the repo).
