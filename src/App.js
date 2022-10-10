import React from "react";
import Header from "./Header";
import Main from "./Main";

function App() {
  var startMode = localStorage.getItem("zipMode");
  if (!startMode) {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      startMode = "dark";
    }
  }
  const [darkMode, setDarkMode] = React.useState(startMode === "dark");

  return (
    <div className="App">
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
