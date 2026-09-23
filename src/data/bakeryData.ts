import { Product, Flavor, CustomCakeType, GalleryItem, Review } from '../types';
import heroArtisanCake from '../assets/images/hero_artisan_cake_1790094465313.jpg';
import bakeryChefAbout from '../assets/images/bakery_chef_about_1790094479683.jpg';
import luxuryCustomCake from '../assets/images/luxury_custom_cake_1790094493162.jpg';

export { heroArtisanCake, bakeryChefAbout, luxuryCustomCake };

export const BAKERY_INFO = {
  name: "Michael's Baker",
  tagline: "Handcrafted Cakes Made for Your Special Moments",
  subTagline: "Delicious custom cakes, cupcakes and desserts freshly baked with love and beautifully designed for every celebration.",
  trustStatement: "Freshly Baked • Custom Designed • Made With Love",
  phone: "+92 XXX XXXXXXX",
  email: "hello@michaelsbaker.com",
  location: "Karachi, Pakistan",
  hours: "Monday – Sunday: 10:00 AM – 10:00 PM",
  whatsappNumber: "923000000000",
  whatsappDefaultMsg: "Hi Michael's Baker! I'd like to place an order. Please share your available cake options.",
};

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'prod-chocolate-fudge',
    name: 'Chocolate Fudge Cake',
    description: 'Decadent layers of moist Dutch chocolate sponge infused with rich Belgian chocolate fudge ganache.',
    price: 3200,
    formattedPrice: 'PKR 3,200',
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=900&auto=format&fit=crop',
    badge: 'Best Seller',
    servings: '6–8 Servings (2 lbs)',
    rating: 4.9,
    availableSizes: [
      { name: '1.5 lbs', multiplier: 0.8, label: 'Small (4-6 slices)' },
      { name: '2.5 lbs', multiplier: 1.0, label: 'Standard (8-10 slices)' },
      { name: '4 lbs', multiplier: 1.6, label: 'Large (14-16 slices)' },
      { name: '2-Tier 6 lbs', multiplier: 2.5, label: 'Grand Party (20+ slices)' },
    ]
  },
  {
    id: 'prod-vanilla-celebration',
    name: 'Vanilla Celebration Cake',
    description: 'Fluffy Madagascar vanilla bean sponge layered with silky Swiss meringue buttercream and white chocolate pearls.',
    price: 2900,
    formattedPrice: 'PKR 2,900',
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=900&auto=format&fit=crop',
    badge: 'Signature',
    servings: '6–8 Servings (2 lbs)',
    rating: 4.8,
    availableSizes: [
      { name: '1.5 lbs', multiplier: 0.8, label: 'Small (4-6 slices)' },
      { name: '2.5 lbs', multiplier: 1.0, label: 'Standard (8-10 slices)' },
      { name: '4 lbs', multiplier: 1.6, label: 'Large (14-16 slices)' },
    ]
  },
  {
    id: 'prod-red-velvet',
    name: 'Red Velvet Cake',
    description: 'Classic velvety crimson crumb with delicate cocoa notes and our signature whipped Philadelphia cream cheese frosting.',
    price: 3400,
    formattedPrice: 'PKR 3,400',
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=900&auto=format&fit=crop',
    badge: 'Crowd Favorite',
    servings: '6–8 Servings (2 lbs)',
    rating: 5.0,
    availableSizes: [
      { name: '1.5 lbs', multiplier: 0.8, label: 'Small (4-6 slices)' },
      { name: '2.5 lbs', multiplier: 1.0, label: 'Standard (8-10 slices)' },
      { name: '4 lbs', multiplier: 1.6, label: 'Large (14-16 slices)' },
    ]
  },
  {
    id: 'prod-strawberry-cream',
    name: 'Strawberry Cream Cake',
    description: 'Light chiffon sponge soaked with fresh strawberry coulis, Chantilly cream, and hand-picked fresh sliced strawberries.',
    price: 3100,
    formattedPrice: 'PKR 3,100',
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=900&auto=format&fit=crop',
    badge: 'Fresh Seasonal',
    servings: '6–8 Servings (2 lbs)',
    rating: 4.9,
    availableSizes: [
      { name: '1.5 lbs', multiplier: 0.8, label: 'Small (4-6 slices)' },
      { name: '2.5 lbs', multiplier: 1.0, label: 'Standard (8-10 slices)' },
      { name: '4 lbs', multiplier: 1.6, label: 'Large (14-16 slices)' },
    ]
  },
  {
    id: 'prod-chocolate-cupcakes',
    name: 'Chocolate Cupcakes',
    description: 'Box of 6 gourmet moist dark chocolate cupcakes with swirled ganache, gold dust, and artisanal chocolate crisps.',
    price: 1800,
    formattedPrice: 'PKR 1,800',
    category: 'cupcakes',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=900&auto=format&fit=crop',
    badge: 'Box of 6',
    servings: '6 Cupcakes',
    rating: 4.8,
    availableSizes: [
      { name: 'Box of 6', multiplier: 1.0, label: '6 Gourmet Cupcakes' },
      { name: 'Box of 12', multiplier: 1.85, label: '12 Party Box' },
      { name: 'Box of 24', multiplier: 3.5, label: '24 Celebration Platter' },
    ]
  },
  {
    id: 'prod-custom-birthday-cake',
    name: 'Custom Birthday Cake',
    description: 'Bespoke design tailored to your birthday theme, custom color palette, personalized topper, and premium flavor.',
    price: 4500,
    formattedPrice: 'From PKR 4,500',
    category: 'custom',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=900&auto=format&fit=crop',
    badge: 'Bespoke Art',
    servings: 'Customizable 2–6 lbs',
    rating: 5.0,
    availableSizes: [
      { name: '2.5 lbs', multiplier: 1.0, label: 'Standard 2.5 lbs' },
      { name: '3.5 lbs', multiplier: 1.4, label: 'Medium 3.5 lbs' },
      { name: '2-Tier 5 lbs', multiplier: 2.1, label: 'Double Tier 5 lbs' },
      { name: '3-Tier 8 lbs', multiplier: 3.4, label: 'Grand 3-Tier 8 lbs' },
    ]
  },
];

