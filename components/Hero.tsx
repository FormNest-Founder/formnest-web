export default function Hero() {
    return (
        <section className="px-6 py-24 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
        FormNest — где документы собираются сами.
        </h1>
        <p className="mt-4 text-xl text-gray-700">
        И подаются правильно.
        </p>
        <p className="mt-6 text-gray-600 text-base leading-relaxed">
        Мы автоматизируем сбор, проверку и подачу документов для иммиграции, бизнеса, налогов и Medicare — просто, безопасно и с поддержкой на каждом этапе.
        </p>
        <a
        href="#categories"
        className="mt-8 inline-block px-6 py-3 bg-primary text-white rounded-md text-sm font-medium hover:bg-blue-600 transition"
        >
        Выбрать направление →
        </a>
        </section>
    );
}
