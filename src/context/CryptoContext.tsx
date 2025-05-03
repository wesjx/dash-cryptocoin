'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { getTopCoins } from "@/lib/coingecko";
import { Coins } from "@/types/coins";

type CoinDetails = {
  id: string;
  name: string;
  current_price: number;
  image: string;
  high_24h: number;
  low_24h: number;
}


interface CryptoContextType {
  coins: Coins[];
  isLoading: boolean;
  setIsLoading: (value: boolean) => void; 
  selectedCoin: CoinDetails | null;
  setSelectedCoin: (coin: CoinDetails) => void;
  setCurrentPage: (page: number) => void;
  currentPage: number;
  setCurrency: (currency: string) => void;
  currency: string;
}

const CryptoContext = createContext<CryptoContextType | undefined>(undefined);

export const CryptoProvider = ({ children }: { children: React.ReactNode }) => {
  const [coins, setCoins] = useState<Coins[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCoin, setSelectedCoin] = useState<CoinDetails | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [currency, setCurrency] = useState('usd')

  
  useEffect(() => {
    setIsLoading(true);


    getTopCoins(currentPage, currency).then((data) => {
      setCoins(data);
      setIsLoading(false);

      if (data.length > 0) {
        const updatedCoin = data.find((coin: Coins) => coin.id === selectedCoin?.id);

        if (
          updatedCoin &&
          selectedCoin?.id === updatedCoin.id &&
          selectedCoin?.current_price === updatedCoin.current_price
        ) {
          return;
        }

        if (updatedCoin) {
          setSelectedCoin({
            id: updatedCoin.id,
            name: updatedCoin.name,
            current_price: updatedCoin.current_price,
            image: updatedCoin.image,
            high_24h: updatedCoin.high_24h,
            low_24h: updatedCoin.low_24h,
          });
        } else {
          setSelectedCoin({
            id: data[0].id,
            name: data[0].name,
            current_price: data[0].current_price,
            image: data[0].image,
            high_24h: data[0].high_24h,
            low_24h: data[0].low_24h,
          });
        }
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, currency]);

  return (
    <CryptoContext.Provider value={{ coins, isLoading, selectedCoin, setSelectedCoin, setCurrentPage, currentPage, setCurrency, currency, setIsLoading }}>
      {children}
    </CryptoContext.Provider>
  );
};

export const useCrypto = () => {
  const context = useContext(CryptoContext);
  if (!context) throw new Error("useCrypto must be used inside the CryptoProvider");
  return context;
};
