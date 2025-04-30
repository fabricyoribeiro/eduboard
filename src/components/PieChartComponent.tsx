"use client";

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

interface PieChartComponentProps {
  correct_percentage: number
  incorrect_percentage: number
}



export default function PieChartComponent({correct_percentage, incorrect_percentage}: PieChartComponentProps) {
  
  const chartData = [
    { label: "incorrect_percentage", percentage: incorrect_percentage, fill: "#ff0000" },
    { label: "correct_percentage", percentage: correct_percentage, fill: "#2947a8" },
  ];

  const chartConfig = {
    percentage: {
      label: "Percentage",
    },
    incorrect_percentage: {
      label: "Erros",
    },
    correct_percentage: {
      label: "Acertos",
    },
  } satisfies ChartConfig;

  return (
    <Card className="flex flex-col w-96 h-fit">
      <CardHeader className="items-center pb-0">
        <CardTitle>Grafico de Pizza</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <Pie
              data={chartData}
              dataKey="percentage"
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              // label
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="label" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center text-lg"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
