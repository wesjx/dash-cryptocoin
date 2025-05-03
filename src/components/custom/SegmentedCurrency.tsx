"use client"

import { useCrypto } from "@/context/CryptoContext"
import { useDebouncedValue } from "@/hooks/useDebounceValue"
import { SegmentGroup } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export default function SegmentedCurrency() {
    const [value, setValue] = useState<string | null>("$")
    const { setCurrency, isLoading } = useCrypto()
    const debouncedValue = useDebouncedValue(value, 5000)

    useEffect(() => {
        if (debouncedValue === "€") {
            setCurrency("eur")
        } else if (debouncedValue === "$") {
            setCurrency("usd")
        } else if (debouncedValue === "R$") {
            setCurrency("brl")
        }
    }, [debouncedValue, setCurrency])

    return (
        <SegmentGroup.Root 
        disabled={isLoading} 
        value={value} 
        onValueChange={(e) => setValue(e.value)}
        className={`segment-group ${isLoading ? 'disabled-cursor' : ''}`}
        >
            <SegmentGroup.Indicator />
            <SegmentGroup.Items cursor="pointer" items={["$", "€", "R$"]} />
        </SegmentGroup.Root>
    )
}
