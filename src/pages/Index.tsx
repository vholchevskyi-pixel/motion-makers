import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PortfolioSection from '@/components/PortfolioSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PortfolioSection />
      <ServicesSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
