import { useState, useEffect } from 'react';

import './styles/global.css';
import './styles/components.css';

import useScrollReveal from './hooks/useScrollReveal';

import Navbar       from './Components/Navbar';
import Hero         from './Components/Hero';
import TrustedBy    from './Components/TrustedBy';
import Features     from './Components/Features';
import HowItWorks   from './Components/HowItWorks';
import CodeDemo     from './Components/CodeDemo';
import Pricing      from './Components/Pricing';
import Testimonials from './Components/Testimonials';
import FAQ          from './Components/FAQ';
import Footer       from './Components/Footer';
import DemoVideo    from './Components/DemoVideo';
import Problem      from './Components/Problem';
import Solution     from './Components/Solution';
import Results      from './Components/Results';
import ReceptionistWidget from './Components/ReceptionistWidget';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useScrollReveal();

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <TrustedBy />
      <DemoVideo />
      <Problem />
      <Solution />
      <Results />
      <Features />
      <HowItWorks />
      <CodeDemo />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
      <ReceptionistWidget />
    </div>
  );
}