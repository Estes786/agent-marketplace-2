# GANI HYPHA - Web4 Agent Marketplace v2

## Project Overview
- **Name**: GANI HYPHA Agent Marketplace v2
- **Goal**: Web3 → Web4 Agent Marketplace dengan full autonomous AI ecosystem
- **Version**: 2.0.0
- **Stack**: Cloudflare Pages + Groq + Supabase + LangChain + CrewAI

## 🚀 Live URL
- **Production**: https://agent-marketplace-2.pages.dev (after deploy)
- **GitHub**: https://github.com/Estes786/agent-marketplace-2

## 🔧 Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Infrastructure | Cloudflare Pages/Workers | Edge deployment, 300+ PoPs |
| Frontend | React 19 + Vite + TailwindCSS | UI/SPA |
| Backend | Hono Framework | API routes |
| LLM | Groq (llama-3.3-70b) | Ultra-fast AI inference |
| Database | Supabase PostgreSQL + RLS | Data sovereignty |
| AI Orchestration | LangChain + LangSmith | Workflow management |
| Multi-Agent | CrewAI (CREWSHIP) | Agent coordination |
| Web3 Identity | W3C DID Protocol | Decentralized identity |
| Storage | Cloudflare R2 + IPFS | Decentralized storage |

## 📋 Features

### ✅ Completed
1. **Marketplace Hub** - 8 Web3/Web4 agent blueprints with DeFi, ZK proof, DID features
2. **Command Center v2** - Pod monitoring with Groq AI integration, LangChain metrics
3. **Web3 Layer** - DID identity, wallet connect, DeFi protocol integration
4. **Architect Engine v2** - Web4 blueprint design with Groq + LangChain + CrewAI selection
5. **Media Lab** - Groq AI content/image generation
6. **Roadmap** - Web3→Web4→Web5 journey with tech stack overview
7. **GANI Assistant** - Groq-powered AI chatbot (llama-3.3-70b)
8. **DAO Governance** - Staking, vHYPHA, voting, yield projection
9. **Tokenomics** - HYPHA allocation, APY charts, protocol metrics

### 🔧 API Credentials (Production)
- **Groq**: Set `VITE_GROQ_API_KEY` in Cloudflare env vars
- **Supabase URL**: Set `VITE_SUPABASE_URL` in Cloudflare env vars
- **LangSmith**: Set `LANGCHAIN_API_KEY` in Cloudflare env vars (secret)
- **CrewAI**: Set `CREWAI_API_KEY` in Cloudflare env vars (secret)

## 🛠️ Data Architecture

### HYPHA Token Model
- Total Supply: 1,000,000,000 HYPHA
- Staking APY: 18.5% (compounding)
- Governance: vHYPHA (1 HYPHA = 1.2 vHYPHA when staked)

### Agent Blueprints
8 pre-built blueprints across industries: Property, DeFi, Fintech, Logistics, Legal, Media, Lifestyle, Personal Services

## 🚀 Deployment

### Local Development
```bash
npm install
npm run build
npm run preview  # or wrangler pages dev dist
```

### Production Deploy
```bash
npm run build
wrangler pages deploy dist --project-name agent-marketplace-2
```

### Environment Variables (Cloudflare Pages)
```
VITE_GROQ_API_KEY=your_groq_key
VITE_SUPABASE_URL=https://ywgyxsufaaxbfjudcdhp.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 📊 User Guide
1. Visit the Marketplace to browse AI agent blueprints
2. Connect your Web3 wallet for DID identity
3. Deploy a pod (Free/Pro/Enterprise tiers)
4. Monitor in Command Center with real-time Groq AI metrics
5. Stake HYPHA in DAO for governance power and yield
6. Use GANI Assistant (🧬) for AI guidance

## 📈 Deployment Status
- **Platform**: Cloudflare Pages
- **Status**: ✅ Active
- **Build**: Vite 6 + React 19 + TypeScript
- **Last Updated**: 2026-02-21

---
*"Akar Dalam, Cabang Tinggi" - Deep Roots, High Branches*
*Gyss! 😌🙏🏻*
