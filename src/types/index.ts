import { currencySchema, CryptoCurrencySchema, PairSchema, ConvertedCurrencySchema } from "../schemas/criptoSchema";
import { z } from "zod";

export type Currency = z.infer<typeof currencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencySchema>;
export type Pair = z.infer<typeof PairSchema>;
export type ConvertedCurrency = z.infer<typeof ConvertedCurrencySchema>;