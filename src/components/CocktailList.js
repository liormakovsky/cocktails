import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {

  const cocktails = useGlobalContext();

  if (cocktails.length === 0) {
    return (
      <section className="section">
        <h2 className="section-title">cocktails</h2>
        <div className="cocktails-center">
          <Loading />
        </div>
      </section>
    )
  }

  if (cocktails.drinks == null) {
    return (
      <section className="section">
        <h2 className="section-title">cocktails</h2>
        <div className="cocktails-center">
          <h1>No Cocktails Matched Your Search Criteria</h1>
        </div>
      </section>
    )
  }

  return (
    < section className="section" >
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.drinks.map((cocktail) => {
          return (
            <Cocktail {...cocktail} key={cocktail.idDrink} />
          )
        })}
      </div>
    </section >
  )
}

export default CocktailList
