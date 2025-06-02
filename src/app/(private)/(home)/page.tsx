import Image from "next/image";
import InfoCard from "../../../components/InfoCard";
import { Button } from "@/components/ui/button";
import PieChartComponent from "../../../components/PieChartComponent";
import { ColumnChartComponent } from "../../../components/ColumnChartComponent";
import { BarChartMultipleComponent } from "../../../components/BarChartMultipleComponent";
import { ChartBarMultipleInteractive } from "../../../components/ChartBarMultipleInteractive";

export default async function HomeScreen() {

  const indicatorsResponse = await fetch('http://127.0.0.1:5000/analytics/indicators')
  const infoCardsData = await indicatorsResponse.json()

  const hitMissResponse = await fetch('http://127.0.0.1:5000/analytics/overall/hit-miss-rate')
  const pieChartData = await hitMissResponse.json()

  const hitMissBySubjectResponse = await fetch('http://127.0.0.1:5000/analytics/overall/hit-miss-by-subject')
  const hitMissBySubjectData = await hitMissBySubjectResponse.json()

  const hitMissByObjectLevel = await fetch('http://127.0.0.1:5000/analytics/overall/hit-miss-by-object-level')
  const hitMissByObjectLevelData = await hitMissByObjectLevel.json()

  // const chartDataList = {

  //   levelOne: [
  //     { object: "Desafio 1", hits: 186, misses: 80 },
  //     { object: "Desafio 2", hits: 305, misses: 200 },
  //     { object: "Desafio 3", hits: 237, misses: 120 },
  //     { object: "Desafio 4", hits: 73, misses: 190 },
  //     { object: "Desafio 5", hits: 209, misses: 130 },
  //   ],
  //   levelTwo: [
  //     { object: "Desafio 1", hits: 126, misses: 280 },
  //     { object: "Desafio 2", hits: 105, misses: 10 },
  //     { object: "Desafio 3", hits: 137, misses: 220 },
  //     { object: "Desafio 4", hits: 273, misses: 90 },
  //     { object: "Desafio 5", hits: 109, misses: 130 },
  //   ],
  //   levelThree: [
  //     { object: "Desafio 1", hits: 26, misses: 80 },
  //     { object: "Desafio 2", hits: 205, misses: 200 },
  //     { object: "Desafio 3", hits: 157, misses: 220 },
  //     { object: "Desafio 4", hits: 173, misses: 200 },
  //     { object: "Desafio 5", hits: 10, misses: 10 },
  //   ]

  // }
  return (
    <div className="max-w-[1240px] mx-auto h-full px-8">
      <div className="flex flex-wrap justify-between">
        {infoCardsData.map((card, index) => (
          <InfoCard key={index} title={card.title} value={card.value} />
        ))}
      </div>

      <div className="flex max-lg:flex-wrap  mt-10 xl:justify-around ">
        <PieChartComponent pieChartData={pieChartData} title='Percentual geral de acertos e erros no jogo' />
        <BarChartMultipleComponent chartData={hitMissBySubjectData} title="Percentual de acertos e erros por conteúdo" />
        {/* <ColumnChartComponent /> */}
      </div>
      <div className="w-full mt-10  ">
        <ChartBarMultipleInteractive chartDataList={hitMissByObjectLevelData}/>
      </div>
    </div>
  );
}
