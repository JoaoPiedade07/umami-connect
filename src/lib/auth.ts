import { auth, currentUser } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';

export async function getAuthData() {
    const { userId } = await auth();
    const user = await currentUser();

    const chef = await prisma.chef.findUnique({ 
        where: { clerkId: userId || undefined}
    });

    return {
        isChef: user?.publicMetadata?.role === 'CHEF' || !!chef,
        user,
        chef,
        userId
    };
}
