import axios from "axios";
import { ConvertedCurrencySchema, CryptoCurrenciesSchema } from "../schemas/criptoSchema";
import type { Pair } from "../types";

export async function getCryptos() {
  const url = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`;

  const {
    data: { Data },
  } = await axios(url);
  const result = CryptoCurrenciesSchema.safeParse(Data);

  if (result.success) {
    return result.data;
  }
}

export async function convertCurrency( pair : Pair ) {

  const { currency, cryptoCurrency } = pair;
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`;

  const { data : { DISPLAY } } = await axios(url);
  const response = DISPLAY[cryptoCurrency][currency];
  const result = ConvertedCurrencySchema.safeParse(response)
  
  if(result.success){
    return result.data;
  }
}