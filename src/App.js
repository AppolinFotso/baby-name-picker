import logo from "./logo.svg";
import "./App.css";
import babyNames from "./babyNames.json";
import Boys from "./Boys";
import Girls from "./Girls";
import { nanoid } from "nanoid";
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
  const displayNames = sortedBabyNames.map((el) => {
    if (el.sex === "m") {
      return <Boys key={nanoid()} name={el.name} />;
    } else {
      return <Girls key={nanoid()} name={el.name} />;
    }
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <div>{displayNames}</div>
    </div>
  );
}

export default App;
