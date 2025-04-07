import type { ReactNode } from 'react';

export default function JobDetailLayout({
                                          children,
                                        }: {
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-linear-background to-linear-hover/30">
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
}

