import { useEffect, useState } from 'react';
import { ShoppingBag, Play } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] py-20 flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient-bg" />
      
      {/* Radial glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Main Website Name */}
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg mb-8">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-7 h-7 md:w-8 md:h-8 text-primary" />
            </div>
            <h1 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground tracking-tight">
              TheWhyShop
            </h1>
          </div>


          {/* Tagline */}
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Premium tech products handpicked and honestly reviewed. Every product comes with my personal seal of approval.
          </p>

          {/* YouTube Subscribers Card */}
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2.5 shadow-md mb-8">
            <div className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Live Subscribers</p>
              <p className="font-heading font-bold text-lg text-foreground">2.45M</p>
            </div>
          </div>

          {/* CTA Buttons */}
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


// {
//   "name": "thewhyshop",
//   "private": true,
//   "version": "0.0.0",
//   "type": "module",
//   "scripts": {
//     "dev": "vite",
//     "build": "tsc -b && vite build",
//     "lint": "eslint .",
//     "preview": "vite preview"
//   },
//   "dependencies": {
//     "react": "^19.2.0",
//     "react-dom": "^19.2.0"
//   },
//   "devDependencies": {
//     "@eslint/js": "^9.39.1",
//     "@types/node": "^24.10.1",
//     "@types/react": "^19.2.5",
//     "@types/react-dom": "^19.2.3",
//     "@vitejs/plugin-react": "^5.1.1",
//     "autoprefixer": "^10.4.23",
//     "eslint": "^9.39.1",
//     "eslint-plugin-react-hooks": "^7.0.1",
//     "eslint-plugin-react-refresh": "^0.4.24",
//     "globals": "^16.5.0",
//     "postcss": "^8.5.6",
//     "tailwindcss": "^4.1.18",
//     "typescript": "~5.9.3",
//     "typescript-eslint": "^8.46.4",
//     "vite": "^7.2.4"
//   }
// }

