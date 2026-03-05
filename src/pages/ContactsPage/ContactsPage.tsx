import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '@/components/Reveal/Reveal';
import { Button } from '@/ui';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './ContactsPage.scss';

export const ContactsPage = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const contacts = [
    { icon: MapPin, key: 'address', value: t('footer.address') },
    { icon: Phone,  key: 'phone',   value: t('footer.phone') },
    { icon: Mail,   key: 'email',   value: 'hq-mdm@mdmworld.com' },
    { icon: Clock,  key: 'hours',   value: t('contacts.hours_value') },
  ];

  return (
    <main className="contacts">
      <section className="contacts__hero">
        <div className="container">
          <Reveal width="100%">
            <span className="badge">{t('contacts.badge')}</span>
            <h1 className="contacts__title">{t('contacts.title')}</h1>
            <p className="contacts__subtitle">{t('contacts.subtitle')}</p>
          </Reveal>
        </div>
      </section>

      <section className="contacts__body" aria-label="Contact information and form">
        <div className="container">
          <div className="contacts__grid">

            <Reveal delay={0.1} width="100%">
              <aside className="contacts__info">
                <h2>{t('contacts.info_title')}</h2>
                <ul className="contacts__info-list">
                  {contacts.map(({ icon: Icon, key, value }) => (
                    <li key={key} className="contacts__info-item">
                      <div className="contacts__info-icon" aria-hidden="true">
                        <Icon size={20} />
                      </div>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </Reveal>

            <Reveal delay={0.2} width="100%">
              {sent ? (
                <div className="contacts__success" role="alert">
                  <div className="contacts__success-icon">✓</div>
                  <h3>{t('contacts.form.success_title')}</h3>
                  <p>{t('contacts.form.success_text')}</p>
                </div>
              ) : (
                <div className="contacts__form" role="form" aria-label={t('contacts.form.title')}>
                  <h2>{t('contacts.form.title')}</h2>

                  <div className="contacts__form-row">
                    <div className="contacts__field">
                      <label htmlFor="name">{t('contacts.form.name')}</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder={t('contacts.form.name_placeholder')}
                        autoComplete="name"
                      />
                    </div>
                    <div className="contacts__field">
                      <label htmlFor="company">{t('contacts.form.company')}</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder={t('contacts.form.company_placeholder')}
                        autoComplete="organization"
                      />
                    </div>
                  </div>

                  <div className="contacts__form-row">
                    <div className="contacts__field">
                      <label htmlFor="email">{t('contacts.form.email')}</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder={t('contacts.form.email_placeholder')}
                        autoComplete="email"
                      />
                    </div>
                    <div className="contacts__field">
                      <label htmlFor="phone">{t('contacts.form.phone')}</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder={t('contacts.form.phone_placeholder')}
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div className="contacts__field">
                    <label htmlFor="message">{t('contacts.form.message')}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder={t('contacts.form.message_placeholder')}
                    />
                  </div>

                  <Button onClick={handleSubmit}>{t('contacts.form.submit')}</Button>
                </div>
              )}
            </Reveal>

          </div>
        </div>
      </section>
    </main>
  );
};