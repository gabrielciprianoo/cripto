import axios from "axios";
import { CryptoCurrenciesSchema } from "../schemas/criptoSchema";

export async function getCryptos() {
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

  const {
    data: { Data },
  } = await axios(url);
  const result = CryptoCurrenciesSchema.safeParse(Data);

  if (result.success) {
    return result.data;
  }
}