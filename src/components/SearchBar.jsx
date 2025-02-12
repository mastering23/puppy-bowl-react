import React, { useState, useEffect } from 'react';

export const SearchBar = () => {
  const [search, setSearch] = useState('');  
  const [storeData, setStoreData] = useState([]); 
  const [filteredData, setFilteredData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2501-FTB-ET-WEB-FT/players');
      const result = await res.json();
      setStoreData(result.data.players);  
      setFilteredData(result.data.players);  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData(); 
  }, []);

  
  const searchKick = (event) => {
    const query = event.target.value.toLowerCase();
    setSearch(query);

   
    const filteredResults = storeData.filter(item => item.name.toLowerCase().includes(query));
    setFilteredData(filteredResults);  
  };

  return (
    <>
      <h1>SEARCH BAR COMPONENT IS WORKING</h1>
      Search:
      <input 
        type="search"
        placeholder="Search..." 
        value={search}
        onChange={searchKick}  
      />
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li>  
        ))}
      </ul>
      <br />
      <br />
    </>
  );
};
