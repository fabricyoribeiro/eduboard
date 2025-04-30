"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { student: "Alice", accuracy: 80 },
  { student: "Bruno", accuracy: 66 },
  { student: "Carlos", accuracy: 54 },
  { student: "Daniela", accuracy: 43 },
  { student: "Eduardo", accuracy: 42 },
  { student: "Fernanda", accuracy: 39 },
  { student: "Gustavo", accuracy: 32 },
  { student: "Helena", accuracy: 22 },
  { student: "Igor", accuracy: 16 },
  { student: "Juliana", accuracy: 10 },
];

const chartConfig = {
  accuracy: {
    label: "Porcentagem de acertos: ",
    color: "#00f",
  },
} satisfies ChartConfig;

export function BarChartComponent() {
  return (
    <Card className=" ">
      <CardHeader>
        <CardTitle>Ranking geral de acertos entre os alunos</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            data={chartData}
            layout="vertical"
            barCategoryGap={10}
            margin={{ top: 30, left: 50 }}
            className="fill-blue-900"
          >
            <CartesianGrid horizontal={false} />

            <YAxis
              type="category"
              dataKey="student"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />

            <XAxis
              type="number"
              tickLine={false}
              axisLine={false}
              domain={[0, 100]}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Bar
              dataKey="accuracy"
              fill="var(--color-desktop)"
              radius={[0, 8, 8, 0]}
            >
              <LabelList
                dataKey="accuracy"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Maior desempenho: Alice (80%)
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex gap-2 font-medium leading-none">
          Menor desempenho: Juliana (10%)
          <TrendingDown className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
