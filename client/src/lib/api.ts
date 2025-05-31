import { Event, Venue, Deal, SearchParams } from '@/types';

const API_BASE_URL = 'https://api.rocticketny.com';

export class APIError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'APIError';
  }
}

async function apiRequest<T>(endpoint: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new APIError(`HTTP ${response.status}: ${response.statusText}`, response.status);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError('Network error occurred while connecting to the API');
  }
}

export const api = {
  // Events
  getEvents: () => apiRequest<Event[]>('/events'),
  getHotTickets: () => apiRequest<Event[]>('/events/hot-tickets'),
  getEventsTonight: () => apiRequest<Event[]>('/events/tonight'),
  searchEvents: (params: SearchParams) => 
    apiRequest<Event[]>(`/events/search?q=${encodeURIComponent(params.query)}&category=${encodeURIComponent(params.category)}`),
  
  // Venues
  getVenues: () => apiRequest<Venue[]>('/venues'),
  getPopularVenues: () => apiRequest<Venue[]>('/venues/popular'),
  
  // Deals
  getActiveDeals: () => apiRequest<Deal[]>('/deals/active'),
  claimDeal: (dealId: number) => apiRequest<{ success: boolean; message: string }>('/deals/claim', {
    method: 'POST',
    body: JSON.stringify({ deal_id: dealId }),
  }),
  
  // Tickets
  purchaseTicket: (eventId: number, quantity: number = 1) => apiRequest<{ success: boolean; message: string }>('/tickets/purchase', {
    method: 'POST',
    body: JSON.stringify({ event_id: eventId, quantity }),
  }),
};
