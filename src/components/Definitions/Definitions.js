import React from "react";
import "./Definitions.css";

const Definitions = ({ word, meanings, category }) => {
  return (
    <div className="meanings">
      {word === "" ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
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
                {def.synonyms && (
                  <span>
                    <b>Synonyms : </b>
                    {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
                {def.antonyms && (
                  <span>
                    <b>Antonyms : </b>
                    {def.antonyms.map((a) => `${a}, `)}
                  </span>
                )}
                <hr />
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
