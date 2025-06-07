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

const chartData = [
  { attempts: "Dia1", accuracy: 30},
  { attempts: "Dia 2", accuracy: 42 },
  { attempts: "Dia 3", accuracy: 66 },
  { attempts: "Dia 4", accuracy: 70},
  { attempts: "Dia 5", accuracy: 89 },
  { attempts: "Dia 6", accuracy: 100 },
]

const chartConfig = {
  accuracy: {
    label: "accuracy",
    color: "#19197d",
  }
} satisfies ChartConfig

export function LineChartComponent() {
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
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this attempts <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 attemptss
        </div>
      </CardFooter>
    </Card>
  )
}
