import Image from "next/image";
import InfoCard from "../../../components/InfoCard";
import {Button} from '@/components/ui/button'
import PieChartComponent from "../../../components/PieChartComponent";
import { BarChartComponent } from "../../../components/BarChartComponent";

export default function HomeScreen() {
  return (
    <div className="max-w-[1240px] mx-auto h-full px-4">
      <div className="flex flex-wrap gap-3 xl:justify-between">
        <InfoCard title='Alunos cadastrados' value={22} />
        <InfoCard title='Engajamento' value='Bom' />
        <InfoCard title='Partidas comcluídas' value={25} />
        <InfoCard title='Maior taxa de erros' value='Desafio 2 nivel 1 -70%' />
      </div>

      <div className="flex flex-wrap mt-10 xl:justify-between ">
        <PieChartComponent correct_percentage={80} incorrect_percentage={20} />
        <BarChartComponent />
      </div>
    </div>
  );
}
