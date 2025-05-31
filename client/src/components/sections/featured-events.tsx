import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/ui/event-card";
import { api } from "@/lib/api";
import { ArrowRight } from "lucide-react";

interface FeaturedEventsProps {
  onBuyTicket?: (eventId: number) => void;
}

export function FeaturedEvents({ onBuyTicket }: FeaturedEventsProps) {
  // Static featured events data
  const staticFeaturedEvents = [
    {
      id: 1,
      name: "Electric Sunset Festival",
      venueName: "Waterfront Amphitheater",
      dateTime: "2024-03-25T19:00:00",
      price: "75.00",
      category: "Festival",
      imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop",
      isFeatured: true
    },
    {
      id: 2,
      name: "Underground Jazz Sessions",
      venueName: "Blue Note Rochester",
      dateTime: "2024-03-23T21:00:00",
      price: "35.00",
      category: "Jazz",
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      isFeatured: true
    },
    {
      id: 3,
      name: "Rooftop Dance Party",
      venueName: "Sky Lounge Rochester",
      dateTime: "2024-03-24T22:00:00",
      price: "25.00",
      category: "Dance",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      isFeatured: true
    },
    {
      id: 4,
      name: "Live Rock Concert",
      venueName: "Electric Lounge",
      dateTime: "2024-03-26T20:00:00",
      price: "45.00",
      category: "Rock",
      imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop",
      isFeatured: true
    }
  ];

  const { data: featuredEvents = staticFeaturedEvents, isLoading = false, error } = useQuery({
    queryKey: ['/api/events/featured'],
    queryFn: () => api.getEvents(),
    enabled: false
  });

  if (error) {
    return (
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center mb-8">
              <span className="text-yellow-500 mr-3">⭐</span> Featured Events
            </h2>
            <p className="text-slate-400">Unable to load featured events at this time. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center">
            <span className="text-yellow-500 mr-3">⭐</span> Featured Events
          </h2>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black flex items-center font-medium">
            View All Featured <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-slate-700 rounded-2xl h-96 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredEvents.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-slate-400">No featured events available at this time.</p>
              </div>
            ) : (
              featuredEvents.slice(0, 4).map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onBuyTicket={onBuyTicket}
                />
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}