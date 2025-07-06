// app/not-found.tsx
export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 px-6">
        <h1 className="text-5xl font-bold">Страница не найдена</h1>
        <p className="mt-4 text-gray-600 text-center max-w-md">
        Возможно, вы перешли по устаревшей ссылке или ввели адрес с ошибкой.
        </p>
        <a
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-primary text-white rounded-md text-sm font-medium hover:bg-blue-600 transition"
        >
        Вернуться на главную →
        </a>
        </main>
    );
}
