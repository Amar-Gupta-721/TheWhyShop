import { ShoppingBag, Youtube, Twitter, Instagram, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border/50">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-xl">TheWhyShop</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground font-medium">
            <a href="#products" className="hover:text-primary transition-colors">Products</a>
            <a href="#videos" className="hover:text-primary transition-colors">Videos</a>
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="mailto:connectwith.theguy@gmail.com" className="hover:text-primary transition-colors">Contact</a>
            {/* <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a> */}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href=" https://www.youtube.com/@TheWhy.Guy_"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-[#FF0000] hover:scale-110 transition-all"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/theWhyGuy__"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-[#1DA1F2] hover:scale-110 transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/thewhy.guy_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-[#E4405F] hover:scale-110 transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:connectwith.theguy@gmail.com"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kshitiz-verma-308794233/"
              target="_blank"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TheWhyShop. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
