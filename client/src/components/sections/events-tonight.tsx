import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/ui/event-card";
import { api } from "@/lib/api";
import { ArrowRight } from "lucide-react";

interface EventsTonightProps {
  onBuyTicket?: (eventId: number) => void;
}

export function EventsTonight({ onBuyTicket }: EventsTonightProps) {
  // Static data matching the reference design
  const staticEvents = [
    {
      id: 1,
      name: "The Weeknd - After Hours Tour",
      venueName: "Madison Square Garden",
      dateTime: "2024-03-15T20:00:00",
      price: "89.00",
      originalPrice: "299.00",
      category: "Concert",
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      isFeatured: true
    },
    {
      id: 2,
      name: "NY Knicks vs Lakers",
      venueName: "Madison Square Garden", 
      dateTime: "2024-03-22T19:30:00",
      price: "125.00",
      originalPrice: "500.00",
      category: "Sports",
      imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop",
      isFeatured: true
    },
    {
      id: 3,
      name: "Hamilton",
      venueName: "Richard Rodgers Theatre",
      dateTime: "2024-03-20T20:00:00",
      price: "159.00",
      originalPrice: "849.00",
      category: "Theater",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      isFeatured: true
    }
  ];

  const { data: eventsTonight = staticEvents, isLoading = false, error } = useQuery({
    queryKey: ['/api/events/tonight'],
    queryFn: () => api.getEventsTonight(),
    enabled: false
  });

  if (error) {
    return (
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center mb-8">
              <span className="text-purple-400 mr-3">🌙</span> Events Tonight
            </h2>
            <p className="text-slate-400">Unable to load tonight's events at this time. Please try again later.</p>
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
            <span className="text-purple-400 mr-3">🌙</span> Events Tonight
          </h2>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-slate-700 rounded-2xl h-96 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventsTonight.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-slate-400">No events scheduled for tonight.</p>
              </div>
            ) : (
              eventsTonight.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onBuyTicket={onBuyTicket}
                  showOriginalPrice={true}
                />
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}
