import { projects } from '../data/content';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6 reveal">
        <div className="text-center mb-16">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-sm block mb-3">Em Construção</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary">Operações Ativas</h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {projects.map((project) => (
            <div key={project.id} className={`group relative rounded-2xl shadow-sm border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 reveal ${project.isDark ? 'bg-slate-900 text-white border-slate-800' : 'bg-white border-slate-200'}`}>
              {!project.isDark && (
                <div className="absolute top-0 left-0 w-1 h-full bg-green-500 transition-all group-hover:w-2"></div>
              )}
              {project.isDark && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-purple-500/20 transition-all duration-700"></div>
              )}
              
              <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12 relative z-10">
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase border ${
                      project.isDark 
                        ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' 
                        : 'bg-green-100 text-green-700 border-green-200'
                    }`}>
                      {project.type}
                    </span>
                  </div>
                  <p className={`text-lg mb-6 leading-relaxed ${project.isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className={`px-3 py-1 text-xs font-mono font-medium rounded-md transition-colors cursor-default ${
                        project.isDark 
                          ? 'bg-slate-800 text-purple-200 border border-purple-500/20 hover:border-purple-500/50' 
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.status && (
                  <div className="md:w-1/3 flex flex-col justify-center border-l border-slate-100 pl-0 md:pl-8 mt-6 md:mt-0 pt-6 md:pt-0 border-t md:border-t-0">
                    <h4 className="font-bold text-sm uppercase mb-4">Status Atual</h4>
                    <ul className="space-y-3 text-sm">
                      {project.status.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <i className={`fa-solid fa-${item.icon} text-${item.color}-500 mt-1 ${item.spin ? 'fa-spin-pulse' : ''}`}></i>
                          <span className={project.isDark ? 'text-slate-300' : 'text-slate-600'}>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.memoryPoints && (
                  <div className="md:w-1/3 flex items-center justify-center">
                    <div className="text-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-4xl font-bold mb-1">{project.memoryPoints}</div>
                      <div className="text-xs uppercase tracking-widest text-slate-500">Pontos de Memória</div>
                      <div className="mt-4 text-xs text-green-400 font-mono">
                        <i className="fa-solid fa-circle text-[0.6rem] mr-1 animate-pulse"></i> ONLINE
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};