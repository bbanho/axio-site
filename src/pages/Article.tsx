import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { researchArticles } from '../data/content';
import { useEffect } from 'react';

export const Article = () => {
  const { id } = useParams<{ id: string }>();
  
  const article = researchArticles.find(a => a.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="bg-white text-slate-800 antialiased min-h-screen">
        <Header light />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Artigo não encontrado</h1>
          <Link to="/research" className="text-blue-600 hover:text-blue-800 font-medium">← Voltar para Research Log</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-800 antialiased selection:bg-brand-accent selection:text-white min-h-screen">
      <Header light />
      
      {/* Nav Spacer for Sticky Nav */}
      <div className="h-20"></div>

      {/* Article Header */}
      <header className="pt-16 pb-16 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6 text-xs font-mono uppercase tracking-widest text-slate-500">
            {article.tags.map((tag, i) => (
              <span key={tag}>
                {tag}
                {i < article.tags.length - 1 && <span className="text-slate-300 ml-3">•</span>}
              </span>
            ))}
            <span className="text-slate-300 ml-3">•</span>
            <span>{article.date}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
              <i className="fa-solid fa-brain"></i>
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-slate-900">Axio Core Team</div>
              <div className="text-xs text-slate-500">Arquitetura Cognitiva</div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <article className="font-serif text-lg md:text-xl leading-loose text-slate-700 article-content">
          <div 
            dangerouslySetInnerHTML={{ __html: article.fullContent }}
            className="prose prose-slate prose-lg max-w-none 
              prose-p:mb-8 
              prose-headings:text-slate-900 prose-headings:font-sans prose-headings:font-bold prose-headings:mt-12 prose-headings:mb-6
              prose-strong:text-slate-900 prose-strong:font-bold
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
          />
        </article>
        
        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link to="/research" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors">
            <i className="fa-solid fa-arrow-left"></i>
            Voltar para Research Log
          </Link>
        </div>
      </main>

      <Footer />
      
      <style>{`
        .article-content p:first-of-type::first-letter {
          font-size: 3rem;
          font-weight: 700;
          color: #0f172a;
          margin-right: 0.25rem;
          float: left;
          line-height: 1;
          padding-top: 0.25rem;
        }
      `}</style>
    </div>
  );
};
