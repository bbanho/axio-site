import { Link } from 'react-router-dom';
import { researchArticles } from '../data/content';

export const ResearchLog = () => {
  const recentArticles = researchArticles.slice(0, 3);

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 relative">
      <div className="container mx-auto px-6 reveal">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-brand-accent font-bold tracking-widest uppercase text-sm block mb-2">P&D Interno</span>
            <h2 className="text-3xl font-bold text-brand-primary">Research Log</h2>
          </div>
          <Link to="/research" className="text-sm font-semibold text-slate-500 hover:text-brand-accent transition-colors hidden md:block">Ver arquivo completo &rarr;</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recentArticles.map((article) => (
            <Link 
              key={article.id}
              to={`/research/${article.id}`} 
              className="block bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group cursor-pointer research-card"
            >
              <span className="text-xs font-mono text-slate-400 mb-2 block">{article.date}</span>
              <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">{article.title}</h3>
              <p className="text-sm text-slate-600 mb-4">
                {article.description}
              </p>
              <div className="flex gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] uppercase font-bold rounded">{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};