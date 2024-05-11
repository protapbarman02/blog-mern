import React from 'react'

function Card(props) {
  if (props.posts.length===0) {
    return(
      <>
        <h1>Create a Post</h1>
      </>
    )
  }
  return (
    <>
      <div className='row'>
        {props.posts.map((post) => {
          let image = false;
          if(post.images.length>0){
            image = true;
          }
          const imagePath = "images/" + post.images[0];
          return (
            <div className='col-lg-4 col-md-6 col-sm-12 border' key={post.id}>
              <div className="card mb-3 border-0" style={{ maxWidth: 540 + 'px' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    { image && <img src={imagePath} className="img-fluid" alt="..." />}
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.content}</p>
                      <p className="card-text"><small className="text-body-secondary">{post.created_at}</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        )}
      </div>
    </>
  )
}

export default Card

