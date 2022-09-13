import * as React from "react";
import "./list-container.css";
import * as axios from "axios";
import eye_icon from "../../assets/eye_icon.svg";
import CharacterDetail from "../character-detail/character-detail";
import SearchBox from "../search-box/search-box";
import Spinner from "../spinner/spinner";

function ListContainer() {
  const [characters, setCharacters] = React.useState();
  const [query, setQuery] = React.useState(null);
  const [status, setStatus] = React.useState("resolved");

  const isLoading = status === "loading";
  const isResolved = status === "resolved";
  const isRejected = status === "rejected";

  const [showDialog, setShowDialog] = React.useState(false);
  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);

  const [characterModal, setCharacterModal] = React.useState(null);

  React.useEffect(() => {
    async function getCharacters() {
      const arrayOfCharacters = [];
      setStatus('loading')
      await axios
        .get("https://rickandmortyapi.com/api/character", {
          params: { name: query },
        })
        .then((response) => {
          setStatus("resolved");
          arrayOfCharacters.push(response.data.results);
          setCharacters(arrayOfCharacters);
        })
        .catch((error) => {
          setStatus("rejected");
          if (error.request.status === 404) {
            return console.log(error.request.status);
          }
          console.log(error.message);
        });
    }
    getCharacters();
  }, [query]);

  function handlerChange(event) {
    setStatus('loading')
    setTimeout(() => {
      setQuery(event.target.value);
    }, 1000);
  }

  return (
    <div style={{justifyContent: "center", alignItems:"center"}}>
      <div className="list-title">
        <h1>Rick and Morty Characters</h1>
      </div>
      <SearchBox handlerChange={handlerChange} />
      {isLoading ? (
        <Spinner />
      ) : isResolved ? (
        <div className="list-table-container">
          <table className="list-table" cellSpacing={0} cellPadding={0}>
            <thead className="head-table-container">
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Specie</th>
                <th>...</th>
              </tr>
            </thead>
            {characters
              ? characters[0].slice(0, 10).map((character) => {
                  return (
                    <tr
                      className="list-table-item"
                      id={character.id}
                      key={character.id}
                    >
                      <td>{character.name}</td>
                      <td>{character.status}</td>
                      <td>{character.species}</td>
                      <td>...</td>
                      <td>
                        <div
                          className="eye_icon"
                          onClick={() => setCharacterModal(character)}
                        >
                          <img
                            src={eye_icon}
                            alt="eye icon"
                            onClick={openDialog}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })
              : null}
            {showDialog ? (
              <CharacterDetail
                character={characterModal}
                close={closeDialog}
                showDialog={showDialog}
              />
            ) : null}
          </table>
        </div>
      ) : isRejected ? (
        <div className="error-container">
          Character not found, please search again!
        </div>
      ) : null}
    </div>
  );
}

export default ListContainer;
