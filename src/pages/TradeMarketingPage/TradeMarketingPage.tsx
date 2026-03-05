import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Reveal } from '@/components/Reveal/Reveal';
import { Button } from '@/ui';
import { BarChart2, Package, Users, ClipboardList, Award, Repeat } from 'lucide-react';
import tradeImg from '@/assets/expertise/Rectangle 13.png';
import './ServicePages.scss';

export const TradeMarketingPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const services = [
    { icon: Package,      key: 'shelf' },
    { icon: BarChart2,    key: 'analytics' },
    { icon: Users,        key: 'staff' },
    { icon: ClipboardList,key: 'audit' },
    { icon: Award,        key: 'loyalty' },
    { icon: Repeat,       key: 'cycle' },
  ];

  const steps = ['research', 'strategy', 'launch', 'control', 'report'];

  return (
    <main className="trade">
      <section className="service-hero">
        <div className="container">
          <div className="service-hero__content">
            <Reveal width="100%">
              <span className="badge">{t('trade.badge')}</span>
              <h1 className="service-hero__title">{t('trade.title')}</h1>
              <p className="service-hero__description">{t('trade.description')}</p>
              <Button onClick={() => navigate('/contacts')}>{t('hero.cta')}</Button>
            </Reveal>
            <Reveal delay={0.3} width="100%">
              <img
                src={tradeImg}
                alt={t('trade.title')}
                className="service-hero__image"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="trade__services" aria-labelledby="trade-services-title">
        <div className="container">
          <Reveal width="100%">
            <h2 id="trade-services-title" className="section-title">{t('trade.services.title')}</h2>
          </Reveal>
          <div className="trade__services-grid">
            {services.map(({ icon: Icon, key }, i) => (
              <Reveal key={key} delay={i * 0.08} width="100%">
                <div className="trade__service-card">
                  <div className="trade__service-icon">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3>{t(`trade.services.items.${key}.title`)}</h3>
                  <p>{t(`trade.services.items.${key}.text`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="trade__process" aria-labelledby="trade-process-title">
        <div className="container">
          <Reveal width="100%">
            <h2 id="trade-process-title" className="section-title">{t('trade.process.title')}</h2>
          </Reveal>
          <ol className="trade__steps">
            {steps.map((step, i) => (
              <Reveal key={step} delay={i * 0.1} width="100%">
                <li className="trade__step">
                  <div className="trade__step-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                  <div className="trade__step-content">
                    <h3>{t(`trade.process.steps.${step}.title`)}</h3>
                    <p>{t(`trade.process.steps.${step}.text`)}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
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