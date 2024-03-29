import React from 'react'
import { visionproduct } from '../../static'

function Vision() {
  let visionitem = visionproduct?.map(el=>(
  <div  key={el.id} className="vision" style={{background:`url(${el.bg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
        <div className="container">
          <div className="vision__wrapper" >
              <img className='vision__img' src={el.img} alt="" />
              <p className="vision__title">{el.title}</p>
          </div>
        </div>
      </div>
  ))
  return (
    <div className='Vision'>
      {visionitem}
    </div>
  )
}

export default Vision