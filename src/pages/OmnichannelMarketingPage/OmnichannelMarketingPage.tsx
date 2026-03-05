import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Reveal } from '@/components/Reveal/Reveal';
import { Button } from '@/ui';
import { Mail, MessageCircle, Smartphone, Globe, Video, Zap } from 'lucide-react';
import omniImg from '@/assets/expertise/Rectangle 14.png';
import './ServicePages.scss';

export const OmnichannelMarketingPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const channels = [
    { icon: Mail,          key: 'email' },
    { icon: MessageCircle, key: 'messenger' },
    { icon: Smartphone,    key: 'sms' },
    { icon: Globe,         key: 'web' },
    { icon: Video,         key: 'webinar' },
    { icon: Zap,           key: 'crm' },
  ];

  const benefits = ['personalization', 'reach', 'analytics', 'automation'];

  return (
    <main className="omni">
      <section className="service-hero">
        <div className="container">
          <div className="service-hero__content">
            <Reveal width="100%">
              <span className="badge">{t('omni.badge')}</span>
              <h1 className="service-hero__title">{t('omni.title')}</h1>
              <p className="service-hero__description">{t('omni.description')}</p>
              <Button onClick={() => navigate('/contacts')}>{t('hero.cta')}</Button>
            </Reveal>
            <Reveal delay={0.3} width="100%">
              <img
                src={omniImg}
                alt={t('omni.title')}
                className="service-hero__image"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="omni__channels" aria-labelledby="omni-channels-title">
        <div className="container">
          <Reveal width="100%">
            <h2 id="omni-channels-title" className="section-title">{t('omni.channels.title')}</h2>
          </Reveal>
          <div className="omni__channels-grid">
            {channels.map(({ icon: Icon, key }, i) => (
              <Reveal key={key} delay={i * 0.08} width="100%">
                <div className="omni__channel-card">
                  <div className="omni__channel-icon">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3>{t(`omni.channels.items.${key}.title`)}</h3>
                  <p>{t(`omni.channels.items.${key}.text`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="omni__benefits" aria-labelledby="omni-benefits-title">
        <div className="container">
          <Reveal width="100%">
            <h2 id="omni-benefits-title" className="section-title">{t('omni.benefits.title')}</h2>
          </Reveal>
          <div className="omni__benefits-grid">
            {benefits.map((b, i) => (
              <Reveal key={b} delay={i * 0.1} width="100%">
                <div className="omni__benefit-card">
                  <div className="omni__benefit-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                  <h3>{t(`omni.benefits.items.${b}.title`)}</h3>
                  <p>{t(`omni.benefits.items.${b}.text`)}</p>
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