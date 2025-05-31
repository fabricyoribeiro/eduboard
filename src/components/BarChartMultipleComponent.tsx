"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
import { title } from "process";

interface ChartData {
  subject: string;
  incorrect_percentage: number;
  correct_percentage: number;
}
interface ChartDataProps {
  chartData: ChartData;
  title: string;
}

export function BarChartMultipleComponent({ chartData, title }: ChartDataProps) {
  const chartConfig = {
    incorrect_percentage: {
      label: "Erros",
      color: "hsl(var(--chart-1))",
    },
    correct_percentage: {
      label: "Acertos",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;
  return (
    <Card className="max-w-[470px] w-full h-fit">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="subject"
              tickLine={false}
              tickMargin={10}
              height={40}
              axisLine={false}
              tickFormatter={(value) => `${value.slice(0, 20)}`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="correct_percentage" fill="#1c398e " radius={4} />
            <Bar dataKey="incorrect_percentage" fill="#F00" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Maior taxa de errros: Nível 3 - Léxico de Libras
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex gap-2 font-medium leading-none">
          Maior taxa de acertos: Nível 2 - Sinalização Lexical{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
