import React from 'react'
import background from '../assets/woman-3040029_1920.jpg'
import {useNavigate} from "react-router-dom"

const LandingPage = () => {

  const navigate = useNavigate();

  return (
    <div className='img-fluid' style={{ backgroundImage: `url(${background})` , height:"100vh", width:"100", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
      
      <div className='d-flex justify-content-center flex-direction-column' style={{paddingTop:"300px"}}>
      <button type="button" class="btn btn btn-dark btn-lg" onClick={()=>navigate("/products")}>Start Shopping</button>

      </div>

    </div>
  )
}

export default LandingPage