export const CUSTOM_CAKE_TYPES: CustomCakeType[] = [
  {
    id: 'birthday',
    title: 'Birthday Cakes',
    description: 'From joyful milestone celebrations to magical themed creations with bespoke sugar art and personal messages.',
    image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=800&auto=format&fit=crop',
    badge: 'Most Popular',
    popularFor: 'Ages 1 to 100, Theme Parties',
    estimatedLeadTime: '24–48 Hours',
  },
  {
    id: 'wedding',
    title: 'Wedding Cakes',
    description: 'Multi-tiered centerpiece showstoppers with cascading sugar florals, delicate texture work, and regal elegance.',
    image: luxuryCustomCake,
    badge: 'Masterpiece',
    popularFor: 'Receptions & Engagement Ceremonies',
    estimatedLeadTime: '3–5 Days',
  },
  {
    id: 'anniversary',
    title: 'Anniversary Cakes',
    description: 'Romantic vintage piping, delicate lace embossing, and metallic luster designed to commemorate cherished journeys.',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=800&auto=format&fit=crop',
    badge: 'Romantic',
    popularFor: 'Silver, Golden, and Annual Milestones',
    estimatedLeadTime: '24–48 Hours',
  },
  {
    id: 'character',
    title: 'Character & Theme Cakes',
    description: 'Playful fondant sculpting, superhero themes, cartoon characters, and gaming concepts crafted with perfection.',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=800&auto=format&fit=crop',
    badge: 'Kids & Teens',
    popularFor: 'Themed Birthdays & Graduations',
    estimatedLeadTime: '48 Hours',
  },
  {
    id: 'floral',
    title: 'Floral Cakes',
    description: 'Fresh botanical garden styling featuring safe edible blooms, hand-piped buttercream petals, and watercolor ganache.',
    image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=800&auto=format&fit=crop',
    badge: 'Artisanal',
    popularFor: 'Bridal Showers & Spring Gatherings',
    estimatedLeadTime: '24–48 Hours',
  },
  {
    id: 'luxury',
    title: 'Luxury Cakes',
    description: '24k edible gold leaf accents, geometric marble fondant finishes, isomalt crystals, and lavish velvet textures.',
    image: heroArtisanCake,
    badge: 'Exclusive',
    popularFor: 'High-Profile Galas & VIP Celebrations',
    estimatedLeadTime: '3–4 Days',
  },
];

