export function AnnouncementBanner() {
  return (
    <section className="bg-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-700 rounded-2xl p-8 border border-slate-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 text-center">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              GRAND OPENING WEEKEND <span className="text-4xl">🎉</span>
            </h3>
            <p className="text-xl text-cyan-400 mb-4 font-medium">
              Join us for Rochester's biggest nightlife celebration!
            </p>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Special drink deals, exclusive events, and VIP access to the hottest venues in the ROC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
