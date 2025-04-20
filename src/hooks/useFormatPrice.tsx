import { useCrypto } from "@/context/CryptoContext";

export function useFormatPrice() {
  const { currency } = useCrypto();

  let currentCurrencyAndLanguage: string = "en-US"
  let currentCurrency: string = "USD"


  if (currency === "eur") {
    currentCurrencyAndLanguage = "en-IE";
    currentCurrency = "EUR"
  } else if (currency === "usd") {
    currentCurrencyAndLanguage = "en-US";
    currentCurrency = "USD"
  } else if (currency === "brl") {
    currentCurrencyAndLanguage = "pt-BR";
    currentCurrency = "BRL"
  }


  return (price: number) => {
    return price.toLocaleString(`${currentCurrencyAndLanguage}`, {
      style: "currency",
      currency: `${currentCurrency}`,
      minimumFractionDigits: 2,
    });
  };
}
