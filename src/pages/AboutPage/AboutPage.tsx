import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Reveal } from '@/components/Reveal/Reveal';
import { Button } from '@/ui';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';
import './AboutPage.scss';

export const AboutPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const milestones = [
    { year: '1999', key: 'founded' },
    { year: '2005', key: 'expanded' },
    { year: '2012', key: 'proxima' },
    { year: '2018', key: 'digital' },
    { year: '2024', key: 'ai' },
  ];

  const values = [
    { icon: Award, key: 'quality' },
    { icon: Users, key: 'partnership' },
    { icon: Globe, key: 'global' },
    { icon: TrendingUp, key: 'innovation' },
  ];

  return (
    <main className="about">
      <section className="about__hero">
        <div className="container">
          <Reveal width="100%">
            <span className="badge">{t('about.badge')}</span>
            <h1 className="about__hero-title">{t('about.title')}</h1>
            <p className="about__hero-description">{t('about.description')}</p>
          </Reveal>
        </div>
      </section>

      <section className="about__mission" aria-labelledby="mission-title">
        <div className="container">
          <div className="about__mission-grid">
            <Reveal delay={0.1} width="100%">
              <div className="about__mission-card about__mission-card--blue">
                <h2 id="mission-title">{t('about.mission.title')}</h2>
                <p>{t('about.mission.text')}</p>
              </div>
            </Reveal>
            <Reveal delay={0.25} width="100%">
              <div className="about__mission-card">
                <h2>{t('about.vision.title')}</h2>
                <p>{t('about.vision.text')}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="about__values" aria-labelledby="values-title">
        <div className="container">
          <Reveal width="100%">
            <h2 id="values-title" className="section-title">{t('about.values.title')}</h2>
          </Reveal>
          <div className="about__values-grid">
            {values.map(({ icon: Icon, key }, i) => (
              <Reveal key={key} delay={i * 0.1} width="100%">
                <div className="about__value-card">
                  <div className="about__value-icon">
                    <Icon size={28} />
                  </div>
                  <h3>{t(`about.values.items.${key}.title`)}</h3>
                  <p>{t(`about.values.items.${key}.text`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about__history" aria-labelledby="history-title">
        <div className="container">
          <Reveal width="100%">
            <h2 id="history-title" className="section-title">{t('about.history.title')}</h2>
          </Reveal>
          <div className="about__timeline">
            {milestones.map((m, i) => (
              <Reveal key={m.key} delay={i * 0.1} width="100%">
                <div className={`about__timeline-item${i % 2 !== 0 ? ' about__timeline-item--right' : ''}`}>
                  <div className="about__timeline-year">{m.year}</div>
                  <div className="about__timeline-dot" aria-hidden="true" />
                  <div className="about__timeline-content">
                    <h3>{t(`about.history.items.${m.key}.title`)}</h3>
                    <p>{t(`about.history.items.${m.key}.text`)}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about__cta">
        <div className="container">
          <Reveal width="100%">
            <div className="about__cta-box">
              <h2>{t('about.cta.title')}</h2>
              <p>{t('about.cta.text')}</p>
              <Button onClick={() => navigate('/contacts')}>{t('about.cta.button')}</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};