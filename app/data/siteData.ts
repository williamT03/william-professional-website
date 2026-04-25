export type NavigationLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  role: string;
  period: string;
  blurb: string;
  highlights: string[];
  stack: string[];
  href: string;
  ctaLabel: string;
};

export const siteProfile = {
  name: "William Trinidad",
  role: "AI Engineer & Full-Stack Developer",
  shortBio:
    "I build AI-first products, secure software, and thoughtful web experiences that turn complex workflows into something practical and approachable.",
  location: "Orlando, Florida",
  email: "TrinidadWilliam954@gmail.com",
  phone: "(954) 647-6633",
  resumeHref: "/assets/resume/William-Trinidad-Resume.pdf",
  githubHref: "https://github.com/williamT03/",
  linkedinHref: "https://www.linkedin.com/in/william-trinidad-26243728a/",
  portfolioHref: "https://resume.willcloudlab.com",
  cloudLabHref: "https://filecloud.willcloudlab.com",
} as const;

export const navigationLinks: NavigationLink[] = [
  { label: "Hero", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteProfile.githubHref },
  { label: "LinkedIn", href: siteProfile.linkedinHref },
  { label: "Resume", href: siteProfile.resumeHref },
  { label: "Portfolio", href: siteProfile.portfolioHref },
];

export const heroHighlights = [
  "B.S. in Computer Science from Florida Polytechnic University",
  "Focused on AI/ML, secure software engineering, and cloud-backed systems",
  "Experienced with Python, Next.js, React, Tailwind CSS, and modern AI tooling",
];

export const featuredProjects: Project[] = [
  {
    slug: "civilai",
    title: "CivilAI",
    role: "Municipal Code Assistant",
    period: "Dec 2025 - Present",
    blurb:
      "A full-stack retrieval-augmented generation experience designed to make municipal code research faster, smarter, and easier to navigate.",
    highlights: [
      "Built hybrid retrieval with FAISS, BM25, and cross-encoder reranking.",
      "Connected a FastAPI backend to a Next.js front end for real-time AI responses.",
      "Introduced evaluation metrics like Precision@7 and Recall@9 to measure search quality.",
    ],
    stack: ["Next.js", "FastAPI", "FAISS", "LLaMA", "DeepSeek", "RAG"],
    href: "https://github.com/williamT03/CivilAI/tree/main",
    ctaLabel: "View Repository",
  },
  {
    slug: "predictive-policing",
    title: "Predictive Policing Software",
    role: "AI + Mapping Platform",
    period: "Academic + Partner Project",
    blurb:
      "An interactive prediction dashboard that combines clustering, live mapping, and LLM-assisted workflows to support planning accuracy.",
    highlights: [
      "Designed a web dashboard with an interactive map and live data updates.",
      "Reached 95% prediction accuracy through model tuning and experimentation.",
      "Hosted the platform on a personal cloud environment for hands-on deployment experience.",
    ],
    stack: ["LLMs", "Mapping", "Clustering", "Cloud Hosting", "Dashboard UX"],
    href: "https://github.com/williamT03/Predictive-Policing",
    ctaLabel: "View Repository",
  },
  {
    slug: "video-summarization",
    title: "Video Summarization Program",
    role: "Machine Learning Research Project",
    period: "Florida Polytechnic University",
    blurb:
      "A comparison-driven research project exploring how transformer models stack up against classic computer vision methods for summarizing video efficiently.",
    highlights: [
      "Compared deep learning and traditional CV techniques for keyframe extraction.",
      "Measured both efficiency and accuracy to understand practical tradeoffs.",
      "Published the codebase and findings to support reproducibility and learning.",
    ],
    stack: ["Python", "Transformers", "Computer Vision", "Evaluation", "Research"],
    href: "https://github.com/williamT03/Video-summarization",
    ctaLabel: "View Repository",
  },
  {
    slug: "linux-server",
    title: "Linux Server Deployment",
    role: "Cloud Lab + Infrastructure",
    period: "Personal Infrastructure Project",
    blurb:
      "A secure Ubuntu server environment built for private cloud storage, experimentation, and day-to-day systems engineering practice.",
    highlights: [
      "Deployed FileCloud for backup, remote access, and private cloud workflows.",
      "Used Docker to isolate services and improve reliability.",
      "Built a VM lab for operating systems, security testing, and app experimentation.",
    ],
    stack: ["Ubuntu", "Docker", "Virtual Machines", "FileCloud", "Systems Engineering"],
    href: "https://filecloud.willcloudlab.com",
    ctaLabel: "Visit Cloud Lab",
  },
];

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    slug: "portfolio-site",
    title: "Portfolio Website",
    role: "Frontend Showcase",
    period: "Personal Brand Project",
    blurb:
      "A responsive portfolio experience built to present AI, full-stack, and infrastructure work in a clean and approachable way.",
    highlights: [
      "Designed to be mobile-friendly and simple to navigate.",
      "Showcases technical strengths across AI, backend, and front-end work.",
      "Includes a custom resume sharing workflow to streamline applications.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design", "Portfolio UX"],
    href: "https://resume.willcloudlab.com",
    ctaLabel: "Visit Website",
  },
];

export const coursework = [
  "Secure Software Engineering",
  "AI / Machine Learning",
  "Deep Learning",
  "Data Mining",
  "Operating Systems",
  "Computer Networking",
  "Algorithms & Design",
];
