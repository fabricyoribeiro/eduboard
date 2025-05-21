"use client";

import { useState } from "react";
import { NotepadText, Search } from "lucide-react";
import Image from "next/image";
import PieChartComponent from "./PieChartComponent";
import { LineChartComponent } from "./LineChartComponent";
import { BarChartMultipleComponent } from "./BarChartMultipleComponent";
import { BarChartComponent } from "./BarChartComponent";

interface User {
  username: string;
  name: string;
  age: number;
}

export default function IndividualAnalysis({ users }: { users: User[] }) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const multipleChartData = [
    {
      subject: "Nivel 1 Dactilologia",
      incorrect_percentage: 60,
      correct_percentage: 40,
    },
    {
      subject: "Nivel 2 Sinalização Lexical",
      incorrect_percentage: 45,
      correct_percentage: 55,
    },
    {
      subject: "Nivel 3 Léxico da Libras",
      incorrect_percentage: 30,
      correct_percentage: 70,
    },
  ];

  const barChartData = [
    { label: "T", value: 80 },
    { label: "B", value: 66 },
    { label: "C", value: 54 },
    { label: "D", value: 43 },
    { label: "E", value: 42 },
    { label: "F", value: 39 },
    { label: "G", value: 32 },
    { label: "J", value: 10 },
  ];

  const barChartData2 = [
    { label: "Toalha", value: 80 },
    { label: "Bolsa", value: 66 },
    { label: "Cadeira", value: 54 },
    { label: "Dado", value: 43 },
    { label: "Espelho", value: 42 },
    { label: "Folha", value: 39 },
    { label: "Guarda Roupa", value: 32 },
    { label: "Janela", value: 10 },
  ];

  return (
    <div className=" w-full h-full px-8">
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
          <div className="flex justify-between mt-8   rounded-xl shadow-sm border bg-white text-center ">
            <div className="w-full p-3 border-r-[1px] ">{selectedUser.name}</div>
            <div className="w-full p-3">{selectedUser.age} anos</div>
            <div className="w-full p-3 border-l-[1px] ">Desempenho: Bom</div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex flex-col items-center w-80 p-3 rounded-lg shadow-sm border bg-white">
              <span>Tempo médio por desafio</span>
              <span>00:03:21</span>
            </div>
            <div className="flex flex-col items-center w-80 p-3 rounded-lg shadow-sm border bg-white">
              <span>Assunto de maior dificuldade</span>
              <span>Datilologia</span>
            </div>
            <div className="flex flex-col items-center w-80 p-3 rounded-lg shadow-sm border bg-white">
              <span>Maior número de erros</span>
              <span>Desafio de datilologia nível 1 - 7</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-around my-8 gap-y-4">
            <PieChartComponent
              correct_percentage={30}
              incorrect_percentage={70}
            />
            <LineChartComponent />
            <BarChartComponent
              smallChart
              type="errorsPerLetter"
              title="Percentual de erros por letras aprendidas"
              chartData={barChartData}
            />
            <BarChartMultipleComponent chartData={multipleChartData} />
            <BarChartComponent
              smallChart
              type="errorsPerWords"
              title="Percentual de erros por palavras aprendidas"
              chartData={barChartData2}
            />

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
