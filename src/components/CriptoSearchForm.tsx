// CriptoSearchForm.tsx
import React, { useState } from 'react';
import { currencies } from '../data';

type CryptoType = 'Bitcoin' | 'Ethereum' | 'Litecoin'; // Puedes agregar más tipos según lo necesites

export default function CriptoSearchForm() {
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
  const [selectedCryptoType, setSelectedCryptoType] = useState<CryptoType>('Bitcoin');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
    setError('');
    // Lógica de búsqueda de criptomonedas aquí
    
    console.log('Moneda seleccionada: ', selectedCurrency);
    console.log('Tipo de criptomoneda: ', selectedCryptoType);
  };

  return (
    <div className="crypto-form-container container">
      <h2>Buscar Criptomoneda</h2>
      <form onSubmit={handleSubmit} className="crypto-search-form">
        <div className="select-container">
          <label htmlFor="currency" className="select-label">
            Seleccione la moneda:
          </label>
          <select
            id="currency"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="crypto-select"
          >
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
            value={selectedCryptoType}
            onChange={(e) => setSelectedCryptoType(e.target.value as CryptoType)}
            className="crypto-select"
          >
            <option value="Bitcoin">Bitcoin</option>
            <option value="Ethereum">Ethereum</option>
            <option value="Litecoin">Litecoin</option>
          </select>
        </div>

        
        <button type="submit" className="crypto-submit">
          Buscar
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
