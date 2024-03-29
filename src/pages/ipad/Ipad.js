import React from 'react'
import { ipadproduct } from '../../static'

function Ipad() {
  let ipaditem = ipadproduct?.map(el=>(
     <div key={el.id} className="mac">
         <div className="container">
            <div className="mac__wrapper">
              
                 <ul className="mac__list">
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
  ))
  return (
    <div className='ipad'>
      {ipaditem}
    </div>
  )
}

export default Ipad