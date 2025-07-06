const features = [
    {
        title: "Иммиграция",
        description: "Визы, грин-карты, натурализация — всё в одном месте.",
        href: "/immigration",
    },
{
    title: "Бизнес",
    description: "LLC, налоги, Stripe — запусти бизнес в США с поддержкой.",
    href: "/business",
},
{
    title: "Налоги и льготы",
    description: "ITIN, налоговые формы, помощь с подачей.",
    href: "/tax",
},
{
    title: "Medicare",
    description: "Подбор плана, заполнение заявки, поддержка.",
    href: "/medicare",
},
];

export default function Features() {
    return (
        <section id="features" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center text-gray-900">
        Выберите направление
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {features.map(({ title, description, href }) => (
            <a
            key={title}
            href={href}
            className="block p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-primary transition bg-white"
            >
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{description}</p>
            </a>
        ))}
        </div>
        </section>
    );
}
