"use client"

import { useCrypto } from "@/context/CryptoContext"
import { SegmentGroup } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export default function SegmentedCurrency() {
    const [value, setValue] = useState<string | null>("$")
    const { setCurrency } = useCrypto()

    useEffect(() => {
        if (value === "€") {
            setCurrency("eur")
        } else if (value === "$") {
            setCurrency("usd")
        } else if (value === "R$") {
            setCurrency("brl")
        }
    }, [value, setCurrency])

    return (
        <SegmentGroup.Root value={value} onValueChange={(e) => setValue(e.value)}>
            <SegmentGroup.Indicator />
            <SegmentGroup.Items cursor="pointer" items={["$", "€", "R$"]} />
        </SegmentGroup.Root>
    )
}
