import React from 'react'
import "./Style.css"
import {bestsection, productd} from "../data/Data"
import {newsection} from "../data/Data"
// import { bestsection}  from '../data/Data'

const Product = () => {
  return (
    <div>
      <div className="container-fluid">
      <div className="row">
        {productd.map((item) => (
 <div className="col-xl-3 ">
 <div className="pro">
  <img src={item.img} alt="" />
   <button className='shbtn'>Shop Now</button>
 </div>

</div>

        ))}
       </div>
      </div>

        
        <div className="container-fluid">
          <div className="row td">
            <div className="col-xl-12 heading ">
              <h2>Latest Treandy Collection</h2>
                  <h5>Your Gateway to the Latest Trends</h5>
            </div>

             {newsection.map((newdata) => (
                <div className="col-xl-3 trendy ">
                <div className="news">
                  <img src={newdata.img2} alt="" className='trandyimg' />
                 
                 
                </div>
                  <h1>{newdata.title}</h1>
                  <div className="rate ">
                  <h3>{newdata.Price}</h3>
                  <h6>{newdata.cutp} - </h6>
                  <h5>17% off</h5>
                
                  </div>
                  <div className="ss">
                    <h5>Sale!</h5>
                  </div>
                
                   

              </div>  


             ))}
  
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12 ">
            <div className="big">
            <img src="images/big.jpg" alt="" className='bigimg' />
            
            <div className="review">
              <h2>From You - Happy Customers</h2>
            </div>
            <div className="texdata">
            <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute lorem ipsum is simply free text irure dolor in reprehenderit </p>
            <img className='heart' src="images/heart.png" alt="" />
            </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row phtext">
            <div className="col-xl-12 heading">
              <h2>
                Our Most Selling Product
              </h2>
              <h5>Our Hottest Hits, Dont Miss Out!</h5>
            </div>
           
           {bestsection.map((bestdata) =>(

             <div className="col-xl-3">
              <div className="newc">
                <img src={bestdata.img3} alt="" />
                <div className="overlay">
                <h3>{bestdata.t1}</h3>
                <h5>{bestdata.t2}</h5>
                </div>
              </div>
            </div>
           ))}
          </div>
        </div>


    </div>
  )
}

export default Product
