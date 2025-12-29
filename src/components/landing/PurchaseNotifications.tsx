import { useState, useEffect } from "react";

const purchaseNotifications = [
  { name: "Maria S.", city: "São Paulo", time: "agora" },
  { name: "Juliana O.", city: "Toronto, Canadá", time: "1 min" },
  { name: "Patricia L.", city: "Belo Horizonte", time: "2 min" },
  { name: "Amanda C.", city: "Lisboa, Portugal", time: "3 min" },
  { name: "Fernanda R.", city: "Salvador", time: "4 min" },
  { name: "Camila M.", city: "Berlim, Alemanha", time: "5 min" },
  { name: "Bruna A.", city: "Recife", time: "7 min" },
  { name: "Letícia P.", city: "Vancouver, Canadá", time: "8 min" },
  { name: "Débora T.", city: "Brasília", time: "10 min" },
  { name: "Raquel S.", city: "Porto, Portugal", time: "12 min" },
  { name: "Natália F.", city: "Manaus", time: "15 min" },
  { name: "Isabela R.", city: "Munique, Alemanha", time: "18 min" },
  { name: "Carolina B.", city: "Florianópolis", time: "20 min" },
  { name: "Aline D.", city: "Montreal, Canadá", time: "23 min" },
  { name: "Priscila G.", city: "São Luís", time: "25 min" },
  { name: "Renata V.", city: "Faro, Portugal", time: "28 min" },
  { name: "Vanessa K.", city: "Natal", time: "30 min" },
  { name: "Tatiana H.", city: "Frankfurt, Alemanha", time: "35 min" },
  { name: "Daniela J.", city: "Cuiabá", time: "40 min" },
  { name: "Mariana N.", city: "Belém", time: "45 min" },
];

const PurchaseNotifications = () => {
  const [currentNotification, setCurrentNotification] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show first notification after 10 seconds
    const initialDelay = setTimeout(() => {
      showNextNotification(0);
    }, 10000);

    return () => clearTimeout(initialDelay);
  }, []);

  const showNextNotification = (index: number) => {
    setCurrentNotification(index);
    setIsVisible(true);

    // Hide after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
      
      // Show next notification after 90 seconds (90000ms)
      setTimeout(() => {
        const nextIndex = (index + 1) % purchaseNotifications.length;
        showNextNotification(nextIndex);
      }, 90000);
    }, 5000);
  };

  if (currentNotification === null) return null;

  const notification = purchaseNotifications[currentNotification];

  return (
    <div
      className={`fixed bottom-4 left-4 z-40 transition-all duration-500 ${
        isVisible
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
      }`}
    >
      <div className="bg-cream rounded-xl shadow-2xl border border-gold/20 p-4 max-w-[280px] sm:max-w-xs flex items-center gap-3">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-cream" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-espresso truncate">
            {notification.name}
          </p>
          <p className="text-xs text-muted-foreground">
            de {notification.city}
          </p>
          <p className="text-xs text-gold font-medium mt-1 flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Comprou há {notification.time}
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PurchaseNotifications;