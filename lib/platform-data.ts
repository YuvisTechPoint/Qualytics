export const platformFeatures = {
  augmented: [
    {
      title: "Profile and Understand Your Data",
      body: "Qualytics connects to your data sources and profiles how your data behaves, unifying structural and behavioral metadata into field profiles that establish a baseline from day one.",
      bullets: [
        "Automated structural profiling across every field",
        "Behavioral baselines generated from observed patterns over time",
        "Structural and behavioral metadata unified into field profiles",
        "Group-by profiling for multi-tenant and segmented views",
      ],
      mock: "profiling" as const,
    },
    {
      title: "Generate and Maintain Coverage",
      body: "Automated rule inference delivers broad coverage from day one, while business SMEs extend it through guided low-code authoring for complex logic.",
      bullets: [
        "Auto-suggested rules from profiling metadata",
        "50+ prebuilt rule types",
        "Low-code and no-code rule authoring",
        "AgentQ conversational interface for natural language governance",
      ],
      reverse: true,
      mock: "dashboard" as const,
    },
    {
      title: "Continuously Monitor Quality",
      body: "Qualytics monitors structural and behavioral signals as data moves through pipelines and schemas, detecting anomalies closer to the source.",
      bullets: [
        "Anomaly lifecycle management with status and ownership",
        "Time-series monitoring for metric trends",
        "Human-in-the-loop feedback that refines detection",
        "AgentQ for conversational anomaly investigation",
      ],
      mock: "monitoring" as const,
    },
    {
      title: "Act on Quality Signals",
      body: "Every anomaly includes context that pinpoints what changed and which records are affected. Quality signals power the controls that copilots and agents rely on.",
      bullets: [
        "Clear ownership and accountability for every anomaly",
        "Impact context with anomaly weight and affected records",
        "Automated remediation through flows and integrations",
        "Governed audit trail from anomaly to resolution",
      ],
      reverse: true,
      mock: "signals" as const,
    },
  ],
  humans: [
    {
      title: "One Governed Foundation",
      body: "Business teams, data teams, and AI systems work on the same governed foundation for data quality.",
      bullets: [
        "Low-code interface for business teams",
        "SQL and API access for data teams",
        "MCP integration for AI systems",
        "Shared metadata and rule catalog",
      ],
      mock: "humans-ai" as const,
    },
    {
      title: "AgentQ for Everyone",
      body: "AgentQ makes governance accessible through natural language, letting teams author rules, investigate anomalies, and manage governance conversationally.",
      bullets: [
        "Natural language rule authoring",
        "Conversational anomaly investigation",
        "Metadata exploration via chat",
        "Accessible to non-technical users",
      ],
      reverse: true,
      mock: "agentq" as const,
    },
  ],
  trusted: [
    {
      title: "Real-Time Controls",
      body: "Data quality is applied as real-time controls across analytics, applications, agents, and AI workflows.",
      bullets: [
        "Validate-at-use architecture",
        "MCP, API, and real-time interfaces",
        "Quality signals at point of consumption",
        "First-class support for copilots and agents",
      ],
      mock: "signals" as const,
    },
    {
      title: "Trusted Context Delivery",
      body: "Quality signals shape how data is used, ensuring every decision is based on trusted context.",
      bullets: [
        "Score and readiness indicators",
        "Contextual quality metadata",
        "Integration with AI workflows",
        "Continuous validation as data evolves",
      ],
      reverse: true,
      mock: "agentq" as const,
    },
  ],
};

export const platformFaqs = [
  {
    question: "How does Qualytics differ from traditional data quality tools?",
    answer:
      "Qualytics validates data at the moment it's used, not downstream. It combines AI-augmented rule inference with human governance to create a data control layer.",
  },
  {
    question: "What percentage of rules are automated?",
    answer:
      "On average, 95%+ of rules are automated through AI inference, with business teams guiding governance with business context.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most customers achieve broad coverage within weeks, not months, thanks to automated rule inference from observed data behavior.",
  },
];
