import React, { useEffect, useState } from 'react';

export const Api = () => {
  const [item, setItem] = useState([]);

  const getApiData = async () => {
    const res = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-FT/players`);
    const data = await res.json();
    setItem(data.data.players);
    console.log(data.data.players);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
    <center><h1>Puppy List</h1></center>
      <ol>
        {item.map((singlePuppy, index) => (
          <li key={index}>
            Name : {singlePuppy.name} <br /> Breed : {singlePuppy.breed}
            <br />
           <hr />
          </li>
        ))}
      </ol>
    </>
  );
};
