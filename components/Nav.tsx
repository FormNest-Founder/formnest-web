import Image from "next/image";

export default function Nav() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white shadow-sm">
        <a href="/" className="flex items-center gap-3">
        <Image
        src="/logo.svg"
        alt="Formnest"
        width={40}
        height={40}
        priority
        className="block"
        />
        <span className="text-lg font-semibold text-gray-900">Formnest</span>
        </a>
        <div className="flex gap-6 text-sm text-gray-700">
        <a href="/immigration" className="hover:text-primary">Иммиграция</a>
        <a href="/business" className="hover:text-primary">Бизнес</a>
        <a href="/medicare" className="hover:text-primary">Medicare</a>
        </div>
        </nav>
    );
}
