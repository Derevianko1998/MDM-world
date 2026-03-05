import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/ui';
import heroImage from '@/assets/hero-visual.svg';

export const HeroSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="hero" aria-label={t('hero.title')}>
      <div className="container">
        <div className="hero__content">
          <div className="hero__visual">
            <div className="hero__glow" />
            <img
              src={heroImage}
              alt="MDM World — pharmaceutical marketing"
              className="hero__image"
            />
          </div>

          <div className="hero__text">
            <h1 className="hero__title">{t('hero.title')}</h1>
            <p className="hero__description">{t('hero.description')}</p>
            <Button onClick={() => navigate('/contacts')}>
              {t('hero.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};