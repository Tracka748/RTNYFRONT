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
  const { data: venues = [], isLoading, error } = useQuery({
    queryKey: ['/api/venues/popular'],
    queryFn: () => api.getPopularVenues(),
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
