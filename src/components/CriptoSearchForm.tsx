
import { currencies } from '../data';
import { useCriptostore } from '../store';

export default function CriptoSearchForm() {

  const { CryptoCurrencies } = useCriptostore();
  return (
    <>
      <h2>Buscar Criptomoneda</h2>
      <form  className="crypto-search-form">
        <div className="select-container">
          <label htmlFor="currency" className="select-label">
            Seleccione la moneda:
          </label>
          <select
            id="currency"
            className="crypto-select"
          >
            <option value="">-- Seleccione una moneda --</option>
            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.name}
              </option>
            ))}
          </select>
        </div>

        <div className="select-container">
          <label htmlFor="cryptoType" className="select-label">
            Tipo de Criptomoneda:
          </label>
          <select
            id="cryptoType"
            className="crypto-select"
          >
            <option value="">-- Seleccione el tipo de cryptomoneda --</option>
            {CryptoCurrencies.map(cryptoCurrency => {
              const { CoinInfo: { Internal, FullName } } = cryptoCurrency;
              return <option key={FullName} value={Internal}>{FullName}</option>;
            })}
          </select>
        </div>

        
        <button type="submit" className="crypto-submit">
          Buscar
        </button>
      </form>
      
    </>
  );

}