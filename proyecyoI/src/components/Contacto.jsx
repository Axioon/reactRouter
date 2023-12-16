import React from 'react'
import { Container, Form } from 'react-bootstrap'
const Contacto = () => {


  return (
    
    <div >

    <div className='text-center'>

        <h1> Cuentanos, ¿en que te podemos ayudar? </h1>
    </div>

<Container>
<Form className=''>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Dirección de Correo Eléctronico</Form.Label>
        <Form.Control type="email" placeholder="nombre@ejemplo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
<div className='text-center' >

<button> Enviar</button>
</div>
      
    </Form>
    


</Container>
   


    </div>
    
    
 
  )
}

export default Contacto