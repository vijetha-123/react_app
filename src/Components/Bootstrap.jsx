import React from "react";
import { Link} from 'react-router-dom';
import imag from '../Assets/2.jpg';
export default function Bootstrap(){
return(
    <div className="card" style={{width: 250}}>
  <img src={imag} className="card-img-top" alt="img"></img>
  <div className="card-body">
    <h5 className="card-title">Chocolate Fudge</h5>
    <Link href="#" className="btn btn-primary">Add to cart</Link>
  </div>
</div>
)
}