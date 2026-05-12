"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

interface PageHeaderProps {
  title: string;
  children?: React.ReactNode;
}

export function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4 lg:px-6">
      <SidebarTrigger className="-ml-1 lg:hidden" />
      <Separator orientation="vertical" className="h-4 lg:hidden" />
      <h1 className="text-base font-semibold">{title}</h1>
      {children && <div className="ml-auto flex items-center gap-2">{children}</div>}
    </header>
  );
}
