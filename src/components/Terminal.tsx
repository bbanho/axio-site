import { useEffect, useState } from 'react';

export const Terminal = () => {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  useEffect(() => {
    const runBootSequence = async () => {
      const lines = [
        'initiating_sequence...',
        'loading_modules: [network, crypto, vector_db]',
        'connecting_cortical_stack...',
        'integrity_check: PASSED',
        'system_operational.'
      ];

      for (const line of lines) {
        await new Promise(resolve => setTimeout(resolve, 800));
        setTerminalLines(prev => [...prev, line]);
      }
    };

    const timer = setTimeout(runBootSequence, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-tr from-slate-800 to-slate-900 rounded-2xl p-1 border border-slate-700 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 group">
      <div className="bg-brand-primary rounded-xl overflow-hidden min-h-[220px]">
        <div className="flex items-center px-4 py-3 bg-slate-800 border-b border-slate-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50 group-hover:bg-red-500 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50 group-hover:bg-yellow-500 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50 group-hover:bg-green-500 transition-colors"></div>
          </div>
          <div className="ml-4 text-xs text-slate-400 font-mono">system_status.log</div>
        </div>
        <div className="p-6 font-mono text-xs md:text-sm text-slate-300 space-y-3">
          <div className="mt-4 space-y-2">
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span>UPTIME</span>
              <span className="text-green-400">99.9%</span>
            </div>
            {terminalLines.map((line, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-slate-500">$</span>
                <span className={index === terminalLines.length - 1 ? 'text-blue-400' : index === 2 ? 'text-yellow-300' : index === 3 ? 'text-green-400' : 'text-slate-300'}>
                  {line}
                </span>
                {index === terminalLines.length - 1 && <span className="cursor-blink bg-blue-500 inline-block w-2 h-4 align-middle ml-1"></span>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/20 blur-3xl rounded-full animate-pulse-slow"></div>
    </div>
  );
};