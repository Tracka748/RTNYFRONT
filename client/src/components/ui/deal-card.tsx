import { Button } from "@/components/ui/button";
import { Deal } from "@/types";

interface DealCardProps {
  deal: Deal;
  onClaimDeal?: (dealId: number) => void;
}

export function DealCard({ deal, onClaimDeal }: DealCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 hover:bg-white/20 hover:border-white/30 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 text-center group">
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">{deal.title}</h3>
      <p className="text-slate-300 mb-6 group-hover:text-white transition-colors">{deal.description}</p>
      <Button
        onClick={() => onClaimDeal?.(deal.id)}
        className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-bold w-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Claim Deal
      </Button>
    </div>
  );
}
