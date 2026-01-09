import { useEffect, useState } from 'react';
import { Youtube, ArrowRight } from 'lucide-react';
import VideoCard from './VideoCard';

const videos = [
  {
    id: '1',
    title: 'iPhone 16 Pro Max Review: The Best iPhone Yet?',
    thumbnail: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80',
    views: '2.4M views',
    duration: '18:32',
    publishedAt: '3 days ago',
    videoUrl: 'https://youtube.com',
  },
  {
    id: '2',
    title: 'MacBook Pro M4 vs M3: Is It Worth The Upgrade?',
    thumbnail: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&q=80',
    views: '1.8M views',
    duration: '22:15',
    publishedAt: '1 week ago',
    videoUrl: 'https://youtube.com',
  },
  {
    id: '3',
    title: 'The Best Wireless Earbuds of 2024 - Ultimate Comparison',
    thumbnail: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
    views: '980K views',
    duration: '25:47',
    publishedAt: '2 weeks ago',
    videoUrl: 'https://youtube.com',
  },
  {
    id: '4',
    title: 'Samsung Galaxy S24 Ultra: 6 Months Later Review',
    thumbnail: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800&q=80',
    views: '1.2M views',
    duration: '15:20',
    publishedAt: '3 weeks ago',
    videoUrl: 'https://youtube.com',
  },
];

const RecentVideos = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('videos');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="videos" className="py-24 relative">
      {/* Background effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <span className="inline-block font-heading text-sm font-semibold text-primary uppercase tracking-widest mb-4">
              Latest Content
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground">
              Recent <span className="text-gradient">Reviews</span>
            </h2>
          </div>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 md:mt-0 text-primary font-semibold hover:gap-4 transition-all duration-300"
          >
            <Youtube className="w-5 h-5" />
            View All Videos
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Videos grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <VideoCard {...video} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentVideos;
