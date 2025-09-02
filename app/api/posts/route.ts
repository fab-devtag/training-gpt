import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const pageValue = request.nextUrl.searchParams.get("page");
  const limit = 5;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageValue}&_limit=${limit}`
  );

  const posts = await res.json();
  console.log(res);
  const totalCount = parseInt(res.headers.get("X-Total-Count") || "0", 10);

  const hasMore = Number(pageValue) * limit < totalCount;

  return NextResponse.json({ posts, hasMore });
}
