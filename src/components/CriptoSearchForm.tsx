
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { currencies } from '../data';
import { useCriptostore } from '../store';
import type { Pair } from '../types';


export default function CriptoSearchForm() {

  const { CryptoCurrencies, fetchData } = useCriptostore();
  const [pair, setPair] = useState<Pair>({
    currency: '',
    cryptoCurrency: ''
  });

  const [error, setError] = useState<string>('');

  const handleChange = ( e : ChangeEvent<HTMLSelectElement> ) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmmit = ( e : FormEvent<HTMLFormElement> ) => {
     e.preventDefault();

      if(Object.values(pair).includes('')){
        setError('Selecciona la moneda y la criptomoneda a convertir');
        setTimeout(() => {
          setError('');
        }, 4000);
        return;
      }

      fetchData(pair);
      
  }

  
  return (
    <>
      <h2>Buscar Criptomoneda</h2>
      <form  className="crypto-search-form" onSubmit={handleSubmmit}>
        <div className="select-container">
          <label htmlFor="currency" className="select-label">
            Seleccione la moneda:
          </label>
          <select
            id="currency"
            name="currency"
            className="crypto-select"
            onChange={handleChange}
            value={pair.currency}
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
          <label htmlFor="cryptoCurrency" className="select-label">
            Tipo de Criptomoneda:
          </label>
          <select
            id="cryptoCurrency"
            name="cryptoCurrency"
            className="crypto-select"
            onChange={handleChange}
            value={pair.cryptoCurrency}
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

      { error && <p className='error-message'>{error}</p>}
      
    </>
  );

}