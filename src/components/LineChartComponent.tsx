"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

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


const chartConfig = {
  accuracy: {
    label: "percentual",
    color: "#19197d",
  }
} satisfies ChartConfig

interface ChartData{
  attempts: string
  accuracy: number
}
interface ChartDataProps{
  chartData: ChartData[]
}

export function LineChartComponent({chartData}: ChartDataProps) {
  return (
    <Card className="max-w-xl w-full ">
      <CardHeader>
        <CardTitle>Evolução de acertos por dia</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="attempts"
              tickLine={false}
              axisLine={false}
              tickMargin={8}

              tickFormatter={(value) => value.slice(0, 5)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="accuracy"
              type="natural"
              stroke="blue" 
              strokeWidth={2}
              dot={{
                fill: "blue",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}

                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {/* <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this attempts <TrendingUp className="h-4 w-4" />
        </div> */}

      </CardFooter>
    </Card>
  )
}
