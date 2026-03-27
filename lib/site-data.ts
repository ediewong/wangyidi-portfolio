export type SocialLink = {
  label: string;
  href: string;
  note: string;
};

export type Service = {
  title: string;
  description: string;
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
  name: "Wang Yidi",
  role: "设计师 / 创意开发者",
  basedIn: "上海 · 可远程协作 · 2026 春季可接新项目",
  heroTitle: "让作品先开口，再让人记住你。",
  heroText:
    "这是一版适合公开分享的作品集网站骨架。它把首页、案例页、关于页和联系页都先搭好，你后面只需要把文案与链接替换成自己的内容，就能直接部署上线。",
  intro:
    "擅长把零散作品整理成清晰、有记忆点、适合公开传播的在线叙事。第一版先强调定位、案例和联系入口，避免网站做得很满，但别人看不懂你是谁。",
  email: "mailto:hello@yourdomain.com",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://wangyidi-portfolio.vercel.app",
  socials: [
    {
      label: "Email",
      href: "mailto:hello@yourdomain.com",
      note: "最稳定的联系入口，建议替换成你的常用邮箱。",
    },
    {
      label: "GitHub",
      href: "https://github.com/yourname",
      note: "如果你有前端或开发作品，这里建议放项目主页。",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yourname",
      note: "适合求职或国际合作场景。",
    },
    {
      label: "Behance",
      href: "https://www.behance.net/yourname",
      note: "如果你偏视觉设计或品牌项目，可以保留这个入口。",
    },
  ] satisfies SocialLink[],
  services: [
    {
      title: "内容梳理",
      description: "把作品背景、角色、过程与结果重新组织成别人看得懂的叙事顺序。",
    },
    {
      title: "视觉表达",
      description: "用更鲜明的首页首屏、项目卡片和详情页结构，强化记忆点。",
    },
    {
      title: "上线发布",
      description: "使用 Next.js 与 Vercel，让站点既能快速上线，也方便后续持续更新。",
    },
  ] satisfies Service[],
  about: [
    "作品集不只是作品的堆叠，更像一份公开的自我介绍。它需要先帮别人理解你，再让别人决定是否继续深入看你的项目。",
    "所以第一版最重要的不是做得多复杂，而是把结构做对：首页给定位，Work 给代表案例，About 给补充信息，Contact 给明确入口。",
    "这套站点已经把这些基础层搭好了，后面你只需要持续替换内容、优化视觉、绑定域名，就能让它成为一个真正可以对外分享的个人资产。",
  ],
  principles: [
    {
      eyebrow: "01",
      title: "先讲价值，再讲过程",
      description:
        "每个案例页先说明项目解决了什么问题、你承担了什么角色，然后再展开过程细节，阅读体验会顺很多。",
    },
    {
      eyebrow: "02",
      title: "宁少勿多",
      description:
        "精选 3 到 6 个项目就够了。只保留最能代表你能力层次和方向的案例，不必把所有作品都放进去。",
    },
    {
      eyebrow: "03",
      title: "公开访问友好",
      description:
        "网站要考虑手机端、分享链接、SEO 元信息和清晰的联系路径，不只是本地看着好看。",
    },
    {
      eyebrow: "04",
      title: "持续可更新",
      description:
        "把内容抽到一个数据文件里管理，后面加项目、改文案、换链接都会更轻松，不需要重复改布局代码。",
    },
  ] satisfies Principle[],
};

