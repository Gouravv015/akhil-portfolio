// Edit these. `image` is optional (any URL / file in /public); without it a card with title, tag and note is drawn.
export const projects = [
  { title: 'Hybrid RAG', tag: '56% TO 87% ANSWER ACCURACY', note: 'PRODUCTSQUADS / PRAVEG.AI', color: '#1f4bff', image: '' },
  { title: 'Grounded Agents', tag: '45% TO 90% GROUNDEDNESS', note: 'PRODUCTSQUADS / PRAVEG.AI', color: '#ff4a1c', image: '' },
  { title: 'MCP Host', tag: 'REMOTE TOOLS FOR AGENTS', note: 'PRODUCTSQUADS / PRAVEG.AI', color: '#0f9d6b', image: '' },
  { title: 'Aegis', tag: 'MCP SECURITY + RAG DIAGNOSTICS', note: 'PROJECT / IN PROGRESS', color: '#7a2cff', image: '' },
  { title: 'BUDDY', tag: 'SKILL ASSESSMENT AGENT', note: 'PROJECT / 2026', color: '#111111', image: '' },
  { title: 'AI Scorecard', tag: 'REACT + FASTAPI', note: 'PRODUCTSQUADS', color: '#e6a100', image: '' },
];

// "Ask Akhil" answers, written by hand from Akhil's resume (Nov 2026). Keep every claim traceable to it.
// The topic whose `keys` match the question best wins; `answers` is picked at random.
export const ask = {
  greeting: "Hi, I'm Akhil's resume as a chatbot. Ask me about experience, projects, skills or education.",
  suggestions: ['What does Akhil do?', 'Tech stack?', 'Tell me about the RAG work', 'Projects?'],
  topics: [
    { keys: ['hi', 'hello', 'hey', 'yo'], answers: ['Hey! What would you like to know about Akhil?', "Hello. Ask me anything about Akhil's resume."] },
    { keys: ['who is', 'who are', 'about akhil', 'about you', 'what do you do', 'what does akhil do', 'yourself', 'intro', 'summary'], answers: [
      'Akhil Saurabh is an AI Software Engineer building production agentic AI and RAG systems on a multi-tenant enterprise SaaS platform: LLM orchestration, retrieval and evaluation, secure FastAPI microservices, React frontends and AWS deployment.',
    ] },
    { keys: ['experience', 'work at', 'working', 'do you work', 'akhil work', 'job', 'company', 'career', 'year', 'intern', 'current', 'productsquads', 'praveg', 'role'], answers: [
      'AI Software Engineer Intern at Productsquads in Ahmedabad since July 2026, working on Praveg.ai, an agentic enterprise data platform. Ask about the RAG, agent, MCP or security work there.',
    ] },
    { keys: ['rag', 'retriev', 'accuracy', 'chunk', 'hybrid', 'qdrant', 'rerank', 'vector', 'embedding', 'bm25', 'semantic'], answers: [
      'Raised RAG answer accuracy from 56% to 87% on a 500-document enterprise corpus, with better chunking and hybrid retrieval in Qdrant (dense embeddings + BM25 + cross-encoder reranking), validated against golden datasets.',
    ] },
    { keys: ['ground', 'hallucinat', 'citation', 'langfuse', 'eval', 'agent', 'langgraph', 'orchestrat'], answers: [
      'Improved agent groundedness from 45% to 90% by enforcing grounding checks, source citations and low-evidence refusal in a LangGraph orchestrator, measured with Langfuse traces and an automated evaluation harness.',
    ] },
    { keys: ['mcp', 'model context protocol', 'composio', 'tool call'], answers: [
      'Engineered an MCP host and client that lets agents discover and invoke tools on remote MCP servers, with tool-catalog caching and token handling, and co-built in-house MCP servers for an enterprise client.',
    ] },
    { keys: ['secur', 'auth', 'rbac', 'tenan', 'multi tenan', 'saml', 'jwt', 'oauth'], answers: [
      'Implemented RBAC and multi-tenancy across the platform (tenant-isolated vector collections, tenant-scoped data, 350+ REST/SSE endpoints) and fixed auth and validation defects in FastAPI services secured with JWT, OAuth2 and SAML SSO.',
    ] },
    { keys: ['graphrag', 'graph rag', 'neo4j', 'knowledge graph', 'claude code'], answers: [
      'Led a GraphRAG feasibility study and proof of concept on Neo4j, and built a Claude Code skill that automates a plan, build, test, security and end-to-end cycle using AWS and Langfuse logs.',
    ] },
    { keys: ['scorecard', 'ai readiness', 'quiz'], answers: [
      'Owned the AI Readiness Scorecard end to end for the company website: React quiz UI, FastAPI validation, automated email reports and lead routing.',
    ] },
    { keys: ['impact', 'result', 'metric', 'proud', 'biggest'], answers: [
      'Two headline numbers: RAG answer accuracy up from 56% to 87%, and agent groundedness up from 45% to 90%.',
    ] },
    { keys: ['project', 'best project', 'built', 'portfolio', 'side project'], answers: [
      'Two projects: Aegis, an MCP security and RAG diagnostics platform (in progress), and BUDDY, an AI skill assessment and learning agent (2026). Ask about either.',
    ] },
    { keys: ['aegis', 'diagnos'], answers: [
      'Aegis (in progress): a security layer that guards MCP servers and tool calls against risky permissions and unsafe actions, plus a RAG failure diagnoser that traces why an answer failed and recommends fixes. Python, LangGraph, MCP, Langfuse, open-source LLMs.',
    ] },
    { keys: ['buddy', 'skill assessment', 'interview', 'roadmap'], answers: [
      'BUDDY (2026): a multi-agent pipeline that parses job descriptions and resumes, maps skill gaps, runs an adaptive LLaMA-3-70B interview and uses FAISS RAG to build a week-by-week learning roadmap. Python, FastAPI, Groq, Streamlit, deployed on Render.',
    ] },
    { keys: ['stack', 'tech', 'tool', 'skill', 'framework', 'langchain', 'llamaindex', 'litellm', 'genai', 'prompt'], answers: [
      'GenAI core: LangGraph, LangChain, LlamaIndex, MCP, Composio, LiteLLM, hybrid search, reranking, LLM evaluation and Langfuse. Ask about languages, ML, backend, frontend or cloud for more.',
    ] },
    { keys: ['language', 'programming', 'python', 'typescript', 'sql'], answers: ['Languages: Python, TypeScript, SQL and C++.'] },
    { keys: ['machine learning', 'ml', 'nlp', 'deep learning', 'tensorflow', 'keras', 'scikit', 'huggingface', 'transformer', 'cnn', 'pandas', 'numpy'], answers: [
      'ML and NLP: TensorFlow, Keras, Scikit-learn, HuggingFace Transformers, SentenceTransformers, CNNs, transfer learning, Pandas and NumPy.',
    ] },
    { keys: ['backend', 'fastapi', 'pydantic', 'sqlalchemy', 'api', 'microservice'], answers: [
      'Backend: FastAPI, Pydantic, SQLAlchemy, REST/SSE APIs, microservices, JWT, OAuth2, SAML SSO, RBAC and multi-tenancy.',
    ] },
    { keys: ['frontend', 'front end', 'react', 'next js', 'nextjs', 'tailwind', 'streamlit'], answers: ['Frontend: React, Next.js, Tailwind CSS and Streamlit.'] },
    { keys: ['cloud', 'aws', 'docker', 'devops', 'database', 'postgres', 'mongo', 'redis', 'faiss', 'azure', 'github actions', 'deploy'], answers: [
      'Data and cloud: PostgreSQL, MongoDB, Redis, Qdrant, FAISS, Neo4j, AWS (Lambda, ECS, S3, SQS, Step Functions), Docker, Azure DevOps and GitHub Actions.',
    ] },
    { keys: ['education', 'degree', 'college', 'universit', 'study', 'studie', 'cgpa', 'gpa', 'parul', 'graduat', 'btech'], answers: [
      'B.Tech in Computer Science & Engineering at Parul University, Vadodara, 2023 to 2027. CGPA 8.2 / 10.',
    ] },
    { keys: ['leetcode', 'codechef', 'hackerrank', 'competitive', 'problem solving', 'dsa', 'coding'], answers: [
      'LeetCode 1688 rating with 500+ problems solved, CodeChef 3-Star (1640), and HackerRank 6-Star Problem Solving, 5-Star Python and 4-Star SQL.',
    ] },
    { keys: ['certif', 'course', 'coursera', 'achievement'], answers: [
      'DeepLearning.AI Machine Learning and Deep Learning Specializations, plus IBM Data Science and Google Data Analytics Professional Certificates (Coursera).',
    ] },
    { keys: ['available', 'availability', 'hire', 'hiring', 'freelance', 'contract', 'rate', 'salary', 'notice'], answers: [
      'The resume lists a current on-site internship and a degree finishing in 2027, but not availability or rates. Best to ask directly: akhilsaurabh65@gmail.com.',
    ] },
    { keys: ['contact', 'email', 'reach', 'mail', 'phone', 'linkedin', 'github', 'website'], answers: ['Email akhilsaurabh65@gmail.com, or visit akhilsaurabh.in. GitHub, LinkedIn and LeetCode are linked in the footer.'] },
    { keys: ['where', 'location', 'located', 'based', 'live', 'city', 'remote'], answers: ['Ahmedabad, Gujarat, India. The current role is on-site there.'] },
  ],
  fallback: [
    "That's not on the resume. Try asking about experience, projects, skills or education.",
    'I only know what is on the resume, so for that one email akhilsaurabh65@gmail.com.',
  ],
};
