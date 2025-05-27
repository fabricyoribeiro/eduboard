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
import clsx from "clsx";

export function BarChartComponent({ smallChart, chartData, title, type }) {
  const chartConfig = {
    value: {
      label:
        type === "studentsPerformance"
          ? "Porcentagem de acertos"
          : type === "errorsPerLetter"
          ? "Porcentagem de erros"
          : "",
      color: "#00f",
    },
  } satisfies ChartConfig;
  return (
    <Card className={clsx("w-full  ", { "lg:max-w-lg": smallChart })}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer

          style={smallChart ? null : { height: `${chartData.length * 60}px` }}
          // className={`h-[${chartData.length * 40}px]`}
          config={chartConfig}
        >
          <BarChart
            data={chartData}
            layout="vertical"
            barCategoryGap={smallChart ? 25 : 10}
            barSize={smallChart ? 15 : null}
            margin={{ top: 0, left: 0 }}
            className="fill-blue-900 "
          >
            <CartesianGrid horizontal={false} />

            <YAxis
              type="category"
              dataKey="label"
              tickLine={false}
              axisLine={false}
              tickMargin={0}
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
              dataKey="value"
              fill="var(--color-desktop)"
              radius={[0, 8, 8, 0]}
            >
              <LabelList
                dataKey="value"
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
        {type === "errorsPerLetter" && (
          <div className="flex gap-2 font-medium leading-none">
            Maior dificuldade: Letra A (80%)
            <TrendingUp className="h-4 w-4" />
          </div>
        )}

        {type === "errorsPerWords" && (
          <div className="flex gap-2 font-medium leading-none">
            Maior dificuldade: Palavra Toalha (80%)
            <TrendingUp className="h-4 w-4" />
          </div>
        )}

        {type === "studentsPerformance" && (
          <>
            <div className="flex gap-2 font-medium leading-none">
              Maior desempenho: Alice (80%)
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex gap-2 font-medium leading-none">
              Menor desempenho: Juliana (10%)
              <TrendingDown className="h-4 w-4" />
            </div>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
