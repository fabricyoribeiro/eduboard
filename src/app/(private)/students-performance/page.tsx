import Image from "next/image";
import { BarChartComponent } from "../../../components/BarChartComponent";

export default async function StudentsPerformance() {

  const response = await fetch('http://127.0.0.1:5000/analytics/overall/ranking')
  const barChartData = await response.json()

  // const barChartData = [
  //   { label: "Alice", value: 80 },
  //   { label: "Bruno", value: 66 },
  //   { label: "Carlos", value: 54 },
  //   { label: "Daniela", value: 43 },
  //   { label: "Eduardo", value: 42 },
  //   { label: "Fernanda", value: 39 },
  //   { label: "Gustavo", value: 32 },
  //   { label: "Helena", value: 22 },
  //   { label: "Igor", value: 16 },
  //   { label: "Juliana", value: 10 },
  // ];

  return (
    <div className=" w-full h-full px-8 flex justify-center">
      <div className="max-w-6xl mx-auto h-fit">
        <BarChartComponent title='Ranking geral de acertos entre os alunos' type='studentsPerformance' chartData={barChartData} />
      </div>
    </div>
  );
}
