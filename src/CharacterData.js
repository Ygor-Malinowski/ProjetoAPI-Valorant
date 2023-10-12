import React from 'react';

function CharacterData({ data }) {
  return (
    <div style={{
      background: `url("${data.fullPortrait}")`,
    }} className='container-character'>
      <h1>{data.displayName}:</h1>
      <img width="100" height="100" src={data.displayIcon}></img>
      <h3>Habilidades:</h3>
      <div>
        {data.abilities.map(abilities => (
          <div key={abilities.displayName} style={{ borderTop: '2px solid gray', padding: 18 }}>
            <img width="100" height="100" src={abilities.displayIcon}></img>
            <h4>{abilities.displayName}:</h4>
            <p>{abilities.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterData;

