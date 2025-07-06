export default function ImmigrationPage() {
    return (
        <main className="px-6 py-20 max-w-4xl mx-auto bg-white text-gray-900">
        <h1 className="text-4xl font-bold leading-tight">
        Иммиграция — от виз до гражданства
        </h1>
        <p className="mt-4 text-lg text-gray-700">
        Мы помогаем на каждом этапе: от перевода документов до подачи форм. Автоматизация, поддержка и точность — всё в одном месте.
        </p>

        <ul className="mt-8 space-y-4 text-gray-700 list-disc list-inside">
        <li>Переводы и нотариальное заверение</li>
        <li>Заполнение форм USCIS</li>
        <li>Проверка и адаптация документов</li>
        <li>Инструкции по подаче и отслеживание</li>
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
