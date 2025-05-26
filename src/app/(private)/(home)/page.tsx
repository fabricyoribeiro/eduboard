import Image from "next/image";
import InfoCard from "../../../components/InfoCard";
import { Button } from "@/components/ui/button";
import PieChartComponent from "../../../components/PieChartComponent";
import { ColumnChartComponent } from "../../../components/ColumnChartComponent";
import { BarChartMultipleComponent } from "../../../components/BarChartMultipleComponent";

export default async function HomeScreen() {
  
  const indicatorsResponse = await fetch('http://127.0.0.1:5000/analytics/indicators')
  const infoCardsData = await indicatorsResponse.json()  
  
  const hitMissResponse = await fetch('http://127.0.0.1:5000/analytics/overall/hit-miss-rate')
  const pieChartData = await hitMissResponse.json()  

  console.log(pieChartData)
  
  const chartData = [
    {
      subject: "Dactilologia",
      incorrect_percentage: 60,
      correct_percentage: 40,
    },
    {
      subject: "Sinalização Lexical",
      incorrect_percentage: 45,
      correct_percentage: 55,
    },
    {
      subject: "Léxico da Libras",
      incorrect_percentage: 30,
      correct_percentage: 70,
    },
  ];

  // const infoCardsData = [
  //   { title: "Alunos cadastrados", value: 22 },
  //   { title: "Engajamento", value: "Bom" },
  //   { title: "Partidas concluídas", value: 25 },
  //   { title: "Maior taxa de erros", value: "Desafio 2 nível 1 - 70%" },
  // ];

  return (
    <div className="max-w-[1240px] mx-auto h-full px-8">
      <div className="flex flex-wrap justify-between">
        {infoCardsData.map((card, index) => (
          <InfoCard key={index} title={card.title} value={card.value} />
        ))}
      </div>

      <div className="flex max-lg:flex-wrap  mt-10 xl:justify-around ">
        <PieChartComponent pieChartData={pieChartData}  title='Percentual geral de acertos e erros no jogo'/>
        <ColumnChartComponent />
      </div>
      <div className="flex max-lg:flex-wrap  mt-10 xl:justify-between ">
        <BarChartMultipleComponent chartData={chartData} />
      </div>
    </div>
  );
}
