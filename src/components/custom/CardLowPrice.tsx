"use client"

import { useCrypto } from "@/context/CryptoContext"
import { useFormatPrice } from "@/hooks/useFormatPrice";
import { Avatar, Card } from "@chakra-ui/react"
import SkeletonCard from "../skeleton/SkeletonCard";
import { FaArrowDown } from "react-icons/fa";

export default function CardCurrentPrice() {
    const { selectedCoin } = useCrypto()
    const formatPrice = useFormatPrice()

    if (!selectedCoin) {
        return <>
            <SkeletonCard />
        </>;
    }

    return (
        <Card.Root width="320px">
            <Card.Body id={selectedCoin.id} gap="2">
                <Avatar.Root size="lg" shape="rounded">
                    <Avatar.Image src={selectedCoin.image} />
                    <Avatar.Fallback name={selectedCoin.name} />
                </Avatar.Root>
                <Card.Title mt="2" className="card-price">
                    {selectedCoin.name}
                    <p>
                        - High price 24h
                    </p>
                </Card.Title>
                <Card.Description className="price low-price" >
                    <FaArrowDown size={25} />
                    {formatPrice(selectedCoin.low_24h)}
                </Card.Description>
            </Card.Body>
        </Card.Root>
    )
}
