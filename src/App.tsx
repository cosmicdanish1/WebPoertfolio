import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './section/Hero';
import Navbar from './section/Navbar';
import About from './section/About';
import Projects from './section/Project';

import WorkExperience from './section/Experience';

import { AuthProvider } from './hooks/useAuth';
import Contact from './section/Contact';


const AppContent = () => {
 

  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
              <>
                <Hero />
                <About />
                <Projects />
                <WorkExperience />
                <Contact />
              </>
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
};

export default App;