import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/context/LanguageContext';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import ScrollProgress from '@/components/layout/ScrollProgress';

// Code Splitting: lazy-load all pages to reduce initial bundle size (557KB → ~100KB)
// This dramatically improves LCP and Core Web Vitals scores
const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const BlogListPage = lazy(() => import('@/pages/BlogListPage'));
const ArticlePage = lazy(() => import('@/pages/ArticlePage'));
const ServicePage = lazy(() => import('@/pages/ServicePage'));
const BeforeAfterPage = lazy(() => import('@/pages/BeforeAfterPage'));
const FAQPage = lazy(() => import('@/pages/FAQPage'));
const NewsPage = lazy(() => import('@/pages/NewsPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

// Loading fallback - minimal spinner so page doesn't flash white
function PageLoader() {
  return (
    <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-medical-blue border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div className="relative">
          <Navigation />
          <ScrollProgress />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogListPage />} />
              <Route path="/blog/:slug" element={<ArticlePage />} />
              <Route path="/services/:id" element={<ServicePage />} />
              <Route path="/before-after" element={<BeforeAfterPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;

