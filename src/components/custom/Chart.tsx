"use client"

import { useCrypto } from "@/context/CryptoContext"
import { Chart, useChart } from "@chakra-ui/charts"
import { useEffect, useState } from "react"
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
import SkeletonChart from "../skeleton/ChartLoading"

interface ChartPoint {
  date: string;
  price: number;
}

export default function ChartMain() {

  const { selectedCoin, currency } = useCrypto()
  const [chartData, setChartData] = useState<ChartPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!selectedCoin?.id) return;
  
    const cacheKey = `${selectedCoin.id}-${currency}`;
    const cachedData = localStorage.getItem(cacheKey);
    const lastFetchTime = localStorage.getItem(`${cacheKey}-time`);
  
    const currentTime = new Date().getTime();
  
    const shouldUseCache =
      cachedData &&
      lastFetchTime &&
      (currentTime - Number(lastFetchTime)) < 5 * 60 * 1000;
  
    const timer = setTimeout(() => {
      if (shouldUseCache) {
        setChartData(JSON.parse(cachedData!));
      } else {
        async function fetchData() {
          setIsLoading(true);
          try {
            const res = await fetch(
              `https://api.coingecko.com/api/v3/coins/${selectedCoin?.id}/market_chart?vs_currency=${currency}&days=10&interval=daily`
            );
            const data = await res.json();
  
            const formatted = data.prices.map(([timestamp, price]: [number, number]) => {
              const date = new Date(timestamp);
              const day = String(date.getDate()).padStart(2, '0');
              const month = String(date.getMonth() + 1).padStart(2, '0');
              return {
                date: `${day}/${month}`,
                price: Number(price.toFixed(2)),
              };
            });
  
            localStorage.setItem(cacheKey, JSON.stringify(formatted));
            localStorage.setItem(`${cacheKey}-time`, currentTime.toString());
  
            setChartData(formatted);
          } catch (err) {
            console.error("Error loading chart:", err);
          } finally {
            setIsLoading(false);
          }
        }
  
        fetchData();
      }
    }, 5000);
  
    return () => clearTimeout(timer);
  }, [selectedCoin?.id, currency]);
  
    

  const chart = useChart({
    data: chartData,
    series: [
      {
        name: 'price',
        color: 'teal.solid'
      }
    ]
  });

  if (isLoading) return <SkeletonChart />;

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
        {chart.series.map((item) => (
          <Line
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}
