import { Button } from "@/components/ui/button";
import { Deal } from "@/types";

interface DealCardProps {
  deal: Deal;
  onClaimDeal?: (dealId: number) => void;
}

export function DealCard({ deal, onClaimDeal }: DealCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-4 sm:p-6 hover:bg-white/20 hover:border-white/30 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 text-center group mb-4 sm:mb-0">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-cyan-300 transition-colors leading-tight">{deal.title}</h3>
      <p className="text-slate-300 mb-4 sm:mb-6 group-hover:text-white transition-colors text-sm sm:text-base leading-relaxed">{deal.description}</p>
      <Button
        onClick={() => onClaimDeal?.(deal.id)}
        className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold w-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
      >
        Claim Deal
      </Button>
    </div>
  );
}
