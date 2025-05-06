import { currencySchema, CryptoCurrencySchema } from "../schemas/criptoSchema";
import { z } from "zod";

export type Currency = z.infer<typeof currencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencySchema>