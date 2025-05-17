import Image from "next/image";
import { BarChartComponent } from "../../../components/BarChartComponent";

export default function StudentsPerformance() {
  return (
    <div className="bg-blue-50 w-full h-full px-8">
      <div className="max-w-6xl mx-auto">
        <BarChartComponent />

      </div>
    </div>
  );
}
