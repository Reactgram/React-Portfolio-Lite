import React from "react";

const Section = ({title,descrip}) => {


    return(
        <div className="section">
              <hr/>
                <h2> {title} </h2>
                <p>{descrip}</p>
        </div>
    )
}

export default Section;