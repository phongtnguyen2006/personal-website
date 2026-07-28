/**
 * Every piece of copy on the site lives here so it can be edited without
 * touching layout code. Voice is deliberately lowercase and conversational.
 */

export const profile = {
  name: "phong nguyen",
  /* Swap this if you'd rather write your name a different way — it's just a string. */
  ipa: "/fʌŋ ˈnwɪn/",
  pos: "n.",
  gloss: "cs + linguistics @ ucla",
  bio: "i mostly build the plumbing behind AI agents — RAG pipelines, MCP servers, and the unglamorous data infrastructure that makes the fun parts possible. i got here through a weird double major: linguistics turns out to be great training for thinking about how machines parse meaning. outside of that i cook, fish, and play too much soccer.",
  currently: {
    role: "investment swe intern",
    org: "sixth street partners",
    place: "new york",
  },
  location: "los angeles, ca",
  email: "ph0ngnguyen@g.ucla.edu",
  github: "https://github.com/phongtnguyen2006",
  githubHandle: "phongtnguyen2006",
  linkedin: "https://linkedin.com/in/ph0ngnguyen",
  linkedinHandle: "in/ph0ngnguyen",
};

export type Role = {
  org: string;
  title: string;
  place: string;
  start: string;
  end: string;
  stack: string[];
  notes: string[];
};

export const roles: Role[] = [
  {
    org: "sixth street partners",
    title: "investment software engineer intern",
    place: "new york, ny",
    start: "jun 2026",
    end: "aug 2026",
    stack: ["Python", "FastAPI", "Airflow", "Fargate", "Snowflake"],
    notes: [
      "built a RAG pipeline (python, fastapi, gpt-5) that automates company underwriting research for the direct lending team. 100+ analysts picked it up, and it saves each of them 10+ hours a week.",
      "set up scheduled airflow DAGs on AWS fargate to pull company data from pitchbook, sourcescrub, and friends into snowflake — that's what feeds all the RAG and classification work downstream.",
      "got an LLM classifying and similarity-scoring portfolio companies by industry, product, and market so analysts can surface comparables for a target. lots of back-and-forth with them on what \"comparable\" actually means.",
      "wrote an asyncio-concurrent extraction pipeline that crawled 5,000+ messy box folders, parsed powerpoint decks into a strict schema, and backfilled 1,000+ companies, deduped with fuzzy matching.",
    ],
  },
  {
    org: "fox corporation",
    title: "software cloud engineer intern",
    place: "los angeles, ca",
    start: "feb 2026",
    end: "apr 2026",
    stack: ["Python", "Terraform", "AWS", "Vue.js", "FastAPI", "Docker"],
    notes: [
      "built a service-intake platform so teams could request cloud resources (AWS, github, etc.) without a human bottleneck — okta for identity, postgres for tracking requests, and the jira api to open tickets on its own.",
      "scripted terraform modules to deploy and manage EC2 instances, VPCs, and load balancers, which cut setup time and the number of things people misconfigured by hand.",
    ],
  },
  {
    org: "greenpoint financial",
    title: "software engineer intern",
    place: "rye, ny",
    start: "jun 2025",
    end: "sep 2025",
    stack: ["Python", "Pandas", "Playwright", "Openpyxl", "Power BI"],
    notes: [
      "built pandas ETL pipelines over four years of quarterly data from 5,000+ banks — about 5M rows out the other end — then computed performance ratios and turned them into power BI dashboards for trend and competitiveness insights.",
      "made the whole thing 50% faster with postfix formula evaluation, loop elimination, and memory-friendlier data structures. also added structured logging and a quarantine lane across 7 schemas so one bad row can't take down a run.",
    ],
  },
  {
    org: "creative labs",
    title: "software developer lead",
    place: "los angeles, ca",
    start: "mar 2025",
    end: "jun 2025",
    stack: ["React Native", "Node.js", "MongoDB", "Firebase"],
    notes: [
      "led a 6-dev agile team building an app for finding, rating, and reviewing cafes. ran standups, set the code review bar, and worked with our UI/UX designers through 20+ figma mockups.",
      "designed the REST API behind it — CRUD, advanced search, and cafe metadata retrieval.",
    ],
  },
];

