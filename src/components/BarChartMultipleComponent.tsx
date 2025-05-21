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

export function BarChartMultipleComponent({ chartData }) {
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
        <CardTitle>Percentual de acertos e erros por conteúdo</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData} >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="subject"
              tickLine={false}
              tickMargin={10}
              
              height={40}
              axisLine={false}
              tick={(props) => {
                const { x, y, payload } = props;
                const value = payload.value;
                const firstLine = value.slice(0, 7);
                const secondLine = value.slice(7);
                return (
                  <text x={x} y={y + 5} textAnchor="middle" fill="#888">
                    <tspan x={x} dy="0">
                      {firstLine}
                    </tspan>
                    {secondLine && (
                      <tspan x={x} dy="1.2em">
                        {secondLine}
                      </tspan>
                    )}
                  </text>
                );
              }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="correct_percentage" fill="#1c398e " radius={4}  />
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
