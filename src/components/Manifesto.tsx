export const Manifesto = () => {
  return (
    <section className="py-24 bg-brand-primary text-white border-b border-slate-800 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center reveal">
        <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em] mb-6 block">Nossa Filosofia</span>
        <h2 className="text-3xl md:text-5xl font-serif font-medium leading-tight max-w-4xl mx-auto mb-10 text-slate-100">
          "Não alugamos inteligência; nós a construímos. 
          Em um mundo de APIs efêmeras, entregamos sistemas que <span className="text-blue-400 italic">jamais param</span>."
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          A verdadeira autonomia não é sobre isolamento, é sobre confiabilidade. 
          Projetamos arquiteturas onde a inteligência reside no núcleo da operação, 
          garantindo soberania de dados e execução contínua, independente de terceiros.
        </p>
      </div>
    </section>
  );
};