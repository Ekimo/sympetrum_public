import { NextRequest, NextResponse } from "next/server";
import { login } from "../../../../libs/utils/auth";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const user = await login(formData);

    if (user) {
      return NextResponse.json({ user }, { status: 200 });
    } else {
      return NextResponse.json(
        { error: "Identifiants invalides." },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
