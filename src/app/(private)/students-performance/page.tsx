import Image from "next/image";
import { BarChartComponent } from "../../../components/BarChartComponent";
import { BASE_URL } from "../../../constants/baseUrl";

export default async function StudentsPerformance() {

  const response = await fetch(`${BASE_URL}/analytics/overall/ranking`)
  const barChartData = await response.json()

  return (
    <div className=" w-full h-full px-8 flex justify-center">
      <div className="max-w-6xl mx-auto h-fit">
        <BarChartComponent title='Ranking geral de acertos entre os alunos' type='studentsPerformance' chartData={barChartData} />
      </div>
    </div>
  );
}
