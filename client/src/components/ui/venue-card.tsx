import { MapPin } from "lucide-react";
import { Venue } from "@/types";

interface VenueCardProps {
  venue: Venue;
  backgroundColor?: string;
  accentColor?: string;
}

export function VenueCard({ 
  venue, 
  backgroundColor = "from-purple-600/20 to-blue-600/20",
  accentColor = "text-cyan-400"
}: VenueCardProps) {
  return (
    <div className={`bg-gradient-to-br ${backgroundColor} backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 glow-hover group`}>
      {venue.imageUrl && (
        <img
          src={venue.imageUrl}
          alt={venue.name}
          className="w-full h-40 object-cover rounded-xl mb-4"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      )}
      
      <div className="flex items-center mb-3">
        <MapPin className={`${accentColor} mr-2 h-5 w-5`} />
        <h3 className="text-xl font-bold text-white">{venue.name}</h3>
      </div>
      
      <p className="text-slate-300 mb-3">{venue.location}</p>
      
      {venue.description && (
        <p className="text-slate-400 text-sm mb-4">
          {venue.description}
          {venue.capacity && ` Capacity: ${venue.capacity}`}
        </p>
      )}
      
      {venue.upcomingEvents && venue.upcomingEvents.length > 0 && (
        <div className="mb-4">
          <h4 className={`${accentColor} font-semibold mb-2`}>Upcoming Events:</h4>
          <ul className="text-slate-300 text-sm space-y-1">
            {venue.upcomingEvents.map((event, index) => (
              <li key={index}>• {event}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
