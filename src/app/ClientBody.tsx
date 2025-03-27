"use client";

import { ReactNode } from "react";

interface ClientBodyProps {
  children: ReactNode;
}

export default function ClientBody({ children }: ClientBodyProps) {
  return <body className="min-h-screen bg-gray-50">{children}</body>;
}
