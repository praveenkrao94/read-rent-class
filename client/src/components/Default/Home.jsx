import React from 'react'

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="carousel slide" id="myCarousel" data-bs-ride="carousel">
         
            <div className="carousel-inner" style={{height:'500px'}} >
              <div className="carousel-item active">
                <img src="https://images.pexels.com/photos/2249063/pexels-photo-2249063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='d-block w-100' style={{height:'500px'}}/>
                <div className="carousel-caption d-none d-md-block">
                  <h4 className='text-light display-5' >BookRent Provides the book rent @ very Afforable Price </h4>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://images.pexels.com/photos/207636/pexels-photo-207636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='d-block w-100' style={{height:'500px'}}/>
                <div className="carousel-caption d-none d-md-block">
                  <h4 className='text-light display-5' >BookRent Provides the book rent @ very Afforable Price </h4>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://images.pexels.com/photos/261821/pexels-photo-261821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='d-block w-100' style={{height:'500px'}}/>
                <div className="carousel-caption d-none d-md-block">
                  <h4 className='text-light display-5' >BookRent Provides the book rent @ very Afforable Price </h4>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
           </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
           </button>
            
            
          </div>
        </div>
      </div>
    </div>
  )
}
