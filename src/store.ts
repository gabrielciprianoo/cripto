import { create } from "zustand";
import type { ConvertedCurrency, CryptoCurrency, Pair } from "./types";
import { devtools } from "zustand/middleware";
import { convertCurrency, getCryptos } from "./services/CryptoService";

type CryptoStore = {
  CryptoCurrencies: CryptoCurrency[];
  convertedCurrency: ConvertedCurrency;
  fetchCryptos: () => Promise<void>;
  fetchData: ( pair : Pair) => Promise<void>;
};

export const useCriptostore = create<CryptoStore>()(
  devtools((set) => ({
    CryptoCurrencies: [] as CryptoCurrency[],
    convertedCurrency: {} as ConvertedCurrency,

    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptos();

      set(() => ({
        CryptoCurrencies: cryptoCurrencies || [],
      }));
    },

    fetchData: async (pair) => {
      const result = await convertCurrency(pair);
      set(() => ({
        convertedCurrency: result
      }));
    }

  }))
);
