import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Eye, UserPlus } from "lucide-react";

interface PromoterSpotlightProps {
  onViewEvents?: (promoterId: number) => void;
  onFollow?: (promoterId: number) => void;
}

interface Promoter {
  id: number;
  name: string;
  tagline: string;
  imageUrl: string;
  eventCount: number;
  followerCount: number;
}

const promoters: Promoter[] = [
  {
    id: 1,
    name: "DJ Marcus Elite",
    tagline: "Bringing the heat to Rochester's hottest venues",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=face",
    eventCount: 15,
    followerCount: 2500
  },
  {
    id: 2,
    name: "Nightlife Queen Sarah",
    tagline: "VIP experiences and exclusive party access",
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=300&h=300&fit=crop&crop=face",
    eventCount: 12,
    followerCount: 3200
  },
  {
    id: 3,
    name: "Party King Tony",
    tagline: "Rochester's premier event coordinator",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    eventCount: 20,
    followerCount: 4100
  },
  {
    id: 4,
    name: "Venue Master Lisa",
    tagline: "Connecting you to the city's best spots",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    eventCount: 18,
    followerCount: 2800
  }
];

export function PromoterSpotlight({ onViewEvents, onFollow }: PromoterSpotlightProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promoters.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % promoters.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + promoters.length) % promoters.length);
  };

  const currentPromoter = promoters[currentIndex];

  return (
    <section className="bg-gradient-to-r from-slate-900 via-purple-900/20 to-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🔥 Promoter Spotlight 🔥
          </h2>
          <p className="text-slate-400 text-lg">
            Meet Rochester's top event promoters bringing you the best nightlife experiences
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Spotlight Card */}
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Promoter Image */}
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-pink-500 p-1 bg-gradient-to-r from-cyan-400 to-pink-500">
                  <img
                    src={currentPromoter.imageUrl}
                    alt={currentPromoter.name}
                    className="w-full h-full object-cover rounded-full bg-slate-700"
                  />
                </div>
                {/* Live indicator */}
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                  LIVE
                </div>
              </div>

              {/* Promoter Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  {currentPromoter.name}
                </h3>
                <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                  {currentPromoter.tagline}
                </p>
                
                {/* Stats */}
                <div className="flex justify-center md:justify-start gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{currentPromoter.eventCount}</div>
                    <div className="text-sm text-slate-400">Active Events</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400">{currentPromoter.followerCount.toLocaleString()}</div>
                    <div className="text-sm text-slate-400">Followers</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button
                    onClick={() => onViewEvents?.(currentPromoter.id)}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    <Eye className="h-5 w-5" />
                    View Events
                  </Button>
                  <Button
                    onClick={() => onFollow?.(currentPromoter.id)}
                    variant="outline"
                    className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    <UserPlus className="h-5 w-5" />
                    Follow
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700 rounded-full h-12 w-12"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700 rounded-full h-12 w-12"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-3">
            {promoters.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-cyan-400 to-pink-500 scale-125"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}