export const earlierRoles =
  "before that: software developer @ ucla radio, building the show archive site in next.js and automating 1,000+ show records with pandas + the GCP drive api. and coding instructor @ code ninjas, teaching python, javascript, C#, and lua to 200+ kids aged 7–14.";

export type Project = {
  name: string;
  year: string;
  blurb: string;
  tech: string[];
  links: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    name: "agentic wallet",
    year: "2026",
    blurb:
      "a spend-capped wallet any AI agent can plug into. it's an MCP server exposing search and pay tools, so an agent can hit data APIs and actually buy things — doordash, uber, amazon — through one endpoint. each purchase gets its own scoped virtual card (lithic), issued on cloudflare workers + durable objects, with a governance layer that blocks overspend in real time.",
    tech: [
      "TypeScript",
      "Cloudflare Workers",
      "Durable Objects",
      "MCP",
      "Hono",
      "React",
      "Supabase",
    ],
    links: [],
  },
  {
    name: "ai fitness tracker",
    year: "2025",
    blurb:
      "counts your reps and calls out bad form while you're actually doing the exercise. google's movenet pose estimator + tensorflow measure joint angles to catch a sagging plank or a half pushup. react on the front, flask + mongo for accounts, and a gemini-powered virtual coach that tells you what to fix.",
    tech: ["React", "Flask", "TensorFlow", "Express", "MongoDB", "Gemini AI"],
    links: [
      { label: "code", url: "https://github.com/LAHacks25/form-fitness" },
      {
        label: "demo",
        url: "https://devpost.com/software/form-fitness-pya478",
      },
    ],
  },
  {
    name: "rappr",
    year: "2025",
    blurb:
      "a web3 music betting platform that pulled 500+ signups. a langchain pipeline ingests the billboard hot 100 api, reddit, and a few other sources into postgres, then hands the whole aggregated dataset to an LLM as context to generate predictive betting lines.",
    tech: [
      "LangChain",
      "PostgreSQL",
      "Llama",
      "TypeScript",
      "Next.js",
      "Supabase",
    ],
    links: [],
  },
  {
    name: "sip",
    year: "2025",
    blurb:
      "cafe discovery and reviews, built with creative labs at ucla. real-time search plus review aggregation, with ratings adjusted by the sentiment of what people actually wrote.",
    tech: ["React Native", "Firebase", "Node.js", "Express", "MongoDB"],
    links: [
      { label: "code", url: "https://github.com/SIP-CL/SIP" },
      {
        label: "demo",
        url: "https://docs.google.com/presentation/d/1r0Kyg0f6eTUbGjDPxkYSU6xiJS19VnSAwVw6cNjk1rY/edit",
      },
    ],
  },
  {
    name: "ucsb dine-in",
    year: "2025",
    blurb:
      "built in 24 hours at SB hacks. lets ucsb students check what's actually in the dining halls that day and leave reviews so nobody walks across campus for a bad lunch.",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "Bootstrap"],
    links: [
      {
        label: "code",
        url: "https://github.com/phongtnguyen2006/UCSB-Dine-In",
      },
      { label: "demo", url: "https://devpost.com/software/ucsbdine-in" },
    ],
  },
  {
    name: "image to song",
    year: "2025",
    blurb:
      "upload a picture, get back a song that matches its vibe. a multi-modal model reads the image, and groq turns that reading into a recommendation. mostly an excuse to see how well a model can describe a mood.",
    tech: ["Hugging Face", "Groq", "React", "Flask", "Python"],
    links: [],
  },
];

export const toolkit = [
  {
    label: "languages",
    items: [
      "Python",
      "C/C++",
      "Java",
      "JavaScript/TypeScript",
      "HTML/CSS",
      "SQL",
    ],
  },
  {
    label: "tools i reach for",
    items: [
      "Claude Code",
      "Model Context Protocol",
      "AI agents",
      "FastAPI",
      "Git",
      "Docker",
      "MongoDB",
      "AWS",
    ],
  },
];

export const education = {
  school: "university of california, los angeles",
  degree: "b.a. computer science + linguistics",
  minor: "minor in data science",
  gpa: "3.8 gpa",
  grad: "graduating june 2028",
  coursework:
    "data structures & algorithms · object-oriented programming · software construction · discrete structures · linear algebra · probability & statistics · linguistic analysis · applied phonetics · syntax",
};
