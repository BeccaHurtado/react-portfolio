import React from 'react'

function ProjectImages(props) {
    return (
        
          <img
            className="d-block w-100"
            src={props.portfolioArray.img}
            alt="First slide"
          />
         
    )
}

export default ProjectImages