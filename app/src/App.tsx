import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/context/LanguageContext';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import EmergencyButton from '@/components/layout/EmergencyButton';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import ScrollProgress from '@/components/layout/ScrollProgress';
import HomePage from '@/pages/HomePage';
import BlogListPage from '@/pages/BlogListPage';
import ArticlePage from '@/pages/ArticlePage';
import ServicePage from '@/pages/ServicePage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div className="relative">
          <Navigation />
          <ScrollProgress />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<ArticlePage />} />
            <Route path="/services/:id" element={<ServicePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
          <EmergencyButton />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
