import React from 'react'

function Footer(props) {
  return (
    <>
      <footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        <div className="card text-center rounded-0 border-0 bg-dark text-light position-fixed py-1" style={{bottom:0, width:100+'vw', height:60+'px'}}>
          <div className="card-header py-0">
            Thank You for Visiting Our Web Site!
            <p className='p-0 m-0'>{props.today}</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer