'use client';

import { ChartBarDecreasing, ChartSpline, CircleUserRound, Home, UserSearch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; 

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname(); 

  console.log('current path:', pathname);

  return (
    <div>
      <header className="bg-blue-950 h-[8vh] ">
        <div className="max-w-10/12 flex justify-between items-center px-6 h-full w-full mx-auto">
          <span className="text-white">EduBoard</span>
          <div className="flex items-center gap-4 text-white">
            <span>Professor Gericlécio</span>
            <CircleUserRound size={32} color="#FFF" />
          </div>
        </div>
      </header>
      <main className="flex h-[92vh] text-blue-950">
        <aside className="w-3/12 bg-blue-200 text-blue-950 ">

          <Link href='/'>
            <button className={`w-full h-20 flex items-center gap-2 px-8 hover:bg-blue-100 hover:cursor-pointer ${
              pathname === '/' ? 'bg-blue-100 font-bold shadow-[inset_6px_0px_0px_0px_#162456] ' : ''
            }`}>
              <Home size={28} color="#162456" />
              <span>Início</span>
            </button>
          </Link>

          <Link href='/students-performance'>
            <button className={`w-full h-20 flex items-center gap-2 px-8 hover:bg-blue-100 hover:cursor-pointer ${
              pathname === '/students-performance' ? 'bg-blue-100 font-bold shadow-[inset_6px_0px_0px_0px_#162456] ' : ''
            }`}>
              <ChartBarDecreasing size={28} color="#162456" />
              <span>Desempenho entre os alunos</span>
            </button>
          </Link>

          <Link href='/individual-analysis'>
            <button className={`w-full h-20 flex items-center gap-2 px-8 hover:bg-blue-100 hover:cursor-pointer ${
              pathname === '/individual-analysis' ? 'bg-blue-100 font-bold shadow-[inset_6px_0px_0px_0px_#162456] ' : ''
            }`}>
              <UserSearch size={28} color="#162456" />
              <span>Análise individual</span>
            </button>
          </Link>

          <Link href='/comparative-table'>
            <button className={`w-full h-20 flex items-center gap-2 px-8 hover:bg-blue-100 hover:cursor-pointer ${
              pathname === '/comparative-table' ? 'bg-blue-100 font-bold shadow-[inset_6px_0px_0px_0px_#162456] ' : ''
            }`}>
              <ChartSpline size={28} color="#162456" />
              <span>Quadro comparativo</span>
            </button>
          </Link>

        </aside>
        <div className="w-full bg-blue-50 py-10">
          {children}
        </div>
      </main>
    </div>
  );
}
