import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ strDrinkThumb, strDrink, strGlass, strAlcoholic }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={strDrinkThumb} alt={strDrink}></img>
      </div>
      <div className="cocktail-footer">
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strAlcoholic}</p>
        <a className="btn btn-primary btn-details" href="/cocktail/17222">details</a>
      </div>
    </article>
  )
}

export default Cocktail
