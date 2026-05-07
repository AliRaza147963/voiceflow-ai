// FEATURES
export const features = [
  { icon: "⚡", title: "Real-time AI", desc: "Ultra-low latency voice responses." },
  { icon: "🔌", title: "Easy API", desc: "Simple integration with any app." },
  { icon: "📞", title: "Call Handling", desc: "Manage calls with AI automation." },
  { icon: "🧠", title: "Smart AI", desc: "Understands natural conversations." }
];

// TESTIMONIALS
export const testimonials = [
  {
    name: "Ali Khan",
    role: "Frontend Developer",
    text: "This platform saved us months of work!",
    stars: 5,
    color: "#6366f1"
  },
  {
    name: "Ahmed Raza",
    role: "Startup Founder",
    text: "Best voice AI API I've used.",
    stars: 5,
    color: "#10b981"
  },
  {
    name: "Sara Malik",
    role: "Product Manager",
    text: "Super easy and powerful.",
    stars: 4,
    color: "#f59e0b"
  }
];



// HOW IT WORKS
export const steps = [
  { n: "01", icon: "🔗", title: "Connect API", desc: "Integrate with a few lines of code." },
  { n: "02", icon: "⚙️", title: "Configure AI", desc: "Set voice, logic, and flows." },
  { n: "03", icon: "🚀", title: "Deploy", desc: "Go live instantly." }
];

// FAQ
export const faqs = [
  {
    q: "Is it free?",
    a: "Yes, you can start with our free plan."
  },
  {
    q: "Do I need coding?",
    a: "Basic coding knowledge helps but it's simple."
  },
  {
    q: "Can I scale?",
    a: "Yes, it supports enterprise-level scaling."
  }
];

// CODE DEMO
export const codeLines = [
  {
    ln: 1,
    tokens: [{ t: "keyword", v: "import " }, { t: "string", v: "VoiceAI " }, { t: "keyword", v: "from " }, { t: "string", v: "'voiceflow'" }]
  },
  {
    ln: 2,
    tokens: [{ t: "keyword", v: "const " }, { t: "var", v: "agent " }, { t: "keyword", v: "= new " }, { t: "class", v: "VoiceAI()" }]
  },
  {
    ln: 3,
    tokens: [{ t: "var", v: "agent.start()" }]
  }
];

// TRUSTED LOGOS
export const trustedLogos = [
  "Google", "Microsoft", "Amazon", "Meta", "Netflix"
];

// FOOTER
export const footerCols = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Docs"]
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact"]
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms"]
  }
];

export const plans = [
  {
    name: "Starter",
    price: "497",
    period: "per month",
    featured: false,
    btn: "primary",
    btnLabel: "Start Monthly",
    note: "Perfect for solo businesses & startups",
    features: [
      "AI call assistant with global coverage",
      "Unlimited inbound call handling",
      "Appointment booking system",
      "Google Calendar integration",
      "Lead capture & call summaries",
      "Basic automation workflows",
      "Email notifications"
      
    ]
  },
  {
    name: "Business",
    price: "4500",
    period: "per year",
    featured: true,
    discount: "Save 25%",
    btn: "accent",
    btnLabel: "Get Yearly Deal",
    note: "Best for scaling teams & agencies",
    features: [
      "Everything in Starter",
      "Advanced AI voice conversations",
      "Outbound calling campaigns",
      "Smart appointment scheduling",
      "CRM integrations (HubSpot, etc.)",
      "Call recording & analytics",
      "Priority support"
     
    ]
  },
  {
    name: "Pro",
    price: "Custom",
    period: "enterprise",
    featured: false,
    btn: "primary",
    btnLabel: "Contact Sales",
    note: "Built for enterprise & high-volume operations",
    features: [
      "Unlimited AI calling (inbound + outbound)",
      "Custom voice & AI training",
      "Advanced workflow automation",
      "Multi-calendar & team scheduling",
      "API & custom integrations",
      "White-label platform",
      "Dedicated account manager",
      "24/7 premium support"
    ]
  }
];