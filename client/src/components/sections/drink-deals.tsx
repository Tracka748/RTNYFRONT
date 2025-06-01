import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { DealCard } from "@/components/ui/deal-card";
import { api } from "@/lib/api";
import { ArrowRight } from "lucide-react";

interface DrinkDealsProps {
  onClaimDeal?: (dealId: number) => void;
}

export function DrinkDeals({ onClaimDeal }: DrinkDealsProps) {
  // Static deals data to match the reference design
  const staticDeals = [
    {
      id: 1,
      title: "Happy Hour Specials",
      description: "50% off all drinks 5-7 PM at participating venues",
      isActive: true
    },
    {
      id: 2,
      title: "RTNY Member Exclusive", 
      description: "Free shot with every drink purchase tonight",
      isActive: true
    },
    {
      id: 3,
      title: "Weekend Special",
      description: "Buy 2 cocktails, get 1 free at premium bars",
      isActive: true
    }
  ];

  const { data: deals = staticDeals, isLoading = false, error } = useQuery({
    queryKey: ['/api/deals/active'],
    queryFn: () => api.getActiveDeals(),
    enabled: false // Use static data for now
  });

  if (error) {
    return (
      <section className="bg-slate-800 py-16" id="deals">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center mb-8">
              <span className="text-yellow-500 mr-3">🥃</span> Exclusive Drink Deals
            </h2>
            <p className="text-slate-400">Unable to load drink deals at this time. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden" id="deals">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-pink-500/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center">
            <span className="text-cyan-400 mr-3">🥃</span> Exclusive{" "}
            <span className="text-pink-400 ml-2">Drink Deals</span>
          </h2>
          <Button className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white flex items-center font-medium rounded-xl px-6 py-3">
            View All Deals <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-black border-2 border-yellow-500 rounded-2xl p-6 h-48 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deals.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-slate-400">No active drink deals available at this time.</p>
              </div>
            ) : (
              deals.map((deal) => (
                <DealCard
                  key={deal.id}
                  deal={deal}
                  onClaimDeal={onClaimDeal}
                />
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}
