// run: node --test src/
import test from 'node:test';
import assert from 'node:assert/strict';
import { answer } from './ask.js';

const cases = {
  'What does Akhil do?': /AI Software Engineer building/, 'Tech stack?': /GenAI core/, 'Tell me about the RAG work': /56% to 87%/,
  'Projects?': /Aegis.*BUDDY/, 'hi, where do you work?': /Ahmedabad/, 'what did you build with MCP': /MCP host/,
  'how do you stop hallucinations': /45% to 90%/, 'graph rag on neo4j?': /GraphRAG/, 'is it multi-tenant and secure?': /RBAC/,
  'tell me about aegis': /^Aegis/, 'what is buddy': /^BUDDY/, 'does akhil know python': /Languages/, 'react or next.js?': /Frontend/,
  'aws experience': /Ahmedabad|Step Functions/, 'where did akhil study?': /Parul/, 'leetcode rating': /1688/, 'any certifications?': /Coursera/,
  'are you available for hire': /not availability/, 'how do I contact akhil': /akhilsaurabh65/, 'how many years of experience': /July 2026/,
  'favourite pizza': /resume/, 'what is the phone number': /Email/, 'tell me a joke about cats': /resume/, '': /resume/,
};
for (const [q, want] of Object.entries(cases)) test(q || '(empty)', () => assert.match(answer(q), want));
