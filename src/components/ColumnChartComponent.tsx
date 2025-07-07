"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { range: '0–10%', students: 3 },
  { range: '11–20%', students: 5 },
  { range: '21–30%', students: 8 },
  { range: '31–40%', students: 12 },
  { range: '41–50%', students: 10 },
  { range: '51–60%', students: 9 },
  { range: '61–70%', students: 7 },
  { range: '71–80%', students: 4 },
  { range: '81–90%', students: 2 },
  { range: '91–100%', students: 1 },
];

const chartConfig = {
  students: {
    label: "Students",
    color: "#00f",
    
  },
} satisfies ChartConfig

export function ColumnChartComponent() {
  return (
    <Card className="max-w-xl w-full ">
      <CardHeader >
        <CardTitle>Quantidade de alunos por faixa de acertos</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            className="fill-blue-900"
            barCategoryGap={10}
            margin={{
              top: 30,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="range"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 6)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="students" fill="var(--color-desktop)" radius={4}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
                
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          A maioria dos alunos tem media de acertos entre 31% e 40% <TrendingUp className="h-4 w-4" />
        </div>

      </CardFooter>
    </Card>
  )
}
