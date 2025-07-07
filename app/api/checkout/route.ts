// app/api/checkout/route.ts
import { stripe } from '@/lib/stripe';
import { NextResponse } from 'next/server';

export async function POST() {
    const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: { name: 'FormNest Report' },
                    unit_amount: 990,
                },
                quantity: 1,
            },
        ],
        success_url: 'https://formnest.org/success',
        cancel_url: 'https://formnest.org/cancel',
    });

    return NextResponse.json({ url: session.url });
}
