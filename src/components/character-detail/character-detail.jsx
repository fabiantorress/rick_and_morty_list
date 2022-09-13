import * as React from "react";
import "./character-detail.css";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

function CharacterDetail({ character, close, showDialog }) {
  return (
    <div className="character-details-container">
      <Dialog
        isOpen={showDialog}
        onDismiss={close}
        style={{
          height: "620px",
          width: "350px",
          backgroundColor: "black",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <img
          alt="character icon"
          src={`${character.image}`}
          style={{ height: "110px", borderRadius: "20px" }}
        />
        <h2>name</h2>
        <div className="character-detail-item">
          <p style={{ marginLeft: "15px" }}>{character.name}</p>
        </div>
        <h2>status</h2>
        <div className="character-detail-item">
          <p style={{ marginLeft: "15px" }}>{character.status}</p>
        </div>
        <h2>species</h2>
        <div className="character-detail-item">
          <p style={{ marginLeft: "15px" }}>{character.species}</p>
        </div>
        <h2>type</h2>
        <div className="character-detail-item">
          <p style={{ marginLeft: "15px" }}>{character.type}</p>
        </div>
        <h2>gender</h2>
        <div className="character-detail-item">
          <p style={{ marginLeft: "15px" }}>{character.gender}</p>
        </div>
        <button
          className="close-button"
          onClick={close}
          style={{
            height: "40px",
            width: "80px",
            marginTop: "20px",
            backgroundColor: "transparent",
            borderColor: "white",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              fontSize: "15px",
              fontFamily: "revert-layer",
              color: "rgb(165, 198, 243)",
            }}
          >
            Close
          </span>
        </button>
      </Dialog>
    </div>
  );
}
export default CharacterDetail;
