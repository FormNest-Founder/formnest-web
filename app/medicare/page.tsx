export default function MedicarePage() {
    return (
        <main className="px-6 py-20 max-w-4xl mx-auto bg-white text-gray-900">
        <h1 className="text-4xl font-bold leading-tight">
        Medicare — без стресса и ошибок
        </h1>
        <p className="mt-4 text-lg text-gray-700">
        Мы помогаем подобрать подходящий план, заполнить заявку и избежать отказов. Всё просто и понятно.
        </p>

        <ul className="mt-8 space-y-4 text-gray-700 list-disc list-inside">
        <li>Подбор плана по возрасту и статусу</li>
        <li>Заполнение заявки и проверка данных</li>
        <li>Поддержка на всех этапах</li>
        <li>Безопасность и конфиденциальность</li>
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
