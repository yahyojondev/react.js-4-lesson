import React from 'react'
import "./Home.css"
import {home} from "../../static"
function Home() {
  let productItems = home?.map(el => (
    <div key={el.id} className='home'style={{background:`url(${el.bg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
        <div className="container">
        <div key={el.id} className="home__wrapper" >
              <h1 className="home__title">
            {el.title}
             </h1>
             <p className="home__text">{el.text}</p>
             <div className="form__wrapper">
              <button className="home__btn">{el.link}</button>
              <button className="home__btn">{el.link1}</button>
             </div>
          </div>
        </div>
    </div>
  ))
  return (
    <div className="Home">
        {productItems}
    </div>
  )
}

export default Home