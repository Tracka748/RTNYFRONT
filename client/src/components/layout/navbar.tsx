import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-800/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              <span className="text-cyan-400">Roc</span>
              <span className="text-pink-500">Ticket</span>
              <span className="text-cyan-400">NY</span>
            </span>
            <span className="text-2xl">🎟️</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#events" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Events
            </Link>
            <Link href="#venues" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Venues
            </Link>
            <Link href="#deals" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Deals
            </Link>
            <Link href="#sweepstakes" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Sweepstakes
            </Link>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-slate-300 hover:text-white">
              Login
            </Button>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-slate-300">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-800 border-slate-700">
              <div className="flex flex-col space-y-4 mt-6">
                <Link
                  href="#events"
                  className="text-slate-300 hover:text-cyan-400 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Events
                </Link>
                <Link
                  href="#venues"
                  className="text-slate-300 hover:text-cyan-400 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Venues
                </Link>
                <Link
                  href="#deals"
                  className="text-slate-300 hover:text-cyan-400 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Deals
                </Link>
                <Link
                  href="#sweepstakes"
                  className="text-slate-300 hover:text-cyan-400 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Sweepstakes
                </Link>
                <div className="border-t border-slate-700 pt-4 flex flex-col space-y-2">
                  <Button variant="ghost" className="text-slate-300 hover:text-white justify-start">
                    Login
                  </Button>
                  <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                    Sign Up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
