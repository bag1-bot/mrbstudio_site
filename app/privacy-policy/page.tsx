import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-neon-pink selection:text-white pt-20">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-gray-300">
        <h1 className="text-4xl font-bold mb-8 text-white">Политика конфиденциальности</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности описывает, как MRB STUDIO (далее — «Мы») собирает, использует и защищает информацию, 
              которую вы предоставляете при использовании нашего веб-сайта. Мы стремимся обеспечить защиту вашей конфиденциальности.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Сбор информации</h2>
            <p>Мы можем собирать следующую информацию:</p>
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>Имя и контактные данные (включая адрес электронной почты и номер телефона).</li>
              <li>Информацию о вашем проекте или запросе.</li>
              <li>Технические данные (IP-адрес, тип браузера, данные о посещении страниц).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Использование информации</h2>
            <p>Мы используем собранную информацию для следующих целей:</p>
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>Предоставление наших услуг и ответов на ваши запросы.</li>
              <li>Улучшение качества нашего веб-сайта и услуг.</li>
              <li>Отправка информационных сообщений (только с вашего согласия).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Защита данных</h2>
            <p>
              Мы принимаем все необходимые меры для защиты ваших данных от несанкционированного доступа, изменения или уничтожения. 
              Однако мы не можем гарантировать абсолютную безопасность передачи данных через интернет.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Передача третьим лицам</h2>
            <p>
              Мы не продаем и не передаем вашу личную информацию третьим лицам, за исключением случаев, предусмотренных законодательством, 
              или если это необходимо для предоставления наших услуг (например, хостинг-провайдеры).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Контакты</h2>
            <p>
              Если у вас есть вопросы относительно нашей Политики конфиденциальности, пожалуйста, свяжитесь с нами:
              <br />
              Email: <a href="mailto:mrbstudio@bk.ru" className="text-neon-blue hover:underline">mrbstudio@bk.ru</a>
              <br />
              Телефон: +7(904)618-54-96
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
