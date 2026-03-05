import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ARTICLES } from './data/articles';
import { ArticleCard } from './components/ArticleCard/ArticleCard';
import type { Article } from './data/articles';
import './CompanyLifePage.scss';

type Category = 'all' | 'news' | 'events' | 'insights';

const CATEGORIES: Category[] = ['all', 'news', 'events', 'insights'];

export const CompanyLifePage = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filtered: Article[] =
    activeCategory === 'all'
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <main className="company-life">
      <div className="container">
        <header className="company-life__header">
          <h1 className="company-life__title">{t('company_life.title')}</h1>

          <nav className="company-life__filters" aria-label={t('company_life.filter_label')}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`company-life__filter-btn${activeCategory === cat ? ' company-life__filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
              >
                {t(`company_life.categories.${cat}`)}
              </button>
            ))}
          </nav>
        </header>

        <div className="company-life__list">
          {filtered.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </main>
  );
};