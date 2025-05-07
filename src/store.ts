import { create } from "zustand";
import type { CryptoCurrency } from "./types";
import { devtools } from "zustand/middleware";
import { getCryptos } from "./services/CryptoService";

type CryptoStore = {
  CryptoCurrencies: CryptoCurrency[];
  fetchCryptos: () => Promise<void>;
};



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
