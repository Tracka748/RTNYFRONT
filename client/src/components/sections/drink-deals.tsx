import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { DealCard } from "@/components/ui/deal-card";
import { api } from "@/lib/api";
import { ArrowRight } from "lucide-react";

interface DrinkDealsProps {
  onClaimDeal?: (dealId: number) => void;
}

export function DrinkDeals({ onClaimDeal }: DrinkDealsProps) {
  const { data: deals = [], isLoading, error } = useQuery({
    queryKey: ['/api/deals/active'],
    queryFn: () => api.getActiveDeals(),
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
    <section className="bg-slate-800 py-16" id="deals">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center">
            <span className="text-yellow-500 mr-3">🥃</span> Exclusive{" "}
            <span className="text-yellow-500 ml-2">Drink Deals</span>
          </h2>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black flex items-center font-medium">
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
