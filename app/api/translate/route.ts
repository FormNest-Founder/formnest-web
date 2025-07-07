// app/api/translate/route.ts
import { openai } from '@/lib/openai';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { text, targetLang } = await req.json();
    const prompt = `Translate the following text to ${targetLang}:\n\n${text}`;

    const completion = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: prompt }],
    });

    return NextResponse.json({ translated: completion.choices[0].message.content });
}
