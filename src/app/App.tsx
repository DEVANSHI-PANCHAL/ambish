import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LegacySection from './components/LegacySection';
import ProductsSection from './components/ProductsSection';
import WhyChooseSection from './components/WhyChooseSection';
import ClientsSection from './components/ClientsSection';
import InquiryForm from './components/InquiryForm';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <div id="home">
          <HeroSection />
        </div>
        
        <div id="legacy">
          <LegacySection />
        </div>
        
        <div id="products">
          <ProductsSection />
        </div>
        
        <div id="why-choose">
          <WhyChooseSection />
        </div>
        
        <div id="clients">
          <ClientsSection />
        </div>
        
        <InquiryForm />
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}