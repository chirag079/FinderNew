import spinner from "./assets/spinner.gif"

import React from 'react'

function Spinner() {
  return (
    <div className="w-100 mt-20">
        <img width={180} src={spinner} alt="loader" className="text-center mx-auto"/>
      
    </div>
  )
}

export default Spinner
