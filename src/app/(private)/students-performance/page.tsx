import Image from "next/image";
import { BarChartComponent } from "../../../components/BarChartComponent";

export default function StudentsPerformance() {
  return (
    <div className="bg-blue-50 w-full h-full">
      <div className="max-w-6xl mx-auto">
        <BarChartComponent />

      </div>
    </div>
  );
}
