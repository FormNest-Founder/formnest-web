// app/api/report/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { answers } = await req.json();
    const report = `Business Report:\n\n${JSON.stringify(answers, null, 2)}`;
    return NextResponse.json({ report });
}
