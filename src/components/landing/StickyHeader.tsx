import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useOfferCountdown } from "@/hooks/useOfferCountdown";

const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const timeLeft = useOfferCountdown();

  useEffect(() => {
    const handleScroll = () => {
      // Check both window scroll and scroll-snap-container scroll
      const scrollContainer = document.querySelector('.scroll-snap-container');
      const scrollY = scrollContainer ? scrollContainer.scrollTop : window.scrollY;
      setIsVisible(scrollY > 400);
    };

    // Listen to both window and container scroll
    const scrollContainer = document.querySelector('.scroll-snap-container');
    window.addEventListener("scroll", handleScroll);
    scrollContainer?.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      scrollContainer?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      {/* Solid dark background for better visibility */}
      <div className="bg-espresso border-b border-gold/30 shadow-2xl">
        <div className="container-wide py-3 flex items-center justify-between px-4 sm:px-8">
          {/* Left side - Brand */}
          <div className="hidden md:block min-w-0">
            <p className="font-display text-lg font-medium text-gold-light leading-tight">
              Estação Lar & Legado
            </p>
            <p className="text-off-white/60 text-xs">
              Mentoria por Tali Almeida
            </p>
          </div>
          
          {/* Center - Timer */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/40">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm text-off-white font-medium">
              <span className="hidden sm:inline">Oferta expira em </span>
              <span className="text-red-400 font-bold">
                {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </span>
          </div>

          {/* Right side - Price and CTA */}
          <div className="flex items-center gap-3 lg:gap-5">
            <div className="hidden md:flex items-center gap-3">
              <span className="px-3 py-1.5 rounded-full bg-gold text-off-white text-sm font-bold flex-shrink-0">
                -60% OFF
              </span>
              <span className="text-base text-off-white whitespace-nowrap">
                De <span className="line-through text-off-white/60">R$497</span> por <span className="text-off-white font-bold text-xl">R$197,00</span>
              </span>
            </div>

            <Button
              variant="premium-sm"
              size="sm"
              className="text-sm whitespace-nowrap px-5 font-bold flex-shrink-0 pulse-glow"
              onClick={() => window.open("https://pay.kiwify.com.br/CdpFbFD", "_blank")}
            >
              <span className="hidden sm:inline">GARANTIR VAGA</span>
              <span className="sm:hidden">COMPRAR</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
