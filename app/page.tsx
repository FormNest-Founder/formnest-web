// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
    FormNest
    </h1>
    <p className="mt-4 text-lg text-gray-600 max-w-xl">
    Your AI assistant for government forms, business registration, taxes, and immigration.
    </p>
    <a
    href="/chat"
    className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
    >
    Get Started
    </a>
    </main>
  );
}
