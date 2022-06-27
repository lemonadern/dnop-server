import { PrismaClient, Memo } from '@prisma/client'
import { depend } from 'velona'
const prisma = new PrismaClient()

export const getMemos = depend(
  { prisma: prisma as { memo: { findMany(): Promise<Memo[]> } } },
  async ({ prisma }) => (await prisma.memo.findMany()).slice(0, 10)
)
