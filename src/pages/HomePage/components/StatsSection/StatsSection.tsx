import { useTranslation } from 'react-i18next';
import { Reveal } from '@/components/Reveal/Reveal';
import { Counter } from '../Counter/Counter';
import worldMap from '@/assets/world-map-dots.svg';

const STATS = [
  { id: 1, val: 25,  suffix: '+', labelKey: 'stats.years' },
  { id: 2, val: 400, suffix: '+', labelKey: 'stats.clients' },
  { id: 3, val: 300, suffix: '+', labelKey: 'stats.projects' },
  { id: 4, val: 40,  suffix: '+', labelKey: 'stats.countries' },
];

export const StatsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="stats-section" aria-label="Company statistics">
      <div className="stats-section__map-overlay" aria-hidden="true">
        <img src={worldMap} alt="" className="stats-section__map-svg" />
      </div>

      <div className="container">
        <Reveal width="100%">
          <div className="stats-grid">
            {STATS.map((stat) => (
              <div key={stat.id} className="stats-grid__item">
                <div className="stats-grid__value">
                  <Counter from={0} to={stat.val} />
                  {stat.suffix}
                </div>
                <p className="stats-grid__label">{t(stat.labelKey)}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};