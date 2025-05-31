import { Button } from "@/components/ui/button";
import { Deal } from "@/types";

interface DealCardProps {
  deal: Deal;
  onClaimDeal?: (dealId: number) => void;
}

export function DealCard({ deal, onClaimDeal }: DealCardProps) {
  return (
    <div className="bg-black border-2 border-yellow-500 rounded-2xl p-6 glow-hover text-center">
      <h3 className="text-2xl font-bold text-yellow-500 mb-4">{deal.title}</h3>
      <p className="text-slate-300 mb-6">{deal.description}</p>
      <Button
        onClick={() => onClaimDeal?.(deal.id)}
        className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-bold w-full"
      >
        Claim Deal
      </Button>
    </div>
  );
}
