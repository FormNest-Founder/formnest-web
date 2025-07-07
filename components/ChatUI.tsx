// components/ChatUI.tsx
'use client';
import { useState } from 'react';

export default function ChatUI() {
    const [messages, setMessages] = useState([{ role: 'assistant', content: 'Hi! How can I help you today?' }]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        const newMessages = [...messages, { role: 'user', content: input }];
        setMessages(newMessages);
        setInput('');

        const res = await fetch('/api/ai', {
            method: 'POST',
            body: JSON.stringify({ messages: newMessages }),
        });
        const data = await res.json();
        const reply = data.choices?.[0]?.message?.content || 'Error';
        setMessages([...newMessages, { role: 'assistant', content: reply }]);
    };

    return (
        <div>
        <div className="space-y-2 mb-4">
        {messages.map((m, i) => (
            <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
            <span className="inline-block bg-gray-100 p-2 rounded">{m.content}</span>
            </div>
        ))}
        </div>
        <input
        className="border p-2 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        placeholder="Type your message..."
        />
        </div>
    );
}
