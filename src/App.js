import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Definitions from "./components/Definitions/Definitions";
import { Container, Switch, withStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import axios from "axios";
import "./App.css";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState();
  const [themeMode, setThemeMode] = useState(false);

  const ToggleMode = withStyles({
    switchBase: {
      color: grey[300],
      "&$checked": {
        color: grey[500],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(meanings);

  useEffect(() => {
    dictionaryApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word, category]);

  return (
    <div
      className="App"
      style={{
        background: themeMode ? "white" : "#282c34",
        height: "100vh",
        color: themeMode ? "#282c34" : "white",
        transition: "all 0.5s linear",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{themeMode ? "Dark" : "Light"} Mode</span>
          <ToggleMode
            checked={themeMode}
            onChange={() => setThemeMode(!themeMode)}
          />
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          themeMode={themeMode}
        />
        {meanings.length <= 0 ? (
          ""
        ) : (
          <Definitions
            word={word}
            meanings={meanings}
            category={category}
            themeMode={themeMode}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
