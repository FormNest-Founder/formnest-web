'use client';

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error("❌ Ошибка на странице:", error);
    }, [error]);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 px-6">
        <h1 className="text-5xl font-bold">Что-то пошло не так</h1>
        <p className="mt-4 text-gray-600 text-center max-w-md">
        Мы уже работаем над этим. Попробуйте обновить страницу или вернуться позже.
        </p>
        <div className="mt-6 flex gap-4">
        <button
        onClick={() => reset()}
        className="px-6 py-3 bg-primary text-white rounded-md text-sm font-medium hover:bg-blue-600 transition"
        >
        Попробовать снова
        </button>
        <a
        href="/"
        className="px-6 py-3 border border-gray-300 text-sm rounded-md hover:bg-gray-50 transition"
        >
        На главную
        </a>
        </div>
        </main>
    );
}
