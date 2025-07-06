import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from './ScrollToTop';
import HomePage from '../pages/HomePage';
import ProjectDetail from '../pages/ProjectDetail';
import EventDetail from '../pages/EventDetail';
import BlogDetails from '../pages/BlogDetails';


const App: React.FC = () => {
  const location = useLocation();

  // Handles smooth scrolling to anchor links when navigating from another page
  React.useLayoutEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          <Route path="/event/:eventId" element={<EventDetail />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;