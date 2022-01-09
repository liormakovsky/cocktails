import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  return (
    <section className="section cocktail-section">
      <a className="btn btn-primary" href="/">back home</a>
      <h2 className="section-title">A1</h2>
      <div className="drink">
        <img src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg" alt="A1"></img>
        <div class="drink-info">
          <p><span className="drink-data">name :</span> A1</p>
          <p><span className="drink-data">category :</span> Cocktail</p>
          <p><span className="drink-data">info :</span> Alcoholic</p>
          <p><span className="drink-data">glass :</span> Cocktail glass</p>
          <p><span className="drink-data">instructons :</span> Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.</p>
          <p><span className="drink-data">ingredients :</span><span> Gin</span><span> Grand Marnier</span><span> Lemon Juice</span><span> Grenadine</span></p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
