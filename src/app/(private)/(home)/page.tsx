import Image from "next/image";
import InfoCard from "../../../components/InfoCard";
// import InfoCard from "../../../components/InfoCard";
// import {Button} from './../../../components/ui/button'
import {Button} from '@/components/ui/button'
import PieChartComponent from "../../../components/PieChartComponent";

export default function HomeScreen() {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between">
        <InfoCard title='Alunos cadastrados' value={22} />
        <InfoCard title='Alunos cadastrados' value={22} />
        <InfoCard title='Alunos cadastrados' value={22} />
        <InfoCard title='Alunos cadastrados' value={22} />
      </div>

      <div>
        {/* <Button>aaa</Button>  */}
        <PieChartComponent correct_percentage={80} incorrect_percentage={20} />
      </div>
    </div>
  );
}
