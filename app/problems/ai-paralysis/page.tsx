import type { Metadata } from 'next';
import { ProblemPage } from '@/components/ProblemPage';
import { AiParalysisSchematic } from '@/components/schematics/problems/AiParalysisSchematic';
import { JsonLd } from '@/components/JsonLd';
import { problemRouting } from '@/data/problem-routing';

export const metadata: Metadata = {
  title: 'AI Paralysis: Why Most Small Businesses Are Stuck on AI | Decoded Ops',
  description: 'Everyone says you need AI. Nobody says what to fix first. Here\'s an honest view of AI readiness for print, decoration, and workwear businesses — what\'s worth doing now, and what isn\'t.',
  alternates: { canonical: '/problems/ai-paralysis' },
  openGraph: {
    title: 'AI Paralysis: Why Most Small Businesses Are Stuck on AI | Decoded Ops',
    description: 'Everyone says you need AI. Nobody says what to fix first. Here\'s an honest view of AI readiness for print, decoration, and workwear businesses — what\'s worth doing now, and what isn\'t.',
    url: 'https://decodedops.co.uk/problems/ai-paralysis',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Paralysis: Why Most Small Businesses Are Stuck on AI | Decoded Ops',
    description: 'Everyone says you need AI. Nobody says what to fix first. Here\'s an honest view of AI readiness for print, decoration, and workwear businesses — what\'s worth doing now, and what isn\'t.',
  },
};

const aiParalysisSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why are small and medium print businesses struggling with AI adoption?',
          acceptedAnswer: { '@type': 'Answer', text: 'AI is being sold as a magic solution, but most businesses in this sector don\'t have the process foundation, data quality, or digital infrastructure to make AI work. The real opportunity is in fixing what\'s broken first.' },
        },
        {
          '@type': 'Question',
          name: 'Do I need AI to stay competitive in the decorated goods industry?',
          acceptedAnswer: { '@type': 'Answer', text: 'In most cases, no — not yet. What will make you uncompetitive is continuing with broken processes and disconnected systems while pretending the problem is that you haven\'t adopted AI.' },
        },
        {
          '@type': 'Question',
          name: 'What should I do before investing in AI tools?',
          acceptedAnswer: { '@type': 'Answer', text: 'Get your data in order, stabilise your core systems, document your processes, and identify the specific operational problems AI might actually help with — rather than buying AI and looking for a problem to apply it to.' },
        },
        {
          '@type': 'Question',
          name: 'How do I separate genuine AI opportunities from vendor hype?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ask any AI vendor: what specific operational problem does this solve in a print or embroidery business? If they can\'t answer clearly and concretely, it is hype — regardless of how impressive the technology looks.' },
        },
        {
          '@type': 'Question',
          name: 'How do I know if my business is ready for AI?',
          acceptedAnswer: { '@type': 'Answer', text: 'AI readiness for small business depends on three things: whether your core processes are documented and consistent, whether your data is clean and accessible in a structured format, and whether you have identified a specific operational problem that AI might help with. An AI readiness assessment answers all three questions for your specific business — not in general terms.' },
        },
        {
          '@type': 'Question',
          name: 'Should a small print or embroidery business be using AI tools?',
          acceptedAnswer: { '@type': 'Answer', text: 'In most cases, not yet — and that is not the same as never. The businesses that get value from AI are the ones that fix their processes and data foundations first. AI tools for embroidery or print businesses are most useful when the underlying operational system is stable. If orders, production, and despatch are running on spreadsheets and manual workarounds, AI will amplify the chaos rather than reduce it.' },
        },
      ],
    },
  ],
};

export default function AiParalysisPage() {
  return (
    <>
      <JsonLd data={aiParalysisSchema} />
      <ProblemPage
      problem="AI paralysis"
      headline="Everyone is talking about AI. ||No one can tell you what it means for your business.||"
      intro="AI readiness for small business is a question most owners can't honestly answer — not because they haven't thought about it, but because every vendor, consultant, and conference has a different version of the answer. Every software vendor is adding AI features. Every conference talk is about AI. But when you ask what AI actually means for a print, embroidery, or decoration business, the answers are vague, generic, or non-existent."
      heroGraphic={<AiParalysisSchematic />}
      symptoms={[
        "You feel pressure to 'have an AI strategy' but don't know where to start",
        "Vendors are selling AI features you didn't ask for and can't see the value of",
        "You've been told AI will transform your business — but nobody can say how",
        "You're worried about being left behind but don't want to invest in hype",
        "Your team are experimenting with ChatGPT but there's no coherent approach",
        "You suspect AI could help somewhere, but you don't know where",
        "Every article you read contradicts the last one",
      ]}
      causes={[
        { title: 'AI is being sold as magic, not as a tool', body: "The AI narrative in the technology industry is built on transformational stories that rarely translate to operational reality. A business that prints and despatches physical products needs practical answers, not visionary promises." },
        { title: 'No process foundation to apply AI to', body: "AI works best when applied to well-defined, well-documented processes with clean data. Most businesses in this sector have undocumented processes, inconsistent data, and systems that don't talk to each other. An AI readiness assessment will tell you whether your data and processes are in a state where AI can deliver value — or whether there are foundational fixes needed first. You cannot automate what hasn't been documented." },
        { title: 'The wrong question is being asked', body: "'How do we adopt AI?' is the wrong question. The right question is 'What specific operational problems do we have that AI might help solve?' Without that reframing, AI adoption becomes a solution in search of a problem." },
        { title: 'Fear of missing out is driving decisions', body: "The fear that competitors will adopt AI and pull ahead creates pressure to do something — anything. That pressure leads to buying AI tools without a clear use case, which leads to wasted investment and reinforces the cynicism that stopped the business from engaging in the first place." },
      ]}
      howIHelp="I give you an honest, grounded assessment of where AI can actually help your business right now. I am not here to sell you an AI tool. I look at your current processes, your data quality, your technology stack, and your team's capability — and I tell you what needs to be in place before AI can deliver value, where the real AI opportunities are in your specific operation, and what is noise that you can safely ignore. No hype. No vendor agenda. Just a clear answer. Think of it as an AI readiness check built specifically for businesses in the print, embroidery, and decoration sector — not a generic AI strategy that could apply to any industry."
    
      slug="ai-paralysis"
      targetService={problemRouting['ai-paralysis'].targetService}
      relatedProblems={problemRouting['ai-paralysis'].relatedProblems}
      relatedReading={problemRouting['ai-paralysis'].relatedReading}
    />
    </>
  );
}
