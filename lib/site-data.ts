export type SocialLink = {
  label: string;
  href: string;
  note: string;
};

export type Service = {
  title: string;
  description: string;
  bullets?: string[];
};

export type Principle = {
  eyebrow: string;
  title: string;
  description: string;
};

export type ProjectStep = {
  title: string;
  description: string;
};

export type Milestone = {
  year: string;
  title: string;
  label: string;
  description: string;
};

export type StackItem = {
  label: string;
};

export type StudioNote = {
  title: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Project = {
  slug: string;
  year: string;
  title: string;
  category: string;
  summary: string;
  detailIntro: string;
  challenge: string;
  role: string;
  duration: string;
  services: string[];
  highlights: string[];
  process: ProjectStep[];
  metrics: string[];
  outcome: string;
  quote: string;
  accent: string;
};

export const siteConfig = {
  name: "Edie Wang",
  role: "Brand Designer / Creative Developer",
  basedIn: "Shanghai, China · Open to remote collaborations",
  availability: "Available for selected commissions in 2026",
  heroTitle: "Designing quiet, memorable digital worlds for brands with taste.",
  heroText:
    "我把品牌策略、视觉设计和网页落地串成一个完整体验，让陌生人第一次打开页面时，就能迅速感受到品牌的语气、质地和记忆点。",
  intro:
    "这版首页参考了你发来的 Framer 作品集节奏，但我没有照搬模板，也没有填假奖项或假客户评价，而是把它改造成一套适合你长期继续替换内容的结构。",
  email: "mailto:hello@edie.live",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://edie.live",
  socials: [
    {
      label: "Email",
      href: "mailto:hello@edie.live",
      note: "最重要的主联系入口，建议换成你真正常用的邮箱。",
    },
    {
      label: "GitHub",
      href: "https://github.com/ediewong",
      note: "如果你会前端或交互开发，这里可以放公开项目与源码。",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yourname",
      note: "适合求职、国际合作，或让招聘方快速补充了解你。",
    },
    {
      label: "Behance",
      href: "https://www.behance.net/yourname",
      note: "如果你之后会同步平面、品牌、视觉案例，这里很适合作为外部作品入口。",
    },
  ] satisfies SocialLink[],
  services: [
    {
      title: "Brand Narrative",
      description: "先把品牌要说的话理清楚，再决定页面该如何被看见、被理解、被记住。",
      bullets: ["定位语气", "首页叙事", "信息层级"],
    },
    {
      title: "Visual Direction",
      description: "不是把组件排整齐，而是让颜色、字形、节奏和留白真的属于这个品牌。",
      bullets: ["视觉系统", "版式与质感", "设计细节"],
    },
    {
      title: "Website Delivery",
      description: "把设计真正上线到互联网，而不是停留在静态稿里，让它可以持续更新与迭代。",
      bullets: ["Next.js", "Framer/前端实现", "Vercel 上线"],
    },
  ] satisfies Service[],
  about: [
    "我偏爱有温度、有留白、但依然精准的视觉表达。相比“把页面做满”，我更在意一个网站能不能让人快速感受到品牌真正的气质。",
    "所以在做作品集或品牌网站时，我通常会把重点放在三件事上：讲什么、怎么被看见、最后如何稳定地上线。",
    "这也是这版站点的出发点。它不是单纯为了展示项目截图，而是把你的定位、方法和代表案例编排成一种更完整的在线叙事。",
  ],
  principles: [
    {
      eyebrow: "01",
      title: "Narrative First",
      description:
        "首页先解决“你是谁”和“为什么值得继续看”，案例页再展开过程与结果，阅读会顺很多。",
    },
    {
      eyebrow: "02",
      title: "Mood With Structure",
      description:
        "氛围感不是装饰，而是建立在清楚结构上的视觉表达。好看的页面也应该让人读得懂。",
    },
    {
      eyebrow: "03",
      title: "Build What Can Ship",
      description:
        "设计如果不能上线，就很难真正产生影响。结构、样式和部署从一开始就该一起考虑。",
    },
    {
      eyebrow: "04",
      title: "Leave Room To Grow",
      description:
        "现在先有一个强而稳定的首页，后面再慢慢补齐真实案例、经历和更完整的内容深度。",
    },
  ] satisfies Principle[],
};

export const milestones = [
  {
    year: "2026",
    title: "Portfolio Relaunch",
    label: "Public Release",
    description: "把个人站点从零散页面整理成一个可公开分享、可持续更新的在线作品集。",
  },
  {
    year: "2025",
    title: "Brand-Led Web Projects",
    label: "Selected Direction",
    description: "开始把品牌表达、网页叙事和前端实现放在同一条工作链路里思考。",
  },
  {
    year: "2024",
    title: "Visual Systems",
    label: "Design Practice",
    description: "从单点页面执行转向更完整的视觉系统与内容结构整理。",
  },
] satisfies Milestone[];

export const creativeStack = [
  { label: "Brand Strategy" },
  { label: "Editorial Layout" },
  { label: "Visual Direction" },
  { label: "Figma" },
  { label: "Framer" },
  { label: "Next.js" },
  { label: "Responsive Web" },
  { label: "Creative Coding" },
  { label: "Typography" },
  { label: "Motion Details" },
] satisfies StackItem[];

export const studioNotes = [
  {
    title: "Strategy before styling",
    description:
      "视觉只是结果，不是起点。先知道页面为什么存在、需要讲什么，风格才不会空转。",
  },
  {
    title: "Tactile digital surfaces",
    description:
      "我喜欢让网页看起来像有材质、有呼吸感，而不是只有冷冰冰的扁平排版。",
  },
  {
    title: "Launch beats perfect",
    description:
      "先让站点上线、可分享、可被看见，再基于真实反馈慢慢打磨，这是更有效的迭代方式。",
  },
] satisfies StudioNote[];

export const faqs = [
  {
    question: "你可以只做设计，不做前端吗？",
    answer:
      "可以。如果项目只需要品牌方向、网站视觉或 Framer 设计稿，这套结构也完全适用。只是我在能落地的时候，会更倾向于把它一起做完整。",
  },
  {
    question: "如果我现在作品还不够多，适合做作品集网站吗？",
    answer:
      "适合。与其等到“所有内容都准备好了”再上线，不如先用 2 到 3 个最有代表性的项目搭出第一版，让它先开始服务你。",
  },
  {
    question: "这套站点后面还能继续扩展吗？",
    answer:
      "可以。现在的结构已经把首页、案例详情、关于和联系页分开了，之后加博客、英文版或更多项目都比较顺。",
  },
  {
    question: "为什么现在域名能配好，网页还可能短时间 404？",
    answer:
      "这通常和 Vercel 或 DNS 的边缘传播有关，不是因为你还没开始设计页面。内容是页面层问题，404 是发布链路问题。",
  },
] satisfies FAQItem[];

export const projects = [
  {
    slug: "reverie-atelier",
    year: "2026",
    title: "Reverie Atelier",
    category: "Brand Website / Art Direction",
    summary:
      "一个偏策展感的品牌网站方向，把视觉情绪、品牌语气和浏览节奏编成统一体验。",
    detailIntro:
      "这个项目适合放你最能体现审美判断与整站把控能力的案例。重点不是堆截图，而是展示你如何建立一种完整、可被感知的品牌氛围。",
    challenge:
      "当品牌气质本身比较细腻时，页面很容易不是太空，就是太满。真正难的是在留白、节奏和信息清晰之间找到平衡。",
    role: "Creative Direction, Website Design, Front-end Delivery",
    duration: "5 weeks",
    services: ["品牌叙事", "视觉方向", "网页落地"],
    highlights: [
      "用更像杂志而不是营销页的节奏，去组织品牌的第一印象。",
      "每个版块都承担明确的阅读任务，而不是只做一组好看的组件。",
      "让网页在手机和桌面上都保持同一种静而有力的气质。",
    ],
    process: [
      {
        title: "Define the mood",
        description:
          "先确认品牌真正想给人的感受，再把这个感受拆成颜色、字形、节奏、留白与图片比例。",
      },
      {
        title: "Build the narrative",
        description:
          "首页不是把信息平均摆开，而是先抓住注意力，再逐步铺开项目价值与品牌细节。",
      },
      {
        title: "Ship the experience",
        description:
          "最后把设计细节变成真实可访问的网页，包括响应式排版、滚动节奏与清晰的联系入口。",
      },
    ],
    metrics: [
      "适合填写：上线后最关键的业务结果或项目反馈",
      "适合填写：用户停留、转化或合作咨询变化",
      "适合填写：你在这个项目里沉淀出的核心方法",
    ],
    outcome:
      "好的案例结尾，不是泛泛地说“完成了网站”，而是说明这个网站最终如何更好地传达品牌、吸引目标对象，并代表你的设计方法。",
    quote:
      "A memorable website should feel edited, not merely assembled.",
    accent: "#8c5d47",
  },
  {
    slug: "signal-house",
    year: "2025",
    title: "Signal House",
    category: "Product Narrative / Launch Site",
    summary:
      "面向 AI 产品或 SaaS 场景的叙事型官网，把复杂功能重新翻译成更容易理解的故事线。",
    detailIntro:
      "如果你有 ToB、SaaS、AI 工具或产品官网项目，可以把这个案例替换成真实版本，并重点写清楚复杂信息是如何被重新梳理的。",
    challenge:
      "很多产品页最大的问题不是功能不够，而是价值表达太平。用户看到了很多模块，却依然不知道为什么值得继续了解。",
    role: "Narrative Design, Product Marketing Page, UI System",
    duration: "7 weeks",
    services: ["信息架构", "叙事型首页", "设计规范"],
    highlights: [
      "把“功能列表”重组为更有逻辑的决策路径。",
      "用更少但更有重点的视觉层级，减少认知负担。",
      "让内容、视觉和转化入口服务同一个主叙事。",
    ],
    process: [
      {
        title: "Map the decision path",
        description:
          "先找出用户真正关心的问题，再安排页面在什么节点给出什么回答，而不是先铺模块。",
      },
      {
        title: "Reduce the noise",
        description:
          "压缩重复表达，保留最能推动理解与转化的内容，把重点重新拉回到价值本身。",
      },
      {
        title: "Create a reusable system",
        description:
          "项目最后沉淀的不是一张首页，而是一套以后还能继续生长和复用的表达框架。",
      },
    ],
    metrics: [
      "适合填写：注册转化、申请试用或咨询量变化",
      "适合填写：销售、运营或团队对新版结构的反馈",
      "适合填写：你建立的系统如何被后续继续复用",
    ],
    outcome:
      "这种项目最值得强调的是：你不只是做了界面，而是改变了信息被理解、被记住和被决策的方式。",
    quote:
      "Clarity is often the strongest form of aesthetics on a product website.",
    accent: "#465767",
  },
  {
    slug: "field-notes-lab",
    year: "2024",
    title: "Field Notes Lab",
    category: "Personal Experiment / Editorial Web",
    summary:
      "一个更自由的个人实验项目，用来保留你的作者性、好奇心和风格偏好，让作品集不只像简历。",
    detailIntro:
      "如果你有个人策展、视觉实验、互动短篇、研究型页面或插画项目，这里很适合作为第三个案例，用来补足你的独特性。",
    challenge:
      "很多作品集专业但无聊，问题不是不完整，而是看完之后很难记住作者。个人实验项目就是用来解决这个问题的。",
    role: "Concept, Editorial Layout, Visual Experiment, Web Build",
    duration: "3 weeks",
    services: ["概念策划", "视觉实验", "网页实现"],
    highlights: [
      "补足商业项目之外的个人判断与审美偏好。",
      "用更自由的页面节奏展示你如何处理留白、层次与气氛。",
      "让作品集既专业，也保留作者性。",
    ],
    process: [
      {
        title: "Find the theme",
        description:
          "实验不是为了炫技巧，而是先找到你真正想表达的主题，再选择合适的媒介与画面语言。",
      },
      {
        title: "Compose the rhythm",
        description:
          "允许不对称、放大留白和更大胆的比例变化，但整体仍然要维持清楚的阅读秩序。",
      },
      {
        title: "Frame your signature",
        description:
          "让这个项目成为别人记住你的方式之一，而不是与其他案例完全割裂的孤立实验。",
      },
    ],
    metrics: [
      "适合填写：项目带来的关注、收藏或转发",
      "适合填写：别人最常记住你的哪个视觉特征",
      "适合填写：这次实验如何影响后续的商业项目",
    ],
    outcome:
      "这一类项目最大的价值不一定是商业结果，而是让你的站点从“完整”变成“有辨识度”。",
    quote:
      "The personal project is often where the clearest design voice begins.",
    accent: "#766034",
  },
] satisfies Project[];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
