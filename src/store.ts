import { create } from "zustand";
import type { ConvertedCurrency, CryptoCurrency, Pair } from "./types";
import { devtools } from "zustand/middleware";
import { convertCurrency, getCryptos } from "./services/CryptoService";

type CryptoStore = {
  CryptoCurrencies: CryptoCurrency[];
  convertedCurrency: ConvertedCurrency;
  fetchCryptos: () => Promise<void>;
  fetchData: ( pair : Pair) => Promise<void>;
  loading: boolean;
};

export const useCriptostore = create<CryptoStore>()(
  devtools((set) => ({
    CryptoCurrencies: [] as CryptoCurrency[],
    convertedCurrency: {
      PRICE: '',
          HIGHDAY: '',
          LOWDAY: '',
          IMAGEURL: '',
          CONVERSIONLASTUPDATE: '',
          CHANGEPCTDAY: '',
    },
    loaading: false,

    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptos();

      set(() => ({
        CryptoCurrencies: cryptoCurrencies || [],
      }));
    },

    fetchData: async (pair) => {
      set( {
        loading: true
      })
      const result = await convertCurrency(pair);
      set(() => ({
        convertedCurrency: result
      }));

      set( {
        loading: false
      })
    }

  }))
);
