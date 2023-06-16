import logo from "./logo.svg";
import "./App.css";
import babyNames from "./babyNames.json";
import Boys from "./Boys";
import Girls from "./Girls";
import SearchName from "./SearchAName";
import { nanoid } from "nanoid";
import { useState } from "react";
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
  const [babiesName, setBabiesNAme] = useState(sortedBabyNames);
  function handleOnChange(value) {
    if (value === "") {
      setBabiesNAme(sortedBabyNames);
    } else {
      const newNameList = sortedBabyNames.map((el) => {
        if (el.name.toLowerCase().includes(value.toLowerCase())) {
          return el;
        }
      });
      setBabiesNAme(newNameList);
    }
  }
  const displayNames = babiesName.map((el) => {
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
        <p>Bay Name Picker App</p>
      </header>
      <div>
        <SearchName getInput={handleOnChange} />
      </div>
      <div className="wrap">{displayNames}</div>
    </div>
  );
}

export default App;
