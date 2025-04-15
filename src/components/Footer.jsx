import React from 'react'

const Footer = () => {
  return (
    <div>
    <div className="container">
    
    <div className="row mb-3">
        <div className="col-xl-3 col-md-6 ">
        <div className="card mb-3 pngbx" style={{ maxWidth: "540px" }}>
      <div className="row icontext g-0">
        <div className="col-md-4 col-5">
          <img
            src="images/truck.png" 
            className="img-fluid rounded-start" 
            alt="..."
          />
        </div>
        <div className="col-md-8 col-7">
          <div className="card-body det">
            <h5 className="card-title">Free Shipping</h5>
            
            <p className="card-text">
              <small className="text-body-secondary">Standard Shipping</small>
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>

        <div className="col-xl-3">
        <div className="card mb-3 pngbx" style={{ maxWidth: "540px" }}>
      <div className="row icontext  g-0">
        <div className="col-md-4  col-5">
          <img
            src="images/24-hours-support.png" 
            className="img-fluid rounded-start" 
            alt="..."
          />
        </div>
        <div className="col-md-8 col-7">
          <div className="card-body det">
            <h5 className="card-title">Customer Service</h5>
            
            <p className="card-text">
              <small className="text-body-secondary">Give us feedback</small>
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>

        <div className="col-xl-3">
        <div className="card mb-3 pngbx" style={{ maxWidth: "540px" }}>
      <div className="row icontext  g-0">
        <div className="col-md-4  col-5">
          <img
            src="images/box.png" 
            className="img-fluid rounded-start" 
            alt="..."
          />
        </div>
        <div className="col-md-8  col-7">
          <div className="card-body det">
            <h5 className="card-title">Focused Efforts</h5>
            
            <p className="card-text">
              <small className="text-body-secondary">Guaranteed Saving</small>
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>

        <div className="col-xl-3 ">
        <div className="card mb-3 pngbx " style={{ maxWidth: "540px" }}>
      <div className="row icontext  g-0">
        <div className="col-md-4  col-5">
          <img
            src="images/online-shopping.png" 
            className="img-fluid " 
            alt="..."
          />
        </div>
        <div className="col-md-8  col-7">
          <div className="card-body det">
            <h5 className="card-title">Secure Payment</h5>
            
            <p className="card-text">
              <small className="text-body-secondary">100% risk free</small>
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>

    </div>

    <div className="container-fluid">
        <div className="row ft p-5">
            <div className="col-xl-2 footer col-12 ">
                <h5 style={{marginLeft: "0px"}}>About Styler</h5>
                <h6>a way to refine your personality and enhance your identity.  </h6>
                <div className=" iconbx">
                    <img src="images/1051309.png" alt="" />
                    <img src="images/254412.png" alt="" />
                    <img src="images/instagram.png" alt="" />
                </div>
            </div>
            <div className="col-xl-2 footer col-12">
                <h5>Categories</h5>
                <ul>
                    <li>Women Saree</li>
                    <li>Anarkli suit</li>
                    <li>Kurta Plazo</li>
                    <li>Lengha choli</li>
                    <li>Kurta Set</li>
                </ul>
            </div>
            <div className="col-xl-2 footer col-12">
                <h5>Campaigns</h5>
                <ul>
                    <li>Ethnic Wear</li>
                    <li>Classic Design</li>
                    <li>50% off</li>
                    <li>Outlet</li>
                    <li>Pre-Sale</li>
                </ul>
            </div>
            <div className="col-xl-2 footer col-12">
                <h5>Help</h5>
                <ul>
                    <li>Order Tracking</li>
                    <li>Term & Condition</li>
                    <li>Privicy Policy</li>
                    <li>Tutorials</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className="col-xl-4 footer col-12">
                <h5 style={{marginLeft:'0px'}}>
                    Newsletter
                </h5>

                <input type="text" placeholder='Your E-mail' />
                <button type='button'>Submit</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer
