import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import axios from "axios";
import { Container } from "@material-ui/core";
import "./App.css";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState();

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

  console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <div
      className="App"
      style={{ background: "#282c34", height: "100vh", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
      </Container>
    </div>
  );
}

export default App;
