import React from 'react';
import { motion } from 'motion/react';
import { Activity, Terminal, ShieldCheck, AlertCircle } from 'lucide-react';

interface Log {
  id: string;
  time: string;
  region: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

const MOCK_LOGS: Log[] = [
  { id: '1', time: '10:59', region: 'DUHOK', message: 'New record detected: Al-Mansour Mall', type: 'success' },
  { id: '2', time: '10:58', region: 'ERBIL', message: 'Validating coordinates...', type: 'info' },
  { id: '3', time: '10:57', region: 'DUHOK', message: 'Scraping business directory...', type: 'info' },
  { id: '4', time: '10:56', region: 'QADISIYAH', message: 'Scraping business directory...', type: 'info' },
  { id: '5', time: '10:55', region: 'KARBALA', message: 'Scraping business directory...', type: 'info' },
  { id: '6', time: '10:54', region: 'QADISIYAH', message: 'Scraping business directory...', type: 'info' },
  { id: '7', time: '10:53', region: 'ANBAR', message: 'Data freshness check: OK', type: 'success' },
  { id: '8', time: '10:52', region: 'ANBAR', message: 'Scraping business directory...', type: 'info' },
  { id: '9', time: '10:51', region: 'SULAYMANIYAH', message: 'Scraping business directory...', type: 'info' },
  { id: '10', time: '10:50', region: 'DHI QAR', message: 'Verification request sent to local agent', type: 'warning' },
];

export const AgentLogs: React.FC = () => {
  return (
    <div className="bg-purple-950/40 backdrop-blur-md rounded-3xl border border-white/10 flex flex-col h-full">
      <div className="p-6 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
            <Activity size={20} />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">18 Agents Network</h3>
            <p className="text-purple-300/40 text-sm">Real-time Scraping Logs</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider">Live</span>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-y-auto custom-scrollbar font-mono space-y-4">
        {MOCK_LOGS.map((log) => (
          <motion.div 
            key={log.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-start gap-4 text-xs group"
          >
            <span className="text-purple-300/30 whitespace-nowrap">{log.time}</span>
            <span className="text-purple-400 font-bold whitespace-nowrap">[{log.region}]</span>
            <span className={`flex-1 ${
              log.type === 'success' ? 'text-emerald-300' :
              log.type === 'warning' ? 'text-amber-300' :
              log.type === 'error' ? 'text-rose-300' :
              'text-purple-100'
            }`}>
              {log.message}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="p-6 border-t border-white/10 bg-white/5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-purple-300/60 text-[10px] font-bold uppercase tracking-widest">Global Sync</span>
          <span className="text-white text-xs font-bold">65%</span>
        </div>
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '65%' }}
            className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
          />
        </div>
      </div>
    </div>
  );
};
