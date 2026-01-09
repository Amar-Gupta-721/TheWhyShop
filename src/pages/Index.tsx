import Hero from '@/components/Hero';
import ProductStore from '@/components/ProductStore';
import RecentVideos from '@/components/RecentVideos';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen animated-gradient-bg">
      <Hero />
      <ProductStore />
      <RecentVideos />
      <Footer />
    </main>
  );
};

export default Index;
