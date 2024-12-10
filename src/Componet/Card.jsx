import React from "react";
function Card(props) {
    return (
        <>
            <div className="c-top card flex">
                <div className="w-40 "><img src={props.img} alt="" /></div>
                <div className="w-60">
                    <a href="#" className="name1">{props.name1}</a>
                    <p className="desc">{props.desc}</p>
                    <p className="main">Last known location:</p>
                    <p className="descl">{props.descl}</p>
                    <p className="main">First seen in:</p>
                    <p className="descf">{props.descf}</p>
                </div>
            </div>
        </>
    )
}
export default Card