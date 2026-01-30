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

2. all text that needs to be moved to strings, move to strings. Like conference date, loation, time, etc. speakers names, team names. speakers and team headshots? what else should be moved to strings and what shouldn't? email, instagram, linkedin? registration link, all other links?
    - what do you think about moving all those things outside to some document or db idk for easier access and so other ppl can edit it and not only me? dont do anything just discuss first.
