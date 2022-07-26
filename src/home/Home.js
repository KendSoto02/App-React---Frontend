import React, { useState, useEffect } from "react";
import List from "../pages/List";
import WithLoadingList from "../components/WithLoadingList";
import { getFetch } from "../components/FetchMethods"
import '../App.css';
import FormState from "../components/FormState";

// numeros.forEach(function() {
//     // código
// });
const Home = () => {

  const LoadingList = WithLoadingList(List);

	const [room, setRoom] = useState([])
  const [appStateLoading, setAppStateLoading] = useState(false);
  const [appStateObject, setAppStateObject] = useState(null);

  const [refresh, setRefresh] = useState(true);
  useEffect(() => {
    if (refresh) {
      setAppStateLoading(true);
      getFetch("orders").then(val => setAppStateObject(val))
      setAppStateLoading(false);
      setRefresh(false);
    }
      
  }, [setAppStateObject, setAppStateLoading, refresh])


      return (
        <div className="App">
          <h1 className="titulo-pedidos">Pedidos</h1>
          
          <LoadingList isLoading={appStateLoading} contents={appStateObject} />
          <FormState />
        </div>
      )
  
  
}

export default Home;