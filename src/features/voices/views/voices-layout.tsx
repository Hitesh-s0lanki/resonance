import { PageHeader } from "@/components/page-header";

export function VoicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full min-h-0 overflow-hidden">
      <PageHeader title="Voices" />
      {children}
    </div>
  );
}
