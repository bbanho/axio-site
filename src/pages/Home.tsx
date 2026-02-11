import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Manifesto } from '../components/Manifesto';
import { ResearchLog } from '../components/ResearchLog';
import { Projects } from '../components/Projects';
import { Lab } from '../components/Lab';
import { Footer } from '../components/Footer';
import { useScrollReveal } from '../hooks/animations';

export const Home = () => {
  useScrollReveal();

  return (
    <div className="bg-brand-primary text-slate-800 antialiased selection:bg-brand-accent selection:text-white">
      <Header />
      <Hero />
      <Manifesto />
      <div className="bg-slate-50">
        <ResearchLog />
        <Projects />
        <Lab />
      </div>
      <Footer />
    </div>
  );
};