export const CAKE_FLAVORS: Flavor[] = [
  {
    id: 'chocolate',
    name: 'Chocolate',
    description: 'Deep, fudgy chocolate sponge with silky 54% dark Belgian chocolate ganache.',
    notes: 'Rich • Velvety • Intense',
    color: '#3B1F17',
    tag: 'Classic',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'vanilla',
    name: 'Vanilla',
    description: 'Fragrant Madagascar bourbon vanilla sponge paired with delicate French buttercream.',
    notes: 'Aromatic • Tender • Timeless',
    color: '#D4B996',
    tag: 'Delicate',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'red-velvet',
    name: 'Red Velvet',
    description: 'Traditional buttermilk and cocoa ruby sponge layered with tangy whipped cream cheese.',
    notes: 'Smooth • Tangy • Luxurious',
    color: '#8A1C24',
    tag: 'Favorite',
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    description: 'Fresh strawberry puree infused sponge with strawberry reduction and whipped Chantilly.',
    notes: 'Berry Sweet • Light • Refreshing',
    color: '#C94A58',
    tag: 'Fruity',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'coffee',
    name: 'Coffee',
    description: 'Fresh espresso-soaked sponge with mocha praline mousse and roasted walnut crunch.',
    notes: 'Bold Espresso • Toasted • Nutty',
    color: '#4B3621',
    tag: 'Gourmet',
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'black-forest',
    name: 'Black Forest',
    description: 'Kirsch-scented dark chocolate sponge layered with tart Morello sour cherries and cream.',
    notes: 'Dark Cocoa • Tart Cherry • Creamy',
    color: '#261214',
    tag: 'Traditional',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'lotus',
    name: 'Lotus',
    description: 'Spiced Belgian speculoos sponge layered with caramelized Lotus Biscoff butter and crunch.',
    notes: 'Caramelized • Spiced • Addictive',
    color: '#B06D3B',
    tag: 'Trending',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'ferrero-rocher',
    name: 'Ferrero Rocher',
    description: 'Nutella-infused chocolate sponge layered with crushed roasted hazelnuts and crispy wafer pearls.',
    notes: 'Roasted Hazelnut • Nutella • Crunchy',
    color: '#53311E',
    tag: 'Supreme',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=600&auto=format&fit=crop',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Ivory Bloom Tiered Wedding Cake',
    category: 'Wedding',
    image: luxuryCustomCake,
    description: 'Three-tiered architectural wedding cake with ivory sugar peonies and edible gold trim.',
    flavorProfile: 'Madagascar Vanilla & Raspberry Coulis',
  },
  {
    id: 'gal-2',
    title: 'Golden Drizzle Artisan Cake',
    category: 'Luxury',
    image: heroArtisanCake,
    description: 'Handcrafted buttercream tiered design with dark chocolate drip, fresh figs, and golden dust.',
    flavorProfile: 'Ferrero Rocher & Belgian Chocolate',
  },
  {
    id: 'gal-3',
    title: 'Vintage Floral Lambeth Cake',
    category: 'Birthday',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=800&auto=format&fit=crop',
    description: 'Traditional British Lambeth intricate over-piped borders in soft pastel blush and cream.',
    flavorProfile: 'Classic Red Velvet with Cream Cheese',
  },
  {
    id: 'gal-4',
    title: 'Gourmet Swirl Chocolate Cupcakes',
    category: 'Cupcakes',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=800&auto=format&fit=crop',
    description: 'Artisanal chocolate cupcakes topped with dark chocolate curls and golden crisp pearls.',
    flavorProfile: 'Dark Dutch Chocolate Ganache',
  },
  {
    id: 'gal-5',
    title: 'Modern Abstract Palette Cake',
    category: 'Custom',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=800&auto=format&fit=crop',
    description: 'Textured palette knife oil-painting effect with natural botanical floral arrangements.',
    flavorProfile: 'Lotus Biscoff Crunch',
  },
  {
    id: 'gal-6',
    title: 'Berry Royale Celebration Gateau',
    category: 'Birthday',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop',
    description: 'Towering semi-naked celebration cake with organic berries, rosemary sprigs, and dusted sugar.',
    flavorProfile: 'Fresh Strawberry & Chantilly',
  },
  {
    id: 'gal-7',
    title: 'Regal Marble & Gold Fondant Cake',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=800&auto=format&fit=crop',
    description: 'Hand-veined Carrera marble fondant styling accented by 24k gold leaf geometric ribbons.',
    flavorProfile: 'Rich Chocolate Fudge Ganache',
  },
  {
    id: 'gal-8',
    title: 'Bespoke Graduation & Themed Cake',
    category: 'Custom',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=800&auto=format&fit=crop',
    description: 'Custom sculpted commemorative cake with tailored colors, personalized lettering, and emblem.',
    flavorProfile: 'Espresso Mocha Praline',
  },
  {
    id: 'gal-9',
    title: 'Pastel Rosette Cupcake Bouquets',
    category: 'Cupcakes',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=800&auto=format&fit=crop',
    description: 'Delicate hand-piped Swiss buttercream rosebuds in a boutique presentation gift box.',
    flavorProfile: 'Vanilla Bean & Rose Essence',
  },
];

