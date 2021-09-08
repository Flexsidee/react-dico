import React from "react";
import "./Definitions.css";

const Definitions = ({ word, meanings, category }) => {
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
          src={meanings[0].phonetics[0].audio}
          style={{
            borderRadius: 10,
            backgroundColor: "#fff",
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
            <div className="speechMean">
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
                <div className="singleMean">
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
