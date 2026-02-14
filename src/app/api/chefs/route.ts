import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/chefs
 * Lista todos os chefs (com opção de incluir cursos).
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const includeCourses = searchParams.get("includeCourses") === "true";

    const chefs = await prisma.chef.findMany({
      include: includeCourses ? { courses: true } : undefined,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(chefs);
  } catch (error) {
    console.error("[GET /api/chefs]", error);
    return NextResponse.json(
      { error: "Erro ao listar chefs" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/chefs
 * Cria um novo chef.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      clerkId,
      email,
      username,
      firstName,
      lastName,
      imageUrl,
      bio,
      specialty,
      experience,
      isVerified,
    } = body;

    if (!clerkId || !email) {
      return NextResponse.json(
        { error: "clerkId e email são obrigatórios" },
        { status: 400 }
      );
    }

    const chef = await prisma.chef.create({
      data: {
        clerkId,
        email,
        username: username ?? null,
        firstName: firstName ?? null,
        lastName: lastName ?? null,
        imageUrl: imageUrl ?? null,
        bio: bio ?? null,
        specialty: specialty ?? null,
        experience: experience != null ? Number(experience) : null,
        isVerified: isVerified === true,
      },
    });

    return NextResponse.json(chef, { status: 201 });
  } catch (error) {
    console.error("[POST /api/chefs]", error);
    return NextResponse.json(
      { error: "Erro ao criar chef" },
      { status: 500 }
    );
  }
}
