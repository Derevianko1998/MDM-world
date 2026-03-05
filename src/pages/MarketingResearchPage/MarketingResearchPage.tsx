import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Reveal } from '@/components/Reveal/Reveal';
import { Button } from '@/ui';
import { Search, PieChart, MessageSquare, UserCheck, FileText, TrendingUp } from 'lucide-react';
import researchImg from '@/assets/expertise/Rectangle 15.png';
import './ServicePages.scss';

export const MarketingResearchPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const methods = [
    { icon: MessageSquare, key: 'focus' },
    { icon: UserCheck,     key: 'survey' },
    { icon: Search,        key: 'depth' },
    { icon: PieChart,      key: 'quant' },
    { icon: FileText,      key: 'desk' },
    { icon: TrendingUp,    key: 'panel' },
  ];

  const audiences = ['doctors', 'pharmacists', 'patients', 'managers'];

  return (
    <main className="research">
      <section className="service-hero">
        <div className="container">
          <div className="service-hero__content">
            <Reveal width="100%">
              <span className="badge">{t('research.badge')}</span>
              <h1 className="service-hero__title">{t('research.title')}</h1>
              <p className="service-hero__description">{t('research.description')}</p>
              <Button onClick={() => navigate('/contacts')}>{t('hero.cta')}</Button>
            </Reveal>
            <Reveal delay={0.3} width="100%">
              <img
                src={researchImg}
                alt={t('research.title')}
                className="service-hero__image"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="research__methods" aria-labelledby="research-methods-title">
        <div className="container">
          <Reveal width="100%">
            <h2 id="research-methods-title" className="section-title">{t('research.methods.title')}</h2>
          </Reveal>
          <div className="research__methods-grid">
            {methods.map(({ icon: Icon, key }, i) => (
              <Reveal key={key} delay={i * 0.08} width="100%">
                <div className="research__method-card">
                  <div className="research__method-icon">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3>{t(`research.methods.items.${key}.title`)}</h3>
                  <p>{t(`research.methods.items.${key}.text`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="research__audiences" aria-labelledby="research-audiences-title">
        <div className="container">
          <Reveal width="100%">
            <h2 id="research-audiences-title" className="section-title">{t('research.audiences.title')}</h2>
            <p className="research__audiences-subtitle">{t('research.audiences.subtitle')}</p>
          </Reveal>
          <div className="research__audiences-grid">
            {audiences.map((aud, i) => (
              <Reveal key={aud} delay={i * 0.1} width="100%">
                <div className="research__audience-card">
                  <h3>{t(`research.audiences.items.${aud}.title`)}</h3>
                  <p>{t(`research.audiences.items.${aud}.text`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <Reveal width="100%">
            <div className="service-cta__box">
              <h2>{t('cta_section.title')}</h2>
              <Button variant="ghost" onClick={() => navigate('/contacts')}>{t('cta_section.button')}</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};