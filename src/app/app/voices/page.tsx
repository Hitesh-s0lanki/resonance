import type { Metadata } from "next";
import { VoicesView } from "@/features/voices/views/voices-view";

export const metadata: Metadata = { title: "Voices" };

export default function VoicesPage() {
  return <VoicesView />;
}
