// import {User} from '@phosphor-icons/react'

import { CircleUserRound } from "lucide-react";
import Image from "next/image";

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
            <span>Login</span>
            <CircleUserRound size={32} color="#FFF" />
          </div>
        </div>
      </header>
    </div>
  );
}
