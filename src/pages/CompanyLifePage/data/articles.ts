export interface Article {
  id: string;
  slug: string;
  titleKey: string;
  excerptKey: string;
  contentKey: string;
  date: string;         // ISO 8601
  coverUrl: string;
  category: 'news' | 'events' | 'insights';
}

export const ARTICLES: Article[] = [
  {
    id: '1',
    slug: 'quiet-support-from-mdm',
    titleKey: 'articles.quiet_support.title',
    excerptKey: 'articles.quiet_support.excerpt',
    contentKey: 'articles.quiet_support.content',
    date: '2026-02-13',
    coverUrl: '/assets/news/quiet-support.png',
    category: 'news',
  },
  {
    id: '2',
    slug: 'ai-changing-pharma-marketing',
    titleKey: 'articles.ai_pharma.title',
    excerptKey: 'articles.ai_pharma.excerpt',
    contentKey: 'articles.ai_pharma.content',
    date: '2026-01-21',
    coverUrl: '/assets/news/ai-changing-pharma.jpg',
    category: 'insights',
  },
  {
    id: '3',
    slug: 'theatre-of-holiday-spirit',
    titleKey: 'articles.theatre.title',
    excerptKey: 'articles.theatre.excerpt',
    contentKey: 'articles.theatre.content',
    date: '2025-12-22',
    coverUrl: '/assets/news/theatre.png',
    category: 'events',
  },
  {
    id: '4',
    slug: 'pharma-marketing-forum-2024',
    titleKey: 'articles.forum.title',
    excerptKey: 'articles.forum.excerpt',
    contentKey: 'articles.forum.content',
    date: '2024-11-15',
    coverUrl: 'https://mdmworld.com/wp-content/uploads/2024/11/forum.jpg',
    category: 'events',
  },
  {
    id: '5',
    slug: 'best-partner-award-2024',
    titleKey: 'articles.award.title',
    excerptKey: 'articles.award.excerpt',
    contentKey: 'articles.award.content',
    date: '2024-10-08',
    coverUrl: 'https://mdmworld.com/wp-content/uploads/2024/10/award.jpg',
    category: 'news',
  },
  {
    id: '6',
    slug: 'ai-workshop-series',
    titleKey: 'articles.ai_workshop.title',
    excerptKey: 'articles.ai_workshop.excerpt',
    contentKey: 'articles.ai_workshop.content',
    date: '2024-09-20',
    coverUrl: 'https://mdmworld.com/wp-content/uploads/2024/09/workshop.jpg',
    category: 'insights',
  },
];

export const getArticleBySlug = (slug: string): Article | undefined =>
  ARTICLES.find((a) => a.slug === slug);