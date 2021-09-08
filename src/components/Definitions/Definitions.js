import React from "react";
import "./Definitions.css";

const Definitions = ({ word, meanings, category, themeMode }) => {
  return (
    <div className="meanings">
      <p>
        {meanings[0].origin && (
          <span>
            <b>Origin :</b> <i>{meanings[0].origin}</i>
          </span>
        )}
        <br />
        {meanings[0].phonetic && (
          <span>
            <b>Phonetic :</b> <i>{meanings[0].phonetic}</i>
          </span>
        )}{" "}
      </p>

      {meanings[0] && word && category === "en" && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{
            borderRadius: 10,
            width: "100%",
          }}
          controls
        >
          Your Browser dosen't support audio element
        </audio>
      )}

      {word === "" ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) => (
            <div
              className="speechMean"
              style={{
                backgroundColor: themeMode ? " #282c34 " : "white",
                color: themeMode ? "white" : "black",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  textTransform: "capitalize",
                }}
              >
                <b>{item.partOfSpeech}</b>
              </p>
              {item.definitions.map((def) => (
                <div
                  className="singleMean"
                  style={{
                    borderTop: themeMode
                      ? "2px white solid"
                      : "2px #282c34 solid",
                  }}
                >
                  <span>
                    <b>Meaning : </b> {def.definition}
                  </span>
                  {def.example && (
                    <span>
                      <b>Example : </b>
                      {def.example}
                    </span>
                  )}
                  {def.synonyms.length <= 0 ? (
                    ""
                  ) : (
                    <span>
                      <b>Synonyms : </b>
                      {def.synonyms.map((s) => `${s}, `)}
                    </span>
                  )}
                  {def.antonyms.length <= 0 ? (
                    ""
                  ) : (
                    <span>
                      <b>Antonyms : </b>
                      {def.antonyms.map((a) => `${a}, `)}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))
        )
      )}
    </div>
  );
};

export default Definitions;
