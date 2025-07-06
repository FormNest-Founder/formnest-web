const steps = [
    {
        title: "Загрузите документы",
        description: "Сканируйте или сфотографируйте — мы распознаем и классифицируем автоматически.",
    },
{
    title: "Мы проверим и заполним",
    description: "Алгоритмы и специалисты проверят всё и подготовят формы.",
},
{
    title: "Вы подаёте правильно",
    description: "Получите готовые документы и инструкции по подаче.",
},
];

export default function HowItWorks() {
    return (
        <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-900">Как это работает</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
        {steps.map((step) => (
            <div key={step.title} className="p-6 bg-gray-50 border rounded-lg shadow-sm text-center">
            <div className="text-xl font-semibold text-primary">{step.title}</div>
            <p className="mt-2 text-sm text-gray-600">{step.description}</p>
            </div>
        ))}
        </div>
        </section>
    );
}
