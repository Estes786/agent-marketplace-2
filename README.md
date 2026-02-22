# 🧬 GANI HYPHA — Web3 Master Platform v3.0

> **Akar Dalam, Cabang Tinggi. Gyss!**
> 
> Full-stack Web3 platform: Agent Marketplace + DeFi + DAO Governance + Tokenomics

---

## 🌐 Live URLs

| Environment | URL |
|-------------|-----|
| **Cloudflare Production** | https://agent-marketplace-2.pages.dev |
| **Latest Deploy** | https://d7166cb8.agent-marketplace-2.pages.dev |
| **GitHub** | https://github.com/Estes786/agent-marketplace-2 |
| **Local Dev** | http://localhost:3000 |

---

## 🏗️ Architecture — Full Web3 Stack

```
┌─────────────────────────────────────────────────────┐
│                  GANI HYPHA v3.0                     │
├─────────────────────────────────────────────────────┤
│  Frontend: React 19 + Vite + TailwindCSS (CDN)      │
│  Backend: Hono + Cloudflare Workers (Edge)          │
│  Database: Supabase (PostgreSQL + RLS)              │
│  Deploy: Cloudflare Pages (Edge Global)             │
├─────────────────────────────────────────────────────┤
│  AI/LLM Layer:                                      │
│  ├── Groq llama-3.3-70b (Primary, Ultra-Fast)      │
│  ├── LangChain (Orchestration + Memory)            │
│  ├── CrewAI (Multi-Agent Workflows)                │
│  └── LangSmith (Monitoring + Tracing)             │
├─────────────────────────────────────────────────────┤
│  Web3 Layer:                                        │
│  ├── Alchemy (Primary RPC + Webhooks)              │
│  ├── Infura (Backup RPC + Gas API)                 │
│  ├── Ankr (Fallback RPC)                           │
│  ├── The Graph (Data Indexing)                     │
│  ├── Pinata/IPFS (Decentralized Storage)           │
│  ├── Web3Auth MPC (Social → Wallet)                │
│  ├── Privy (Email/Phone Auth)                      │
│  └── W3C DID Protocol (Identity)                  │
└─────────────────────────────────────────────────────┘
```

---

## ✅ Completed Features

### 🏪 Core Platform
- **Agent Marketplace** — 9 blueprint pods (Free/Pro/Enterprise)
- **Command Center Dashboard** — Real-time pod monitoring, A2A telemetry
- **Architect Mode v3.0** — AI blueprint generation with Web5 cognitive specs
- **Media Lab** — AI content generation tools
- **GaniAssistant** — AI-powered onboarding & support chat

### 🌿 HYPHA Tokenomics Engine (NEW v3.0)
- **Token Overview**: Price chart, market cap, 30D history
- **Distribution Pie Chart**: Team, Community, Treasury, Public Sale allocations
- **Vesting Schedule**: Linear unlock tracking with cliff periods
- **Emission Schedule**: 5-epoch deflationary model (5% → 0.5%)
- **Token Utility Map**: Governance, Agent Deployment, Revenue Share, LP Mining, Burn
- **Personal Position Panel**: Balance, staked, vHYPHA power, projected yield

### 🔗 DApps & DeFi Hub (NEW v3.0)
- **DeFi Protocols Registry**: Uniswap V4, Aave V3, Lido, Curve, Radiant, GMX, HYPHA Pool
- **TVL Charts**: Visual comparison of protocol TVLs
- **Token Swap Simulator**: ETH/HYPHA/USDC swap via Alchemy simulation
- **DEX Route Selection**: Uniswap V4, Curve, Balancer, 1inch
- **RPC Providers Panel**: Alchemy, Infura, Ankr, Chainstack monitoring
- **The Graph Integration**: Live GraphQL query builder for Uniswap/Aave subgraphs
- **DApps Registry**: Uniswap, OpenSea, Aave, Chainlink, The Graph, Snapshot

### 🏛️ DAO Governance (NEW v3.0)
- **Proposal System**: Create/vote on 5 proposal categories
- **vHYPHA Voting**: On-chain style quadratic voting
- **Staking Vault**: Lock HYPHA → vHYPHA (1:1.2), earn 18.5% APY
- **Yield Projector**: Daily/Monthly/Annual staking return calculator
- **Treasury Dashboard**: 9.32M USD treasury overview (HYPHA + ETH + USDC)
- **Governance History**: Participation rate chart

