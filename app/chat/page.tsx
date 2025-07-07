// app/chat/page.tsx
'use client';
import ChatUI from '@/components/ChatUI';

export default function ChatPage() {
  return (
    <main className="p-4 max-w-2xl mx-auto">
    <h1 className="text-xl font-bold mb-4">FormNest AI</h1>
    <ChatUI />
    </main>
  );
}
