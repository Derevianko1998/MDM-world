import { useTranslation } from 'react-i18next';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getArticleBySlug } from './data/articles';
import './ArticlePage.scss';

const formatDate = (iso: string, lang: string) =>
  new Date(iso).toLocaleDateString(lang === 'uk' ? 'uk-UA' : lang === 'ru' ? 'ru-RU' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

export const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <main className="article-not-found">
        <div className="container">
          <h1>{t('company_life.not_found')}</h1>
          <Link to="/company-life" className="article__back-link">
            <ArrowLeft size={16} />
            {t('company_life.back')}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="article">
      <div className="container">

        <button
          className="article__back-link"
          onClick={() => navigate('/company-life')}
          aria-label={t('company_life.back')}
        >
          <ArrowLeft size={16} aria-hidden="true" />
          {t('company_life.back')}
        </button>

        <h1 className="article__title">{t(article.titleKey)}</h1>

        <div className="article__body">
          <div className="article__cover-col">
            <img
              src={article.coverUrl}
              alt={t(article.titleKey)}
              className="article__cover"
            />
          </div>

          <div className="article__content-col">
            <p
              className="article__content"
              dangerouslySetInnerHTML={{ __html: t(article.contentKey) }}
            />
          </div>
        </div>

        <time className="article__meta" dateTime={article.date}>
          {formatDate(article.date, i18n.language)}
        </time>

      </div>
    </main>
  );
};