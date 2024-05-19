import React from 'react'

const Services = (props) => {
  return (
    <div>
      <h2 className='text-center my-3'>{props.heading}</h2>
      <div className='d-flex mx-5'>
        <div className="card mx-3 col">
          <div className="card-body">
            <h5 className="card-title">{props.titleOne}</h5>
            <p className="card-text">{props.detailOne}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>  

        <div className="card mx-3 col">
          <div className="card-body">
            <h5 className="card-title">{props.titleTwo}</h5>
            <p className="card-text">{props.detailTwo}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div className="card mx-3 col">
          <div className="card-body">
            <h5 className="card-title">{props.titleThree}</h5>
            <p className="card-text">{props.detailThree}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
