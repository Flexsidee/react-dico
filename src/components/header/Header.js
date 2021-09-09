import React from "react";
import {
  TextField,
  createTheme,
  ThemeProvider,
  MenuItem,
} from "@material-ui/core";
import categories from "../../data/category";
import "./Header.css";

const Header = ({ category, setCategory, word, setWord, themeMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: themeMode ? "#000" : "#fff",
      },
      type: themeMode ? "light" : "dark",
    },
  });

  const handleLanguageChange = (language) => {
    setCategory(language);
    setWord("");
  };

  return (
    <div className="header">
      <span className="title">{word ? word : "Dictionary App"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            select
            label="Select Language"
            value={category}
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="standard-basic"
            className="search"
            label="Search word "
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
