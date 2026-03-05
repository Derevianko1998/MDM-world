import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/ui';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/Reveal/Reveal';
import { Counter } from './components/Counter/Counter';
import { Sparkles } from 'lucide-react';
import styles from './HomePage.module.scss';
import tradeImg from '@/assets/expertise/Rectangle 13.png';
import researchImg from '@/assets/expertise/Rectangle 15.png';
import omniImg from '@/assets/expertise/Rectangle 14.png';
import heroImage from '@/assets/hero-visual.svg';
import worldMap from '@/assets/world-map-dots.svg';
import doctorsPhoto from '@/assets/pharmbase/doctor.png'; // Завантаж фото з лікарями
import shieldIcon from '@/assets/pharmbase/shield.png'; // 3D іконка щита
import expertPhoto from '@/assets/CTA/cta-expert.png'; // Фото експерта

const partners = [
  { url: "https://www.roche.com", logo: "https://mdmworld.com/wp-content/uploads/2019/01/roche.png" },
  { url: "https://www.pfizer.com", logo: "https://mdmworld.com/wp-content/uploads/2020/10/pfizer.png" },
  { url: "https://www.gsk.com", logo: "https://mdmworld.com/wp-content/uploads/2019/01/gsk.png" },
  { url: "https://www.nestle.com", logo: "https://mdmworld.com/wp-content/uploads/2019/01/nestle.png" },
  { url: "https://www.sandoz.com", logo: "https://mdmworld.com/wp-content/uploads/2019/01/Sandoz-.png" },
  { url: "https://www.sentiss.com", logo: "https://mdmworld.com/wp-content/uploads/2020/10/sentiss-.png" },
  { url: "https://uf.ua", logo: "https://mdmworld.com/wp-content/uploads/2020/10/Yuria-.png" },
  { url: "https://unipharm.ua", logo: "https://mdmworld.com/wp-content/uploads/2020/10/unipharm-.png" },
  { url: "https://www.takeda.com", logo: "https://mdmworld.com/wp-content/uploads/2020/10/Takeda-.png" },
  { url: "https://www.sanofi.com", logo: "https://mdmworld.com/wp-content/uploads/2020/10/SANOFI-.png" },
  { url: "https://www.bayer.com", logo: "https://mdmworld.com/wp-content/uploads/2020/10/Bayer-.png" },
  { url: "https://www.astrazeneca.com", logo: "https://mdmworld.com/wp-content/uploads/2020/10/Astra-Zeneca-.png" }
];



export const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const expertises = [
    {
      id: 'trade',
      title: t('expertise_home.items.trade.title'),
      text: t('expertise_home.items.trade.text'),
      img: tradeImg,
      link: '/services/trade-marketing' 
    },
    {
      id: 'research',
      title: t('expertise_home.items.research.title'),
      text: t('expertise_home.items.research.text'),
      img: researchImg,
      link: '/services/marketing-research',
      reverse: true 
    },
    {
      id: 'omnichannel',
      title: t('expertise_home.items.omnichannel.title'),
      text: t('expertise_home.items.omnichannel.text'),
      img: omniImg,
      link: '/services/omnichannel-marketing'
    }
  ];

  const stats = [
    { id: 1, val: 25, suffix: '+', label: t('stats.years') },
    { id: 2, val: 400, suffix: '+', label: t('stats.clients') },
    { id: 3, val: 300, suffix: '+', label: t('stats.projects') },
    { id: 4, val: 40, suffix: '+', label: t('stats.countries') },
  ];

  const [activeTab, setActiveTab] = useState<'doctors' | 'pharmacists'>('doctors');

  // Дані для статистики (можна міняти залежно від таба)
  const statsData = {
    doctors: [
      { id: 1, count: 125000, label: t('pharmbase.countries.ukraine') },
      { id: 2, count: 82500, label: t('pharmbase.countries.kazakhstan') },
      { id: 3, count: 47500, label: t('pharmbase.countries.uzbekistan') },
      { id: 4, count: 116500, label: t('pharmbase.countries.poland') },
    ],
    pharmacists: [
      { id: 1, count: 45000, label: t('pharmbase.countries.ukraine') },
      { id: 2, count: 32000, label: t('pharmbase.countries.kazakhstan') },
      { id: 3, count: 18000, label: t('pharmbase.countries.uzbekistan') },
      { id: 4, count: 54000, label: t('pharmbase.countries.poland') },
    ]
  };

  const advantageItems = [
    { id: 'expertise', delay: 0.1 },
    { id: 'quality', delay: 0.2 },
    { id: 'compliance', delay: 0.3 },
    { id: 'contact', delay: 0.4 },
    { id: 'service', delay: 0.5 },
    { id: 'innovation', delay: 0.6 },
  ];

  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.visualSide}>
              <div className={styles.glow} />
              <img src={heroImage} alt="MDM AI Visual" className={styles.image} />
            </div>

            <div className={styles.textSide}>
              <h1 className={styles.title}>{t('hero.title')}</h1>
              <p className={styles.description}>{t('hero.description')}</p>
              
              <Button onClick={() => navigate('/contacts')}>
                {t('hero.cta')}
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION: PARTNERS */}
<section className={styles.partners}>
  <div className="container">
    <Reveal width="100%">
      <p className={styles.partnersSubtitle}>{t('partners.trusted')}</p>
    </Reveal>
  </div>

  <div className={styles.carouselWrapper}>
    <div className={styles.maskLeft} />
    <div className={styles.maskRight} />

    <motion.div 
  className={styles.carouselTrack}
  animate={{ x: ["0%", "-50%"] }}
  transition={{ 
    duration: 35, 
    ease: "linear", 
    repeat: Infinity 
  }}
