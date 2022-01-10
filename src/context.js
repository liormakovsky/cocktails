import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()


const AppProvider = ({ children }) => {

  const [cocktails, setCocktails] = useState([]);

  const [searchTerm, setSearchTerm] = useState('a');

  const fetchCocktails = async () => {
    try {
      const response = await fetch(url + searchTerm);
      const cocktails = await response.json();
      setCocktails(cocktails);
    } catch (error) {

      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, [])

  return <AppContext.Provider value={cocktails}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
