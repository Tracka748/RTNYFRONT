export interface Event {
  id: number;
  name: string;
  description?: string;
  venueId?: number;
  venueName: string;
  dateTime: string;
  price: string;
  originalPrice?: string;
  category: string;
  imageUrl?: string;
  isFeatured?: boolean;
  isHotTicket?: boolean;
  isTonight?: boolean;
}

export interface Venue {
  id: number;
  name: string;
  location: string;
  description?: string;
  capacity?: number;
  imageUrl?: string;
  upcomingEvents?: string[];
}

export interface Deal {
  id: number;
  title: string;
  description: string;
  isActive: boolean;
  validUntil?: string;
}

export interface SearchParams {
  query: string;
  category: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  gradient: string;
}
