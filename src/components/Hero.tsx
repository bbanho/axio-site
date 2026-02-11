import { NetworkCanvas } from './NetworkCanvas';
import { Terminal } from './Terminal';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-primary text-white">
      <NetworkCanvas />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-accent/20 via-brand-primary to-brand-primary z-0"></div>
      <div className="absolute inset-0 opacity-30 z-0" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-3/5 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-blue-500/30 bg-blue-500/10 rounded-full text-blue-400 text-xs font-bold tracking-widest uppercase hover:bg-blue-500/20 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Sistemas Críticos &bull; Alta Disponibilidade
          </div>
          
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-white">
            Arquitetura de<br />
            <span className="text-blue-400 md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-blue-400 md:to-indigo-400 block sm:inline mt-2 md:mt-0">Inteligência Autônoma.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
            Construímos a infraestrutura invisível que mantém operações críticas funcionando. 
            Autonomia real, dados soberanos e resiliência a falhas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="bg-brand-accent hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl shadow-blue-900/20 hover:shadow-blue-900/40 flex items-center justify-center gap-2 group hover:-translate-y-1">
              Ver Projetos <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a href="https://github.com/bbanho" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-bold text-lg backdrop-blur-sm transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </div>
        </div>

        <div className="md:w-2/5 w-full relative animate-fade-in-up text-left" style={{animationDelay: '0.2s'}}>
          <Terminal />
        </div>
      </div>
    </section>
  );
};