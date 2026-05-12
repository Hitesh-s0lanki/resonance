import type { Metadata } from "next";

export const metadata: Metadata = { title: "Generation" };

export default async function GenerationPage({
  params,
}: {
  params: Promise<{ generationId: string }>;
}) {
  const { generationId } = await params;

  return (
    <div className="flex flex-col flex-1 items-center justify-center text-muted-foreground">
      Generation: {generationId}
    </div>
  );
}
