import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;

  // Vérifier si l'utilisateur est sur une page /admin ou /login
  if (pathname.startsWith("/admin") || pathname.startsWith("/login")) {
    const session = request.cookies.get("session");

    // Redirection des utilisateurs non authentifiés sur /admin vers /login
    if (pathname.startsWith("/admin") && !session) {
      return NextResponse.redirect(`${origin}/login`);
    }
  }

  // Vérifier si l'utilisateur est authentifié pour les routes /api/upload et /api/newsletter
  if (
    pathname.startsWith("/api/upload") ||
    pathname.startsWith("/api/newsletter")
  ) {
    const session = request.cookies.get("session");

    // Vérifier si l'utilisateur est authentifié
    if (!session) {
      return new Response("Accès non autorisé. Veuillez vous connecter.", {
        status: 401,
      });
    }
  }

  // Continuer avec la requête normale si nous ne sommes pas sur /admin ou /login
  return NextResponse.next();
}
