// components/MessageBubble.tsx
export default function MessageBubble({ role, content }: { role: string; content: string }) {
    const isUser = role === 'user';
    return (
        <div className={isUser ? 'text-right' : 'text-left'}>
        <span className={`inline-block p-2 rounded ${isUser ? 'bg-blue-100' : 'bg-gray-100'}`}>
        {content}
        </span>
        </div>
    );
}
