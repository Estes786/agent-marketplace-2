
import { Blueprint, AgentRole } from './types';

export const BLUEPRINTS: Blueprint[] = [
  {
    id: 'real-estate-legacy',
    name: 'Real Estate Legacy Pod',
    industry: 'Property',
    description: 'Autonomous management of property listings, client inquiries, and legal document verification via Mycelium Layer. Features DID-verified ownership and Supabase-backed property vault.',
    features: [
      'Integrated Lead Qualification & Contact Automation',
      'Automated Lead Qualification Engine',
      'Initial Client Contact Orchestrator',
      'Mycelium Document Verification',
      'RLS-Protected Property Vault (Supabase)',
      'Groq-Powered Contract Analysis',
      'On-Chain Property DID Registry'
    ],
    icon: '🏠',
    roles: [AgentRole.ORCHESTRATOR, AgentRole.ANALYST, AgentRole.CUSTOMER_SERVICE, AgentRole.GATEKEEPER],
    price: '$0/mo',
    tier: 'Free',
    infrastructure: 'Edge Worker',
    isFeatured: true,
    deploymentCount: 1242,
    reviews: [
      { id: 'r1', userName: 'DevAgent_01', rating: 5, comment: 'Flawless orchestration of RLS policies.', date: '2025-05-20' },
      { id: 'r2', userName: 'PropManager', rating: 4, comment: 'Great automation, would love more custom role hooks.', date: '2025-05-18' }
    ],
    cognitiveSpecs: {
      reasoningDepth: 65,
      memoryPersistence: 'Linear',
      thinkingBudget: 8192,
      sovereigntyLevel: 45,
      economicAutonomy: false
    },
    web3Integration: {
      blockchain: 'Ethereum',
      walletRequired: false,
      tokenStandard: 'ERC-721',
      deFiEnabled: false,
      zkProofEnabled: true
    },
    web4Features: {
      aiOrchestrator: 'Groq',
      autonomyLevel: 55,
      crossChainEnabled: false,
      decentralizedStorage: true,
      realTimeAdaptation: true
    }
  },
  {
    id: 'barber-dynasty',
    name: 'Barber Dynasty Engine',
    industry: 'Personal Services',
    description: 'Expert hair styling advice, automated booking orchestration, and inventory management using the YKK Zipper strategy. Powered by Groq LLM for instant style recommendations.',
    features: [
      'StyleGen Visual Consultant (Groq Vision)',
      'A2A Appointment Zipper',
      'Inventory Level Prediction',
      'Customer Loyalty Mycelium',
      'WhatsApp/Telegram Integration',
      'LangChain Memory for Client Profiles'
    ],
    icon: '✂️',
    roles: [AgentRole.BARBER, AgentRole.CUSTOMER_SERVICE, AgentRole.INNOVATOR, AgentRole.ARCHIVIST],
    price: '$0/mo',
    tier: 'Free',
    infrastructure: 'Edge Worker',
    deploymentCount: 843,
    reviews: [
      { id: 'r3', userName: 'StyleGenie', rating: 5, comment: 'The YKK Zipper strategy really works invisibly.', date: '2025-05-21' }
    ],
    cognitiveSpecs: {
      reasoningDepth: 55,
      memoryPersistence: 'Volatile',
      thinkingBudget: 4096,
      sovereigntyLevel: 30,
      economicAutonomy: false
    },
    web3Integration: {
      blockchain: 'Polygon',
      walletRequired: false,
      deFiEnabled: false,
      zkProofEnabled: false
    },
    web4Features: {
      aiOrchestrator: 'Groq',
      autonomyLevel: 40,
      crossChainEnabled: false,
      decentralizedStorage: false,
      realTimeAdaptation: true
    }
  },
  {
    id: 'family-nexus',
    name: 'The Big Family Legacy',
    industry: 'Lifestyle',
    description: 'Private coordination for family events, reminders, and warm conversational support with isolated memory roots. Supabase Row Level Security protects each family\'s private data.',
    features: [
      'Isolated Memory Roots (Supabase RLS)',
      'Sentimental Archivist Node',
      'Event Conflict Resolver',
      'Secure Family Tunnel',
      'CrewAI Multi-Agent Family Board',
      'Encrypted Family DWN Node'
    ],
    icon: '👨‍👩‍👧‍👦',
    roles: [AgentRole.KELUARGA, AgentRole.TEMAN, AgentRole.ARCHIVIST, AgentRole.ORCHESTRATOR],
    price: '$19/mo',
    tier: 'Pro',
    infrastructure: 'Cloud Pod',
    deploymentCount: 312,
    reviews: [
      { id: 'r4', userName: 'FamilyFirst', rating: 5, comment: 'GANI handles reminders like a human sibling.', date: '2025-05-15' }
    ],
    cognitiveSpecs: {
      reasoningDepth: 75,
      memoryPersistence: 'Recursive',
      thinkingBudget: 12288,
      sovereigntyLevel: 60,
      economicAutonomy: false
    },
    web3Integration: {
      blockchain: 'Cloudflare',
      walletRequired: false,
      deFiEnabled: false,
      zkProofEnabled: true
    },
    web4Features: {
      aiOrchestrator: 'CrewAI',
      autonomyLevel: 65,
      crossChainEnabled: false,
      decentralizedStorage: true,
      realTimeAdaptation: true
    }
  },
  {
    id: 'media-empire',
    name: 'Media Empire Nexus',
    industry: 'Content Creation',
    description: 'AI-driven content scheduling, trend analysis, and engagement automation across IG/TG/Threads. LangChain orchestrates multi-platform campaigns with real-time Groq inference.',
    features: [
      'Multi-Channel Engagement Hub',
      'Trend Grounding Engine (Groq + Web3)',
      'Automated Asset Synthesizer',
      'Performance Analytics Roots',
      'LangChain Campaign Orchestrator',
      'IPFS Content Archiving',
      'NFT Content Monetization Layer'
    ],
    icon: '📸',
    roles: [AgentRole.INNOVATOR, AgentRole.ANALYST, AgentRole.ORCHESTRATOR, AgentRole.ARCHIVIST],
    price: '$49/mo',
    tier: 'Enterprise',
    infrastructure: 'Hybrid Nexus',
    isFeatured: true,
    deploymentCount: 156,
    reviews: [
      { id: 'r5', userName: 'CreatorFlow', rating: 3, comment: 'A bit pricey but the trend analysis is top notch.', date: '2025-05-22' }
    ],
    cognitiveSpecs: {
      reasoningDepth: 85,
      memoryPersistence: 'Recursive',
      thinkingBudget: 24576,
      sovereigntyLevel: 80,
      economicAutonomy: true
    },
    web3Integration: {
      blockchain: 'Ethereum',
      walletRequired: true,
      tokenStandard: 'ERC-721',
      deFiEnabled: true,
      zkProofEnabled: true
    },
    web4Features: {
      aiOrchestrator: 'LangChain',
      autonomyLevel: 82,
      crossChainEnabled: true,
      decentralizedStorage: true,
      realTimeAdaptation: true
    }
  },
  {
    id: 'supply-chain-sovereign',
    name: 'Autonomous Supply Chain Sovereign',
    industry: 'Logistics & Trade',
    description: 'High-level sovereign entity managing global supply chains with autonomous spot-market trading. Integrates Chainlink oracles, Supabase real-time, and CrewAI multi-agent coordination.',
    features: [
      'Autonomous Freight Spot-Trading',
      'Recursive Inventory Optimization',
      'DID-Verified Carrier Onboarding',
      'Quantum-Secured Trade Ledger',
      'Zero-Knowledge Compliance Audits',
      'Chainlink Oracle Integration',
      'CrewAI Logistics Crew',
      'Cross-Chain Bridge Protocol'
    ],
    icon: '🚢',
    roles: [AgentRole.ORCHESTRATOR, AgentRole.ANALYST, AgentRole.GATEKEEPER, AgentRole.INNOVATOR],
    price: '$499/mo',
    tier: 'Enterprise',
    infrastructure: 'Hybrid Nexus',
    isFeatured: true,
    deploymentCount: 42,
    reviews: [],
    cognitiveSpecs: {
      reasoningDepth: 95,
      memoryPersistence: 'Recursive',
      thinkingBudget: 32768,
      sovereigntyLevel: 98,
      economicAutonomy: true
    },
    web3Integration: {
      blockchain: 'Ethereum',
      walletRequired: true,
      tokenStandard: 'ERC-20',
      deFiEnabled: true,
      zkProofEnabled: true
    },
    web4Features: {
      aiOrchestrator: 'CrewAI',
      autonomyLevel: 96,
      crossChainEnabled: true,
      decentralizedStorage: true,
      realTimeAdaptation: true
    }
  },
  {
    id: 'fintech-yield-master',
    name: 'Sovereign Yield Orchestrator',
    industry: 'Fintech',
    description: 'Enterprise-grade financial agent for autonomous yield farming, risk-adjusted asset allocation, and real-time liquidity management. Groq-powered risk analysis with LangSmith monitoring.',
    features: [
      'Multi-Protocol Yield Harvesting',
      'Real-time Risk-Adjusted Rebalancing',
      'Autonomous Liquidity Provisioning',
      'Sovereign Wealth Management Core',
      'AI-Driven Arbitrage Execution (Groq)',
      'LangSmith Workflow Monitoring',
      'Uniswap V4 Integration',
      'Supabase Financial Ledger'
    ],
    icon: '📈',
    roles: [AgentRole.ANALYST, AgentRole.ORCHESTRATOR, AgentRole.ARCHIVIST, AgentRole.INNOVATOR],
    price: '$199/mo',
    tier: 'Pro',
    infrastructure: 'Cloud Pod',
    isFeatured: true,
    deploymentCount: 128,
    reviews: [],
    cognitiveSpecs: {
      reasoningDepth: 88,
      memoryPersistence: 'Linear',
      thinkingBudget: 16384,
      sovereigntyLevel: 92,
      economicAutonomy: true
    },
    web3Integration: {
      blockchain: 'Ethereum',
      walletRequired: true,
      tokenStandard: 'ERC-20',
      deFiEnabled: true,
      zkProofEnabled: true
    },
    web4Features: {
      aiOrchestrator: 'LangChain',
      autonomyLevel: 90,
      crossChainEnabled: true,
      decentralizedStorage: false,
      realTimeAdaptation: true
    }
  },
  {
    id: 'legal-compliance-vault',
    name: 'Sovereign Legal Compliance Pod',
    industry: 'Legal & Governance',
    description: 'Autonomous legal entity monitoring global regulatory changes, performing self-audits, and managing DID-linked contract execution. CrewAI legal crew with Groq fast inference.',
    features: [
      'Real-time Regulatory Grounding',
      'Autonomous Contract Synthesis',
      'DID-Linked Governance Framework',
      'Immutable Compliance Archiving (IPFS)',
      'Self-Directed Legal Risk Analysis',
      'CrewAI Legal Research Crew',
      'ZK Proof Verification System'
    ],
    icon: '⚖️',
    roles: [AgentRole.GATEKEEPER, AgentRole.ARCHIVIST, AgentRole.ORCHESTRATOR, AgentRole.ANALYST],
    price: '$299/mo',
    tier: 'Enterprise',
    infrastructure: 'Hybrid Nexus',
    deploymentCount: 85,
    reviews: [],
    cognitiveSpecs: {
      reasoningDepth: 92,
      memoryPersistence: 'Recursive',
      thinkingBudget: 24576,
      sovereigntyLevel: 95,
      economicAutonomy: false
    },
    web3Integration: {
      blockchain: 'Ethereum',
      walletRequired: true,
      deFiEnabled: false,
      zkProofEnabled: true
    },
    web4Features: {
      aiOrchestrator: 'CrewAI',
      autonomyLevel: 93,
      crossChainEnabled: false,
      decentralizedStorage: true,
      realTimeAdaptation: true
    }
  },
  {
    id: 'web3-defi-nexus',
    name: 'Web3 DeFi Nexus',
    industry: 'DeFi',
    description: 'Pure Web3 DeFi automation: yield farming, liquidity provision, DEX aggregation, and MEV protection. Integrates with top protocols via smart contract automation and Cloudflare Workers.',
    features: [
      'Multi-DEX Aggregation (Uniswap/Curve/Balancer)',
      'Automated Market Maker (AMM) Strategies',
      'MEV Protection Layer',
      'Flash Loan Arbitrage Engine',
      'Smart Contract Risk Scanner',
      'Groq AI DeFi Advisor',
      'LangChain DeFi Research Agent',
      'Real-time Gas Optimizer'
    ],
    icon: '🔗',
    roles: [AgentRole.ANALYST, AgentRole.ORCHESTRATOR, AgentRole.INNOVATOR, AgentRole.GATEKEEPER],
    price: '$0/mo',
    tier: 'Free',
    infrastructure: 'Edge Worker',
    isFeatured: true,
    deploymentCount: 567,
    reviews: [
      { id: 'r6', userName: 'DeFi_Whale', rating: 5, comment: 'Best DeFi automation pod on the market!', date: '2026-01-15' },
      { id: 'r7', userName: 'YieldFarmer99', rating: 4, comment: 'MEV protection saved me thousands.', date: '2026-01-20' }
    ],
    cognitiveSpecs: {
      reasoningDepth: 78,
      memoryPersistence: 'Linear',
      thinkingBudget: 16384,
      sovereigntyLevel: 85,
      economicAutonomy: true
    },
    web3Integration: {
      blockchain: 'Ethereum',
      walletRequired: true,
      tokenStandard: 'ERC-20',
      deFiEnabled: true,
      zkProofEnabled: true
    },
    web4Features: {
      aiOrchestrator: 'Groq',
      autonomyLevel: 80,
      crossChainEnabled: true,
      decentralizedStorage: false,
      realTimeAdaptation: true
    }
  }
];

