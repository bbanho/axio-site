export const Lab = () => {
  return (
    <section id="lab" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center reveal">
        <div>
          <h2 className="text-3xl font-bold text-brand-primary mb-6">O Laboratório</h2>
          <p className="text-slate-600 text-lg mb-6 leading-relaxed">
            Não acreditamos em software descartável. A Axiomatic Engineering opera sob princípios estritos de durabilidade e propriedade.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-brand-accent transition-colors">
                <i className="fa-solid fa-database text-brand-accent group-hover:scale-110 transition-transform"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Local-First</h4>
                <p className="text-sm text-slate-600">Dados residem no dispositivo, sincronizam na nuvem. Se a internet cair, você continua trabalhando.</p>
              </div>
            </div>
            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-brand-accent transition-colors">
                <i className="fa-solid fa-microchip text-brand-accent group-hover:scale-110 transition-transform"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Soberania de Hardware</h4>
                <p className="text-sm text-slate-600">Preferimos GPU local a API alugada. A autonomia real exige posse dos meios de produção.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-accent/10 rounded-full blur-2xl"></div>
          <div className="bg-brand-primary rounded-xl shadow-2xl p-6 font-mono text-sm text-slate-300 border border-slate-700 transform rotate-1 hover:rotate-0 transition-transform duration-500 hover:shadow-blue-500/10 hover:border-blue-500/30">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-slate-600 hover:bg-red-500 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-slate-600 hover:bg-yellow-500 transition-colors"></div>
            </div>
            <p><span className="text-purple-400">interface</span> <span className="text-yellow-300">Agent</span> {'{'}</p>
            <p className="pl-4">id: <span className="text-blue-400">string</span>;</p>
            <p className="pl-4">memory: <span className="text-blue-400">VectorStore</span>;</p>
            <p className="pl-4">autonomy_level: <span className="text-green-400">'HIGH'</span>;</p>
            <p className="pl-4">status: <span className="text-blue-400">Online</span>;</p>
            <p>{'}'}</p>
            <p className="mt-4 text-slate-500">// TODO: Expand consciousness capacity</p>
          </div>
        </div>
      </div>
    </section>
  );
};