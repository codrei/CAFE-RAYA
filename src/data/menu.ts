/**
 * Café Raya's menu, transcribed from the menu boards they sent.
 * Change a price here and it changes everywhere.
 *
 * `image` is a file name in src/assets/menu/ — the product photo cut from
 * their own board. The build fails loudly if one is missing.
 */

export interface MenuItem {
  name: string;
  price: number;
  image: string;
  description?: string;
  /** e.g. the five Chicken Poppers flavours */
  choices?: { label: string; options: string[] };
}

export interface MenuGroup {
  /** Sub-heading inside a section, e.g. "Coffee Based" under Frappe */
  title?: string;
  items: MenuItem[];
}

export interface MenuSection {
  id: string;
  title: string;
  /** Shorter label for the menu tabs, when the title is long. */
  tab?: string;
  /** Drinks follow their cream drinks boards; food follows the snacks/rice boards. */
  kind: 'drinks' | 'food';
  /** Grid of photos with the name beneath, or rows with a description beside. */
  layout: 'grid' | 'rows';
  note?: string;
  script?: string;
  groups: MenuGroup[];
  addOns?: { name: string; price: number; detail?: string }[];
}

export const menu: MenuSection[] = [
  {
    id: 'new-drinks',
    title: 'New Drinks',
    kind: 'drinks',
    layout: 'grid',
    script: 'Made with love, just for you.',
    groups: [
      {
        items: [
          // Their board reads "Coffe Jelly Frappe" — an obvious typo, fixed here.
          { name: 'Coffee Jelly Frappe', price: 180, image: 'coffee-jelly-frappe', description: 'Creamy coffee frappe with coffee jelly cubes' },
          { name: 'Iced Biscoffee', price: 175, image: 'iced-biscoffee', description: 'Smooth biscoff with a rich coffee blend' },
          { name: 'Iced Coffee Mallow', price: 170, image: 'iced-coffee-mallow', description: 'Coffee with fluffy mallow goodness' },
          { name: 'Iced Spanish Sub Oat Milk with Seasalt Cream', price: 190, image: 'iced-spanish-sub-oat-milk', description: 'Oat milk with spanish sub and creamy seasalt foam' },
          { name: 'Iced Caramel Americano Cold Foam', price: 170, image: 'iced-caramel-americano-cold-foam', description: 'Bold americano topped with caramel cold foam' },
          { name: 'Iced Seasalt Spanish Latte', price: 170, image: 'iced-seasalt-spanish-latte', description: 'Spanish latte topped with seasalt cream' },
          { name: 'Iced Seasalt Matcha', price: 175, image: 'iced-seasalt-matcha', description: 'Smooth matcha topped with seasalt cream' },
        ],
      },
    ],
  },
  {
    id: 'coffee',
    title: 'Coffee',
    kind: 'drinks',
    layout: 'rows',
    // Their hot and iced boards list the same nine drinks at the same prices.
    note: 'Hot or iced · same price',
    script: 'Good coffee. Good mood.',
    groups: [
      {
        items: [
          { name: 'Americano', price: 110, image: 'americano', description: 'Rich and bold with a smooth finish.' },
          { name: 'Cafe Latte', price: 150, image: 'cafe-latte', description: 'Smooth espresso with creamy milk.' },
          { name: 'Hazelnut', price: 160, image: 'hazelnut', description: 'Nutty and aromatic with a hint of sweetness.' },
          { name: 'Mocha', price: 160, image: 'mocha', description: 'Rich espresso blended with chocolate.' },
          { name: 'White Mocha', price: 160, image: 'white-mocha', description: 'Creamy white chocolate with espresso.' },
          { name: 'Vanilla Latte', price: 160, image: 'vanilla-latte', description: 'Smooth espresso with a touch of vanilla.' },
          { name: 'Caramel Macchiato', price: 165, image: 'caramel-macchiato', description: 'Espresso with steamed milk and caramel.' },
          { name: 'Salted Caramel Latte', price: 160, image: 'salted-caramel-latte', description: 'Sweet caramel with a hint of sea salt.' },
          { name: 'Spanish Latte', price: 160, image: 'spanish-latte', description: 'Creamy and slightly sweet with a touch of condensed milk.' },
        ],
      },
    ],
    addOns: [
      { name: 'Espresso Shot', price: 45 },
      { name: 'Oatmilk', price: 50 },
      { name: 'Syrup', price: 20, detail: 'Vanilla, hazelnut or caramel' },
      { name: 'Vanilla Sweet Cream Cold Foam', price: 20 },
    ],
  },
  {
    id: 'frappe',
    title: 'Frappe',
    kind: 'drinks',
    layout: 'grid',
    script: 'Good drinks. Great vibes.',
    groups: [
      {
        title: 'Coffee Based',
        items: [
          { name: 'Dark Mocha Frappe', price: 175, image: 'dark-mocha-frappe' },
          { name: 'Java Chip Frappe', price: 175, image: 'java-chip-frappe' },
          { name: 'Oreo Frappe', price: 175, image: 'oreo-frappe' },
          { name: 'Salted Caramel Frappe', price: 175, image: 'salted-caramel-frappe' },
        ],
      },
      {
        title: 'Non-Coffee Based',
        items: [
          { name: 'Caramel Frappe', price: 165, image: 'caramel-frappe' },
          { name: 'Cookies & Cream Frappe', price: 165, image: 'cookies-and-cream-frappe' },
          { name: 'Chocolate Frappe', price: 165, image: 'chocolate-frappe' },
          { name: 'Nutella Frappe', price: 165, image: 'nutella-frappe' },
          { name: 'Matcha Frappe', price: 165, image: 'matcha-frappe' },
        ],
      },
      {
        title: 'Non-Coffee Fruity',
        items: [
          { name: 'Strawberry Frappe', price: 165, image: 'strawberry-frappe' },
          { name: 'Blueberry Frappe', price: 165, image: 'blueberry-frappe' },
          { name: 'Mango Graham Frappe', price: 170, image: 'mango-graham-frappe' },
          { name: 'Orange Frappe', price: 165, image: 'orange-frappe' },
          { name: 'Strawberry Matcha Frappe', price: 170, image: 'strawberry-matcha-frappe' },
        ],
      },
    ],
  },
  {
    id: 'iced-non-coffee',
    title: 'Iced Non-Coffee',
    tab: 'Non-Coffee',
    kind: 'drinks',
    layout: 'grid',
    groups: [
      {
        items: [
          { name: 'Iced Chocolate Milk', price: 155, image: 'iced-chocolate-milk' },
          { name: 'Iced Chocoberry Milk', price: 160, image: 'iced-chocoberry-milk' },
          { name: 'Iced Matcha', price: 160, image: 'iced-matcha' },
          { name: 'Iced Strawberry Matcha', price: 165, image: 'iced-strawberry-matcha' },
          { name: 'Blueberry Milk', price: 155, image: 'blueberry-milk' },
          { name: 'Strawberry Milk', price: 155, image: 'strawberry-milk' },
          { name: 'Iced Nutella', price: 155, image: 'iced-nutella' },
        ],
      },
    ],
  },
  {
    id: 'fruit-tea',
    title: 'Fruit Tea',
    kind: 'drinks',
    layout: 'grid',
    note: 'With nata de coco',
    groups: [
      {
        items: [
          { name: 'Lychee Fruit Tea', price: 110, image: 'lychee-fruit-tea' },
          { name: 'Passion Fruit Tea', price: 110, image: 'passion-fruit-tea' },
          { name: 'Blueberry Fruit Tea', price: 110, image: 'blueberry-fruit-tea' },
          { name: 'Strawberry Fruit Tea', price: 110, image: 'strawberry-fruit-tea' },
        ],
      },
    ],
  },
  {
    id: 'yogurt',
    title: 'Yogurt Series',
    tab: 'Yogurt',
    kind: 'drinks',
    layout: 'grid',
    note: 'With nata de coco',
    groups: [
      {
        items: [
          { name: 'Strawberry Yogurt', price: 155, image: 'strawberry-yogurt' },
          { name: 'Blueberry Yogurt', price: 155, image: 'blueberry-yogurt' },
          { name: 'Mango Yogurt', price: 155, image: 'mango-yogurt' },
        ],
      },
    ],
  },
  {
    id: 'rice-meals',
    title: 'Rice Meals',
    kind: 'food',
    layout: 'rows',
    groups: [
      {
        items: [
          { name: 'Beef Tapa', price: 170, image: 'beef-tapa', description: 'Plain rice & fried egg' },
          { name: 'Luncheon Meat', price: 150, image: 'luncheon-meat', description: 'Plain rice & fried egg' },
          { name: 'Skinless Longganisa', price: 150, image: 'skinless-longganisa', description: 'Plain rice & fried egg' },
          { name: 'Chicken Katsu', price: 165, image: 'chicken-katsu', description: 'Plain rice & fried egg' },
          { name: 'Chicken Fillet', price: 165, image: 'chicken-fillet', description: 'Plain rice & fried egg' },
          { name: 'Pork Tapa', price: 165, image: 'pork-tapa', description: 'Plain rice & fried egg' },
        ],
      },
    ],
  },
  {
    id: 'snacks',
    title: 'Snacks',
    kind: 'food',
    layout: 'rows',
    groups: [
      {
        items: [
          { name: 'Fries', price: 70, image: 'fries' },
          { name: 'Fries and Nuggets', price: 125, image: 'fries-and-nuggets', description: '4 pcs' },
          { name: 'Fried Siomai', price: 140, image: 'fried-siomai', description: '12 pcs' },
          { name: 'Nachos', price: 125, image: 'nachos' },
          { name: 'Chicken Burger w/ Fries', price: 160, image: 'chicken-burger' },
          { name: 'Hashbrown', price: 85, image: 'hashbrown', description: '2 pcs' },
          { name: 'Fried Dumplings', price: 110, image: 'fried-dumplings', description: '5 pcs' },
          {
            name: 'Beef Burger w/ Fries',
            price: 165,
            image: 'beef-burger',
            description: 'Beef patty, luncheon meat, cucumber, pickles, mayonnaise, cheese & ketchup',
          },
          {
            name: 'Chicken Poppers w/ Fries',
            price: 160,
            image: 'chicken-poppers',
            choices: { label: 'Flavors', options: ['Buffalo', 'Honey Butter', 'Soy Garlic', 'Teriyaki', 'Sweet & Spicy'] },
          },
        ],
      },
    ],
  },
  {
    id: 'pasta',
    title: 'Pasta',
    kind: 'food',
    layout: 'rows',
    groups: [
      {
        items: [
          { name: 'Carbonara', price: 160, image: 'carbonara', description: 'With garlic bread' },
          { name: 'Spaghetti', price: 160, image: 'spaghetti', description: 'With garlic bread' },
        ],
      },
    ],
  },
  {
    id: 'waffles',
    title: 'Waffle',
    kind: 'food',
    layout: 'grid',
    groups: [
      {
        items: [
          { name: 'Plain Waffle', price: 100, image: 'plain-waffle' },
          { name: 'Chocolate Waffle', price: 110, image: 'chocolate-waffle' },
          { name: 'Strawberry Waffle', price: 110, image: 'strawberry-waffle' },
          { name: 'Blueberry Waffle', price: 110, image: 'blueberry-waffle' },
          { name: 'Mango Waffle', price: 110, image: 'mango-waffle' },
          { name: 'Cookies and Cream Waffle', price: 110, image: 'cookies-and-cream-waffle' },
        ],
      },
    ],
  },
];

export const itemCount = menu.reduce((n, s) => n + s.groups.reduce((m, g) => m + g.items.length, 0), 0);
