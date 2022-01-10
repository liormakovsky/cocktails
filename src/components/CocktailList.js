import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {

  const { cocktails } = useGlobalContext();
  

  if (cocktails == null) {
    return (
      <>
        <Loading />
      </>
    )
  }

  if (cocktails.length === 0) {
    return (
      <h2 className="section-title">No Cocktails Matched Your Search Criteria</h2>
    )
  }

  return (
    < section className="section" >
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((cocktail) => {
          return (
            <Cocktail {...cocktail} key={cocktail.id} />
          )
        })}
      </div>
    </section >
  )
}

export default CocktailList
