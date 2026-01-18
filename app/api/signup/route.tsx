import { NextResponse } from "next/server";
import argon2 from "argon2";
import { supabase } from "@/app/lib/supabase";

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();
    const hashedPassword = await argon2.hash(password);
    await supabase.from("user_auth").insert({
      name,
      email,
      password: hashedPassword,
    });
    return NextResponse.json({ auth: true }, { status: 200 });
  } catch {
    return NextResponse.json({ auth: false }, { status: 500 });
  }
}