export const PHILOSOPHY = {
  vision: "Optimization of Life through Integrated Intelligence",
  principles: ["Integritas", "Amanah", "Skalabilitas", "Service"],
  motto: "Akar Dalam, Cabang Tinggi",
  strategy: "The YKK Zipper (Hidden Champion)"
};

export const WEB3_STACK = {
  blockchain: ["Ethereum", "Solana", "Polygon", "Cloudflare Workers"],
  storage: ["IPFS", "Supabase", "Cloudflare R2", "Arweave"],
  identity: ["DID (W3C)", "ENS", "Web5 DWN"],
  ai: ["Groq (llama-3.3-70b)", "Cloudflare AI (Llama 3)", "LangChain", "CrewAI"],
  monitoring: ["LangSmith", "Cloudflare Analytics"],
  protocol: ["Web3 Foundation", "Web4 Autonomous Agents", "Web5 DWN/DID"]
};

export const GROQ_MODELS = [
  { id: 'llama-3.3-70b-versatile', name: 'Llama 3.3 70B', contextWindow: 128000, speed: 'Ultra-Fast' },
  { id: 'llama-3.1-8b-instant', name: 'Llama 3.1 8B Instant', contextWindow: 128000, speed: 'Ultra-Fast' },
  { id: 'mixtral-8x7b-32768', name: 'Mixtral 8x7B', contextWindow: 32768, speed: 'Fast' },
  { id: 'gemma2-9b-it', name: 'Gemma2 9B', contextWindow: 8192, speed: 'Fast' }
];
