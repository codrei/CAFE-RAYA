/**
 * Everything about the shop itself, in one place, so the address or hours
 * can never say two different things on two different pages.
 *
 * Source: Budget Biyahera's Cuenca food guide (July 2026), not the café.
 * Confirm hours (and which days) with Café Raya before this goes live.
 *
 * Careful: there is a *different* Café Raya in Balanga, Bataan — its hours,
 * foodpanda listing and Facebook page are not this café's.
 */
const pageId = '100063919336968';
const phone = '+639465924950';
const place = "Café Raya, FJ's Building, Ibabao, Cuenca, Batangas";

export const cafe = {
  name: 'Café Raya',
  tagline: 'Brewed for your best moment.',
  address: {
    line1: "3rd Floor, FJ's Building",
    line2: 'Ibabao, Cuenca, Batangas',
  },
  hours: '2:00 PM – 10:00 PM',
  view: 'Mt. Maculot',
  phone: {
    display: '0946 592 4950',
    tel: `tel:${phone}`,
    sms: `sms:${phone}`,
  },
  facebook: `https://www.facebook.com/profile.php?id=${pageId}`,
  messenger: `https://m.me/${pageId}`,
  directions: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`,
} as const;
