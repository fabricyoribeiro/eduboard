import Image from "next/image";
import { BarChartComponent } from "../../../components/BarChartComponent";

export default async function StudentsPerformance() {

  const response = await fetch('http://127.0.0.1:5000/analytics/overall/ranking')
  const barChartData = await response.json()

  return (
    <div className=" w-full h-full px-8 flex justify-center">
      <div className="max-w-6xl mx-auto h-fit">
        <BarChartComponent title='Ranking geral de acertos entre os alunos' type='studentsPerformance' chartData={barChartData} />
      </div>
    </div>
  );
}
