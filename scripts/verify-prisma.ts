import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  const voiceCount = await prisma.voice.count();
  const generationCount = await prisma.generation.count();
  console.log(`✅ Connected — ${voiceCount} voice(s), ${generationCount} generation(s) in DB`);
}

main()
  .catch((e) => {
    console.error("❌ Connection failed:", e.message);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
