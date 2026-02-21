
export enum AgentRole {
  ORCHESTRATOR = 'The Orchestrator',
  BARBER = 'The Barber',
  TEMAN = 'The Teman',
  KELUARGA = 'The Keluarga',
  CUSTOMER_SERVICE = 'The Customer Service',
  ANALYST = 'The Analyst',
  ARCHIVIST = 'The Archivist',
  GATEKEEPER = 'The Gatekeeper',
  INNOVATOR = 'The Innovator'
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CognitiveSpecs {
  reasoningDepth: number;
  memoryPersistence: 'Volatile' | 'Linear' | 'Recursive';
  thinkingBudget: number;
  sovereigntyLevel: number;
  economicAutonomy: boolean;
}

export interface Web3Integration {
  blockchain: 'Ethereum' | 'Solana' | 'Polygon' | 'Cloudflare';
  smartContract?: string;
  walletRequired: boolean;
  tokenStandard?: 'ERC-20' | 'ERC-721' | 'SPL' | 'HYPHA';
  deFiEnabled: boolean;
  zkProofEnabled: boolean;
}

export interface Web4Features {
  aiOrchestrator: 'Groq' | 'Cloudflare-AI' | 'LangChain' | 'CrewAI' | 'Multi-Agent';
  autonomyLevel: number; // 0-100
  crossChainEnabled: boolean;
  decentralizedStorage: boolean;
  realTimeAdaptation: boolean;
}

export interface Blueprint {
  id: string;
  name: string;
  industry: string;
  description: string;
  features?: string[];
  icon: string;
  roles: AgentRole[];
  price: string;
  tier: 'Free' | 'Pro' | 'Enterprise';
  infrastructure: 'Edge Worker' | 'Cloud Pod' | 'Hybrid Nexus';
  reviews: Review[];
  isFeatured?: boolean;
  deploymentCount: number;
  cognitiveSpecs?: CognitiveSpecs;
  didHash?: string;
  web3Integration?: Web3Integration;
  web4Features?: Web4Features;
}

export interface DeployedEcosystem {
  id: string;
  blueprintId: string;
  name: string;
  status: 'Active' | 'Hibernating' | 'Syncing' | 'Sovereign';
  deployedAt: string;
  logs: string[];
  metrics: {
    computeUsage: string;
    a2aActivity: string;
    stateSize: string;
    nodeHealth: number;
    autonomousIncome: number;
    yieldRate: number;
    dwnSyncStatus: number;
    verifiableCredentials: number;
    groqCallsPerHour?: number;
    supabaseConnected?: boolean;
    langchainWorkflows?: number;
  };
  didHash?: string;
  blockchainTxHash?: string;
}

export interface Transaction {
  id: string;
  type: 'yield' | 'subscription' | 'trade' | 'reinvest' | 'stake' | 'unstake' | 'bridge';
  amount: number;
  currency: 'HYPHA' | 'USD' | 'ETH' | 'SOL';
  timestamp: Date;
  description: string;
  txHash?: string;
  networkFee?: number;
}

export interface Web3Wallet {
  address: string;
  network: 'Ethereum' | 'Solana' | 'Polygon';
  balance: number;
  nftCount: number;
  isVerified: boolean;
}

export interface UserStats {
  hyphaBalance: number;
  usdBalance: number;
  totalYield: number;
  activeNodes: number;
  transactions: Transaction[];
  isWalletConnected: boolean;
  walletAddress?: string;
  stakedAmount: number;
  governancePower: number;
  web3Wallet?: Web3Wallet;
  didDocument?: string;
  reputationScore: number;
  epochRewards: number;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  model?: string;
  processingTime?: number;
}

export interface GroqModel {
  id: string;
  name: string;
  contextWindow: number;
  speed: 'Ultra-Fast' | 'Fast' | 'Standard';
}

export interface AgentTask {
  id: string;
  type: 'research' | 'analysis' | 'execution' | 'monitoring';
  description: string;
  status: 'Pending' | 'Running' | 'Completed' | 'Failed';
  assignedAgent: string;
  result?: string;
  startedAt?: Date;
  completedAt?: Date;
}

export interface CrewAIWorkflow {
  id: string;
  name: string;
  agents: string[];
  tasks: AgentTask[];
  status: 'Idle' | 'Running' | 'Completed';
  totalTokensUsed: number;
}

export interface SupabaseTable {
  name: string;
  rowCount: number;
  sizeKB: number;
  lastUpdated: string;
}

declare global {
  interface Window {
    ethereum?: any;
  }
}
