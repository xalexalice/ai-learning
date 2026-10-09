export const site = {
  title: 'AI 学习手记',
  author: 'x',
  description: '从原始资料出发，用笔记理解，用实验验证，沿着路径系统学习 AI。',
  repository: 'https://github.com/xalexalice/ai-learning',
  // Fill this after choosing the podcast host.
  podcastFeed: '',
};

export const topics = {
  foundations: '基础概念',
  llm: '大语言模型',
  prompting: '提示与输出',
  rag: '检索增强',
  agents: '工具与智能体',
  evaluation: '评估与验证',
  engineering: '工程实践',
  multimodal: '多模态',
} as const;
export const kinds = { concept: '概念笔记', lab: '动手实验', recap: '学习复盘' };
export const resourceTypes = {
  paper: '论文', doc: '文档', course: '课程', article: '文章',
  video: '视频', podcast: '播客', repo: '代码仓库',
};
