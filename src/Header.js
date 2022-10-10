import React from "react";

function Header(props) {
  function toggleDarkMode() {
    const currentMode = localStorage.getItem("zipMode");
    if (currentMode === "light") {
      localStorage.setItem("zipMode", "dark");
    } else {
      localStorage.setItem("zipMode", "light");
    }
    props.setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={props.darkMode ? "headerDark" : "headerLight"}>
      <h1>Get weather by zip code</h1>
      <form className="darkModeCheck">
        <input
          type="checkbox"
          id="darkMode"
          checked={props.darkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="darkMode">Dark Mode</label>
      </form>
    </div>
  );
}

export default Header;
