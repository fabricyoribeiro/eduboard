
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
        <Sidebar />
        <div className="w-full bg-blue-50 py-10">{children}</div>
      </main>
    </div>
  );
}
