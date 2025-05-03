"use client"

import { useCrypto } from "@/context/CryptoContext"
import { Avatar, Card } from "@chakra-ui/react"
import SkeletonCard from "../skeleton/SkeletonCard";

export default function CardCurrentPrice() {
    const { selectedCoin } = useCrypto()

    if (!selectedCoin) {
        return <>
            <SkeletonCard />
        </>;
    }

    return (
        <Card.Root m="3.5" width="280px">
            <Card.Body display="flex" flexDirection="row" id={selectedCoin.id} gap="2">
                <Avatar.Root size="lg" shape="rounded">
                    <Avatar.Image sizes="sm" width="auto" src={selectedCoin.image} />
                    <Avatar.Fallback name={selectedCoin.name} />
                </Avatar.Root>
                <Card.Title m="2">
                    {selectedCoin.name}
                </Card.Title>
            </Card.Body>
        </Card.Root>
    )
}
