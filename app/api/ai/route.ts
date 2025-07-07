// app/api/ai/route.ts
import { openai } from '@/lib/openai';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { messages } = await req.json();

    const completion = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages,
        temperature: 0.7,
    });

    return NextResponse.json(completion);
}
