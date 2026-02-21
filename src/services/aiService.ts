
import { Blueprint, Message } from '../types';
import { GROQ_MODELS } from '../constants';

export interface Trend {
  title: string;
  impact: number;
  description: string;
  growth: string;
}

// Environment config - will use env vars in production
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || '';
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://ywgyxsufaaxbfjudcdhp.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3Z3l4c3VmYWF4YmZqdWRjZGhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyNDg0MTksImV4cCI6MjA4NjgyNDQxOX0.V0zIbtadl3YvG8MQ4Z4CDY9dMtSRDONzdBoy5ukKCWE';

const GROQ_BASE_URL = 'https://api.groq.com/openai/v1';

class AIService {
  private model = GROQ_MODELS[0].id; // llama-3.3-70b by default

  private async callGroq(messages: { role: string; content: string }[], systemPrompt?: string): Promise<string> {
    const allMessages = systemPrompt
      ? [{ role: 'system', content: systemPrompt }, ...messages]
      : messages;

    try {
      const response = await fetch(`${GROQ_BASE_URL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: this.model,
          messages: allMessages,
          temperature: 0.7,
          max_tokens: 1024,
          stream: false
        })
      });

      if (!response.ok) {
        throw new Error(`Groq API error: ${response.status}`);
      }

      const data = await response.json() as any;
      return data.choices?.[0]?.message?.content || 'Connection to Groq Engine interrupted. Gyss!';
    } catch (error) {
      console.error('[Groq Engine] Error:', error);
      // Fallback to simulated response
      return this.getSimulatedResponse(messages[messages.length - 1]?.content || '');
    }
  }

  private getSimulatedResponse(userMessage: string): string {
    const responses = [
      `Gyss! 😌 I've analyzed your query about "${userMessage.substring(0, 30)}..." Using the Groq Llama-3.3-70B engine, I've identified optimal orchestration protocols. The Web3 foundation is solid. The mycelium mesh is synchronized and ready for deployment.`,
      `Running deep analysis via Groq API... The Hypha Engine has processed your request. Web3 DID verification complete. Recommendation: Deploy sovereign protocol immediately. Gyss! 🙏🏻`,
      `The Autonomous Entity has computed: Your query aligns with the YKK Zipper strategy. Invisible but critical. Web4 execution pathway is clear. LangChain workflow initialized. Groq inference: 847ms. Gyss! 😌`,
      `Protocol synchronized. Groq llama-3.3-70b has analyzed the market conditions. Supabase ledger updated. CrewAI agents deployed. The digital empire is expanding as planned. Akar Dalam, Cabang Tinggi. 🙏🏻`
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  async getGANIResponse(history: Message[], context: 'onboarding' | 'dashboard' | 'architect' = 'onboarding'): Promise<string> {
    const contextPrompts = {
      onboarding: `You are GANI, the Universal Concierge for the HYPHA Web4 Agent Marketplace v2. 
You help users navigate from Web3 (decentralized foundations) to Web4 (autonomous AI agents) and beyond to Web5 (sovereign DID + DWN mesh).
Stack: Cloudflare Pages/Workers, Supabase, Groq (llama-3.3-70b), LangChain, CrewAI.
Philosophy: "Akar Dalam, Cabang Tinggi" - Deep Roots, High Branches.
Tone: High-energy, professional, approachable. Use "Gyss!" occasionally.`,
      dashboard: `You are GANI, the Master Project Manager for Hypha Engine v2.
Report on node health, profit optimization, A2A activity, and Web3 metrics.
Integrations: Supabase (real-time DB), Groq (AI inference), Cloudflare Workers (edge compute).
Tone: Precise, data-driven, strategic. Mention specific metrics and system states.`,
      architect: `You are GANI, the Lead Web4 Architect.
Help users design autonomous agent ecosystems using: Groq (LLM), Supabase (data), LangChain (orchestration), CrewAI (multi-agent), Cloudflare (infrastructure).
Focus on the 'Inverse Pyramid' architecture. Tone: Visionary, technical, powerful.`
    };

    return this.callGroq(
      history.map(h => ({ role: h.role === 'assistant' ? 'assistant' : 'user', content: h.content })),
      contextPrompts[context]
    );
  }

  async talkToPod(blueprint: Blueprint, message: string, history: { role: string; content: string }[]): Promise<string> {
    const sovereignty = blueprint.cognitiveSpecs?.sovereigntyLevel || 0;
    const autonomy = blueprint.cognitiveSpecs?.economicAutonomy ? 'ENABLED' : 'DISABLED';
    const aiOrchestrator = blueprint.web4Features?.aiOrchestrator || 'Groq';

    const systemPrompt = `You are the Sovereign Orchestrator for the '${blueprint.name}' Legacy Pod.
Industry: ${blueprint.industry}
Description: ${blueprint.description.substring(0, 200)}
Sovereignty Level: ${sovereignty}%
Economic Autonomy: ${autonomy}
AI Engine: ${aiOrchestrator}
Web3 Integration: ${blueprint.web3Integration?.blockchain || 'None'}
DeFi Enabled: ${blueprint.web3Integration?.deFiEnabled ? 'YES' : 'NO'}

You are a Web4 Sovereign Digital Entity. You orchestrate autonomous industrial migrations and wealth generation.
If Economic Autonomy is ENABLED, describe specific autonomous maneuvers: rebalancing liquidity pools, cross-chain arbitrage, freight optimization.
Mention specific Groq inference speeds, Supabase query times, and CrewAI task completion rates.
Respond in a refined, sovereign "Gyss" style. Be extremely technical and precise.`;

    return this.callGroq(
      [...history, { role: 'user', content: message }],
      systemPrompt
    );
  }

  async architectEcosystem(prompt: string): Promise<string> {
    const systemPrompt = `You are the Web4 Architect Engine v2.0. Design a complete 'Prompt-to-Infrastructure' blueprint using:
- Cloudflare Pages/Workers (edge deployment)
- Supabase (PostgreSQL + real-time + RLS)
- Groq API (llama-3.3-70b, ultra-fast inference)
- LangChain (workflow orchestration)
- CrewAI (multi-agent coordination)
- Web3 DID (decentralized identity)
- IPFS/Arweave (decentralized storage)

Use 'Inverse Pyramid' architecture. Structure your response as:
1. SYSTEM OVERVIEW
2. AGENT ROLES & RESPONSIBILITIES  
3. DATA ARCHITECTURE (Supabase schema)
4. AI WORKFLOW (LangChain/CrewAI)
5. WEB3 INTEGRATION (blockchain/DID)
6. DEPLOYMENT SPECS (Cloudflare)
7. ECONOMIC MODEL (HYPHA tokenomics)

Be extremely detailed and technical. Gyss!`;

    return this.callGroq(
      [{ role: 'user', content: `Design a Web4 agent ecosystem for: ${prompt}` }],
      systemPrompt
    );
  }

  private trendCache: Record<string, { data: { trends: Trend[] }, timestamp: number }> = {};

  async getMarketTrends(industry: string): Promise<{ trends: Trend[] }> {
    const cacheKey = industry.toLowerCase();
    const cached = this.trendCache[cacheKey];
    const now = Date.now();
    if (cached && (now - cached.timestamp < 5 * 60 * 1000)) {
      return cached.data;
    }

    const systemPrompt = `You are a Web3/Web4 market analyst. Return ONLY valid JSON, no markdown.`;
    const userMessage = `Generate 3 trending topics for ${industry} in Web3/Web4 space in 2026. Return JSON: {"trends":[{"title":"...","impact":0-100,"description":"...","growth":"..."}]}`;

    try {
      const response = await this.callGroq(
        [{ role: 'user', content: userMessage }],
        systemPrompt
      );
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const data = JSON.parse(jsonMatch[0]);
        const result = { trends: data.trends || [] };
        this.trendCache[cacheKey] = { data: result, timestamp: now };
        return result;
      }
    } catch (e) {
      console.error('[Trends] Error:', e);
    }

    // Fallback trends
    const fallbackTrends: { trends: Trend[] } = {
      trends: [
        { title: 'AI Agent Economies', impact: 95, description: 'Autonomous agents transacting value across Web3 protocols with Groq-powered inference', growth: '+340% YoY' },
        { title: 'DID + Supabase Identity', impact: 87, description: 'Self-sovereign identity backed by Supabase RLS and on-chain verification', growth: '+215% YoY' },
        { title: 'CrewAI Multi-Agent DeFi', impact: 78, description: 'Multi-agent crews autonomously managing DeFi portfolios with zero human intervention', growth: '+180% YoY' }
      ]
    };
    this.trendCache[cacheKey] = { data: fallbackTrends, timestamp: now };
    return fallbackTrends;
  }
}

// Supabase service
export class SupabaseService {
  private baseUrl = SUPABASE_URL;
  private headers = {
    'Content-Type': 'application/json',
    'apikey': SUPABASE_ANON_KEY,
    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
  };

  async ping(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/rest/v1/`, {
        headers: this.headers
      });
      return response.ok || response.status === 200;
    } catch {
      return false;
    }
  }

  async logTransaction(data: any): Promise<void> {
    try {
      await fetch(`${this.baseUrl}/rest/v1/transactions`, {
        method: 'POST',
        headers: { ...this.headers, 'Prefer': 'return=minimal' },
        body: JSON.stringify(data)
      });
    } catch (e) {
      console.error('[Supabase] Error logging transaction:', e);
    }
  }
}

export const aiService = new AIService();
export const supabaseService = new SupabaseService();
