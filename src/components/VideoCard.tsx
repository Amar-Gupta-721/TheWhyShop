import { Play, Eye, Clock } from 'lucide-react';

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  duration: string;
  // publishedAt: string;
  videoUrl: string;
}

const VideoCard = ({ title, thumbnail, views, duration, videoUrl }: VideoCardProps) => {
  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group glass-card-hover rounded-2xl overflow-hidden block"
    >
      {/* Thumbnail container */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Duration badge */}
        <div className="absolute bottom-3 right-3 bg-foreground/90 text-background text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {duration}
        </div>

        {/* Play overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
            <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading font-semibold text-base text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            {views}
          </span>
          {/* <span>{publishedAt}</span> */}
        </div>
      </div>
    </a>
  );
};

export default VideoCard;
