"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { CartesianGrid, LineChart, Tooltip, XAxis, YAxis } from "recharts"

export default function SkeletonChart() {
  const dummyData = Array.from({ length: 7 }, (_, i) => ({
    date: `0${i + 1}/04`,
    price: 0,
  }))

  const chart = useChart({
    data: dummyData,
    series: [
      {
        name: "price",
        color: "gray.400",
      },
    ],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <LineChart data={chart.data}>
        <CartesianGrid stroke={chart.color("border")} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key("date")}
          tickFormatter={(value) => value.slice(0, 5)}
          stroke={chart.color("border")}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          stroke={chart.color("border")}
        />
        <Tooltip
          animationDuration={100}
          cursor={false}
          content={<Chart.Tooltip />}
        />

      </LineChart>
    </Chart.Root>
  )
}
