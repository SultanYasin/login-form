import React, { useContext } from "react";
import { CreateThemeContext } from "./ThemeContext";

const Header = () => {
  let style = {};
  const importedCreateThemeContext = useContext(CreateThemeContext);

  if (importedCreateThemeContext.stateTheme === "dark") {
    style = { background: "blue", color: "#fff" };
  } else {
    style = { background: "#fff", color: "blue" };
  }

  return (
    <div>
      <div style={style}>
        <h4>Header</h4> <hr />
      </div>
      <br />
      <p>{importedCreateThemeContext.stateTheme}</p>
      <button
        style={{ marginBottom: "15px" }}
        onClick={importedCreateThemeContext.toggleThemeFunction}
      >
        Toggle bg
      </button>
    </div>
  );
};

export default Header;
