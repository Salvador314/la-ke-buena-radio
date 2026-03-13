import { createClient } from 'next-sanity'
import { projectNew } from 'next/dist/build/swc/generated-native';
import { NextResponse } from 'next/server';

const writeClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
    token: process.env.SANITY_API_WRITE_TOKEN,
    apiVersion: '2024-01-01'
})

export async function POST(request: Request){
    try{
        const body = await request.json();

        await writeClient.create({
            _type: 'songRequest',
            name: body.name,
            song: body.song,
            artist: body.artist,
            message: body.message,
            submittedAt: new Date().toISOString(),
        })
        return NextResponse.json({message: "Success"});
    } catch (error){
        console.error("Sanity Error:", error);
        return NextResponse.json({message: "Error saving request"}, {status: 500})
    }
}