>
  {[...partners, ...partners].map((item, idx) => (
    <a 
      key={idx} 
      href={item.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.partnerCard}
    >
      <img src={item.logo} alt="Partner Logo" className={styles.partnerLogo} />
    </a>
  ))}
</motion.div>
  </div>
</section>
{/* SECTION: EXPERTISE */}
<section className={styles.expertiseSection}>
        <div className="container">
          <Reveal width="100%">
            <h2 className={styles.sectionTitle}>{t('expertise_home.title')}</h2>
          </Reveal>

          <div className={styles.expertiseList}>
            {expertises.map((item, index) => (
              <div key={item.id} className={`${styles.expertiseItem} ${item.reverse ? styles.reverse : ''}`}>
                <div className={styles.expImageBlock}>
                  <Reveal delay={0.2} width="100%">
                    <img src={item.img} alt={item.title} className={styles.expImage} />
                  </Reveal>
                </div>
                
                <div className={styles.expTextBlock}>
                  <Reveal delay={0.4} width="100%">
                    <h3 className={styles.expTitle}>{item.title}</h3>
                    <p className={styles.expDescription}>{item.text}</p>

                    <Button 
                      variant="outline" 
                      className={styles.expBtn}
                      onClick={() => navigate(item.link)}
                    >
                      {t('expertise_home.more')} →
                    </Button>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SECTION: WORLD MAP */}
      <section className={styles.statsSection}>
        {/* Фонова карта світу */}
        <div className={styles.mapOverlay}>
          <img src={worldMap} alt="World Map" className={styles.mapSvg} />
        </div>

        <div className="container">
          <Reveal width="100%">
            <div className={styles.statsGrid}>
              {stats.map((stat) => (
                <div key={stat.id} className={styles.statItem}>
                  <div className={styles.statValue}>
                    <Counter from={0} to={stat.val} />
                    {stat.suffix}
                  </div>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section className={styles.pharmbaseSection}>
        <div className="container">
          <div className={styles.pbWrapper}>
            
            {/* Ліва частина: Фото */}
            <div className={styles.pbImageSide}>
              <Reveal width="100%">
                <img src={doctorsPhoto} alt="Medical Team" className={styles.mainPhoto} />
              </Reveal>
            </div>

            {/* Права частина: Контент */}
            <div className={styles.pbContentSide}>
              <Reveal delay={0.2}>
                <span className={styles.pbBadge}>{t('pharmbase.badge')}</span>
              </Reveal>
              
              <Reveal delay={0.3}>
                <h2 className={styles.pbTitle}>{t('pharmbase.title')}</h2>
                <p className={styles.pbDescription}>{t('pharmbase.description')}</p>
              </Reveal>

              <div className={styles.pbInteractiveBlock}>
                {/* Блакитна картка з % */}
                <div className={styles.verifiedCard}>
                  <img src={shieldIcon} alt="Shield" className={styles.shieldIcon} />
                  <div className={styles.percentValue}>
                    <Counter from={0} to={61} />%
                  </div>
                  <p className={styles.verifiedText}>{t('pharmbase.verified_label')}</p>
                </div>

                {/* Таби та список країн */}
                <div className={styles.dataBlock}>
                  <div className={styles.tabSwitcher}>
                    <button 
                      className={`${styles.tabBtn} ${activeTab === 'doctors' ? styles.tabActive : ''}`}
                      onClick={() => setActiveTab('doctors')}
                    >
                      {t('pharmbase.tabs.doctors')}
                    </button>
                    <button 
                      className={`${styles.tabBtn} ${activeTab === 'pharmacists' ? styles.tabActive : ''}`}
                      onClick={() => setActiveTab('pharmacists')}
                    >
                      {t('pharmbase.tabs.pharmacists')}
                    </button>
                  </div>

                  <ul className={styles.countryList}>
                    {statsData[activeTab].map((item) => (
                      <li key={item.id} className={styles.countryItem}>
                        <div className={styles.checkIcon}>✓</div>
                        <div className={styles.countryText}>
                          <strong><Counter from={0} to={item.count} /></strong> {item.label}
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
      <section className={styles.advantagesSection}>
        <div className="container">
          <Reveal width="100%">
            <h2 className={styles.advSectionTitle}>{t('advantages.title')}</h2>
          </Reveal>

          <div className={styles.advGrid}>
            {advantageItems.map((item) => (
              <Reveal key={item.id} delay={item.delay} width="100%">
                <div className={styles.advCard}>
                  <div className={styles.advHeader}>
                    <Sparkles className={styles.advIcon} size={24} />
                    <h3 className={styles.advTitle}>
                      {t(`advantages.items.${item.id}.title`)}
                    </h3>
                  </div>
                  <p className={styles.advText}>
                    {t(`advantages.items.${item.id}.text`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.ctaSection}>
        <div className="container">
          <Reveal width="100%">
            <div className={styles.ctaWrapper}>
              
              {/* Синій блок з текстом */}
              <div className={styles.ctaBlueBox}>
                <h2 className={styles.ctaTitle}>{t('cta_section.title')}</h2>
                <Button 
                  variant="outline" 
                  className={styles.ctaButton}
                  onClick={() => navigate('/contacts')}
                >
                  {t('cta_section.button')}
                </Button>
              </div>

              {/* Блок з фото */}
              <div className={styles.ctaImageContainer}>
                <div className={styles.ctaPhotoBackdrop}>
                  <img src={expertPhoto} alt="Expert" className={styles.ctaExpertImg} />
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};