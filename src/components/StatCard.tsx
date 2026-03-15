import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: number;
  trendLabel?: string;
  color?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, trend, trendLabel, color = 'purple' }) => {
  const isPositive = trend && trend > 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden group p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 bg-${color}-500/10 rounded-full blur-3xl group-hover:bg-${color}-500/20 transition-all`} />
      
      <div className="relative flex items-start justify-between mb-4">
        <div className={`p-3 rounded-2xl bg-${color}-500/20 border border-${color}-500/20`}>
          <Icon className={`text-${color}-400 w-6 h-6`} />
        </div>
        {trend !== undefined && (
          <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold ${isPositive ? 'text-emerald-400 bg-emerald-400/10' : 'text-rose-400 bg-rose-400/10'}`}>
            {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {isPositive ? '+' : ''}{trend}%
          </div>
        )}
      </div>

      <div>
        <p className="text-purple-300/60 text-sm font-medium mb-1">{title}</p>
        <h3 className="text-white text-3xl font-bold tracking-tight">{value}</h3>
        {trendLabel && <p className="text-purple-300/30 text-[10px] font-bold uppercase tracking-wider mt-2">{trendLabel}</p>}
      </div>
    </motion.div>
  );
};
