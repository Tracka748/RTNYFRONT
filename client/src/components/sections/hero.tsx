import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

interface HeroProps {
  onSearch?: (query: string, category: string) => void;
}

export function Hero({ onSearch }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");

  const handleSearch = () => {
    onSearch?.(searchQuery, category);
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Main Logo */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-glow">
            <span className="text-cyan-400">Roc</span>
            <span className="text-pink-500">Ticket</span>
            <span className="text-cyan-400">NY</span>
            <span className="text-4xl md:text-5xl ml-3">🎟️</span>
          </h1>
        </div>

        {/* Headline */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Your Night Out <span className="text-pink-500">Starts Here</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Discover Rochester's hottest nightlife events, book tickets to exclusive bars and nightclubs, and unlock exclusive drink deals in the ROC.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search events, artists, venues..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-800 text-white pl-12 border-slate-600 focus:border-cyan-400"
              />
            </div>
            
            <div className="md:w-48">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="bg-slate-800 text-white border-slate-600 focus:border-cyan-400">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-600">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="vip-room">🏆 VIP Room</SelectItem>
                  <SelectItem value="hot-tickets">🔥 Hot Tickets</SelectItem>
                  <SelectItem value="events-tonight">🌙 Events Tonight</SelectItem>
                  <SelectItem value="drink-deals">🥃 Drink Deals</SelectItem>
                  <SelectItem value="guest-list">📋 Guest List</SelectItem>
                  <SelectItem value="calendar">📅 Calendar</SelectItem>
                  <SelectItem value="venues">📍 Venues</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button
              onClick={handleSearch}
              className="bg-gradient-to-r from-cyan-400 to-pink-500 hover:shadow-lg hover:shadow-pink-500/25 text-white px-8 py-3 font-semibold"
            >
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
