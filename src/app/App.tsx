import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from './ScrollToTop';
import HomePage from '../pages/HomePage';
import ProjectDetail from '../pages/ProjectDetail';
import EventDetail from '../pages/EventDetail';
import SponsorshipPage from '../pages/SponsorPage';
import BlogDetails from '../pages/BlogDetails';
import { AdminProvider } from '../context/AdminContext';
import { ContentProvider } from '../context/ContentContext';
import PrivateRoute from '../components/PrivateRoute';
import AdminLoginPage from '../pages/Admin/LoginPage';
import AdminDashboard from '../pages/Admin/Dashboard';



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
    // ADDED: Wrap the application in the new context providers
    // This makes admin status and site content available throughout the app.
    <AdminProvider>
      <ContentProvider>
        <div className="bg-white min-h-screen flex flex-col">
          <Header />
          <ScrollToTop />
          <main className="flex-grow">
            <Routes>
              {/* Existing public routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/project/:projectId" element={<ProjectDetail />} />
              <Route path="/event/:eventId" element={<EventDetail />} />
              <Route path="/sponsor" element={<SponsorshipPage />} />
              <Route path="/blog/:blogId" element={<BlogDetails />} />
              
              {/* ADDED: Catch-all route for 404 Not Found */}
              <Route path="*" element={<div>Page Not Found</div>} />

              {/* ADDED: Routes for the admin section */}
              <Route path="/login" element={<AdminLoginPage />} />
              <Route 
                path="/admin" 
                element={
                  <PrivateRoute>
                    <AdminDashboard />
                  </PrivateRoute>
                } 
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </ContentProvider>
    </AdminProvider>
  );
};

export default App;
