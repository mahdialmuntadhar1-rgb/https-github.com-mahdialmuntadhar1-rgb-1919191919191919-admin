import React from 'react';
import { motion } from 'motion/react';
import { MoreVertical, ExternalLink, CheckCircle2, Clock, XCircle } from 'lucide-react';

interface Record {
  id: string;
  name: string;
  category: string;
  location: string;
  status: 'Verified' | 'Pending' | 'Rejected';
  governorate: string;
}

const MOCK_RECORDS: Record[] = [
  { id: 'REC-BAG-1000', name: 'Baghdad Restaurant 1', category: 'Restaurant', location: '33.8035, 45.2945', status: 'Verified', governorate: 'Baghdad' },
  { id: 'REC-BAG-1001', name: 'Baghdad Retail 2', category: 'Retail', location: '32.5285, 45.1880', status: 'Pending', governorate: 'Baghdad' },
  { id: 'REC-BAG-1002', name: 'Baghdad Healthcare 3', category: 'Healthcare', location: '33.8339, 43.8920', status: 'Rejected', governorate: 'Baghdad' },
  { id: 'REC-BAG-1003', name: 'Baghdad Tech 4', category: 'Tech', location: '32.3599, 43.6154', status: 'Verified', governorate: 'Baghdad' },
  { id: 'REC-BAG-1004', name: 'Baghdad Education 5', category: 'Education', location: '33.8900, 44.2373', status: 'Pending', governorate: 'Baghdad' },
  { id: 'REC-BAG-1005', name: 'Baghdad Restaurant 6', category: 'Restaurant', location: '32.7361, 44.0988', status: 'Rejected', governorate: 'Baghdad' },
  { id: 'REC-BAG-1006', name: 'Baghdad Retail 7', category: 'Retail', location: '33.7959, 45.1841', status: 'Verified', governorate: 'Baghdad' },
  { id: 'REC-BAG-1007', name: 'Baghdad Healthcare 8', category: 'Healthcare', location: '34.2329, 44.5674', status: 'Pending', governorate: 'Baghdad' },
];

export const DataTable: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden">
      <div className="p-6 border-b border-white/10 flex items-center justify-between">
        <div>
          <h3 className="text-white font-bold text-lg">Business Records</h3>
          <p className="text-purple-300/40 text-sm">Manage and verify regional business data</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-purple-500 text-white text-sm font-bold hover:bg-purple-400 transition-all shadow-lg shadow-purple-500/20">
          Export Data
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/5 bg-white/5">
              <th className="px-6 py-4 text-purple-300/40 text-[10px] font-bold uppercase tracking-widest">Business Name</th>
              <th className="px-6 py-4 text-purple-300/40 text-[10px] font-bold uppercase tracking-widest">Category</th>
              <th className="px-6 py-4 text-purple-300/40 text-[10px] font-bold uppercase tracking-widest">Location</th>
              <th className="px-6 py-4 text-purple-300/40 text-[10px] font-bold uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-purple-300/40 text-[10px] font-bold uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {MOCK_RECORDS.map((record, idx) => (
              <motion.tr 
                key={record.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="hover:bg-white/5 transition-colors group"
              >
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm">{record.name}</span>
                    <span className="text-purple-300/30 text-[10px] font-mono">{record.id}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-purple-200 text-sm">{record.category}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-purple-300/60 text-xs font-mono">
                    <span className="truncate max-w-[120px]">{record.location}</span>
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-purple-400" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    record.status === 'Verified' ? 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20' :
                    record.status === 'Pending' ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20' :
                    'bg-rose-400/10 text-rose-400 border border-rose-400/20'
                  }`}>
                    {record.status === 'Verified' ? <CheckCircle2 size={12} /> : 
                     record.status === 'Pending' ? <Clock size={12} /> : 
                     <XCircle size={12} />}
                    {record.status}
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 rounded-lg hover:bg-white/10 text-purple-300/40 hover:text-white transition-all">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-6 border-t border-white/10 flex items-center justify-between">
        <p className="text-purple-300/40 text-xs font-medium">Showing 8 of 30,421 records</p>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 rounded-xl bg-white/5 text-purple-300/60 text-xs font-bold hover:bg-white/10 transition-all">Previous</button>
          <button className="px-4 py-2 rounded-xl bg-white/5 text-purple-300/60 text-xs font-bold hover:bg-white/10 transition-all">Next</button>
        </div>
      </div>
    </div>
  );
};
