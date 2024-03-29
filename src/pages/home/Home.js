import React from 'react'
import "./Home.css"
function Home() {
  return (
    <div className='home'>
        <div className="container">
          <div className="home__wrapper">
             <h1 className="home__title">
                MacBook Air
             </h1>
             <p className="home__text">Lean.Mean.M3.machine</p>
             <div className="form__wrapper">
              <button className="home__btn">Learn more</button>
              <button className="home__btn">Buy</button>
             </div>
          </div>
        </div>
    </div>
  )
}

export default Home