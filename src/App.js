import React, { useState } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';
import CharacterData from './CharacterData';

/*   function translateUuid(){
    const gekko = "e370fa57-4757-3604-3648-499e1f642d3f";
    const fade = "dade69b4-4f5a-8528-247b-219e5a1facd6";
    const breach = "5f8d3a7f-467b-97f3-062c-13acf203c006";
    const deadlock = "cc8b64c8-4b25-4ff9-6e7f-37b4da43d235";
    const raze = "f94c3b30-42be-e959-889c-5aa313dba261";
    const chamber = "22697a3d-45bf-8dd7-4fec-84a9e28c69d7";
    const kayo = "601dbbe7-43ce-be57-2a40-4abd24953621";
    const skye = "6f2a04ca-43e0-be17-7f36-b3908627744d";
    const cypher = "117ed9e3-49f3-6512-3ccf-0cada7e3823b";
    const sova = "320b2a48-4d9b-a075-30f1-1f93a9b638fa";
    const killjoy = "1e58de9c-4950-5125-93e9-a0aee9f98746";
    const harbor = "95b78ed7-4637-86d9-7e41-71ba8c293152";
    const viper = "707eab51-4836-f488-046a-cda6bf494859";
    const phoenix = "eb93336a-449b-9c1b-0a54-a891f7921d69";
    const astra = "41fb69c1-4189-7b37-f117-bcaf1e96f1bf";
    const brimstone = "9f0d8ba9-4140-b941-57d3-a7ad57c6b417";
    const neon = "bb2a4828-46eb-8cd1-e765-15848195d751";
    const yoru = "7f94d92c-4234-0a36-9646-3a87eb8b5c89";
    const sage = "569fdd95-4d10-43ab-ca70-79becc718b46";
    const reyna = "a3bfb853-43b2-7238-a4f1-ad90e9e46bcc";
    const omen = "8e253930-4c05-31dd-1b6c-968525494517";
    const jett = "add6443a-41bd-e414-f6ad-e58d267f4e95";
  }
*/
function App() {
  const [searchText, setsearchText] = useState("");
  const [characterData, setCharacterData] = useState(null);
  //const API_KEY = "RGAPI-41af0058-a4a5-4974-bb72-f08cbb52e030";



  function searchForCharacter(event) {
    //var APICallString = "https://valorant-api.com/v1/agents/"+searchText;
    const APICallString = "https://valorant-api.com/v1/agents/";
    axios.get(APICallString).then(function (response) {
      // Sucesso
      const characterList = response.data.data.filter((item) =>
        item.displayName.toLowerCase().includes(searchText.toLowerCase())
      );
      const character = characterList.pop();
      setCharacterData(character);
    }).catch(function (error) {
      // Erro
      console.log(error);
    })
  }

  //console.log(characterData);

  return (
    <div className="App">
      <div className="container">
        <h5>Teste de buscador de agente</h5>
        <input type="text" onChange={e => setsearchText(e.target.value)} ></input>
        <button onClick={e => searchForCharacter(e)}>Procurar Valorant</button>
      </div>
      {characterData ?
        <CharacterData data={characterData}/>
        :
        <p>Jogador não encontrado</p>
      }
    </div>
  );
}

export default App;
