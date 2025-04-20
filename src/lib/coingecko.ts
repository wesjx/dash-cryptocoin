export async function getTopCoins(page: number, currency: string) {

  const howManyCoins: number = 10

  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${howManyCoins}&page=${page}`
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar os dados das criptomoedas.");
  }
  const data = await res.json();

  return data;
}

