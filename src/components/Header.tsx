import { Link } from 'react-router-dom';
import { useNavbarScroll } from '../hooks/animations';

interface HeaderProps {
  light?: boolean;
}

export const Header = ({ light = false }: HeaderProps) => {
  const scrolled = useNavbarScroll();

  if (light) {
    return (
      <nav id="navbar" className="fixed w-full z-50 transition-all duration-300 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform duration-300">
              <i className="fa-solid fa-layer-group text-white text-lg"></i>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight leading-none text-slate-900 group-hover:text-blue-600 transition-colors">AXIO</span>
              <span className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-slate-500 leading-none mt-0.5">Engineering</span>
            </div>
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/research" className="text-sm font-semibold text-slate-600 hover:text-brand-accent transition-colors">
              ← Voltar para Research
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav id="navbar" className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? 'border-slate-800' : 'border-transparent'}`}>
      <div className={`absolute inset-0 transition-all duration-300 ${scrolled ? 'bg-brand-primary/80 backdrop-blur-md' : 'bg-brand-primary/0 backdrop-blur-[0px]'}`} id="navbar-bg"></div>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform duration-300">
            <i className="fa-solid fa-layer-group text-white text-lg"></i>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold tracking-tight leading-none text-white group-hover:text-blue-400 transition-colors">AXIO</span>
            <span className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-slate-400 leading-none mt-0.5">Engineering</span>
          </div>
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/#projects" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Operações</Link>
          <Link to="/research" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Pesquisa</Link>
          <a href="/#contact" className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold text-sm transition-all border border-white/10 hover:border-white/30 hover:shadow-lg hover:scale-105 active:scale-95 backdrop-blur-md">
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
};
