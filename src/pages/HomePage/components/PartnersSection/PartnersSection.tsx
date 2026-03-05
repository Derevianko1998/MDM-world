import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/Reveal/Reveal';

const PARTNERS = [
  { url: 'https://www.roche.com',       logo: 'https://mdmworld.com/wp-content/uploads/2019/01/roche.png',       name: 'Roche' },
  { url: 'https://www.pfizer.com',      logo: 'https://mdmworld.com/wp-content/uploads/2020/10/pfizer.png',      name: 'Pfizer' },
  { url: 'https://www.gsk.com',         logo: 'https://mdmworld.com/wp-content/uploads/2019/01/gsk.png',         name: 'GSK' },
  { url: 'https://www.nestle.com',      logo: 'https://mdmworld.com/wp-content/uploads/2019/01/nestle.png',      name: 'Nestlé' },
  { url: 'https://www.sandoz.com',      logo: 'https://mdmworld.com/wp-content/uploads/2019/01/Sandoz-.png',     name: 'Sandoz' },
  { url: 'https://www.sentiss.com',     logo: 'https://mdmworld.com/wp-content/uploads/2020/10/sentiss-.png',    name: 'Sentiss' },
  { url: 'https://uf.ua',              logo: 'https://mdmworld.com/wp-content/uploads/2020/10/Yuria-.png',       name: 'Юрія-Фарм' },
  { url: 'https://unipharm.ua',         logo: 'https://mdmworld.com/wp-content/uploads/2020/10/unipharm-.png',   name: 'Unipharm' },
  { url: 'https://www.takeda.com',      logo: 'https://mdmworld.com/wp-content/uploads/2020/10/Takeda-.png',     name: 'Takeda' },
  { url: 'https://www.sanofi.com',      logo: 'https://mdmworld.com/wp-content/uploads/2020/10/SANOFI-.png',     name: 'Sanofi' },
  { url: 'https://www.bayer.com',       logo: 'https://mdmworld.com/wp-content/uploads/2020/10/Bayer-.png',      name: 'Bayer' },
  { url: 'https://www.astrazeneca.com', logo: 'https://mdmworld.com/wp-content/uploads/2020/10/Astra-Zeneca-.png', name: 'AstraZeneca' },
];

export const PartnersSection = () => {
  const { t } = useTranslation();

  return (
    <section className="partners" aria-label={t('partners.trusted')}>
      <div className="container">
        <Reveal width="100%">
          <p className="partners__subtitle">{t('partners.trusted')}</p>
        </Reveal>
      </div>

      <div className="partners__carousel-wrapper">
        <div className="partners__mask partners__mask--left" />
        <div className="partners__mask partners__mask--right" />

        <motion.div
          className="partners__track"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 35, ease: 'linear', repeat: Infinity }}
        >
          {[...PARTNERS, ...PARTNERS].map((item, idx) => (
            <a
              key={`${item.name}-${idx}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="partners__card"
              aria-label={item.name}
            >
              <img
                src={item.logo}
                alt={`${item.name} logo`}
                className="partners__logo"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};