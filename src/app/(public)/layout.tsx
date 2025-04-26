// import {User} from '@phosphor-icons/react'

import { CircleUserRound } from "lucide-react";
import Image from "next/image";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-blue-50 h-screen">
      <header className="bg-blue-950 h-[8vh] ">

        <div className="max-w-10/12 flex justify-between items-center px-6 h-full w-full mx-auto">
          <span className="text-white">EduBoard</span>
          <div className="flex items-center gap-4 text-white">
            <span>Login</span>
            <CircleUserRound size={32} color="#FFF" />
          </div>
        </div>

      </header>

      <main className="flex h-[92vh]">
        <div className="w-2/3">
          <Image
            src="/assets/bg-login.png"
            alt="Plano de fundo"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/3 flex items-center justify-center">{children}</div>
      </main>
    </div>
  );
}
