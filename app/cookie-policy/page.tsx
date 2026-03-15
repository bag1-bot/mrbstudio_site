import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-neon-pink selection:text-white pt-20">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-gray-300">
        <h1 className="text-4xl font-bold mb-8 text-white">Политика использования файлов Cookie</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Что такое файлы Cookie?</h2>
            <p>
              Файлы cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении веб-сайта. 
              Они позволяют сайту запоминать ваши действия и предпочтения (например, язык, размер шрифта и другие настройки отображения) 
              в течение определенного времени.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Как мы используем Cookie?</h2>
            <p>Мы используем файлы cookie для следующих целей:</p>
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>Обеспечение корректной работы основных функций сайта.</li>
              <li>Анализ посещаемости и поведения пользователей для улучшения сайта (аналитические cookie).</li>
              <li>Сохранение ваших предпочтений.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Управление файлами Cookie</h2>
            <p>
              Вы можете управлять файлами cookie и удалять их по своему усмотрению. Вы можете удалить все файлы cookie, 
              которые уже хранятся на вашем устройстве, и настроить большинство браузеров так, чтобы они блокировали их установку. 
              Однако в этом случае вам, возможно, придется вручную настраивать некоторые параметры при каждом посещении сайта, 
              а некоторые сервисы и функции могут не работать.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Изменения в политике</h2>
            <p>
              Мы можем время от времени обновлять настоящую Политику использования файлов cookie. 
              Рекомендуем регулярно проверять эту страницу на предмет изменений.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Контакты</h2>
            <p>
              Если у вас есть вопросы относительно нашей Политики Cookie, свяжитесь с нами по адресу: 
              <a href="mailto:mrbstudio@bk.ru" className="text-neon-blue hover:underline ml-1">mrbstudio@bk.ru</a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
