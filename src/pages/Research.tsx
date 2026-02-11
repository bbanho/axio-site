import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { researchArticles } from '../data/content';

export const Research = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredArticles = filter === 'all' 
    ? researchArticles 
    : researchArticles.filter(article => 
        article.tags.some(tag => tag.toLowerCase() === filter.toLowerCase())
      );

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'architecture', label: 'Architecture' },
    { value: 'security', label: 'Security' },
    { value: 'hardware', label: 'Hardware' },
    { value: 'vector db', label: 'Vector DB' }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 antialiased selection:bg-brand-accent selection:text-white">
      <Header light />
      
      <header className="bg-brand-primary text-white pt-32 pb-20 border-b border-slate-800">
        <div className="container mx-auto px-6">
          <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Arquivo Técnico</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Research Log</h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Documentação contínua de descobertas, protocolos arquiteturais e notas de engenharia do laboratório da Axiomatic Engineering.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((filterOption) => (
            <button
              key={filterOption.value}
              onClick={() => setFilter(filterOption.value)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${
                filter === filterOption.value
                  ? 'bg-brand-primary text-white'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-4 mb-8">2026</h3>
          
          <div className="space-y-8">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                to={`/research/${article.id}`}
                className="block group cursor-pointer hover:bg-white hover:shadow-sm p-6 -mx-6 rounded-xl transition-all border border-transparent hover:border-slate-100"
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-2">
                  <span className="text-sm font-mono text-slate-400 whitespace-nowrap">
                    {article.date.split(' ')[0]} {article.date.split(' ')[1]}
                  </span>
                  <h2 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h2>
                </div>
                <div className="md:pl-24">
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {article.description}
                  </p>
                  <div className="flex gap-2">
                    {article.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] uppercase font-bold rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};