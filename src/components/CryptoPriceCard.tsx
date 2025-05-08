import { useCriptostore } from "../store"


export default function CryptoPriceCard() {
    const { convertedCurrency } = useCriptostore();

    const { IMAGEURL, PRICE, HIGHDAY, LOWDAY, CONVERSIONLASTUPDATE, CHANGEPCTDAY } = convertedCurrency;

    const isPositive = parseFloat(CHANGEPCTDAY) >= 0;
    const imageUrl = `https://www.cryptocompare.com${IMAGEURL}`

  return (
    <div className="crypto-card">
      <div className="crypto-header">
        <img src={imageUrl} alt='icon currency' className="crypto-icon" />
        <div>
          <p className="crypto-update">Actualizado: {CONVERSIONLASTUPDATE}</p>
        </div>
      </div>

      <div className="crypto-price">{PRICE}</div>
      <div className={`crypto-change ${isPositive ? 'positive' : 'negative'}`}>
        {isPositive ? '+' : ''}{CHANGEPCTDAY}% hoy
      </div>

      <div className="crypto-range">
        <div>
          <span>Máximo día:</span>
          <strong>{HIGHDAY}</strong>
        </div>
        <div>
          <span>Mínimo día:</span>
          <strong>{LOWDAY}</strong>
        </div>
      </div>
    </div>
  )
}
