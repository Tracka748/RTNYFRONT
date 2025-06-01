import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/ui/event-card";
import { api } from "@/lib/api";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface HotTicketsProps {
  onBuyTicket?: (eventId: number) => void;
}

export function HotTickets({ onBuyTicket }: HotTicketsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Static data matching the reference design
  const staticEvents = [
    {
      id: 1,
      name: "Hamilton",
      venueName: "Richard Rodgers Theatre",
      dateTime: "2024-03-20T20:00:00",
      price: "159.00",
      category: "Theater",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "The Weeknd - After Hours Tour",
      venueName: "Madison Square Garden", 
      dateTime: "2024-03-15T20:00:00",
      price: "89.00",
      category: "Concert",
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "NY Knicks vs Lakers",
      venueName: "Madison Square Garden",
      dateTime: "2024-03-22T19:30:00", 
      price: "125.00",
      category: "Sports",
      imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Blue Note Jazz Night",
      venueName: "Blue Note NYC",
      dateTime: "2024-03-18T21:00:00",
      price: "45.00", 
      category: "Jazz",
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
    }
  ];

  const { data: hotTickets = staticEvents, isLoading = false, error } = useQuery({
    queryKey: ['/api/events/hot-tickets'],
    queryFn: () => api.getHotTickets(),
    enabled: false
  });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (error) {
    return (
      <section className="bg-slate-800 py-16" id="events">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center mb-8">
              <span className="text-orange-500 mr-3">🔥</span> Hot Tickets
            </h2>
            <p className="text-slate-400">Unable to load hot tickets at this time. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-r from-slate-800 via-red-900/20 to-slate-800 py-20 relative overflow-hidden" id="events">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center">
            <span className="text-orange-500 mr-3">🔥</span> Hot Tickets
          </h2>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="bg-slate-700 hover:bg-slate-600 border-slate-600"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="bg-slate-700 hover:bg-slate-600 border-slate-600"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              View All
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="min-w-[300px] bg-slate-700 rounded-2xl h-96 animate-pulse" />
            ))}
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
          >
            {hotTickets.length === 0 ? (
              <div className="w-full text-center py-12">
                <p className="text-slate-400">No hot tickets available at this time.</p>
              </div>
            ) : (
              hotTickets.map((event) => (
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
