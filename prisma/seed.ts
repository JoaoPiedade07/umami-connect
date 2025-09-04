import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create sample chefs
  const chef1 = await prisma.chef.upsert({
    where: { clerkId: 'chef_hiroshi_tanaka' },
    update: {},
    create: {
      clerkId: 'chef_hiroshi_tanaka',
      email: 'hiroshi@umami-connect.com',
      username: 'hiroshi_tanaka',
      firstName: 'Hiroshi',
      lastName: 'Tanaka',
      imageUrl: '/Base.jpg',
      bio: 'Especialista em culinária japonesa tradicional com mais de 15 anos de experiência.',
      specialty: 'Culinária Japonesa Tradicional',
      experience: 15,
      rating: 4.9,
      totalRating: 245,
      reviewCount: 50,
      isVerified: true,
    },
  })

  const chef2 = await prisma.chef.upsert({
    where: { clerkId: 'chef_yuki_nakamura' },
    update: {},
    create: {
      clerkId: 'chef_yuki_nakamura',
      email: 'yuki@umami-connect.com',
      username: 'yuki_nakamura',
      firstName: 'Yuki',
      lastName: 'Nakamura',
      imageUrl: '/sushi.jpg',
      bio: 'Mestre em técnicas de sushi e culinária japonesa moderna.',
      specialty: 'Técnicas de Sushi',
      experience: 12,
      rating: 4.8,
      totalRating: 192,
      reviewCount: 40,
      isVerified: true,
    },
  })

  const chef3 = await prisma.chef.upsert({
    where: { clerkId: 'chef_kenji_sato' },
    update: {},
    create: {
      clerkId: 'chef_kenji_sato',
      email: 'kenji@umami-connect.com',
      username: 'kenji_sato',
      firstName: 'Kenji',
      lastName: 'Sato',
      imageUrl: '/Base.jpg',
      bio: 'Especialista em ramen e noodles japoneses.',
      specialty: 'Ramen e Noodles',
      experience: 8,
      rating: 4.7,
      totalRating: 141,
      reviewCount: 30,
      isVerified: true,
    },
  })

  // Create sample courses
  const course1 = await prisma.course.upsert({
    where: { id: 'course_japanese_recipes' },
    update: {},
    create: {
      id: 'course_japanese_recipes',
      title: 'Full course of Japanese Recipes',
      description: 'Aprenda as receitas tradicionais japonesas mais autênticas com técnicas profissionais.',
      imageUrl: '/Base.jpg',
      price: 99.99,
      duration: 20,
      level: 'INTERMEDIATE',
      category: 'Culinária Japonesa',
      isPublished: true,
      rating: 4.6,
      totalRating: 460,
      reviewCount: 100,
      viewCount: 84400,
      chefId: chef1.id,
    },
  })

  const course2 = await prisma.course.upsert({
    where: { id: 'course_sushi_techniques' },
    update: {},
    create: {
      id: 'course_sushi_techniques',
      title: 'Master Sushi Techniques',
      description: 'Domine as técnicas profissionais de preparo de sushi e sashimi.',
      imageUrl: '/sushi.jpg',
      price: 149.99,
      duration: 15,
      level: 'ADVANCED',
      category: 'Sushi',
      isPublished: true,
      rating: 4.8,
      totalRating: 384,
      reviewCount: 80,
      viewCount: 92100,
      chefId: chef2.id,
    },
  })

  const course3 = await prisma.course.upsert({
    where: { id: 'course_ramen_mastery' },
    update: {},
    create: {
      id: 'course_ramen_mastery',
      title: 'Ramen Mastery Course',
      description: 'Aprenda a fazer ramen autêntico do zero, incluindo caldos e noodles.',
      imageUrl: '/Base.jpg',
      price: 79.99,
      duration: 12,
      level: 'BEGINNER',
      category: 'Ramen',
      isPublished: true,
      rating: 4.7,
      totalRating: 282,
      reviewCount: 60,
      viewCount: 45600,
      chefId: chef3.id,
    },
  })

  // Create sample lessons for course 1
  await prisma.lesson.createMany({
    data: [
      {
        title: 'Introdução à Culinária Japonesa',
        description: 'Fundamentos e ingredientes essenciais',
        duration: 30,
        order: 1,
        isPublished: true,
        courseId: course1.id,
      },
      {
        title: 'Técnicas de Corte Tradicionais',
        description: 'Aprenda os cortes básicos da culinária japonesa',
        duration: 45,
        order: 2,
        isPublished: true,
        courseId: course1.id,
      },
      {
        title: 'Preparo de Arroz Japonês',
        description: 'O segredo do arroz perfeito',
        duration: 25,
        order: 3,
        isPublished: true,
        courseId: course1.id,
      },
    ],
  })

  // Create sample lessons for course 2
  await prisma.lesson.createMany({
    data: [
      {
        title: 'História do Sushi',
        description: 'Origens e evolução do sushi',
        duration: 20,
        order: 1,
        isPublished: true,
        courseId: course2.id,
      },
      {
        title: 'Seleção de Peixe Fresco',
        description: 'Como escolher o melhor peixe para sushi',
        duration: 35,
        order: 2,
        isPublished: true,
        courseId: course2.id,
      },
      {
        title: 'Técnicas de Corte de Peixe',
        description: 'Cortes específicos para sushi e sashimi',
        duration: 50,
        order: 3,
        isPublished: true,
        courseId: course2.id,
      },
    ],
  })

  console.log('✅ Database seeded successfully!')
  console.log(`👨‍🍳 Created ${3} chefs`)
  console.log(`📚 Created ${3} courses`)
  console.log(`📖 Created ${6} lessons`)
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
