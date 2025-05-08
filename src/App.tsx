import { useEffect } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm";
import { useCriptostore } from "./store";
import CryptoPriceCard from "./components/CryptoPriceCard";

function App() {

  const { fetchCryptos } = useCriptostore();

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
           <CryptoPriceCard/>
        </div>

      </div>
    </>
  );
}

export default App;
