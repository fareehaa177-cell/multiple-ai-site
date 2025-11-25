export interface EBook {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  pdfPath: string;
  coverImage?: string;
}

export const ebooks: EBook[] = [
  {
    id: 'got-a-startup-idea',
    title: 'Got A Startup Idea? Here\'s How AI Can Make It Real',
    shortDescription: 'Turn your startup vision into reality. Get step-by-step guidance on validating, building, and launching your AI-powered business with practical frameworks and tools.',
    longDescription: 'This comprehensive guide walks you through the entire journey of transforming your startup idea into a reality using AI. Learn how to validate your concept, build a solid business plan, conduct market research, and create a launch roadmap. Whether you\'re a first-time entrepreneur or looking to pivot your existing business, this e-book provides actionable insights and frameworks to help you succeed.',
    pdfPath: '/ebooks/1. Got A Startup Idea. Here\'s How Ai Can Make It Real.pdf',
  },
  {
    id: 'stop-waiting-start-innovating',
    title: 'Stop Waiting, Start Innovating - Funding Your AI Project with Grants',
    shortDescription: 'Discover funding opportunities and grant programs specifically designed for AI projects. Learn how to access government grants, research funding, and innovation programs to bring your AI vision to life.',
    longDescription: 'Funding is often the biggest barrier to launching an AI project. This e-book demystifies the grant application process and shows you exactly how to find and secure funding for your AI initiatives. From government grants to research funding and innovation programs, you\'ll learn about various funding sources, how to write compelling grant proposals, and strategies to maximize your chances of success.',
    pdfPath: '/ebooks/2. Stop Waiting, Start Innovating - Funding Your AI Project with Grants_.pdf',
  },
  {
    id: 'funding-your-startup',
    title: 'Funding Your Startup - The Stages Every Founder Must Master',
    shortDescription: 'Navigate the complex world of startup funding. Understand each funding stage from pre-seed to IPO, learn what investors look for, and master the art of fundraising at every stage of your startup journey.',
    longDescription: 'Understanding the funding landscape is crucial for any startup founder. This comprehensive guide breaks down every stage of startup funding, from pre-seed and seed rounds to Series A, B, C, and beyond. Learn what investors are looking for at each stage, how to prepare for fundraising, valuation strategies, term sheet negotiation, and how to build relationships with the right investors. This e-book is your complete roadmap to successful fundraising.',
    pdfPath: '/ebooks/3. Funding Your Startup -The Stages Every Founder Must Master.pdf',
  },
  {
    id: 'pitch-perfect',
    title: 'Pitch Perfect - The Art of Pitching Investors',
    shortDescription: 'Master the art of pitching to investors. Learn how to craft compelling pitch decks, deliver powerful presentations, and answer tough questions that win over investors and secure funding.',
    longDescription: 'A great pitch can make or break your fundraising efforts. This e-book teaches you everything you need to know about creating and delivering investor pitches that get results. From structuring your pitch deck to mastering your delivery, handling Q&A sessions, and following up effectively, you\'ll learn proven strategies used by successful entrepreneurs. Includes templates, examples, and insider tips from experienced investors.',
    pdfPath: '/ebooks/4. Pitch Perfect -The Art of Pitching Investors_.pdf',
  },
  {
    id: 'stop-chasing-leads',
    title: 'Stop Chasing Leads — Let AI Bring Them to You',
    shortDescription: 'Transform your lead generation with AI-powered automation. Learn how to build systems that work 24/7 to attract, qualify, and convert leads without constant manual effort.',
    longDescription: 'Stop spending countless hours chasing leads manually. This e-book shows you how to leverage AI to create automated lead generation systems that work around the clock. Learn about AI agents for lead generation, conversion optimization strategies, complete frameworks for implementation, and how to scale your lead generation efforts. Discover how successful businesses are using AI to generate consistent, high-quality leads while freeing up their time for what matters most.',
    pdfPath: '/ebooks/Stop Chasing Leads — Let AI Bring Them to You.pdf',
  },
];

