import { z } from 'zod';

export const currencySchema = z.object({
    code: z.string(),
    name: z.string(),
})

export const CryptoCurrencySchema = z.object({
    CoinInfo: z.object({
        FullName: z.string(),
        Internal: z.string(),
    })
})

export const CryptoCurrenciesSchema = z.array(CryptoCurrencySchema);

export const PairSchema = z.object({
    currency: z.string(),
    cryptoCurrency: z.string(),
})