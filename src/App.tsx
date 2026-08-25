import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import FullStackPage from './pages/FullStackPage';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import EducationPage from './pages/EducationPage';
import ContactPage from './pages/ContactPage';

// Helper component to handle window scroll and route SEO document titles
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // SEO Document Title Mapping
    switch (pathname) {
      case '/':
        document.title = 'Sanjay Muhilarasu | Full Stack Developer & DevOps Specialist';
        break;
      case '/about':
        document.title = 'About | Sanjay Muhilarasu';
        break;
      case '/full-stack':
        document.title = 'Full Stack Development | Sanjay Muhilarasu';
        break;
      case '/experience':
        document.title = 'Experience | Sanjay Muhilarasu';
        break;
      case '/skills':
        document.title = 'Technical Skills | Sanjay Muhilarasu';
        break;
      case '/projects':
        document.title = 'Projects & Live Demos | Sanjay Muhilarasu';
        break;
      case '/education':
        document.title = 'Education & Qualifications | Sanjay Muhilarasu';
        break;
      case '/contact':
        document.title = 'Contact | Sanjay Muhilarasu';
        break;
      default:
        document.title = 'Sanjay Muhilarasu | IT Portfolio';
        break;
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-950 text-gray-100 selection:bg-blue-500 selection:text-white flex flex-col justify-between font-sans antialiased overflow-x-hidden">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/full-stack" element={<FullStackPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