### 🪪 Web3 Identity Hub (NEW v3.0)
- **DID Documents**: W3C DID:EThr, DID:Web generation
- **Multi-Wallet**: MetaMask, WalletConnect, Phantom, Coinbase Wallet
- **Web3Auth MPC**: Social login → wallet (Google, Apple, GitHub, Discord)
- **Privy Authentication**: Email/phone embedded wallets
- **IPFS/Pinata**: File pinning, CID management, gateway access
- **Verifiable Credentials**: AgentDeployment, GovernanceParticipation, KYC attestations

---

## 🔑 API Credentials Configured

| Service | Purpose | Status |
|---------|---------|--------|
| Alchemy API | Primary ETH RPC + SDK | ✅ Configured |
| Infura | Backup RPC + Gas API | ✅ Configured |
| Ankr | Fallback Multi-Chain RPC | ✅ Configured |
| Supabase | PostgreSQL + RLS | ✅ Connected |
| Web3Auth | MPC Social Login | ✅ Configured |
| The Graph | Protocol Data Indexing | ✅ Configured |
| Pinata | IPFS Pinning Service | ⚙️ Key needed |
| Groq | LLM (llama-3.3-70b) | ⚙️ Key needed |

---

## 🚀 Navigation Structure

```
├── 🏪 Marketplace (/)           — Agent Pod discovery
├── ⚡ Command Center (/dashboard) — Active pod monitoring
├── 🏗️ Architect v3 (/architect)  — AI blueprint builder
├── 🌿 Tokenomics (/tokenomics)   — HYPHA token analytics
├── 🔗 DApps Hub (/dapps)         — DeFi protocols + swap
├── 🏛️ DAO Governance (/dao)      — vHYPHA voting + staking
├── 🪪 Web3 Identity (/identity)  — DID + wallets + creds
├── 🌐 Web3 Panel (/web3)         — Stack overview
├── 🎬 Media Lab (/media-lab)     — Content AI tools
└── 🗺️ Roadmap (/roadmap)         — Web3→Web5 vision
```

---

## 🛠️ Development Setup

```bash
# Clone
git clone https://github.com/Estes786/agent-marketplace-2.git
cd agent-marketplace-2

# Install
npm install

# Create .dev.vars with your keys
cp .dev.vars .dev.vars.local
# Edit .dev.vars.local with your API keys

# Dev
npm run build
npx wrangler pages dev dist

# Deploy
npm run build
npx wrangler pages deploy dist --project-name agent-marketplace-2
```

---

## 📊 Data Architecture

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **App State** | React useState | UI state, user stats, transactions |
| **Persistent Data** | Supabase PostgreSQL | Blueprints, deployments, user data |
| **File Storage** | IPFS + Pinata | Agent blueprints, DID docs, media |
| **Blockchain Data** | The Graph | DeFi protocol indexing |
| **Real-time** | Supabase Realtime | Live pod metrics updates |
| **Session** | Cloudflare KV | Auth sessions |

---

## 🌟 Token Economics

| Metric | Value |
|--------|-------|
| Total Supply | 1,000,000,000 HYPHA |
| Circulating | 342,000,000 HYPHA |
| Price | $0.20 USD |
| Market Cap | $68.4M |
| Staking APY | 18.5% |
| Holders | 24,891 |
| Burn Rate | 0.5% quarterly |

---

## 🔮 Next Steps

1. **Groq API Key** — Set `VITE_GROQ_API_KEY` in CF Pages env vars (free at console.groq.com)
2. **Pinata Keys** — Set `VITE_PINATA_API_KEY` for real IPFS pinning
3. **LangSmith** — Set `VITE_LANGSMITH_API_KEY` for AI workflow tracing
4. **Smart Contracts** — Deploy HYPHA ERC-20 to Sepolia testnet first
5. **Supabase Schema** — Create tables: `blueprints`, `deployments`, `transactions`
6. **Web3Auth** — Test social login flow end-to-end
7. **Arbitrum Bridge** — Deploy LayerZero OFT contract

---

*Built with ❤️ by GANI HYPHA Team — Akar Dalam, Cabang Tinggi! Gyss!*
