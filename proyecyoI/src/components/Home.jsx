import React from 'react'
import Pasteles from '../assets/imgs/Pasteles.jpg'
const Home = () => {
  return (
    <div>
        <div className='text-center'>

            <h1>Bienvenido al Happy Cake</h1>
            <h5>El lugar de los pasteles felices</h5>
        </div>
<div className='d-flex justify-content-center'>

<img src={Pasteles} alt="Descripción de la imagen" />
</div>


    </div>
  )
}

export default Home