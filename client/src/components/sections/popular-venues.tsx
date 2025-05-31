import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { VenueCard } from "@/components/ui/venue-card";
import { api } from "@/lib/api";
import { ArrowRight } from "lucide-react";

const venueStyles = [
  {
    backgroundColor: "from-purple-600/20 to-blue-600/20",
    borderColor: "border-purple-500/30",
    accentColor: "text-cyan-400"
  },
  {
    backgroundColor: "from-pink-600/20 to-red-600/20",
    borderColor: "border-pink-500/30",
    accentColor: "text-pink-400"
  },
  {
    backgroundColor: "from-orange-600/20 to-yellow-600/20",
    borderColor: "border-orange-500/30",
    accentColor: "text-yellow-400"
  }
];

export function PopularVenues() {
  // Static venue data matching the reference design
  const staticVenues = [
    {
      id: 1,
      name: "Electric Lounge",
      location: "Downtown Rochester",
      description: "Premier nightclub featuring top DJs and electronic music.",
      capacity: 500,
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      upcomingEvents: [
        "Tonight: DJ Nightfall - House Music",
        "Fri: Electronic Vibes Night", 
        "Sat: Weekend Celebration"
      ]
    },
    {
      id: 2,
      name: "Sky Rooftop Bar",
      location: "East End District", 
      description: "Upscale rooftop experience with city views and craft cocktails.",
      capacity: 200,
      imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop",
      upcomingEvents: [
        "Tonight: Sunset Sessions",
        "Thu: Happy Hour Special",
        "Fri: Live Jazz Night"
      ]
    },
    {
      id: 3,
      name: "The Basement",
      location: "Park Avenue",
      description: "Underground venue known for live music and alternative crowds.",
      capacity: 300,
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      upcomingEvents: [
        "Tonight: Local Band Showcase",
        "Fri: Indie Rock Night",
        "Sat: Underground Sessions"
      ]
    }
  ];

  const { data: venues = staticVenues, isLoading = false, error } = useQuery({
    queryKey: ['/api/venues/popular'],
    queryFn: () => api.getPopularVenues(),
    enabled: false
  });

  if (error) {
    return (
      <section className="bg-slate-900 py-16" id="venues">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center mb-8">
              <span className="text-cyan-400 mr-3">📍</span> Popular Venues
            </h2>
            <p className="text-slate-400">Unable to load popular venues at this time. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-900 py-16" id="venues">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center">
            <span className="text-cyan-400 mr-3">📍</span> Popular{" "}
            <span className="text-cyan-400 ml-2">Venues</span>
          </h2>
          <Button className="bg-cyan-400 hover:bg-cyan-500 text-white flex items-center">
            View All Venues <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-slate-700 rounded-2xl h-96 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {venues.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-slate-400">No popular venues available at this time.</p>
              </div>
            ) : (
              venues.map((venue, index) => {
                const style = venueStyles[index % venueStyles.length];
                return (
                  <VenueCard
                    key={venue.id}
                    venue={venue}
                    backgroundColor={style.backgroundColor}
                    accentColor={style.accentColor}
                  />
                );
              })
            )}
          </div>
        )}
      </div>
    </section>
  );
}