export const projects = [
  {
    slug: "brand-site-redesign",
    year: "2025",
    title: "Case 01 / 品牌官网改版",
    category: "品牌官网 / 信息架构",
    summary:
      "把旧官网里分散的服务介绍、案例入口和品牌表达，整理成一个更清晰、更容易转化的线上体验。",
    detailIntro:
      "这个案例页适合放你最成熟、最容易解释价值的项目。建议先用一句话写项目目标，再补充你的角色、周期和最终结果。",
    challenge:
      "原始站点的问题通常包括：信息层级混乱、案例入口过深、用户无法快速理解你的能力边界，以及联系路径不够明确。",
    role: "策略梳理、信息架构、视觉设计、前端落地",
    duration: "6 周",
    services: ["网站定位", "站点地图", "视觉系统", "响应式开发"],
    highlights: [
      "首页先讲清价值，再引导进入项目页，不再只是拼贴截图。",
      "案例列表和联系方式放在更靠前的位置，减少用户寻找成本。",
      "每个模块都围绕“看懂你是谁”来组织，而不是围绕页面组件来堆叠。",
    ],
    process: [
      {
        title: "重新定义首页任务",
        description:
          "把首屏从单纯的个人介绍，改成“定位 + 代表作品 + 明确联系入口”的三段式结构。",
      },
      {
        title: "把案例顺序重排",
        description:
          "优先展示最有说服力、最容易让陌生访客理解的项目，避免把重要案例埋在过深的位置。",
      },
      {
        title: "统一页面语言",
        description:
          "案例页、About 页和 Contact 页使用一致的排版节奏，让整个站点像一套完整叙事，而不是零散页面集合。",
      },
    ],
    metrics: [
      "建议写一个最关键的结果数字",
      "建议写一个业务或用户反馈",
      "建议写一个你对项目价值的结论",
    ],
    outcome:
      "最终成果部分建议用 3 句话完成：项目具体改善了什么、别人如何反馈、这件事为什么能代表你的能力。",
    quote:
      "这里可以换成客户评价、团队评价，或者你自己的项目反思总结。",
    accent: "#ad4d2e",
  },
  {
    slug: "saas-product-story",
    year: "2024",
    title: "Case 02 / SaaS 产品体验重构",
    category: "产品设计 / 增长页面",
    summary:
      "当产品功能变多、价值表达变模糊时，这类项目适合展示你如何把复杂信息重新讲清楚。",
    detailIntro:
      "如果你有 ToB、SaaS、后台、产品设计类作品，可以把这个案例替换成真实项目，并重点写清楚业务背景与改版前后的差异。",
    challenge:
      "用户看不懂功能关系、页面层级过于平均、缺少决策重点，往往会导致访问停留时间短、转化弱、销售沟通成本高。",
    role: "产品策略、界面设计、文案结构、组件规范",
    duration: "8 周",
    services: ["问题拆解", "关键路径设计", "模块重组", "设计规范"],
    highlights: [
      "把最复杂的内容压缩成更容易扫描的页面结构。",
      "通过模块化排版，把抽象功能变成更容易理解的使用场景。",
      "把“功能罗列”改成“问题 -> 方案 -> 证据”的叙事顺序。",
    ],
    process: [
      {
        title: "明确核心用户决策点",
        description:
          "先识别用户最关心的问题，再决定每个版块要承担的说明任务，而不是先画界面。",
      },
      {
        title: "减少视觉噪音",
        description:
          "压缩重复组件与无效说明，把注意力还给真正推动理解与转化的内容。",
      },
      {
        title: "整理成可复用模块",
        description:
          "项目沉淀的不只是一个页面，而是一套可以继续扩展和复用的表达框架。",
      },
    ],
    metrics: [
      "这里可以写注册转化、试用申请或表单提交的变化",
      "这里可以写销售或团队对新结构的反馈",
      "这里可以写你沉淀出的系统能力",
    ],
    outcome:
      "这类案例最值得突出的是：你不仅做了界面，更改变了信息被理解和被决策的方式。",
    quote:
      "如果没有客户引言，也可以写你自己的判断，比如“真正有效的是结构，而不是更多装饰”。",
    accent: "#314d5c",
  },
  {
    slug: "curated-experiment",
    year: "2023",
    title: "Case 03 / 策展式个人实验",
    category: "个人项目 / 视觉叙事",
    summary:
      "这一类项目适合展示你的审美判断、个人兴趣和实验精神，让作品集不只有商业案例，也有鲜明个性。",
    detailIntro:
      "如果你有自发项目、策展页面、插画实验、视觉研究、交互短篇等作品，可以放在这里作为风格补充。",
    challenge:
      "很多作品集看起来很完整，但缺少作者气质。加入一个策展式项目，可以让访客更容易记住你的审美方向和表达方式。",
    role: "概念设定、视觉语言、内容编辑、网页实现",
    duration: "3 周",
    services: ["概念策划", "视觉实验", "内容排版", "网页呈现"],
    highlights: [
      "让网站不只是一个简历补充，而是你个人判断力的一部分。",
      "在商业化案例之外，补上一块能体现风格偏好的内容。",
      "通过更自由的排版和节奏，强化个人审美辨识度。",
    ],
    process: [
      {
        title: "先定主题，再定形式",
        description:
          "不是为了炫技巧而做实验，而是先找到真正想表达的主题，再选择最合适的视觉语言。",
      },
      {
        title: "允许不对称和留白",
        description:
          "实验项目最能体现你的版式判断，它不一定规整，但需要有清楚的节奏和秩序。",
      },
      {
        title: "让它服务于整体作品集",
        description:
          "它的作用不是抢走所有注意力，而是帮别人记住“你和别人有什么不同”。",
      },
    ],
    metrics: [
      "这里可以写这个项目带来的关注、转发或自我品牌价值",
      "这里可以写别人最常记住你的哪一点",
      "这里可以写你想继续探索的方向",
    ],
    outcome:
      "个人实验项目的意义在于补足个性化表达，让网站既专业，也有温度和作者性。",
    quote:
      "你可以在这里放一句非常像你自己的话，作为整个作品集最个人的一行文字。",
    accent: "#7d5a2b",
  },
] satisfies Project[];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
