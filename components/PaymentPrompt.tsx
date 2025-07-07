// components/PaymentPrompt.tsx
'use client';
export default function PaymentPrompt() {
    const handleClick = async () => {
        const res = await fetch('/api/checkout', { method: 'POST' });
        const { url } = await res.json();
        window.location.href = url;
    };

    return (
        <button onClick={handleClick} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
        Generate Full Report ($9.90)
        </button>
    );
}
