import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Reveal } from '@/components/Reveal/Reveal';
import { Button } from '@/ui';
import expertPhoto from '@/assets/CTA/cta-expert.png';

export const CtaSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="container">
        <Reveal width="100%">
          <div className="cta-section__wrapper">

            <div className="cta-section__blue-box">
              <h2 id="cta-title" className="cta-section__title">
                {t('cta_section.title')}
              </h2>
              <Button variant="ghost" onClick={() => navigate('/contacts')}>
                {t('cta_section.button')}
              </Button>
            </div>

            <div className="cta-section__image-container">
              <div className="cta-section__photo-backdrop">
                <img
                  src={expertPhoto}
                  alt="MDM World expert consultant"
                  className="cta-section__expert-img"
                />
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};