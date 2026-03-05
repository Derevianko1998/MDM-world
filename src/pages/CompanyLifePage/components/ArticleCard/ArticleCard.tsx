import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import type { Article } from '../../data/articles';

interface Props {
  article: Article;
}

const formatDate = (iso: string, lang: string) =>
  new Date(iso).toLocaleDateString(lang === 'uk' ? 'uk-UA' : lang === 'ru' ? 'ru-RU' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

export const ArticleCard = ({ article }: Props) => {
  const { t, i18n } = useTranslation();

  return (
    <article className="article-card">
      <Link
        to={`/company-life/${article.slug}`}
        className="article-card__cover-link"
        aria-label={t(article.titleKey)}
      >
        <img
          src={article.coverUrl}
          alt={t(article.titleKey)}
          className="article-card__cover"
          loading="lazy"
        />
      </Link>

      <div className="article-card__body">
        <Link to={`/company-life/${article.slug}`} className="article-card__title-link">
          <h2 className="article-card__title">{t(article.titleKey)}</h2>
        </Link>

        <p className="article-card__excerpt">{t(article.excerptKey)}</p>

        <time
          className="article-card__date"
          dateTime={article.date}
        >
          {formatDate(article.date, i18n.language)}
        </time>
      </div>
    </article>
  );
};