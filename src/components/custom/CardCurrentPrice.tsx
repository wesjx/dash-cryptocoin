"use client"

import { useCrypto } from "@/context/CryptoContext"
import { useFormatPrice } from "@/hooks/useFormatPrice";
import { Avatar, Card } from "@chakra-ui/react"
import SkeletonCard from "../skeleton/SkeletonCard";

export default function CardCurrentPrice(){
  const { selectedCoin } = useCrypto()
  const formatPrice = useFormatPrice()

  if (!selectedCoin) {
    return <>
      <SkeletonCard/>
    </>;
  }

  return (
    <Card.Root width="320px">
      <Card.Body id={selectedCoin.id} gap="2">
        <Avatar.Root size="lg" shape="rounded">
          <Avatar.Image src={selectedCoin.image} />
          <Avatar.Fallback name={selectedCoin.name} />
        </Avatar.Root>
        <Card.Title mt="2">{selectedCoin.name}</Card.Title>
        <Card.Description className="price" >
          {formatPrice(selectedCoin.current_price)}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  )
}
