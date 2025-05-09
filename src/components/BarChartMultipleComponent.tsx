"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
  { subject: "Dactilologia", incorrect_percentage: 60, correct_percentage: 40 },
  { subject: "Sinalização Lexical", incorrect_percentage: 45, correct_percentage: 55 },
  { subject: "Léxico da Libras", incorrect_percentage: 30, correct_percentage: 70 },
]

const chartConfig = {
  incorrect_percentage: {
    label: "Erros",
    color: "hsl(var(--chart-1))",
  },
  correct_percentage: {
    label: "Acertos",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function BarChartMultipleComponent() {
  return (
    <Card className="w-sm">
      <CardHeader>
        <CardTitle>Média de acertos e erros por conteúdo</CardTitle>
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
              axisLine={false}
              // tickFormatter={(value) => value.slice(0, 3)}
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
          Maior taxa de errros:  Léxico de Libras<TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex gap-2 font-medium leading-none">
          Maior taxa de acertos: Sinalização Lexical <TrendingUp className="h-4 w-4" />
        </div>

      </CardFooter>
    </Card>
  )
}
