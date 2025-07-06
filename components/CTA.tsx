export default function CTA() {
    return (
        <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-2xl font-semibold text-gray-900">Готовы начать?</h2>
        <p className="mt-2 text-gray-600">Выберите направление и начните оформление уже сегодня.</p>
        <a
        href="/start"
        className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-md text-sm font-medium hover:bg-blue-600 transition"
        >
        Начать оформление →
        </a>
        </section>
    );
}
