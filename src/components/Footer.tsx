export const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-primary text-slate-400 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <span className="text-xl font-extrabold text-white tracking-tight">AXIO</span><span className="text-slate-600 font-bold">.ENG</span>
        </div>
        <p className="text-sm mb-8 max-w-md mx-auto">
          Construindo no cruzamento entre biologia e silício.
        </p>
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com/bbanho" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors transform hover:scale-110">
            <i className="fa-brands fa-github text-xl"></i>
          </a>
          <a href="mailto:contato@axio.eng.br" className="hover:text-white transition-colors transform hover:scale-110">
            <i className="fa-solid fa-envelope text-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/brunobanho/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors transform hover:scale-110">
            <i className="fa-brands fa-linkedin text-xl"></i>
          </a>
        </div>
        <p className="text-xs font-mono opacity-50">
          &copy; 2026 Axiomatic Engineering. All systems nominal.
        </p>
      </div>
    </footer>
  );
};