import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-800 border-t border-slate-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold">
                <span className="text-cyan-400">Roc</span>
                <span className="text-pink-500">Ticket</span>
                <span className="text-cyan-400">NY</span>
              </span>
              <span className="text-2xl">🎟️</span>
            </div>
            <p className="text-slate-400">Rochester's premier nightlife event booking platform.</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Events</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  Hot Tickets
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  Events Tonight
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  VIP Experiences
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  Calendar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Venues</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  Nightclubs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  Rooftop Bars
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  Live Music
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  Restaurants
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 RocTicketNY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
