import Image from "next/image";
import { BASE_URL } from "../../../constants/baseUrl";

export default async function ComparativeTable() {

  const response = await fetch(`${BASE_URL}/analytics/performance-classification`)
  const data = await response.json()

  console.log(data)

  return (
    <div className="px-8">

      <table className="table mt-8 ">
        <thead>
          <tr>
            <th>Aluno</th>
            <th>Acertos (%)</th>
            <th>Tempo de jogo (segundos)</th>
            <th>Tempo médio por tentativa (segundos)</th>
            <th>Tentativas</th>
            <th>Desempenho</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.map((item: any) => (
              <tr >
                <td>{item.actor}</td>
                <td>{item.accuracy}</td>
                <td>{item.game_time}</td>
                <td>{item.average_time_per_attempt}</td>
                <td>{item.attempts}</td>
                <td>{item.performance}</td>

              </tr>

            ))
          }
        </tbody>
      </table>
    </div>

  );
}
