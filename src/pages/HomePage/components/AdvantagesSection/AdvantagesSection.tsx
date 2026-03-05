import { useTranslation } from 'react-i18next';
import { Reveal } from '@/components/Reveal/Reveal';
import { Sparkles } from 'lucide-react';

const ADVANTAGE_KEYS = [
  { id: 'expertise',  delay: 0.1 },
  { id: 'quality',    delay: 0.2 },
  { id: 'compliance', delay: 0.3 },
  { id: 'contact',    delay: 0.4 },
  { id: 'service',    delay: 0.5 },
  { id: 'innovation', delay: 0.6 },
];

export const AdvantagesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="advantages" aria-labelledby="advantages-title">
      <div className="container">
        <Reveal width="100%">
          <h2 id="advantages-title" className="advantages__title">
            {t('advantages.title')}
          </h2>
        </Reveal>

        <div className="advantages__grid">
          {ADVANTAGE_KEYS.map((item) => (
            <Reveal key={item.id} delay={item.delay} width="100%">
              <article className="advantages__card">
                <div className="advantages__card-header">
                  <Sparkles className="advantages__icon" size={24} aria-hidden="true" />
                  <h3 className="advantages__card-title">
                    {t(`advantages.items.${item.id}.title`)}
                  </h3>
                </div>
                <p className="advantages__card-text">
                  {t(`advantages.items.${item.id}.text`)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};