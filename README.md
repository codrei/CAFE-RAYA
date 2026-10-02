# Café Raya — website preview

A website for **Café Raya**, 3rd Floor, FJ's Building, Ibabao, Cuenca, Batangas.

This is a **preview** built to show the café, not their official site yet. It is
hidden from Google (`noindex`) until they approve it.

The design follows their own printed menu boards: the cream drinks boards with
hand-drawn coffee branches, and the sand-coloured snacks and rice boards with
laurel sprigs. Colours were sampled from their files, and every product photo is
cut from their own boards.

## Changing things

| To change… | Edit |
| --- | --- |
| A price, a dish, a description | `src/data/menu.ts` |
| Address, hours, phone, Facebook | `src/data/cafe.ts` |
| A product photo | Replace the file with the same name in `src/assets/menu/` |

Every price lives in one place, so changing it once updates the home page and
the menu page together.

**Photos:** drinks are 3:4 (portrait), food is 3:2 (landscape). Each menu item
names its photo, e.g. `image: 'iced-biscoffee'` → `src/assets/menu/iced-biscoffee.png`.
The build stops with an error if a photo is missing, so nothing goes live with
an empty frame.

## Running it

Needs Node 22.12 or newer.

```sh
npm install
npm run dev       # local preview at http://localhost:4321
npm run build     # production build into dist/
```

Built with [Astro](https://astro.build) and Tailwind CSS. The output is plain
static HTML: every menu item is in the page source, so search engines and link
previews can read it, and it loads fast on mobile data. The only JavaScript is
the phone menu and the menu-tab highlighting.

## Before this becomes their real site

The shop details came from a July 2026 food guide, not from the café. Confirm:

- [ ] Opening hours, and **which days** they're open (the site says 2:00 PM – 10:00 PM, no days)
- [ ] Phone number 0946 592 4950
- [ ] The rooftop view of Mt. Maculot
- [ ] Their Instagram and TikTok handles, so they can be linked (not included yet)
- [ ] Which items are **customer favourites** — their snacks board has a "★ = Customer
      Favorites" legend but no stars on any item
- [ ] The original menu design files, if they have them — sharper photos and the exact fonts

Watch out: there is a **different Café Raya in Balanga, Bataan**. Its hours,
foodpanda listing and Facebook page are not this café's.

Then remove the `noindex` line in `src/layouts/Base.astro`.

---

Built by [Marco Belen](https://marcobelen.vercel.app).
