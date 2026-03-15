import React from 'react';
import { LayoutDashboard, Users, CheckCircle, RefreshCw, Search, Filter, Bell, Settings, LogOut, ChevronRight, Activity } from 'lucide-react';

const GOVERNORATES = [
  'Baghdad', 'Erbil', 'Sulaymaniyah', 'Basra', 'Nineveh', 'Kirkuk',
  'Najaf', 'Karbala', 'Anbar', 'Babil', 'Dhi Qar', 'Maysan',
  'Muthanna', 'Qadisiyah', 'Diyala', 'Saladin', 'Duhok', 'Wasit'
];

interface SidebarProps {
  activeGovernorate: string;
  onSelect: (gov: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeGovernorate, onSelect }) => {
  return (
    <aside className="w-72 h-screen sticky top-0 bg-purple-950/40 backdrop-blur-xl border-r border-white/10 flex flex-col overflow-hidden">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
            <LayoutDashboard className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg tracking-tight">Command Center</h1>
            <p className="text-purple-300/60 text-xs font-medium uppercase tracking-widest">Admin Portal</p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-purple-300/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 px-2">Main Menu</p>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/10 text-white font-medium transition-all">
            <LayoutDashboard size={18} />
            Dashboard
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-purple-300/60 hover:bg-white/5 hover:text-white transition-all">
            <Users size={18} />
            Agents
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-purple-300/60 hover:bg-white/5 hover:text-white transition-all">
            <Settings size={18} />
            Settings
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
        <p className="text-purple-300/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 px-2">Governorates</p>
        <div className="space-y-1">
          {GOVERNORATES.map((gov) => (
            <button
              key={gov}
              onClick={() => onSelect(gov)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all group ${
                activeGovernorate === gov
                  ? 'bg-purple-600/30 text-white border border-purple-500/30'
                  : 'text-purple-300/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="text-sm font-medium">{gov}</span>
              <div className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${Math.random() > 0.2 ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]' : 'bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.5)]'}`} />
                <ChevronRight size={14} className={`opacity-0 group-hover:opacity-100 transition-opacity ${activeGovernorate === gov ? 'opacity-100' : ''}`} />
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 border-t border-white/10 mt-auto">
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 border-2 border-white/20" />
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-semibold truncate">Mahdi Al-Muntadhar</p>
            <p className="text-purple-300/40 text-[10px] font-bold uppercase tracking-wider">Super Admin</p>
          </div>
          <LogOut size={16} className="text-purple-300/40 cursor-pointer hover:text-rose-400 transition-colors" />
        </div>
      </div>
    </aside>
  );
};
