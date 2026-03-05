import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Reveal } from '@/components/Reveal/Reveal';
import { Button } from '@/ui';
import tradeImg    from '@/assets/expertise/Rectangle 13.png';
import researchImg from '@/assets/expertise/Rectangle 15.png';
import omniImg     from '@/assets/expertise/Rectangle 14.png';

const EXPERTISE_LIST = [
  { id: 'trade',      img: tradeImg,    link: '/services/trade-marketing',       reverse: false },
  { id: 'research',   img: researchImg, link: '/services/marketing-research',    reverse: true  },
  { id: 'omnichannel',img: omniImg,     link: '/services/omnichannel-marketing', reverse: false },
];

export const ExpertiseSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="expertise-section" aria-labelledby="expertise-title">
      <div className="container">
        <Reveal width="100%">
          <h2 id="expertise-title" className="section-title">
            {t('expertise_home.title')}
          </h2>
        </Reveal>

        <div className="expertise-list">
          {EXPERTISE_LIST.map((item) => (
            <div
              key={item.id}
              className={`expertise-item${item.reverse ? ' expertise-item--reverse' : ''}`}
            >
              <div className="expertise-item__image-block">
                <Reveal delay={0.2} width="100%">
                  <img
                    src={item.img}
                    alt={t(`expertise_home.items.${item.id}.title`)}
                    className="expertise-item__image"
                  />
                </Reveal>
              </div>

              <div className="expertise-item__text-block">
                <Reveal delay={0.4} width="100%">
                  <h3 className="expertise-item__title">
                    {t(`expertise_home.items.${item.id}.title`)}
                  </h3>
                  <p className="expertise-item__description">
                    {t(`expertise_home.items.${item.id}.text`)}
                  </p>
                  <Button
                    variant="outline"
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
  );
};