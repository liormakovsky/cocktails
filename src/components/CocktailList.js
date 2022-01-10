import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {

  const { cocktails } = useGlobalContext();

  if (cocktails.length === 0) {
    return (
      <>
        <Loading />
      </>
    )
  }

  if (cocktails.drinks == null) {
    return (
      <h2 className="section-title">No Cocktails Matched Your Search Criteria</h2>
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
