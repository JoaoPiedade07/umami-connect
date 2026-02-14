import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Params = { params: Promise<{ id: string }> };

/**
 * GET /api/chefs/:id
 * Obtém um chef por ID (opcionalmente com cursos).
 */
export async function GET(request: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const includeCourses = searchParams.get("includeCourses") === "true";

    const chef = await prisma.chef.findUnique({
      where: { id },
      include: includeCourses ? { courses: true } : undefined,
    });

    if (!chef) {
      return NextResponse.json({ error: "Chef não encontrado" }, { status: 404 });
    }

    return NextResponse.json(chef);
  } catch (error) {
    console.error("[GET /api/chefs/:id]", error);
    return NextResponse.json(
      { error: "Erro ao obter chef" },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/chefs/:id
 * Atualiza um chef.
 */
export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const body = await request.json();

    const existing = await prisma.chef.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Chef não encontrado" }, { status: 404 });
    }

    const {
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

    const chef = await prisma.chef.update({
      where: { id },
      data: {
        ...(email != null && { email }),
        ...(username !== undefined && { username }),
        ...(firstName !== undefined && { firstName }),
        ...(lastName !== undefined && { lastName }),
        ...(imageUrl !== undefined && { imageUrl }),
        ...(bio !== undefined && { bio }),
        ...(specialty !== undefined && { specialty }),
        ...(experience !== undefined && { experience: Number(experience) }),
        ...(isVerified !== undefined && { isVerified: Boolean(isVerified) }),
      },
    });

    return NextResponse.json(chef);
  } catch (error) {
    console.error("[PUT /api/chefs/:id]", error);
    return NextResponse.json(
      { error: "Erro ao atualizar chef" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/chefs/:id
 * Remove um chef (cursos associados são removidos em cascata).
 */
export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const { id } = await params;

    const existing = await prisma.chef.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Chef não encontrado" }, { status: 404 });
    }

    await prisma.chef.delete({ where: { id } });
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("[DELETE /api/chefs/:id]", error);
    return NextResponse.json(
      { error: "Erro ao remover chef" },
      { status: 500 }
    );
  }
}
