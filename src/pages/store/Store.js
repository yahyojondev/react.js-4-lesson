import React from 'react'
import {storeproduct} from "../../static"

function Store() {
  let storeitem = storeproduct?.map(el => (
         <div key={el.id} className="store">
      <div className="container">
         <div className="store__wrapper">
            <div className="store__top">
                <h1 className="store__title">{el.title}</h1>
                <ul className="store__complex">
                  <li className="store__complex__item"><img src={el.heroimg} alt="" className="complex__img" /><div className="complex__links">
                    <p className="complex__text">{el.text}</p>
                    <a href="#" className="complex__link">{el.link}</a>
                    </div>
                  </li>
                  <li className="store__complex__item"><img src={el.heroimg} alt="" className="complex__img" /><div className="complex__links">
                    <p className="complex__text">{el.text2}</p>
                    <a href="#" className="complex__link">{el.link2}</a>
                    </div>
                  </li>
                </ul>
            </div>
            <div className="store__bottom">
              <ul className="store__list">
                <li className="store__item">
                  <img src={el.img1} alt="" className="store__img" />
                  <p className="store__text">{el.name}</p>
                </li>
                <li className="store__item">
                  <img src={el.img2} alt="" className="store__img" />
                  <p className="store__text">{el.name2}</p>
                </li>
                <li className="store__item">
                  <img src={el.img3} alt="" className="store__img" />
                  <p className="store__text">{el.name3}</p>
                </li>
                <li className="store__item">
                  <img src={el.img4} alt="" className="store__img" />
                  <p className="store__text">{el.name4}</p>
                </li>
                <li className="store__item">
                  <img src={el.img5} alt="" className="store__img" />
                  <p className="store__text">{el.name5}</p>
                </li>
                <li className="store__item">
                  <img src={el.img6} alt="" className="store__img" />
                  <p className="store__text">{el.name6}</p>
                </li>
                <li className="store__item">
                  <img src={el.img7} alt="" className="store__img" />
                  <p className="store__text">{el.name7}</p>
                </li>
                <li className="store__item">
                  <img src={el.img8} alt="" className="store__img" />
                  <p className="store__text">{el.name8}</p>
                </li>
                <li className="store__item">
                  <img src={el.img9} alt="" className="store__img" />
                  <p className="store__text">{el.name9}</p>
                </li>
              </ul>
            </div>
         </div>
      </div>
    </div>
  ))
  return (
   <div className="Store">
   {storeitem}
   </div>
  )
}

export default Store