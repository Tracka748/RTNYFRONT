import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { AnnouncementBanner } from "@/components/sections/announcement-banner";
import { ExploreGrid } from "@/components/sections/explore-grid";
import { HotTickets } from "@/components/sections/hot-tickets";
import { EventsTonight } from "@/components/sections/events-tonight";
import { DrinkDeals } from "@/components/sections/drink-deals";
import { FeaturedEvents } from "@/components/sections/featured-events";
import { PopularVenues } from "@/components/sections/popular-venues";
import { CTASection } from "@/components/sections/cta-section";
import { api } from "@/lib/api";

export default function Home() {
  const { toast } = useToast();

  const handleSearch = async (query: string, category: string) => {
    if (!query.trim()) {
      toast({
        title: "Search Query Required",
        description: "Please enter a search term.",
        variant: "destructive",
      });
      return;
    }

    try {
      const results = await api.searchEvents({ query, category });
      toast({
        title: "Search Results",
        description: `Found ${results.length} events matching your search.`,
      });
      // Handle displaying search results
    } catch (error) {
      toast({
        title: "Search Failed",
        description: "Unable to search events at this time. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    // Navigate to category or filter events
    toast({
      title: "Category Selected",
      description: `Browsing ${categoryId.replace('-', ' ')} category.`,
    });
  };

  const handleBuyTicket = async (eventId: number) => {
    try {
      const result = await api.purchaseTicket(eventId);
      if (result.success) {
        toast({
          title: "Ticket Purchase Successful",
          description: result.message || "Your ticket has been purchased successfully!",
        });
      } else {
        throw new Error(result.message || "Purchase failed");
      }
    } catch (error) {
      toast({
        title: "Purchase Failed",
        description: error instanceof Error ? error.message : "Unable to purchase ticket at this time.",
        variant: "destructive",
      });
    }
  };

  const handleClaimDeal = async (dealId: number) => {
    try {
      const result = await api.claimDeal(dealId);
      if (result.success) {
        toast({
          title: "Deal Claimed Successfully",
          description: result.message || "Your deal has been claimed!",
        });
      } else {
        throw new Error(result.message || "Claim failed");
      }
    } catch (error) {
      toast({
        title: "Claim Failed",
        description: error instanceof Error ? error.message : "Unable to claim deal at this time.",
        variant: "destructive",
      });
    }
  };

  const handleSignUp = () => {
    toast({
      title: "Sign Up",
      description: "Redirecting to sign up page...",
    });
    // Navigate to sign up page
  };

  const handleBrowseEvents = () => {
    // Scroll to events section or navigate to events page
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <main>
        <Hero onSearch={handleSearch} />
        <AnnouncementBanner />
        <ExploreGrid onCategoryClick={handleCategoryClick} />
        <HotTickets onBuyTicket={handleBuyTicket} />
        <EventsTonight onBuyTicket={handleBuyTicket} />
        <DrinkDeals onClaimDeal={handleClaimDeal} />
        <FeaturedEvents onBuyTicket={handleBuyTicket} />
        <PopularVenues />
        <CTASection onSignUp={handleSignUp} onBrowseEvents={handleBrowseEvents} />
      </main>
      
      <Footer />
    </div>
  );
}
