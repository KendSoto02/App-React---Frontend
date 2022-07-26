import React, { useState, useEffect } from "react";
import { ActionCableConsumer } from 'react-actioncable-provider';
import List from "../pages/List";
import WithLoadingList from "../components/WithLoadingList";
import { getFetch } from "../components/FetchMethods"

// numeros.forEach(function() {
//     // código
// });
const Home = () => {

  const LoadingList = WithLoadingList(List);

	const [room, setRoom] = useState([])
  const [appStateLoading, setAppStateLoading] = useState(false);
  const [appStateObject, setAppStateObject] = useState(null);

  useEffect(() => {
      setAppStateLoading(true);
      getFetch("rooms").then(val => setAppStateObject(val))
      setAppStateLoading(false);
      
  }, [setAppStateObject, setAppStateLoading])

  const handleReceived = (message) => {
    setAppStateLoading(true);
    getFetch("rooms").then(val => setAppStateObject(val))
    setAppStateLoading(false);
    setRoom(message)
  }

  return (
    <div className="App">
      <header className="App-header">
        <ActionCableConsumer channel={{ channel: 'RoomsChannel' }} onReceived={handleReceived}>{room.name}</ActionCableConsumer>
      </header>
      <LoadingList isLoading={appStateLoading} contents={appStateObject} />
    </div>
  );
}

export default Home;