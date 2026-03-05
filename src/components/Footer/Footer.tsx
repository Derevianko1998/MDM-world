import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin } from 'lucide-react';
import './Footer.scss';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">

          <div className="footer__column">
            <h4 className="footer__title">{t('footer.titles.sitemap')}</h4>
            <nav className="footer__nav" aria-label="Footer navigation">
              <Link to="/">{t('nav.home')}</Link>
              <Link to="/services/trade-marketing">{t('nav.services_list.patient_support')}</Link>
              <Link to="/services/omnichannel-marketing">{t('nav.services_list.omnichannel')}</Link>
              <Link to="/services/marketing-research">{t('nav.services_list.research')}</Link>
              <Link to="/expertise">{t('nav.expertise')}</Link>
              <Link to="/about">{t('nav.about')}</Link>
              <Link to="/contacts">{t('nav.contacts')}</Link>
            </nav>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">{t('footer.titles.group')}</h4>
            <div className="footer__links">
              <a href="https://morion.ua" target="_blank" rel="noreferrer">{t('footer.links.morion')}</a>
              <a href="https://proximaresearch.com" target="_blank" rel="noreferrer">{t('footer.links.proxima')}</a>
            </div>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">{t('footer.titles.socials')}</h4>
            <div className="footer__socials">
              <a href="https://www.facebook.com/mdmworld" target="_blank" rel="noreferrer" className="footer__social-link">
                <Facebook size={20} aria-hidden="true" />
                <span>Facebook</span>
              </a>
              <a href="https://www.linkedin.com/company/mdm-world" target="_blank" rel="noreferrer" className="footer__social-link">
                <Linkedin size={20} aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">{t('footer.titles.contacts')}</h4>
            <address className="footer__contacts">
              <p>{t('footer.address')}</p>
              <p className="footer__contacts-gap">{t('footer.phone')}</p>
              <p>{t('footer.fax')}</p>
              <a href="mailto:hq-mdm@mdmworld.com" className="footer__email">
                hq-mdm@mdmworld.com
              </a>
            </address>
          </div>

        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© {new Date().getFullYear()} MDM World. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};