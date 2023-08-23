import React from 'react'
// import heroImage  from "../../images/data.json"
// import {heroImage} from "./home/superuser/Desktop/mi-store-clone/src/images/heroImg.webp"
const heroImage = <img src ="/home/superuser/Desktop/mi-store-clone/src/images/heroImg.webp" alt='img'></img>
const hero = () => {

  return (
    <div className='heroImg'>{heroImage}
   
     </div>
  )
}

export default hero