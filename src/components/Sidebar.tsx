
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

interface SidebarProps {
  deployedCount: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const navItems = [
  { path: '/', icon: '🏪', label: 'Marketplace', sub: 'Agent Hub' },
  { path: '/dashboard', icon: '⚡', label: 'Command Center', sub: 'Pod Control' },
  { path: '/web3', icon: '🔗', label: 'Web3 Layer', sub: 'DID + Wallet' },
  { path: '/architect', icon: '🏗️', label: 'Architect v2', sub: 'Web4 Design' },
  { path: '/media-lab', icon: '🎬', label: 'Media Lab', sub: 'Content AI' },
  { path: '/roadmap', icon: '🗺️', label: 'Roadmap', sub: 'Web3→Web5' },
];

const Sidebar: React.FC<SidebarProps> = ({ deployedCount, isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-6 border-b border-slate-900/60">
        <button onClick={() => { navigate('/'); setIsOpen(false); }} className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center text-lg shadow-lg shadow-indigo-600/30 group-hover:scale-110 transition-transform">
            🧬
          </div>
          <div>
            <div className="font-black text-white text-sm tracking-tighter">GANI HYPHA</div>
            <div className="text-[8px] font-mono text-indigo-400 uppercase tracking-widest">v2.0 Web4</div>
          </div>
        </button>
      </div>

      {/* Stack Indicator */}
      <div className="px-4 py-3 border-b border-slate-900/60">
        <div className="grid grid-cols-2 gap-1.5">
          {[
            { label: 'Cloudflare', status: true, color: 'text-orange-400' },
            { label: 'Groq', status: true, color: 'text-purple-400' },
            { label: 'Supabase', status: true, color: 'text-emerald-400' },
            { label: 'CrewAI', status: true, color: 'text-yellow-400' },
          ].map(s => (
            <div key={s.label} className="flex items-center gap-1.5 bg-slate-900/40 px-2 py-1 rounded-lg">
              <div className={`w-1 h-1 rounded-full ${s.status ? 'bg-emerald-500 animate-pulse' : 'bg-slate-600'}`}></div>
              <span className={`text-[8px] font-black uppercase tracking-tighter ${s.color}`}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto scrollbar-hide">
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-2xl transition-all group relative ${
                isActive
                  ? 'bg-indigo-600/10 border border-indigo-500/30 text-white'
                  : 'text-slate-500 hover:text-slate-300 hover:bg-slate-900/40 border border-transparent'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-indigo-500 rounded-r-full"></div>}
                <span className="text-xl">{item.icon}</span>
                <div>
                  <div className="text-[11px] font-black uppercase tracking-widest">{item.label}</div>
                  <div className="text-[8px] font-mono text-slate-700 uppercase">{item.sub}</div>
                </div>
                {item.path === '/dashboard' && deployedCount > 0 && (
                  <span className="ml-auto bg-indigo-500/20 text-indigo-400 text-[8px] font-black px-1.5 py-0.5 rounded border border-indigo-500/20">
                    {deployedCount}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-900/60 space-y-3">
        <div className="bg-slate-900/40 rounded-2xl p-4 border border-slate-800/60">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Mesh Status</span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-[8px] font-mono">
              <span className="text-slate-600">CF Workers</span>
              <span className="text-emerald-400">ONLINE</span>
            </div>
            <div className="flex justify-between text-[8px] font-mono">
              <span className="text-slate-600">Groq API</span>
              <span className="text-emerald-400">ACTIVE</span>
            </div>
            <div className="flex justify-between text-[8px] font-mono">
              <span className="text-slate-600">Supabase</span>
              <span className="text-emerald-400">CONNECTED</span>
            </div>
          </div>
        </div>
        <div className="text-center text-[7px] font-black text-slate-800 uppercase tracking-widest">
          Akar Dalam, Cabang Tinggi
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 shrink-0 border-r border-slate-900/60 bg-[#020617]/80 backdrop-blur-xl h-screen sticky top-0">
        <SidebarContent />
      </aside>

      {/* Mobile Drawer */}
      {isOpen && (
        <>
          <div className="lg:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <aside className="lg:hidden fixed left-0 top-0 bottom-0 w-72 bg-[#020617] border-r border-slate-900/60 z-50 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-slate-900/60">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Navigation</span>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-800 rounded-xl text-slate-500">✕</button>
            </div>
            <SidebarContent />
          </aside>
        </>
      )}
    </>
  );
};

export default Sidebar;
