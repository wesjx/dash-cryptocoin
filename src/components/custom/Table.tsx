"use client"
import { useCrypto } from "@/context/CryptoContext";
import { useFormatPrice } from "@/hooks/useFormatPrice";
import { Table } from "@chakra-ui/react"
import Image from 'next/image'
import SkeletonTable from "../skeleton/SkeletonTable";


export default function TableMain() {

  const formatPrice = useFormatPrice()
  
  const { coins, isLoading, setSelectedCoin, currentPage } = useCrypto();
  
  const handleRowClick = (
    coinId: string,
    coinName: string,
    coinPrice: number,
    coinImage: string,
    high24: number,
    low24: number) => {
    const coinDetails = {
      id: coinId,
      name: coinName,
      current_price: coinPrice,
      image: coinImage,
      high_24h: high24,
      low_24h: low24
    };
  
    setSelectedCoin(coinDetails);
  };

  function position(index: number): number {
    const perPage: number = 10
    return (currentPage - 1) * perPage + index + 1;
  }
  

  if (isLoading) return <SkeletonTable/>

  return (
    <Table.Root className="table-coins" size="sm" interactive>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Pos.</Table.ColumnHeader>
          <Table.ColumnHeader>Coin</Table.ColumnHeader>
          <Table.ColumnHeader>Symbol</Table.ColumnHeader>
          <Table.ColumnHeader>Price</Table.ColumnHeader>
          <Table.ColumnHeader>Higher 24hrs</Table.ColumnHeader>
          <Table.ColumnHeader>Lower 24hrs</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {coins.map((coin, index: number = 1) => (
          <Table.Row
            cursor="pointer"
            onClick={() => handleRowClick(
              coin.id,
              coin.name,
              coin.current_price,
              coin.image,
              coin.high_24h,
              coin.low_24h)} 
              key={coin.id}>
            <Table.Cell>{position(index)}</Table.Cell>
            <Table.Cell>{coin.name}</Table.Cell>
            <Table.Cell>
              <div className="symbol-crypto">
                <Image
                  src={coin.image}
                  alt="Image of the crypto."
                  width={20}
                  height={20}
                />
                {coin.symbol}
              </div>
            </Table.Cell>

            <Table.Cell>{formatPrice(coin.current_price) }</Table.Cell>
            <Table.Cell>{formatPrice(coin.high_24h) }</Table.Cell>
            <Table.Cell>{formatPrice(coin.low_24h) }</Table.Cell>
          </Table.Row>

        ))}
      </Table.Body>s
    </Table.Root>
  )
}

