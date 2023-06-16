import logo from "./logo.svg";
import "./App.css";
import babyNames from "./babyNames.json";
//

const sortedBabyNames = [];
const names = babyNames.map((el) => el.name);
names.sort();
for (let i = 0; i < names.length; i++) {
  for (let n = 0; n < babyNames.length; n++) {
    if (names[i] === babyNames[n].name) {
      sortedBabyNames.push(babyNames[n]);
    }
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
