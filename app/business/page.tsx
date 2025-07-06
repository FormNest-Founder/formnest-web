export default function BusinessPage() {
    return (
        <main className="px-6 py-20 max-w-4xl mx-auto bg-white text-gray-900">
        <h1 className="text-4xl font-bold leading-tight">
        Бизнес — запусти в США с поддержкой
        </h1>
        <p className="mt-4 text-lg text-gray-700">
        Мы помогаем зарегистрировать бизнес, подключить Stripe, автоматизировать процессы и разобраться с налогами.
        </p>

        <ul className="mt-8 space-y-4 text-gray-700 list-disc list-inside">
        <li>Регистрация LLC и получение EIN</li>
        <li>Интеграция со Stripe и банками</li>
        <li>Налоги и отчётность</li>
        <li>Автоматизация форм и переводов</li>
        </ul>

        <div className="mt-10 text-center">
        <a
        href="/start"
        className="inline-block px-6 py-3 bg-primary text-white rounded-md text-sm font-medium hover:bg-blue-600 transition"
        >
        Начать оформление →
        </a>
        </div>
        </main>
    );
}
