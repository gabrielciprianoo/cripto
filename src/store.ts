import axios from "axios";
import { create } from "zustand";
import { CryptoCurrenciesSchema } from "./schemas/criptoSchema";
import type { CryptoCurrency } from "./types";
import { devtools } from "zustand/middleware";

type CryptoStore = {
  CryptoCurrencies: CryptoCurrency[];
  fetchCryptos: () => Promise<void>;
};

async function getCryptos() {
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

  const {
    data: { Data },
  } = await axios(url);
  const result = CryptoCurrenciesSchema.safeParse(Data);

  if (result.success) {
    return result.data;
  }
}

export const useCriptostore = create<CryptoStore>()(
  devtools((set) => ({
    CryptoCurrencies: [],
    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptos();

      set(() => ({
        CryptoCurrencies: cryptoCurrencies || [],
      }));
    },
  }))
);
