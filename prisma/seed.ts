import "dotenv/config";
import { PrismaClient, VoiceVariant, VoiceCategory } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  const alloy = await prisma.voice.upsert({
    where: { id: "seed-voice-alloy" },
    update: {},
    create: {
      id: "seed-voice-alloy",
      name: "Alloy",
      description: "A versatile, balanced voice suitable for a wide range of content.",
      category: VoiceCategory.GENERAL,
      language: "en-US",
      variant: VoiceVariant.SYSTEM,
    },
  });

  const nova = await prisma.voice.upsert({
    where: { id: "seed-voice-nova" },
    update: {},
    create: {
      id: "seed-voice-nova",
      name: "Nova",
      description: "A warm, friendly voice great for conversational content.",
      category: VoiceCategory.CONVERSATIONAL,
      language: "en-US",
      variant: VoiceVariant.SYSTEM,
    },
  });

  await prisma.generation.upsert({
    where: { id: "seed-gen-1" },
    update: {},
    create: {
      id: "seed-gen-1",
      orgId: "seed-org",
      voiceId: alloy.id,
      voiceName: alloy.name,
      text: "Hello! Welcome to Resonance, your AI-powered voice platform.",
      temperature: 0.7,
      topP: 0.9,
      topK: 50,
      repetitionPenalty: 1.1,
    },
  });

  await prisma.generation.upsert({
    where: { id: "seed-gen-2" },
    update: {},
    create: {
      id: "seed-gen-2",
      orgId: "seed-org",
      voiceId: nova.id,
      voiceName: nova.name,
      text: "This is a sample generation using the Nova voice.",
      temperature: 0.5,
      topP: 0.85,
      topK: 40,
      repetitionPenalty: 1.0,
    },
  });

  console.log("✅ Seed complete: 2 voices, 2 generations");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
