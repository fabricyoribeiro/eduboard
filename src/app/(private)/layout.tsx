
import Sidebar from "@/components/SideBar";

import {
  ChartBarDecreasing,
  ChartSpline,
  CircleUserRound,
  Home,
  UserSearch,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>
      <header className="bg-blue-950 h-[8vh] text-base">
        <div className="w-full flex justify-between items-center px-8 h-full mx-auto">
          <span className="text-white text-2xl font-bold ">EduBoard</span>
          <div className="flex items-center gap-4 text-white">
            <span>Professor Gericlécio</span>
            <CircleUserRound size={32} color="#FFF" />
          </div>
        </div>
      </header>

      <main className="flex min-h-[92vh] text-blue-950 text-sm">
        <Sidebar />
        <div className="w-full bg-blue-50/40 py-6">{children}</div>
      </main>
    </div>
  );
}
