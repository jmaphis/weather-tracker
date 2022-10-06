import React from "react";
import Header from "./Header";
import Main from "./Main";

function App() {

  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div className="App">
      <Header 
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      />
      <Main 
        darkMode={darkMode} 
      />
    </div>
  );
}

export default App;
