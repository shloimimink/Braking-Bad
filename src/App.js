import React, {useEffect, useState} from "react";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import axios from "axios";

import './App.css';


const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setItems(res.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className="container">
    <Header/>
    <Search getQuery={(q) => setQuery(q)}/>
    <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
