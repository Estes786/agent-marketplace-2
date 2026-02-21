
import React from 'react';
import { NavLink } from 'react-router-dom';

interface BottomNavProps {
  activePodsCount: number;
}

const BottomNav: React.FC<BottomNavProps> = ({ activePodsCount }) => {
  const items = [
    { path: '/', icon: '🏪', label: 'Market' },
    { path: '/dashboard', icon: '⚡', label: 'Pods', badge: activePodsCount },
    { path: '/web3', icon: '🔗', label: 'Web3' },
    { path: '/architect', icon: '🏗️', label: 'Build' },
    { path: '/roadmap', icon: '🗺️', label: 'Map' },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-20 bg-[#020617]/90 backdrop-blur-xl border-t border-slate-900/60">
      <div className="flex items-center justify-around py-2 px-4">
        {items.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-2xl transition-all relative ${
                isActive
                  ? 'text-white'
                  : 'text-slate-600 hover:text-slate-400'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className={`text-xl ${isActive ? 'scale-110' : ''} transition-transform`}>{item.icon}</span>
                <span className={`text-[7px] font-black uppercase tracking-widest ${isActive ? 'text-indigo-400' : ''}`}>{item.label}</span>
                {isActive && <div className="absolute -top-px left-1/2 -translate-x-1/2 w-6 h-0.5 bg-indigo-500 rounded-full"></div>}
                {item.badge != null && item.badge > 0 && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-600 rounded-full flex items-center justify-center text-[7px] font-black text-white">
                    {item.badge}
                  </div>
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
