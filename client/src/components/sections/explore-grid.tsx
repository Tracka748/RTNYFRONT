import { Button } from "@/components/ui/button";
import { CategoryItem } from "@/types";

interface ExploreGridProps {
  onCategoryClick?: (categoryId: string) => void;
}

const categories: CategoryItem[] = [
  {
    id: "vip-room",
    name: "VIP Room",
    icon: "👑",
    description: "Exclusive access",
    gradient: "from-orange-500 to-yellow-500"
  },
  {
    id: "events-tonight",
    name: "Events Tonight",
    icon: "⚡",
    description: "Happening now",
    gradient: "from-pink-500 to-red-500"
  },
  {
    id: "drink-deals",
    name: "Drink Deals",
    icon: "🍸",
    description: "Special prices",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: "guest-list",
    name: "Guest List",
    icon: "👥",
    description: "Skip the line",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "venues",
    name: "Venues",
    icon: "📍",
    description: "Find your spot",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    id: "calendar",
    name: "Calendar",
    icon: "📅",
    description: "Plan your nights",
    gradient: "from-cyan-500 to-blue-500"
  }
];

export function ExploreGrid({ onCategoryClick }: ExploreGridProps) {
  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore <span className="text-cyan-400">Rochester</span> Nightlife
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center">
              <Button
                onClick={() => onCategoryClick?.(category.id)}
                className={`bg-gradient-to-br ${category.gradient} p-4 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 glow-hover group h-16 w-16 mb-3 flex items-center justify-center`}
              >
                <div className="text-2xl group-hover:animate-pulse text-white">{category.icon}</div>
              </Button>
              <div className="text-center">
                <h3 className="font-bold text-white text-base mb-1">{category.name}</h3>
                <p className="text-slate-400 text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
