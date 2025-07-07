// app/layout.tsx
import './globals.css';
import '@fontsource/inter/variable.css';

export const metadata = {
    title: 'FormNest — AI Assistant for Government Forms',
    description: 'Start a business, file taxes, or get immigration help with AI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head />
        <body className="bg-white text-gray-900 font-sans antialiased">{children}</body>
        </html>
    );
}
