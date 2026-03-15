import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { StatCard } from './components/StatCard';
import { DataTable } from './components/DataTable';
import { AgentLogs } from './components/AgentLogs';
import { 
  Database, 
  Users, 
  FileCheck, 
  RefreshCcw, 
  Search, 
  Filter, 
  Bell, 
  ChevronDown 
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [activeGovernorate, setActiveGovernorate] = useState('Baghdad');

  return (
    <div className="min-h-screen bg-[#0a0514] text-white flex font-sans selection:bg-purple-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-fuchsia-600/10 blur-[100px] rounded-full" />
      </div>

      <Sidebar activeGovernorate={activeGovernorate} onSelect={setActiveGovernorate} />

      <main className="flex-1 flex flex-col min-w-0 relative z-10">
        {/* Header */}
        <header className="h-20 border-b border-white/10 backdrop-blur-md bg-white/5 flex items-center justify-between px-8 sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold tracking-tight">{activeGovernorate} Dashboard</h2>
            <div className="h-6 w-px bg-white/10 mx-2" />
            <p className="text-purple-300/40 text-sm font-medium">Regional data management and agent monitoring</p>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-300/40 group-focus-within:text-purple-400 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search records..." 
                className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 w-64 transition-all"
              />
            </div>
            
            <div className="flex items-center gap-3">
              <button className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-purple-300/60 hover:text-white hover:bg-white/10 transition-all relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#0a0514]" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 text-white text-sm font-bold hover:bg-purple-500 transition-all shadow-lg shadow-purple-600/20">
                <RefreshCcw size={16} />
                Force Sync
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8 space-y-8 overflow-y-auto custom-scrollbar flex-1">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              title="Total Records" 
              value="30,421" 
              icon={Database} 
              trend={12} 
              trendLabel="Since last month"
              color="purple"
            />
            <StatCard 
              title="Active Agents" 
              value="18 / 18" 
              icon={Users} 
              color="indigo"
            />
            <StatCard 
              title="Pending Verifications" 
              value="1,284" 
              icon={FileCheck} 
              trend={-5}
              trendLabel="Decreased from last week"
              color="fuchsia"
            />
            <StatCard 
              title="Sync Status" 
              value="98.2%" 
              icon={RefreshCcw} 
              color="emerald"
            />
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2 space-y-8">
              <DataTable />
            </div>
            <div className="xl:col-span-1">
              <AgentLogs />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
