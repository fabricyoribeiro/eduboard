"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  ChartBarDecreasing,
  UserSearch,
  ChartSpline,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[26rem] bg-blue-200 text-blue-950">
      <Link
        href="/"
        className={`w-full h-20 flex items-center gap-2 px-8 hover:bg-blue-100 hover:cursor-pointer ${
          pathname === "/"
            ? "bg-blue-100 font-bold shadow-[inset_6px_0px_0px_0px_#162456]"
            : ""
        }`}
      >
        <Home className="text-[#162456]" size={28} />
        <span>Início</span>
      </Link>

      <Link
        href="/students-performance"
        className={`w-full h-20 flex items-center gap-2 px-8 hover:bg-blue-100 hover:cursor-pointer ${
          pathname === "/students-performance"
            ? "bg-blue-100 font-bold shadow-[inset_6px_0px_0px_0px_#162456]"
            : ""
        }`}
      >
        <ChartBarDecreasing className="text-[#162456]" size={28} />
        <span>Desempenho entre os alunos</span>
      </Link>

      <Link
        href="/individual-analysis"
        className={`w-full h-20 flex items-center gap-2 px-8 hover:bg-blue-100 hover:cursor-pointer ${
          pathname === "/individual-analysis"
            ? "bg-blue-100 font-bold shadow-[inset_6px_0px_0px_0px_#162456]"
            : ""
        }`}
      >
        <UserSearch className="text-[#162456]" size={28} />
        <span>Análise individual</span>
      </Link>

      <Link
        href="/comparative-table"
        className={`w-full h-20 flex items-center gap-2 px-8 hover:bg-blue-100 hover:cursor-pointer ${
          pathname === "/comparative-table"
            ? "bg-blue-100 font-bold shadow-[inset_6px_0px_0px_0px_#162456]"
            : ""
        }`}
      >
        <ChartSpline className="text-[#162456]" size={28} />
        <span>Quadro comparativo</span>
      </Link>
    </aside>
  );
}
