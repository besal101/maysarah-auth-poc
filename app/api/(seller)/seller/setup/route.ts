import { currentRole } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST() {
  const role = await currentRole();
  if (role === "USER") {
    return new NextResponse(null, { status: 403 });
  }
  return new NextResponse(null, { status: 403 });
}
