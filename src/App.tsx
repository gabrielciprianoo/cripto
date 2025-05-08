import { useEffect, useMemo } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm";
import { useCriptostore } from "./store";
import CryptoPriceCard from "./components/CryptoPriceCard";
import Spinner from "./components/Spinner";

function App() {

  const { fetchCryptos, loading, convertedCurrency } = useCriptostore();
  const hasResult = useMemo(()=> !Object.values(convertedCurrency).includes(''), [convertedCurrency]);


  useEffect( ()=>{
    fetchCryptos();
  },[fetchCryptos] )
  
  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>

        <div className="crypto-form-container">
           <CriptoSearchForm/>
           { loading ? <Spinner/> : hasResult && <CryptoPriceCard/>}
           
        </div>

      </div>
    </>
  );
}

export default App;
