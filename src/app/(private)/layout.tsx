"use client";

import { useState } from "react";
import Sidebar from "@/components/SideBar";
import ClipLoader from "react-spinners/ClipLoader";
import {
  RefreshCw,
} from "lucide-react";
import { BASE_URL } from "../../constants/baseUrl";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(false);

  const handleUpdateData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/analytics/update-data`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Erro ao atualizar dados");
      }

      // opcional: mostrar mensagem de sucesso, toast, etc.
    } catch (error) {
      console.error(error);
      // opcional: mostrar toast de erro
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <header className="bg-blue-950 h-[8vh] text-base sticky top-0 z-10">
        <div className="w-full flex justify-between items-center px-8 h-full mx-auto">
          <span className="text-white text-2xl font-bold">EduBoard</span>

          {loading ? (
            <div className="flex items-center gap-2 text-white">
              <span>Atualizando...</span>
              <ClipLoader color="#fff" size={20} />
            </div>
          ) : (
            <button
              className="flex items-center gap-2 text-white hover:opacity-80 hover:cursor-pointer"
              onClick={handleUpdateData}
            >
              <span>Atualizar dados</span>
              <RefreshCw size={20} />
            </button>
          )}
        </div>
      </header>

      <main className="flex min-h-[92vh] text-blue-950 text-sm">
        <Sidebar />
        <div className="w-full bg-blue-50/40 py-6">{children}</div>
      </main>
    </div>
  );
}
