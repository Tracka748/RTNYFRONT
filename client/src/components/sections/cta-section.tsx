import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onSignUp?: () => void;
  onBrowseEvents?: () => void;
}

export function CTASection({ onSignUp, onBrowseEvents }: CTASectionProps) {
  return (
    <section className="cta-gradient py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 w-24 h-24 bg-white rounded-full filter blur-xl animate-float"></div>
          <div className="absolute bottom-4 right-4 w-32 h-32 bg-white rounded-full filter blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10">
          <div className="mb-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Join RTNY Today <span className="text-5xl">🎟️</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Get exclusive access to Rochester's best nightlife events and member-only drink deals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button
              onClick={onSignUp}
              className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Sign Up Free
            </Button>
            <Button
              onClick={onBrowseEvents}
              variant="outline"
              className="bg-transparent hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
            >
              Browse Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