export const ORDER_STEPS = [
  {
    step: '01',
    title: 'Choose Your Cake',
    description: 'Select your favorite flavor, size, and design archetype from our signature collection or custom gallery.',
    icon: 'Cake',
  },
  {
    step: '02',
    title: 'Customize',
    description: 'Tell us your preferred colors, theme, tier count, cake inscription, and dietary preferences.',
    icon: 'Palette',
  },
  {
    step: '03',
    title: 'Confirm Your Order',
    description: 'Send your order details and confirm the delivery or pickup date with our master baker.',
    icon: 'CalendarCheck',
  },
  {
    step: '04',
    title: 'Enjoy',
    description: 'Pick up from our studio or receive your freshly baked, temperature-controlled cake right on time.',
    icon: 'Sparkles',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Sarah M.',
    rating: 5,
    review: 'Absolutely beautiful cake and it tasted even better than it looked. Everyone at our gathering loved it!',
    celebration: '30th Birthday Celebration',
    date: 'Recent Order',
  },
  {
    id: 'rev-2',
    name: 'David K.',
    rating: 5,
    review: 'Ordered a custom two-tier wedding anniversary cake. The Belgian chocolate and raspberry filling was sublime. Flawless execution and delivered exactly at the promised hour.',
    celebration: 'Wedding Anniversary',
    date: 'Recent Order',
  },
  {
    id: 'rev-3',
    name: 'Fatima R.',
    rating: 5,
    review: 'The Lotus Biscoff flavor was out of this world! Pristine buttercream piping and the moisture was spot on. Michael’s Baker is now our family’s official bakery.',
    celebration: 'Family Reunion',
    date: 'Recent Order',
  },
  {
    id: 'rev-4',
    name: 'Elena M.',
    rating: 5,
    review: 'Michael’s Baker made our daughter’s dream birthday cake. Fresh, moist, not overly sweet, just perfection. Guests could not stop complimenting the design!',
    celebration: 'Sweet 16 Party',
    date: 'Recent Order',
  },
];

export const ABOUT_PILLARS = [
  {
    title: 'Quality Ingredients',
    description: 'Pure dairy butter, farm-fresh eggs, 100% Belgian chocolate, and real Madagascar vanilla beans with zero artificial shortcuts.',
  },
  {
    title: 'Freshly Baked Products',
    description: 'Every single cake is baked to order on the morning of your event so every slice melts with peak fluffiness and aroma.',
  },
  {
    title: 'Custom Designs',
    description: 'From minimalist modern texturing to elaborate multi-tiered wedding structures, our confectionery artists turn ideas into edible art.',
  },
  {
    title: 'Attention to Detail',
    description: 'Every edge is leveled to millimeter precision, every sugar petal handcrafted, and every ribbon placed with immaculate care.',
  },
  {
    title: 'Customer Satisfaction',
    description: 'Trusted by hundreds of families for life’s most cherished celebrations with personalized care from consultation to delivery.',
  },
];
