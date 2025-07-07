"use client";

import { useState } from "react";
import { NotepadText, Search } from "lucide-react";
import Image from "next/image";
import PieChartComponent from "./PieChartComponent";
import { LineChartComponent } from "./LineChartComponent";
import { BarChartMultipleComponent } from "./BarChartMultipleComponent";
import { BarChartComponent } from "./BarChartComponent";
import { ChartBarMultipleInteractive } from "./ChartBarMultipleInteractive";
import { BASE_URL } from "../constants/baseUrl";


interface User {
  username: string;
  name: string;
  age: number;
}

export default function IndividualAnalysis({ users }: { users: User[] }) {

  const [selectedUser, setSelectedUser] = useState<any | null>(null);

  console.log(BASE_URL)
   
  async function fetchUserAnalysis(username: string){
    const response:any = await fetch(`${BASE_URL}/individual_analysis/${username}`)
    const data = await response.json()
    setSelectedUser(data)
    console.log(data)
  }

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
              {/* <input
                type="text"
                placeholder="Nome do aluno"
                className="border-2 border-blue-950/40 py-2 px-6 rounded-l-full"
              />
              <button className="bg-blue-950 h-full px-4 rounded-r-full hover:cursor-pointer">
                <Search size={24} color="#fff" />
              </button> */}
            </div>
          )}
        </div>
      </div>

      {selectedUser ? (
        <div>
          <div className="flex justify-between mt-8   rounded-xl shadow-sm border bg-white text-center ">
            <div className="w-full p-3 border-r-[1px] ">{selectedUser.actor.name}</div>
            <div className="w-full p-3">{selectedUser.actor.age} anos</div>
            <div className="w-full p-3 border-l-[1px] ">Desempenho: {selectedUser.individual_indicators.desempenho}</div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex flex-col items-center w-80 p-3 rounded-lg shadow-sm border bg-white">
              <span className="font-semibold">Tempo médio por desafio</span>
              <span>{selectedUser.individual_indicators.average_time.seconds} segundos</span>
            </div>
            <div className="flex flex-col items-center w-80 p-3 rounded-lg shadow-sm border bg-white">
              <span className="font-semibold">Assunto de maior dificuldade</span>
              <span>{selectedUser.individual_indicators.most_difficult_subject}</span>
            </div>
            <div className="flex flex-col items-center w-80 p-3 rounded-lg shadow-sm border bg-white">
              <span className="font-semibold">Maior número de erros</span>
              <span>{selectedUser.individual_indicators.maior_taxa_erros.value}</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-around my-8 gap-y-4">
            <PieChartComponent
              pieChartData={selectedUser.hit_miss_rate}
              title="Percentual de erros e acertos"
            />
            <LineChartComponent chartData={selectedUser.individual_evolution} />
            {/* <BarChartComponent
              smallChart
              type="errorsPerLetter"
              title="Percentual de erros por letras aprendidas"
              chartData={barChartData}
            /> */}

            <BarChartMultipleComponent chartData={selectedUser.hit_and_miss_by_subject} title="Percentual de acertos e erros por conteudo" />

            <ChartBarMultipleInteractive chartDataList={selectedUser.hit_and_miss_by_object_level} />

            {/* <BarChartComponent
              smallChart
              type="errorsPerWords"
              title="Percentual de erros por palavras aprendidas"
              chartData={barChartData2}
            /> */}

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
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <button
                    // onClick={() => setSelectedUser(user)}
                    onClick={() => fetchUserAnalysis(user.username)}
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
