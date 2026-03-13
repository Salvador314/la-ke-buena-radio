import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Prevents Next.js from caching the page

export async function GET() {
  const url = 'https://streamdb7web.securenetsystems.net/player_status_update/KSSA.xml';

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      },
      next: { revalidate: 0 } 
    });

    if (!res.ok) throw new Error('Station server refused connection');

    const text = await res.text();
    const match = text.match(/<now_playing>(.*?)<\/now_playing>/i);
    let song = match ? match[1] : "La Ke Buena 105.9 FM";

    // Clean up XML junk
    song = song.replace('<![CDATA[', '').replace(']]>', '').trim();

    return NextResponse.json({ song: song || "La Ke Buena 105.9 FM" });
  } catch (error: any) {
    // If the station blocks your local computer, we return this so the site doesn't break
    return NextResponse.json({ song: "La Ke Buena 105.9 FM" });
  }
}