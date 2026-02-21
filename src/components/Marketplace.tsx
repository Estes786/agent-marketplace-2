
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Blueprint, DeployedEcosystem } from '../types';
import { aiService, Trend } from '../services/aiService';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, PieChart, Pie, AreaChart, Area, CartesianGrid, Legend } from 'recharts';

interface MarketplaceProps {
  blueprints: Blueprint[];
  credits: number;
  onDeploy: (blueprint: Blueprint) => void;
  onUpdateBlueprint: (blueprint: Blueprint) => void;
  deployingIds?: string[];
  deployedEcosystems?: DeployedEcosystem[];
}

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#3b82f6', '#ef4444'];

const Marketplace: React.FC<MarketplaceProps> = ({
  blueprints, credits, onDeploy, onUpdateBlueprint,
  deployingIds = [], deployedEcosystems = []
}) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const [activeTier, setActiveTier] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [trends, setTrends] = useState<Trend[]>([]);
  const [isLoadingTrends, setIsLoadingTrends] = useState(false);
  const [isLoadingBlueprints, setIsLoadingBlueprints] = useState(true);
  const [selectedBlueprint, setSelectedBlueprint] = useState<Blueprint | null>(null);
  const [viewMode, setViewMode] = useState<'market' | 'insights' | 'tokenomics'>('market');
  const [compareList, setCompareList] = useState<string[]>([]);
  const [showCopyToast, setShowCopyToast] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoadingBlueprints(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchTrends = async () => {
      setIsLoadingTrends(true);
      try {
        const result = await aiService.getMarketTrends(
          activeTab === 'All' || activeTab === 'Featured' ? 'Web3 AI Agents' : activeTab
        );
        setTrends(result.trends);
      } catch (e) { console.error(e); }
      finally { setIsLoadingTrends(false); }
    };
    fetchTrends();
  }, [activeTab]);

  const categories = ['All', 'Featured', 'Property', 'Personal Services', 'Lifestyle', 'Content Creation', 'DeFi', 'Fintech'];
  const tiers = ['All', 'Free', 'Pro', 'Enterprise'];

  const popularityData = useMemo(() => blueprints.map(bp => ({
    name: bp.name.split(' ')[0],
    deployments: bp.deploymentCount
  })).sort((a, b) => b.deployments - a.deployments), [blueprints]);

  const tokenDistribution = [
    { name: 'Ecosystem Yield', value: 40 },
    { name: 'Staking Rewards', value: 25 },
    { name: 'Dev Fund', value: 15 },
    { name: 'Public Liquidity', value: 10 },
    { name: 'DAO Treasury', value: 10 }
  ];

  const stakingAPY = [
    { month: 'Jan', apy: 12.5 }, { month: 'Feb', apy: 14.2 }, { month: 'Mar', apy: 13.8 },
    { month: 'Apr', apy: 15.5 }, { month: 'May', apy: 18.2 }, { month: 'Jun', apy: 17.8 },
    { month: 'Jul', apy: 18.5 }, { month: 'Aug', apy: 19.2 }, { month: 'Sep', apy: 20.1 }
  ];

  const filteredBlueprints = useMemo(() => {
    return blueprints.filter(bp => {
      const matchTab = activeTab === 'All' || (activeTab === 'Featured' ? bp.isFeatured : bp.industry === activeTab);
      const matchTier = activeTier === 'All' || bp.tier === activeTier;
      const q = searchQuery.toLowerCase();
      const matchSearch = !q || bp.name.toLowerCase().includes(q) || bp.description.toLowerCase().includes(q) || bp.industry.toLowerCase().includes(q);
      return matchTab && matchTier && matchSearch;
    });
  }, [blueprints, activeTab, activeTier, searchQuery]);

  const handleShare = async (e: React.MouseEvent, blueprint: Blueprint) => {
    e.stopPropagation();
    const url = `${window.location.origin}/?bp=${blueprint.id}`;
    try { await navigator.clipboard.writeText(url); } catch {}
    setShowCopyToast(true);
    setTimeout(() => setShowCopyToast(false), 3000);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      {showCopyToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-emerald-600 text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest shadow-2xl animate-in fade-in duration-300 flex items-center gap-3">
          🔗 Blueprint link copied!
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-6 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
              Hypha Web4 Hub <span className="text-indigo-400 font-mono text-xs">v2.0-STABLE</span>
            </h3>
            <p className="text-[8px] text-slate-600 font-mono uppercase tracking-widest">Cloudflare + Groq + Supabase + LangChain + CrewAI</p>
          </div>
        </div>
        <div className="flex bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800/60">
          {(['market', 'insights', 'tokenomics'] as const).map(mode => (
            <button key={mode} onClick={() => setViewMode(mode)}
              className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === mode ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
            >{mode}</button>
          ))}
        </div>
      </div>

      {viewMode === 'market' ? (
        <>
          {/* Trend Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {isLoadingTrends
              ? Array(3).fill(0).map((_, i) => <div key={i} className="h-28 bg-slate-900/50 border border-slate-800 rounded-2xl animate-pulse"></div>)
              : trends.map((trend, i) => (
                <div key={i} className="glass rounded-2xl p-4 border border-indigo-500/10 hover:border-indigo-400/30 transition-all group">
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <h4 className="text-sm font-bold text-white flex-1 truncate">{trend.title}</h4>
                    <span className="text-[8px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-500/20 shrink-0">{trend.growth}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 line-clamp-2 mb-3">{trend.description}</p>
                  <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 transition-all duration-700" style={{ width: `${trend.impact}%` }}></div>
                  </div>
                </div>
              ))
            }
          </div>

          {/* Filters */}
          <div className="space-y-3">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${activeTab === cat ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700'}`}
                >{cat}</button>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center bg-slate-900/40 p-4 rounded-[2rem] border border-slate-800/60">
              <div className="relative w-full md:w-64">
                <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search pods, industry, features..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-9 pr-4 text-[11px] text-white focus:ring-1 focus:ring-indigo-500 outline-none"
                />
                <span className="absolute left-3 top-3 text-slate-600 text-xs">🔍</span>
              </div>
              <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800/60">
                {tiers.map(t => (
                  <button key={t} onClick={() => setActiveTier(t)}
                    className={`px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-tighter transition-all ${activeTier === t ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/20' : 'text-slate-600 hover:text-slate-300'}`}
                  >{t}</button>
                ))}
              </div>
              {compareList.length > 0 && (
                <div className="ml-auto flex items-center gap-3 animate-in fade-in">
                  <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest">{compareList.length} Comparing</span>
                  <button onClick={() => setCompareList([])} className="text-[9px] text-slate-600 hover:text-red-400 transition-colors">Reset</button>
                </div>
              )}
            </div>
          </div>

          {/* Blueprint Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoadingBlueprints
              ? Array(6).fill(0).map((_, i) => <div key={i} className="h-96 glass rounded-[2.5rem] border border-slate-800 animate-pulse"></div>)
              : filteredBlueprints.map(blueprint => {
                const isProvisioning = deployingIds.includes(blueprint.id);
                const deployedPod = deployedEcosystems.find(de => de.blueprintId === blueprint.id);
                const isComparing = compareList.includes(blueprint.id);

                return (
                  <div
                    key={blueprint.id}
                    onClick={() => setSelectedBlueprint(blueprint)}
                    className={`glass rounded-[2.5rem] p-7 flex flex-col group transition-all cursor-pointer relative overflow-hidden border blueprint-card ${
                      isProvisioning ? 'border-indigo-500/80 animate-pulse' :
                      blueprint.isFeatured ? 'border-indigo-500/40 shadow-2xl shadow-indigo-600/5' :
                      'border-slate-800/60 hover:border-slate-700'
                    }`}
                  >
                    {/* Action buttons */}
                    <div className="absolute top-4 right-4 flex gap-1.5">
                      <button onClick={e => { e.stopPropagation(); setCompareList(prev => prev.includes(blueprint.id) ? prev.filter(i => i !== blueprint.id) : [...prev, blueprint.id]); }}
                        className={`w-7 h-7 rounded-xl border flex items-center justify-center text-xs transition-all ${isComparing ? 'bg-indigo-600 border-indigo-400' : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'}`}
                      >⚖️</button>
                      <button onClick={e => handleShare(e, blueprint)}
                        className="w-7 h-7 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-center text-xs hover:border-slate-700 transition-all"
                      >📤</button>
                    </div>

                    {/* Icon + Tier */}
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform">
                        {blueprint.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap gap-1.5 mb-1">
                          <span className={`px-2 py-0.5 rounded-lg text-[8px] font-black uppercase ${blueprint.tier === 'Enterprise' ? 'bg-amber-500/10 text-amber-500' : blueprint.tier === 'Pro' ? 'bg-purple-500/10 text-purple-400' : 'bg-indigo-500/10 text-indigo-400'}`}>
                            {blueprint.tier}
                          </span>
                          {blueprint.web3Integration?.deFiEnabled && (
                            <span className="px-2 py-0.5 rounded-lg text-[8px] font-black uppercase bg-emerald-500/10 text-emerald-400">DeFi</span>
                          )}
                          {blueprint.web3Integration?.zkProofEnabled && (
                            <span className="px-2 py-0.5 rounded-lg text-[8px] font-black uppercase bg-blue-500/10 text-blue-400">ZK</span>
                          )}
                        </div>
                        <span className="text-[8px] font-mono text-slate-600 uppercase">{blueprint.infrastructure}</span>
                      </div>
                    </div>

                    {/* Name */}
                    <h4 className="text-lg font-bold text-white mb-1.5 group-hover:text-indigo-400 transition-colors flex items-center gap-2 flex-wrap">
                      {blueprint.name}
                      <span className="text-[8px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20 font-black uppercase">✓ DID</span>
                      {deployedPod && <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>}
                    </h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-2 mb-4">{blueprint.description}</p>

                    {/* AI Stack */}
                    {blueprint.web4Features && (
                      <div className="quick-specs flex flex-wrap gap-1.5 mb-4">
                        <span className="px-2 py-0.5 bg-purple-500/10 border border-purple-500/20 rounded-lg text-[8px] font-black text-purple-400 uppercase">
                          {blueprint.web4Features.aiOrchestrator}
                        </span>
                        <span className="px-2 py-0.5 bg-orange-500/10 border border-orange-500/20 rounded-lg text-[8px] font-black text-orange-400 uppercase">
                          CF Workers
                        </span>
                        {blueprint.web4Features.crossChainEnabled && (
                          <span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-[8px] font-black text-blue-400 uppercase">Cross-Chain</span>
                        )}
                      </div>
                    )}

                    {/* Autonomy Bar */}
                    {blueprint.web4Features && (
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[8px] text-slate-600 uppercase font-black tracking-widest">Autonomy</span>
                          <span className="text-[8px] font-mono text-indigo-400">{blueprint.web4Features.autonomyLevel}%</span>
                        </div>
                        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500" style={{ width: `${blueprint.web4Features.autonomyLevel}%` }}></div>
                        </div>
                      </div>
                    )}

                    {/* Footer */}
                    <div className="mt-auto pt-4 border-t border-slate-900/60 flex items-center justify-between">
                      <div>
                        <span className="text-[8px] font-black text-slate-700 uppercase tracking-widest block mb-0.5">Deployed</span>
                        <span className="text-xs font-mono font-bold text-white">{blueprint.deploymentCount.toLocaleString()}x</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {deployedPod ? (
                          <button onClick={e => { e.stopPropagation(); navigate(`/dashboard?podId=${deployedPod.id}`); }}
                            className="px-5 py-2.5 bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600 hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95"
                          >Monitor →</button>
                        ) : (
                          <>
                            <button onClick={e => { e.stopPropagation(); navigate('/architect', { state: { initialPrompt: `Base: ${blueprint.name} | Industry: ${blueprint.industry}` } }); }}
                              className="p-2.5 bg-slate-900 hover:bg-slate-800 rounded-xl border border-slate-800 text-xs transition-all"
                            >🏗️</button>
                            <button onClick={e => { e.stopPropagation(); onDeploy(blueprint); }}
                              disabled={isProvisioning}
                              className={`px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 flex items-center gap-1.5 ${isProvisioning ? 'opacity-50 cursor-wait' : ''}`}
                            >
                              {isProvisioning ? (
                                <><span className="animate-spin">🔄</span> Syncing...</>
                              ) : (
                                <>Launch <span className="bg-white/20 px-1 py-0.5 rounded text-[8px] font-mono">{blueprint.tier === 'Enterprise' ? '500H' : blueprint.tier === 'Pro' ? '150H' : 'FREE'}</span></>
                              )}
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </>
      ) : viewMode === 'insights' ? (
        <div className="space-y-8 animate-in zoom-in-95 duration-500">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { label: 'Total Deployments', value: blueprints.reduce((a, b) => a + b.deploymentCount, 0).toLocaleString(), icon: '🧬', color: 'text-indigo-400' },
              { label: 'Groq API Calls', value: '847K/day', icon: '⚡', color: 'text-purple-400' },
              { label: 'Supabase RPS', value: '12.4K', icon: '🗄️', color: 'text-emerald-400' },
              { label: 'Active CrewAI', value: '234 crews', icon: '🤖', color: 'text-amber-400' }
            ].map((stat, i) => (
              <div key={i} className="glass p-6 rounded-3xl border border-slate-800/60">
                <span className="text-2xl block mb-3">{stat.icon}</span>
                <p className={`text-2xl font-black ${stat.color} mb-1`}>{stat.value}</p>
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-[2.5rem] border border-slate-800/60 h-80 flex flex-col">
              <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Pod Popularity</h4>
              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={popularityData} layout="vertical">
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} width={70} />
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', fontSize: '10px' }} />
                    <Bar dataKey="deployments" radius={[0, 8, 8, 0]}>
                      {popularityData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="glass p-8 rounded-[2.5rem] border border-slate-800/60 h-80 flex flex-col">
              <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">AI Orchestrator Distribution</h4>
              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={[
                      { name: 'Groq', value: 45 }, { name: 'CrewAI', value: 30 },
                      { name: 'LangChain', value: 20 }, { name: 'CF-AI', value: 5 }
                    ]} cx="50%" cy="50%" innerRadius={50} outerRadius={90} paddingAngle={5} dataKey="value">
                      {[0,1,2,3].map(i => <Cell key={i} fill={COLORS[i]} />)}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', fontSize: '10px' }} />
                    <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 800 }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-8 animate-in zoom-in-95 duration-500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Total HYPHA Supply', value: '1,000,000,000', icon: '💎', color: 'text-indigo-400' },
              { label: 'Circulating Supply', value: '420,690,000', icon: '🌊', color: 'text-emerald-400' },
              { label: 'Total Staked', value: '156,000,000', icon: '🔒', color: 'text-amber-400' }
            ].map((s, i) => (
              <div key={i} className="glass p-8 rounded-[2.5rem] border border-slate-800/60">
                <span className="text-3xl block mb-4">{s.icon}</span>
                <p className={`text-2xl font-black ${s.color} mb-1`}>{s.value}</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-[2.5rem] border border-slate-800/60 h-96 flex flex-col">
              <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">HYPHA Allocation</h4>
              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={tokenDistribution} cx="50%" cy="50%" innerRadius={70} outerRadius={120} paddingAngle={4} dataKey="value">
                      {tokenDistribution.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '16px', fontSize: '10px' }} />
                    <Legend verticalAlign="bottom" iconType="circle" wrapperStyle={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 800 }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="glass p-8 rounded-[2.5rem] border border-slate-800/60 h-96 flex flex-col">
              <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Staking APY History</h4>
              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={stakingAPY}>
                    <defs>
                      <linearGradient id="colorApy" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} opacity={0.2} />
                    <XAxis dataKey="month" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                    <YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} unit="%" />
                    <Tooltip contentStyle={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '16px', fontSize: '10px' }} />
                    <Area type="monotone" dataKey="apy" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorApy)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blueprint Modal */}
      {selectedBlueprint && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-300 overflow-y-auto">
          <div className="glass w-full max-w-2xl rounded-[2.5rem] my-8 overflow-hidden border border-slate-800/60 shadow-3xl flex flex-col">
            <div className="p-10 border-b border-slate-800/40 relative bg-gradient-to-br from-indigo-950/20 to-transparent">
              <button onClick={() => setSelectedBlueprint(null)} className="absolute top-8 right-8 text-slate-600 hover:text-white text-xl transition-colors">✕</button>
              <div className="flex items-center gap-8">
                <div className="w-24 h-24 rounded-[1.5rem] bg-slate-900 border border-slate-800 flex items-center justify-center text-5xl shadow-2xl">
                  {selectedBlueprint.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white tracking-tight mb-2">{selectedBlueprint.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[9px] font-black bg-indigo-500/10 text-indigo-400 px-2.5 py-1 rounded-xl border border-indigo-500/20 uppercase">{selectedBlueprint.industry}</span>
                    {selectedBlueprint.web4Features && (
                      <span className="text-[9px] font-black bg-purple-500/10 text-purple-400 px-2.5 py-1 rounded-xl border border-purple-500/20 uppercase">{selectedBlueprint.web4Features.aiOrchestrator}</span>
                    )}
                    {selectedBlueprint.web3Integration?.blockchain && (
                      <span className="text-[9px] font-black bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded-xl border border-blue-500/20 uppercase">{selectedBlueprint.web3Integration.blockchain}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-10 space-y-8 overflow-y-auto flex-1 custom-scrollbar max-h-96">
              <p className="text-slate-400 leading-relaxed text-sm">{selectedBlueprint.description}</p>
              {selectedBlueprint.features && (
                <div className="grid grid-cols-2 gap-3">
                  {selectedBlueprint.features.map(f => (
                    <div key={f} className="bg-slate-900/40 p-3 rounded-2xl border border-slate-800/40 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 shrink-0"></div>
                      <span className="text-xs text-slate-300 font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              )}
              {selectedBlueprint.cognitiveSpecs && (
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-900/40 p-4 rounded-2xl border border-slate-800/40">
                    <span className="text-[8px] font-black text-slate-600 uppercase block mb-1">Reasoning</span>
                    <span className="text-lg font-bold text-indigo-400">{selectedBlueprint.cognitiveSpecs.reasoningDepth}%</span>
                  </div>
                  <div className="bg-slate-900/40 p-4 rounded-2xl border border-slate-800/40">
                    <span className="text-[8px] font-black text-slate-600 uppercase block mb-1">Sovereignty</span>
                    <span className="text-lg font-bold text-purple-400">{selectedBlueprint.cognitiveSpecs.sovereigntyLevel}%</span>
                  </div>
                  <div className="bg-slate-900/40 p-4 rounded-2xl border border-slate-800/40">
                    <span className="text-[8px] font-black text-slate-600 uppercase block mb-1">Memory</span>
                    <span className="text-xs font-bold text-amber-400">{selectedBlueprint.cognitiveSpecs.memoryPersistence}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="p-8 border-t border-slate-800/60 bg-slate-950/40 flex gap-4">
              <button onClick={() => setSelectedBlueprint(null)} className="flex-1 py-4 bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-800 rounded-2xl font-black uppercase tracking-widest transition-all">Close</button>
              <button onClick={() => { setSelectedBlueprint(null); onDeploy(selectedBlueprint); }}
                className="flex-[2] py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-2xl shadow-indigo-600/20"
              >
                Launch Pod {selectedBlueprint.tier === 'Free' ? '(FREE)' : `(${selectedBlueprint.tier === 'Enterprise' ? '500' : '150'}H)`}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketplace;
