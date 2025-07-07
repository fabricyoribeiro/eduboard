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
import { useState } from "react"
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "./ui/select"
import HitsMissesLabel from "./HitsMissesLabel"

export const description = "A multiple bar chart"

const chartConfig = {
  hits: {
    label: "Acertos",
    color: "#2947a8",
  },
  misses: {
    label: "Erros",
    color: "red",
  },
} satisfies ChartConfig

interface ChartDataItem {
  object: string;
  hits: number;
  misses: number;
}

interface ChartDataList {
  levelOne: ChartDataItem[];
  levelTwo: ChartDataItem[];
  levelThree: ChartDataItem[];
}

interface ChartBarMultipleInteractiveProps {
  chartDataList: ChartDataList;
}


export function ChartBarMultipleInteractive({ chartDataList }: ChartBarMultipleInteractiveProps) {

  const [chartData, setChartData] = useState<any[]>(chartDataList.levelOne)

  return (
    <Card className="w-full max-w-xl justify-self-center  " >
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>Acertos e erros por desafio e nivel</CardTitle>
          <Select onValueChange={(value) => {
            switch (value) {
              case "levelOne":
                setChartData(chartDataList.levelOne)
                break
              case "levelTwo":
                setChartData(chartDataList.levelTwo)
                break
              case "levelThree":
                setChartData(chartDataList.levelThree)
                break
            }
          }}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Nível" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="levelOne">Nível 1</SelectItem>
              <SelectItem value="levelTwo">Nível 2</SelectItem>
              <SelectItem value="levelThree">Nível 3</SelectItem>
            </SelectContent>
          </Select>


        </div>
        {/* <CardDescription>January - June 2024</CardDescription> */}
        <HitsMissesLabel />

      </CardHeader>
      <CardContent >
        <ChartContainer config={chartConfig} >
          <BarChart accessibilityLayer data={chartData} >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="object"
              tickLine={false}
              tickMargin={10}
              axisLine={false}

            // tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="hits" fill="var(--color-hits)" radius={4} />
            <Bar dataKey="misses" fill="var(--color-misses)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
        </div>

      </CardFooter>
    </Card>
  )
}
