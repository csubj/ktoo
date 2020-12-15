import logo from './logo.png';
import './App.css';
import Tabs from "./components/Tabs";
import Rooms from "./components/Rooms";

function App() {
  return (
    <div className="App">
      <div>
      <img src={logo} className="App-logo" alt="logo" />
        <h1>ktoo v1</h1>
        <Tabs>
          <div label="Monday">
            <Rooms>
              <div label="Frogs">
              </div>
              <div label="Wallaby">
              </div>
            </Rooms>
          </div>
          <div label="Tuesday">
          <Rooms>
              <div label="Frogs">
              </div>
              <div label="Wallaby">
              </div>
            </Rooms>
        </div>
          <div label="Wednesday">
          <Rooms>
              <div label="Frogs">
              </div>
              <div label="Wallaby">
              </div>
            </Rooms>
        </div>
          <div label="Thursday">
          <Rooms>
              <div label="Frogs">
              </div>
              <div label="Wallaby">
              </div>
            </Rooms>
        </div>
          <div label="Friday">
          <Rooms>
              <div label="Frogs">
              </div>
              <div label="Wallaby">
              </div>
            </Rooms>
        </div>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
