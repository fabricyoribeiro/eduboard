"use client";

import { useState } from "react";
import { NotepadText, Search } from "lucide-react";
import Image from "next/image";

export default function IndividualAnalysis({ users }: { users: any[] }) {
  const [selectedUser, setSelectedUser] = useState<any | null>(null);

  return (
    <div className="bg-blue-50 w-full h-full px-8">
      <div className="">
        <div className="flex justify-between ">
          <div />

          {selectedUser ? (
            <>
              <Image
                src="/lupa-image.svg"
                height={100}
                width={100}
                alt="lupa"
              />

              <button
                onClick={() => setSelectedUser(null)}
                className="mt-4 bg-red-400 px-3 py-1 rounded text-white h-fit hover:cursor-pointer"
              >
                Voltar
              </button>
            </>
          ) : (
            <div className="flex flex-row items-center">
              <input
                type="text"
                placeholder="Nome do aluno"
                className="border-2 border-blue-950/40 py-2 px-6 rounded-l-full"
              />
              <button className="bg-blue-950 h-full px-4 rounded-r-full hover:cursor-pointer">
                <Search size={24} color="#fff" />
              </button>
            </div>
          )}
        </div>
      </div>

      {selectedUser ? (
        <div>
          <div className="flex justify-between mt-8   rounded-xl border-[1px] border-blue-950 text-center ">
            <div className="w-full p-3 border-r-[1px] border-blue-950">Joao</div>
            <div className="w-full p-3">8 anos</div>
            <div className="w-full p-3 border-l-[1px] border-blue-950">Desempenho: Bom</div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex flex-col items-center w-80 p-3 border-[1px] border-blue-950 rounded-lg">
              <span>Tempo médio por desafio</span>
              <span>00:03:21</span>
            </div>
            <div className="flex flex-col items-center w-80 p-3 border-[1px] border-blue-950 rounded-lg">
              <span>Assunto de maior dificuldade</span>
              <span>Datilologia</span>
            </div>
            <div className="flex flex-col items-center w-80 p-3 border-[1px] border-blue-950 rounded-lg">
              <span>Maior número de erros</span>
              <span>Desafio de datilologia nível 1 - 7</span>
            </div>

          </div>
        </div>
      ) : (
        <table className="table mt-8">
          <thead>
            <tr>
              <th>Node de usuário</th>
              <th>Nome completo</th>
              <th>Idade</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <button
                    onClick={() => setSelectedUser(user)}
                    className="flex items-center mx-auto bg-green-300 px-3 py-1 rounded-xl hover:cursor-pointer"
                  >
                    <span>Análise</span>
                    <NotepadText size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
