import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url"); // image URL passed as a query parameter

  if (!url) {
    return NextResponse.json(
      { error: "Image URL is required" },
      { status: 400 }
    );
  }

  try {
    // Fetch the image from the external URL
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch the image");
    }
    const arrayBuffer = await response.arrayBuffer();

    // Set appropriate headers to prompt a download
    const headers = new Headers();
    headers.set(
      "Content-Type",
      response.headers.get("content-type") || "application/octet-stream"
    );
    headers.set(
      "Content-Disposition",
      `attachment; filename="downloaded-image.png"`
    );

    return new NextResponse(Buffer.from(arrayBuffer), { headers });
  } catch (error) {
    console.error("Error downloading the image:", error);
    return NextResponse.json(
      { error: "Failed to download the image" },
      { status: 500 }
    );
  }
}
