// app/page.tsx
export default function Home() {
  return (
    <main className="p-8 text-center">
    <h1 className="text-3xl font-bold">FormNest</h1>
    <p className="mt-4 text-gray-600">
    Your AI assistant for government forms, business registration, taxes, and immigration.
    </p>
    <a href="/chat" className="mt-6 inline-block bg-black text-white px-4 py-2 rounded">
    Get Started
    </a>
    </main>
  );
}
