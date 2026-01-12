import { useEffect, useState } from 'react';
import { ShoppingBag, Play } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [subscribers, setSubscribers] = useState<string>("Loading...");

  useEffect(() => {
    setIsVisible(true);

    const API_KEY = import.meta.env.VITE_YT_API_KEY;
    const CHANNEL_HANDLE = "@TheWhy.Guy_";

    const fetchSubscribers = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&forHandle=${CHANNEL_HANDLE}&key=${API_KEY}`
        );
        const data = await res.json();
        const count = data.items?.[0]?.statistics?.subscriberCount;

        if (count) {
          setSubscribers(formatNumber(count));
        }
      } catch (error) {
        console.error("Failed to fetch subscribers", error);
      }
    };

    const formatNumber = (num: any) => {
      const n = Number(num);
      if (n >= 1_000_000) return (n / 1_000_000).toFixed(2) + "M";
      if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
      return n.toString();
    };

    fetchSubscribers();
    const interval = setInterval(fetchSubscribers, 15000); // refresh every 15 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[70vh] py-20 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg animate-float mb-8">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-7 h-7 md:w-8 md:h-8 text-primary" />
            </div>
            <h1 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground tracking-tight">
              TheWhyShop
            </h1>
          </div>

          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Premium tech products handpicked and honestly reviewed. Every product comes with my personal seal of approval.
          </p>

          {/* Live Subscribers */}
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2.5 shadow-md mb-8">
            <div className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                Live Subscribers
              </p>
              <p className="font-heading font-bold text-lg text-foreground">
                {subscribers}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#products" className="btn-primary inline-flex items-center gap-2 text-sm px-5 py-2.5">
              <ShoppingBag className="w-4 h-4" />
              Shop Products
            </a>
            <a href="#videos" className="btn-secondary inline-flex items-center gap-2 text-sm px-5 py-2.5">
              <Play className="w-4 h-4" />
              Watch Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
