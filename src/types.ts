export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  formattedPrice: string;
  category: 'cakes' | 'cupcakes' | 'custom';
  image: string;
  badge?: string;
  servings?: string;
  rating?: number;
  availableSizes?: { name: string; multiplier: number; label: string }[];
}

export interface Flavor {
  id: string;
  name: string;
  description: string;
  notes: string;
  color: string;
  tag: string;
  image: string;
}

export interface CustomCakeType {
  id: string;
  title: string;
  description: string;
  image: string;
  badge: string;
  popularFor: string;
  estimatedLeadTime: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Birthday' | 'Wedding' | 'Custom' | 'Cupcakes' | 'Luxury';
  image: string;
  description: string;
  flavorProfile: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  review: string;
  celebration: string;
  date: string;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  image: string;
  size: string;
  flavor: string;
  customMessage: string;
  quantity: number;
  unitPrice: number;
}

export interface OrderFormData {
  fullName: string;
  phone: string;
  email: string;
  cakeType: string;
  flavor: string;
  cakeSize: string;
  eventDate: string;
  preferredDesign: string;
  additionalMessage: string;
}
