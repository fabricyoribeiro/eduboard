import Image from "next/image";
import InfoCard from "../../../components/InfoCard";
import { Button } from "@/components/ui/button";
import PieChartComponent from "../../../components/PieChartComponent";
import { ColumnChartComponent } from "../../../components/ColumnChartComponent";
import { BarChartMultipleComponent } from "../../../components/BarChartMultipleComponent";
import { ChartBarMultipleInteractive } from "../../../components/ChartBarMultipleInteractive";
import { BASE_URL } from "../../../constants/baseUrl";
interface InfoCard{
  title: string
  value: string
}

export default async function HomeScreen() {

const [
  infoCardsData,
  pieChartData,
  hitMissBySubjectData,
  hitMissByObjectLevelData
] = await Promise.all([
  fetch(`${BASE_URL}/analytics/indicators`).then(res => res.json()),
  fetch(`${BASE_URL}/analytics/overall/hit-miss-rate`).then(res => res.json()),
  fetch(`${BASE_URL}/analytics/overall/hit-miss-by-subject`).then(res => res.json()),
  fetch(`${BASE_URL}/analytics/overall/hit-miss-by-object-level`).then(res => res.json())
])


  return (
    <div className="max-w-[1240px] mx-auto h-full px-8">
      <div className="flex flex-wrap justify-between">
        {infoCardsData.map((card: InfoCard, index: number) => (
          <InfoCard key={index} title={card.title} value={card.value} />
        ))}
        <InfoCard title="Desempenho" value='Bom' />
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
