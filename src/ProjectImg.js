import React from 'react'
import { Card } from 'react-bootstrap'

function ProjectImages(props) {
    return (
        <Card>
            <Card.Img variant="top" src={props.portfolioArray.img} />

        </Card>
    )
}

export default ProjectImages