import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '@/components/Reveal/Reveal';
import { Counter } from '../Counter/Counter';
import doctorsPhoto from '@/assets/pharmbase/doctor.png';
import shieldIcon   from '@/assets/pharmbase/shield.png';

type Tab = 'doctors' | 'pharmacists';

const STATS_DATA: Record<Tab, { id: number; count: number; labelKey: string }[]> = {
  doctors: [
    { id: 1, count: 125000, labelKey: 'pharmbase.countries.ukraine' },
    { id: 2, count: 82500,  labelKey: 'pharmbase.countries.kazakhstan' },
    { id: 3, count: 47500,  labelKey: 'pharmbase.countries.uzbekistan' },
    { id: 4, count: 116500, labelKey: 'pharmbase.countries.poland' },
  ],
  pharmacists: [
    { id: 1, count: 45000, labelKey: 'pharmbase.countries.ukraine' },
    { id: 2, count: 32000, labelKey: 'pharmbase.countries.kazakhstan' },
    { id: 3, count: 18000, labelKey: 'pharmbase.countries.uzbekistan' },
    { id: 4, count: 54000, labelKey: 'pharmbase.countries.poland' },
  ],
};

export const PharmbaseSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<Tab>('doctors');

  return (
    <section className="pharmbase" aria-labelledby="pharmbase-title">
      <div className="container">
        <div className="pharmbase__wrapper">

          <div className="pharmbase__image-side">
            <Reveal width="100%">
              <img
                src={doctorsPhoto}
                alt="MDM World medical specialists team"
                className="pharmbase__photo"
              />
            </Reveal>
          </div>

          <div className="pharmbase__content">
            <Reveal delay={0.2}>
              <span className="pharmbase__badge">{t('pharmbase.badge')}</span>
            </Reveal>

            <Reveal delay={0.3}>
              <h2 id="pharmbase-title" className="pharmbase__title">
                {t('pharmbase.title')}
              </h2>
              <p className="pharmbase__description">{t('pharmbase.description')}</p>
            </Reveal>

            <div className="pharmbase__interactive">
              <div className="pharmbase__verified-card">
                <img
                  src={shieldIcon}
                  alt=""
                  aria-hidden="true"
                  className="pharmbase__shield"
                />
                <div className="pharmbase__percent">
                  <Counter from={0} to={61} />%
                </div>
                <p className="pharmbase__verified-text">{t('pharmbase.verified_label')}</p>
              </div>

              <div className="pharmbase__data-block">
                <div className="pharmbase__tabs" role="tablist">
                  {(['doctors', 'pharmacists'] as Tab[]).map((tab) => (
                    <button
                      key={tab}
                      role="tab"
                      aria-selected={activeTab === tab}
                      className={`pharmbase__tab${activeTab === tab ? ' pharmbase__tab--active' : ''}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {t(`pharmbase.tabs.${tab}`)}
                    </button>
                  ))}
                </div>

                <ul className="pharmbase__country-list">
                  {STATS_DATA[activeTab].map((item) => (
                    <li key={item.id} className="pharmbase__country-item">
                      <div className="pharmbase__check" aria-hidden="true">✓</div>
                      <div className="pharmbase__country-text">
                        <strong><Counter from={0} to={item.count} /></strong> {t(item.labelKey)}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};