import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json ({
    recentlyPlayedData: [
      {
        songName: "Espresso",
        singers: "Sabrina Carpenter",
        bannerImage: "https://c.saavncdn.com/111/Espresso-English-2024-20240412064803-500x500.jpg"
      }
    ]
  })
}