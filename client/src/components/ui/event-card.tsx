import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { Event } from "@/types";

interface EventCardProps {
  event: Event;
  onBuyTicket?: (eventId: number) => void;
  showOriginalPrice?: boolean;
}

export function EventCard({ event, onBuyTicket, showOriginalPrice = false }: EventCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'theater':
        return 'bg-blue-600';
      case 'concert':
        return 'bg-purple-600';
      case 'sports':
        return 'bg-orange-600';
      case 'jazz':
        return 'bg-yellow-600';
      default:
        return 'bg-gray-600';
    }
  };

  const formatDateTime = (dateTime: string) => {
    const date = new Date(dateTime);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="min-w-[300px] bg-slate-700 rounded-2xl overflow-hidden glow-hover group">
      {event.imageUrl && (
        <div className="relative">
          <img
            src={event.imageUrl}
            alt={event.name}
            className="w-full h-48 object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <div className="absolute top-4 left-4">
            <Badge className={`${getCategoryColor(event.category)} text-white`}>
              {event.category}
            </Badge>
          </div>
          {event.isFeatured && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-yellow-500 text-black font-semibold">
                Featured
              </Badge>
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{event.name}</h3>
        
        <div className="flex items-center text-slate-300 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{event.venueName}</span>
        </div>
        
        <div className="flex items-center text-slate-400 text-sm mb-4">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{formatDateTime(event.dateTime)}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-cyan-400">${event.price}</span>
            {showOriginalPrice && event.originalPrice && (
              <span className="text-slate-400 line-through">${event.originalPrice}</span>
            )}
          </div>
          <Button
            onClick={() => onBuyTicket?.(event.id)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg text-white"
          >
            Buy {showOriginalPrice ? 'Tickets' : 'Now'}
          </Button>
        </div>
      </div>
    </div>
  );
}
