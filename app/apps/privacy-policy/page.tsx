'use client';

import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

type Lang = 'ru' | 'en';

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'ru';
  const param = new URLSearchParams(window.location.search).get('lang');
  return param === 'en' ? 'en' : 'ru';
}

const content = {
  ru: {
    title: 'Политика конфиденциальности приложений',
    updated: 'Дата последнего обновления: 10 августа 2026 г.',
    intro:
      'Настоящая Политика конфиденциальности описывает, какие данные собирают, используют и защищают мобильные и другие приложения студии разработки MRB STUDIO (далее — «Мы», «Студия», «Приложения»). Используя наши Приложения, вы соглашаетесь с условиями этой Политики.',
    sections: [
      {
        title: '1. Оператор данных',
        body: (
          <>
            <p>Оператор персональных данных:</p>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
              <li>Название: MRB STUDIO</li>
              <li>
                Email:{' '}
                <a href="mailto:mrbstudio72@gmail.com" className="text-neon-blue hover:underline">
                  mrbstudio72@gmail.com
                </a>
              </li>
              <li>
                Telegram:{' '}
                <a
                  href="https://t.me/mrb_studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-blue hover:underline"
                >
                  @mrb_studio
                </a>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: '2. Какие данные мы можем собирать',
        body: (
          <>
            <p>
              Конкретный набор данных зависит от Приложения. В зависимости от функций Приложение может обрабатывать:
            </p>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
              <li>Контактные данные, которые вы добровольно указываете (имя, email, Telegram и т.п.).</li>
              <li>Данные учётной записи и идентификаторы устройства (например, ID устройства, версия ОС).</li>
              <li>Технические и аналитические данные (сбои, производительность, тип устройства).</li>
              <li>Данные, необходимые для работы функций Приложения (например, содержимое, которое вы создаёте или загружаете).</li>
              <li>Данные, полученные с вашего разрешения (камера, галерея, уведомления, геолокация — только если это нужно для функции и вы дали согласие).</li>
            </ul>
            <p className="mt-3">
              Мы не требуем предоставления избыточных персональных данных и собираем только то, что нужно для работы сервиса.
            </p>
          </>
        ),
      },
      {
        title: '3. Как мы используем данные',
        body: (
          <>
            <p>Собранные данные используются для:</p>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
              <li>предоставления функций Приложения и поддержки пользователей;</li>
              <li>улучшения стабильности, безопасности и качества продукта;</li>
              <li>ответов на обращения и обработки запросов;</li>
              <li>соблюдения требований законодательства;</li>
              <li>отправки сервисных уведомлений (если это предусмотрено Приложением и разрешено вами).</li>
            </ul>
          </>
        ),
      },
      {
        title: '4. Передача данных третьим лицам',
        body: (
          <>
            <p>
              Мы не продаём ваши персональные данные. Передача возможна только в необходимых случаях:
            </p>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
              <li>поставщикам инфраструктуры и сервисов (хостинг, аналитика, облачные сервисы), которые обрабатывают данные по нашему поручению;</li>
              <li>если это требуется по закону или по запросу уполномоченных органов;</li>
              <li>для защиты прав, безопасности пользователей или Студии.</li>
            </ul>
          </>
        ),
      },
      {
        title: '5. Хранение и защита данных',
        body: (
          <p>
            Мы принимаем разумные организационные и технические меры для защиты данных от несанкционированного доступа,
            изменения, раскрытия или уничтожения. Срок хранения зависит от целей обработки, требований закона и настроек
            конкретного Приложения. Когда данные больше не нужны, мы удаляем или обезличиваем их.
          </p>
        ),
      },
      {
        title: '6. Права пользователя',
        body: (
          <>
            <p>Вы можете обратиться к нам, чтобы:</p>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
              <li>узнать, какие данные о вас обрабатываются;</li>
              <li>запросить исправление или удаление данных;</li>
              <li>отозвать согласие на обработку (если обработка основана на согласии);</li>
              <li>получить разъяснения по этой Политике.</li>
            </ul>
            <p className="mt-3">
              Для этого напишите на{' '}
              <a href="mailto:mrbstudio72@gmail.com" className="text-neon-blue hover:underline">
                mrbstudio72@gmail.com
              </a>{' '}
              или в Telegram{' '}
              <a
                href="https://t.me/mrb_studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-blue hover:underline"
              >
                @mrb_studio
              </a>
              .
            </p>
          </>
        ),
      },
      {
        title: '7. Данные детей',
        body: (
          <p>
            Наши Приложения не предназначены для сбора персональных данных детей без согласия родителей или законных
            представителей, если иное прямо не указано в описании конкретного Приложения. Если вы считаете, что ребёнок
            передал нам данные без согласия, свяжитесь с нами — мы примем меры по удалению таких данных.
          </p>
        ),
      },
      {
        title: '8. Сторонние сервисы и ссылки',
        body: (
          <p>
            Приложения могут содержать ссылки или интеграции со сторонними сервисами (например, магазины приложений,
            платёжные системы, соцсети). Их политика конфиденциальности регулируется отдельно. Рекомендуем ознакомиться
            с документами таких сервисов самостоятельно.
          </p>
        ),
      },
      {
        title: '9. Изменения Политики',
        body: (
          <p>
            Мы можем обновлять эту Политику. Актуальная версия всегда доступна по этому адресу. Дата обновления указана
            в начале документа. Продолжая пользоваться Приложениями после изменений, вы принимаете обновлённую Политику,
            если иное не требуется по закону.
          </p>
        ),
      },
      {
        title: '10. Контакты',
        body: (
          <p>
            По вопросам конфиденциальности приложений MRB STUDIO:
            <br />
            Email:{' '}
            <a href="mailto:mrbstudio72@gmail.com" className="text-neon-blue hover:underline">
              mrbstudio72@gmail.com
            </a>
            <br />
            Telegram:{' '}
            <a
              href="https://t.me/mrb_studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-blue hover:underline"
            >
              @mrb_studio
            </a>
          </p>
        ),
      },
    ],
  },
  en: {
    title: 'Apps Privacy Policy',
    updated: 'Last updated: August 10, 2026',
    intro:
      'This Privacy Policy explains what data is collected, used, and protected by mobile and other applications developed by MRB STUDIO (hereinafter — “We”, “Studio”, “Apps”). By using our Apps, you agree to this Policy.',
    sections: [
      {
        title: '1. Data Controller',
        body: (
          <>
            <p>Data controller:</p>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
              <li>Name: MRB STUDIO</li>
              <li>
                Email:{' '}
                <a href="mailto:mrbstudio72@gmail.com" className="text-neon-blue hover:underline">
                  mrbstudio72@gmail.com
                </a>
              </li>
              <li>
                Telegram:{' '}
                <a
                  href="https://t.me/mrb_studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-blue hover:underline"
                >
                  @mrb_studio
                </a>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: '2. Data We May Collect',
        body: (
          <>
            <p>
              The exact data set depends on the specific App. Depending on features, an App may process:
            </p>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
              <li>Contact details you voluntarily provide (name, email, Telegram, etc.).</li>
              <li>Account data and device identifiers (e.g., device ID, OS version).</li>
              <li>Technical and analytics data (crashes, performance, device type).</li>
              <li>Data required for App features (e.g., content you create or upload).</li>
              <li>
                Permission-based data (camera, gallery, notifications, location — only if needed for a feature and
                granted by you).
              </li>
            </ul>
            <p className="mt-3">
              We do not require excessive personal data and only collect what is necessary for the service to work.
            </p>
          </>
        ),
      },
      {
        title: '3. How We Use Data',
        body: (
          <>
            <p>Collected data is used to:</p>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
              <li>provide App features and user support;</li>
              <li>improve stability, security, and product quality;</li>
              <li>respond to inquiries and process requests;</li>
              <li>comply with legal requirements;</li>
              <li>send service notifications (if provided by the App and permitted by you).</li>
            </ul>
          </>
        ),
      },
      {
        title: '4. Sharing with Third Parties',
        body: (
          <>
            <p>We do not sell your personal data. Sharing is possible only when necessary:</p>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
              <li>
                infrastructure and service providers (hosting, analytics, cloud services) that process data on our
                behalf;
              </li>
              <li>when required by law or by authorized authorities;</li>
              <li>to protect the rights, safety of users, or the Studio.</li>
            </ul>
          </>
        ),
      },
      {
        title: '5. Storage and Security',
        body: (
          <p>
            We take reasonable organizational and technical measures to protect data against unauthorized access,
            alteration, disclosure, or destruction. Retention periods depend on processing purposes, legal requirements,
            and the settings of each App. When data is no longer needed, we delete or anonymize it.
          </p>
        ),
      },
      {
        title: '6. Your Rights',
        body: (
          <>
            <p>You may contact us to:</p>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
              <li>learn what data about you is processed;</li>
              <li>request correction or deletion of data;</li>
              <li>withdraw consent (where processing is based on consent);</li>
              <li>get clarifications about this Policy.</li>
            </ul>
            <p className="mt-3">
              Contact us at{' '}
              <a href="mailto:mrbstudio72@gmail.com" className="text-neon-blue hover:underline">
                mrbstudio72@gmail.com
              </a>{' '}
              or on Telegram{' '}
              <a
                href="https://t.me/mrb_studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-blue hover:underline"
              >
                @mrb_studio
              </a>
              .
            </p>
          </>
        ),
      },
      {
        title: '7. Children’s Data',
        body: (
          <p>
            Our Apps are not intended to collect children’s personal data without parental or guardian consent, unless
            otherwise stated in a specific App description. If you believe a child has provided us with data without
            consent, contact us and we will take steps to delete such data.
          </p>
        ),
      },
      {
        title: '8. Third-Party Services and Links',
        body: (
          <p>
            Apps may contain links or integrations with third-party services (e.g., app stores, payment systems, social
            networks). Their privacy practices are governed separately. Please review those services’ policies on your
            own.
          </p>
        ),
      },
      {
        title: '9. Changes to This Policy',
        body: (
          <p>
            We may update this Policy. The current version is always available at this URL. The update date is shown at
            the top. By continuing to use the Apps after changes, you accept the updated Policy, unless otherwise
            required by law.
          </p>
        ),
      },
      {
        title: '10. Contact',
        body: (
          <p>
            For privacy questions about MRB STUDIO apps:
            <br />
            Email:{' '}
            <a href="mailto:mrbstudio72@gmail.com" className="text-neon-blue hover:underline">
              mrbstudio72@gmail.com
            </a>
            <br />
            Telegram:{' '}
            <a
              href="https://t.me/mrb_studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-blue hover:underline"
            >
              @mrb_studio
            </a>
          </p>
        ),
      },
    ],
  },
};

export default function AppsPrivacyPolicy() {
  const [lang, setLang] = useState<Lang>('ru');
  const t = content[lang];

  useEffect(() => {
    setLang(getInitialLang());
  }, []);

  const switchLang = (next: Lang) => {
    setLang(next);
    const url = new URL(window.location.href);
    if (next === 'en') {
      url.searchParams.set('lang', 'en');
    } else {
      url.searchParams.delete('lang');
    }
    window.history.replaceState({}, '', url.toString());
  };

  return (
    <main className="min-h-screen bg-transparent text-white font-sans selection:bg-neon-pink selection:text-white pt-20">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-gray-300">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">{t.title}</h1>
          <div className="flex rounded-full border border-white/20 overflow-hidden text-sm font-semibold">
            <button
              type="button"
              onClick={() => switchLang('ru')}
              className={`px-4 py-2 transition-colors ${
                lang === 'ru' ? 'bg-white text-black' : 'text-gray-300 hover:text-white'
              }`}
              aria-pressed={lang === 'ru'}
            >
              RU
            </button>
            <button
              type="button"
              onClick={() => switchLang('en')}
              className={`px-4 py-2 transition-colors ${
                lang === 'en' ? 'bg-white text-black' : 'text-gray-300 hover:text-white'
              }`}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-6">{t.updated}</p>
        <p className="mb-10">{t.intro}</p>

        <div className="space-y-8">
          {t.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
              <div className="leading-relaxed">{section.body}</div>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
