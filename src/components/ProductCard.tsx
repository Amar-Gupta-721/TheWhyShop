import { ExternalLink, Play } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price?: string;
  buyLink: string;
  reviewLink: string;
  category?: string;
}

const ProductCard = ({ name, image, price, buyLink, reviewLink, category }: ProductCardProps) => {
  return (
    <div className="group glass-card-hover rounded-2xl overflow-hidden cursor-pointer">
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-secondary to-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Category badge */}
        {category && (
          <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
            {category}
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Quick action buttons on hover */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <a
            href={reviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white/95 backdrop-blur-sm text-foreground text-sm font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Play className="w-4 h-4" />
            Review
          </a>
          <a
            href={buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-primary text-primary-foreground text-sm font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-4 h-4" />
            Buy Now
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading font-semibold text-lg text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;
