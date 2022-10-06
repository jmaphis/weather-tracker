import React from "react";

function Header(props) {

    function toggleDarkMode() {
        props.setDarkMode(
            prevMode => !prevMode
        )
    }

    return (
        <div
            className={props.darkMode ? "headerDark" : "headerLight"}
        >
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