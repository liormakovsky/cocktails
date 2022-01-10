import React, { useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {

  const {setSearchTerm } = useGlobalContext();


  const search = useRef();

  function searchCocktails() {
    setSearchTerm(search.current.value);
  }

  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text" name="search" id="search" ref={search} onChange={searchCocktails} />
        </div>
      </form>
    </section>

  )
}

export default SearchForm
