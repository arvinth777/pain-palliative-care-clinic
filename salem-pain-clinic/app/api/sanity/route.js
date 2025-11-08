import { NextResponse } from 'next/server';
import { client, queries } from '@/lib/sanity';

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';

// Cache responses for 5 minutes (300 seconds)
// Revalidate in background every 60 seconds
export const revalidate = 60;

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type'); // 'doctor', 'clinic', or 'images'

    let data;
    if (type === 'doctor') {
      data = await client.fetch(queries.getDoctor);
    } else if (type === 'clinic') {
      data = await client.fetch(queries.getClinicInfo);
    } else if (type === 'images') {
      data = await client.fetch(queries.getWebsiteImages);
    } else {
      // Fetch all by default
      const [doctor, clinic, images] = await Promise.all([
        client.fetch(queries.getDoctor),
        client.fetch(queries.getClinicInfo),
        client.fetch(queries.getWebsiteImages),
      ]);
      data = { doctor, clinic, images };
    }

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60',
      },
    });
  } catch (error) {
    console.error('Sanity API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
