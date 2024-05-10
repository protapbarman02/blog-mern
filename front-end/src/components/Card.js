import React from 'react'

function show(){
  console.log("button clicked")
}

function Card(props) {
  return (
  <section>
    {props.items.map((item) => 
      <div key={item.id} className="card" style={{width: 18 + 'rem'}}>
      {/* <img src="..." className="card-img-top" alt="..."/> */}
      <div className="card-body">
        <h5 className="card-title">{item.firstName} {item.lastName}</h5>
        <p className="card-text">{item.about}</p>
      </div>
      <div className="card-body">
        <a href="#" className="card-link text-dark text-decoration-none">Facebook</a>
        <a href="#" className="card-link text-dark text-decoration-none">Instagram</a>
        <button onClick={show}>click me</button>
      </div>
    </div>
    )}
  </section>
  )
}

export default Card

