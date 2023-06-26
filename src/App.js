import logo from "./logo.svg";
import "./App.css";
import babyNames from "./babyNames.json";
import Boys from "./Boys";
import Girls from "./Girls";
import SearchName from "./SearchAName";
import FavouriteName from "./FavouriteName";
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
  const [favouriteName, setFavouriteName] = useState("");
  function handleOnChange(value) {
    if (value === "") {
      setBabiesNAme(sortedBabyNames);
    } else {
      const newNameList = sortedBabyNames.filter((el) =>
        el.name.toLowerCase().includes(value.toLowerCase())
      );
      setBabiesNAme(newNameList);
    }
  }
  //
  function handleClick(value) {
    console.log(value);

    const favoutite = babiesName.filter((el) => el.name === value);

    setFavouriteName(favoutite);
    const newNameList = babiesName.filter((el) => el.name !== value);
    setBabiesNAme(newNameList);
  }
  const displayNames = babiesName.map((el) => {
    if (el.sex === "m") {
      return <Boys key={nanoid()} name={el.name} onClick={handleClick} />;
    } else {
      return <Girls key={nanoid()} name={el.name} onClick={handleClick} />;
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
      <div className="favouriteContainer">
        <FavouriteName favourite={favouriteName} />
      </div>
      <div className="wrap">{displayNames}</div>
    </div>
  );
}

export default App;
