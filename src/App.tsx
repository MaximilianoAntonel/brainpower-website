import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './sections/Home/Home';
import Services from './sections/Services/Services';
import About from './sections/About/About';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    // Update title
    document.title = 'BrainPower | Automate Anything';
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="relative">
      <Header />
      <main>
        <Home />
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;