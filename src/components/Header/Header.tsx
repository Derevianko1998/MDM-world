import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '@/assets/logo.svg';
import './Header.scss';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language.substring(0, 2);
  }, [i18n.language]);

  const toggleLanguage = () => {
    const langs = ['uk', 'en', 'ru'];
    const next = (langs.indexOf(i18n.language.substring(0, 2)) + 1) % langs.length;
    i18n.changeLanguage(langs[next]);
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__wrapper">
          <NavLink to="/" className="header__logo" onClick={closeAll}>
            <img src={logo} alt="MDM World" />
          </NavLink>

          <button
            className={`header__burger${isMenuOpen ? ' header__burger--active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span><span></span><span></span>
          </button>

          <nav className={`header__nav${isMenuOpen ? ' header__nav--open' : ''}`} role="navigation" aria-label="Main navigation">
            <NavLink to="/" className={({ isActive }) => isActive ? 'header__link header__link--active' : 'header__link'} onClick={closeAll}>
              {t('nav.home')}
            </NavLink>

            <div className="header__dropdown" ref={dropdownRef}>
              <span
                className={`header__link${isDropdownOpen ? ' header__link--active' : ''}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                role="button"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                {t('nav.services')}
              </span>
              <div className={`header__dropdown-content${isDropdownOpen ? ' header__dropdown-content--show' : ''}`}>
                <Link to="/services/trade-marketing" onClick={closeAll}>{t('nav.services_list.patient_support')}</Link>
                <Link to="/services/omnichannel-marketing" onClick={closeAll}>{t('nav.services_list.omnichannel')}</Link>
                <Link to="/services/marketing-research" onClick={closeAll}>{t('nav.services_list.research')}</Link>
              </div>
            </div>

            <NavLink to="/expertise" className={({ isActive }) => isActive ? 'header__link header__link--active' : 'header__link'} onClick={closeAll}>
              {t('nav.expertise')}
            </NavLink>
            <NavLink to="/company-life" className={({ isActive }) => isActive ? 'header__link header__link--active' : 'header__link'} onClick={closeAll}>
              {t('nav.blog')}
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'header__link header__link--active' : 'header__link'} onClick={closeAll}>
              {t('nav.about')}
            </NavLink>
            <NavLink to="/contacts" className={({ isActive }) => isActive ? 'header__link header__link--active' : 'header__link'} onClick={closeAll}>
              {t('nav.contacts')}
            </NavLink>
          </nav>

          <div className="header__actions">
            <button className="header__lang-btn" onClick={toggleLanguage} aria-label="Change language">
              {i18n.language.substring(0, 2).toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};