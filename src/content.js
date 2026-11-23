// Edit these. `image` is optional (any URL / file in /public); without it a titled card is drawn.
export const projects = [
  { title: 'RAG Search Engine', tag: 'LLM · RETRIEVAL', color: '#1f4bff', image: '' },
  { title: 'Agent Orchestrator', tag: 'AGENTS · TOOLS', color: '#ff4a1c', image: '' },
  { title: 'Voice Assistant', tag: 'SPEECH · REALTIME', color: '#0f9d6b', image: '' },
  { title: 'Doc Intelligence', tag: 'OCR · EXTRACTION', color: '#7a2cff', image: '' },
  { title: 'Eval Dashboard', tag: 'EVALS · METRICS', color: '#111111', image: '' },
  { title: 'Fine-tune Lab', tag: 'TRAINING · LORA', color: '#e6a100', image: '' },
];

// "Ask Akhil" answers. PLACEHOLDER until the real resume arrives: replace the text, keep the shape.
// Each topic matches when the question contains any of its keywords; `answers` is picked at random.
export const ask = {
  greeting: "Hi, I'm Akhil's resume, compiled into a chatbot. Ask me about his work, skills or availability.",
  suggestions: ['What do you do?', 'Tech stack?', 'Best project?', 'Are you available?'],
  topics: [
    { keys: ['hi', 'hello', 'hey', 'yo'], answers: ["Hey! What would you like to know about Akhil?", "Hello. Ask me anything about Akhil's work."] },
    { keys: ['who', 'about', 'what do you do', 'yourself', 'intro'], answers: [
      'Akhil is an AI engineer who builds LLM products end to end: retrieval, agents, evals and the infra to ship them.',
      'Short version: he turns large language models into reliable software. Long version: scroll up to the work section.',
    ] },
    { keys: ['experience', 'work', 'job', 'company', 'career', 'years'], answers: [
      'Around 4 years in industry: software engineer, then ML engineer, now senior AI engineer at Company One.',
      'He has shipped 20+ production AI systems across search, document processing and voice.',
    ] },
    { keys: ['stack', 'tech', 'tools', 'skills', 'language', 'framework', 'python'], answers: [
      'Daily drivers: Python, FastAPI, PyTorch, LangChain, LlamaIndex, pgvector and Docker on AWS or GCP.',
      'Models: GPT, Claude, Llama, Mistral and Whisper. He picks per task, and he measures before he picks.',
    ] },
    { keys: ['project', 'best', 'built', 'portfolio', 'proud'], answers: [
      'Favourite so far: a RAG search engine that answers over millions of documents with citations in under a second.',
      'The agent orchestrator: a system where multiple tool-using agents split a task, check each other and hand back one answer.',
    ] },
    { keys: ['rag', 'retrieval', 'search', 'vector', 'embedding'], answers: [
      'RAG is his home turf: chunking, hybrid search, rerankers and, most importantly, evals that catch bad answers before users do.',
    ] },
    { keys: ['agent', 'tool', 'autonomous'], answers: [
      'He builds agents that are boring in the best way: clear tools, tight loops, logged steps and a human fallback.',
    ] },
    { keys: ['fine', 'train', 'lora', 'finetune'], answers: [
      'Yes, he fine-tunes with LoRA and QLoRA when prompting is not enough, but tries the cheaper option first.',
    ] },
    { keys: ['education', 'degree', 'college', 'university', 'study'], answers: ['B.Tech in Computer Science, 2017 to 2021.'] },
    { keys: ['available', 'hire', 'freelance', 'contract', 'rate', 'price', 'cost'], answers: [
      'Yes, he is taking on new projects. The fastest route is the email in the contact section below.',
      'Open for freelance and full-time conversations. Drop a line below with what you are building.',
    ] },
    { keys: ['contact', 'email', 'reach', 'mail', 'linkedin'], answers: ['Email is best: hello@example.com. Links to GitHub and LinkedIn are in the footer.'] },
    { keys: ['where', 'location', 'based', 'remote', 'timezone'], answers: ['Based in India, works remotely, and overlaps comfortably with Europe and the US east coast.'] },
  ],
  fallback: [
    "That's not in my resume yet. Try asking about his experience, stack or projects.",
    'Good question. I only know what is on his resume, so ask Akhil directly via the contact section.',
    'Hmm, no data on that. I can tell you about his projects, skills or availability.',
  ],
};
