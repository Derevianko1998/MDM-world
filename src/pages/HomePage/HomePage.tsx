import './HomePage.scss';
import {
  HeroSection,
  PartnersSection,
  ExpertiseSection,
  StatsSection,
  PharmbaseSection,
  AdvantagesSection,
  CtaSection,
} from './components';

export const HomePage = () => (
  <main className="home">
    <HeroSection />
    <PartnersSection />
    <ExpertiseSection />
    <StatsSection />
    <PharmbaseSection />
    <AdvantagesSection />
    <CtaSection />
  </main>
);