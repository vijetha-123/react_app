import React from "react";
import dp from '../Assets/1.jpg';
import '../Styles/styling.css';
class ClassComponent extends React.Component{
    render(){
        return(
            <><h3 >ENJOY YOUR DELICIOUS FOOD!</h3>
            <h4>Book a Table</h4>
            <Functioncomp1></Functioncomp1></>
        )
    }
}
function Functioncomp1() {
return <img className="im" src={dp}  alt='img'></img>
}
export default ClassComponent