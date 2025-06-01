import { Button } from "@/components/ui/button";
import { CategoryItem } from "@/types";
import { Crown, Zap, Wine, Users, MapPin, Calendar } from "lucide-react";

interface ExploreGridProps {
  onCategoryClick?: (categoryId: string) => void;
}

const categories: CategoryItem[] = [
  {
    id: "vip-room",
    name: "VIP Room",
    icon: "Crown",
    description: "Exclusive access",
    gradient: "from-orange-500 to-yellow-500"
  },
  {
    id: "events-tonight",
    name: "Events Tonight",
    icon: "Zap",
    description: "Happening now",
    gradient: "from-pink-500 to-red-500"
  },
  {
    id: "drink-deals",
    name: "Drink Deals",
    icon: "Wine",
    description: "Special prices",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: "guest-list",
    name: "Guest List",
    icon: "Users",
    description: "Skip the line",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "venues",
    name: "Venues",
    icon: "MapPin",
    description: "Find your spot",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    id: "calendar",
    name: "Calendar",
    icon: "Calendar",
    description: "Plan your nights",
    gradient: "from-cyan-500 to-blue-500"
  }
];

export function ExploreGrid({ onCategoryClick }: ExploreGridProps) {
  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore <span className="text-cyan-400">Rochester</span> Nightlife
          </h2>
        </div>

        <div className="flex justify-center gap-8 flex-wrap max-w-7xl mx-auto">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center min-w-[160px]">
              <Button
                onClick={() => onCategoryClick?.(category.id)}
                className={`bg-gradient-to-br ${category.gradient} p-8 rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-300 glow-hover group h-40 w-44 mb-6 flex flex-col items-center justify-center`}
              >
                {category.icon === "Crown" && <Crown className="h-12 w-12 text-white group-hover:animate-pulse mb-3" />}
                {category.icon === "Zap" && <Zap className="h-12 w-12 text-white group-hover:animate-pulse mb-3" />}
                {category.icon === "Wine" && <Wine className="h-12 w-12 text-white group-hover:animate-pulse mb-3" />}
                {category.icon === "Users" && <Users className="h-12 w-12 text-white group-hover:animate-pulse mb-3" />}
                {category.icon === "MapPin" && <MapPin className="h-12 w-12 text-white group-hover:animate-pulse mb-3" />}
                {category.icon === "Calendar" && <Calendar className="h-12 w-12 text-white group-hover:animate-pulse mb-3" />}
                <span className="text-white text-sm font-bold text-center leading-tight">{category.name}</span>
              </Button>
              <div className="text-center">
                <p className="text-slate-400 text-sm leading-tight">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
