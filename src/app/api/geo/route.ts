import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

function normalizeState(input: string | null): string | null {
  if (!input) {
    return null;
  }

  const value = input.trim();
  if (!value) {
    return null;
  }

  // Vercel typically provides US state as a 2-letter region code (e.g. "CA").
  // We keep the raw value if it’s reasonably short; otherwise ignore.
  if (value.length > 40) {
    return null;
  }

  return value;
}

export async function GET() {
  const h = await headers();
  const state =
    normalizeState(h.get('x-vercel-ip-country-region')) ||
    normalizeState(h.get('x-vercel-ip-country-region-name')) ||
    normalizeState(h.get('x-vercel-ip-region')) ||
    normalizeState(h.get('x-vercel-region'));

  return NextResponse.json({ state });
}

