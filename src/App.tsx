import React from 'react';
import logo from './logo.png';
import './App.css';
import Tabs from "./components/Tabs"
import Tab from "./components/Tabs/Tab"
import Rooms from "./components/Rooms/Rooms"


function App() {
  const clubRooms = ["frogs", "wallaby", "gecko", "just kill me"];

  return (
    <div className="App">
      <div>
        <>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 style={{ display: "inline" }}>ktoo v1</h1>
        </>
        <Tabs>
          <Tab title="Monday"><Rooms rooms={clubRooms} /></Tab>
          <Tab title="Tuesday"><Rooms rooms={clubRooms} /></Tab>
          <Tab title="Wednesday"><Rooms rooms={clubRooms} /></Tab>
          <Tab title="Thursday"><Rooms rooms={clubRooms} /></Tab>
          <Tab title="Friday"><Rooms rooms={clubRooms} /></Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
