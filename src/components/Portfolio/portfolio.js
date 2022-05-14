import React from "react";
import ProjectImages from '../../ProjectImg';


function Portfolio() {
    const portfolioArray = [
        {
            name: 'Dashboard',
            github: 'abd',
            img: './images/dashboard.png'
        },
        {
            name: 'Dashboard',
            github: '',
            img: './images/dashboard.png'
        },
        {
            name: 'Dashboard',
            github: '',
            img: './images/dashboard.png'
        },
        {
            name: 'Dashboard',
            github: '',
            img: './images/dashboard.png'
        },
        {
            name: 'Dashboard',
            github: '',
            img: './images/dashboard.png'
        },
        {
            name: 'Dashboard',
            github: '',
            img: './images/dashboard.png'
        },
    ]
    return (
        <section>
            <div>
            <h1 className="header">My Portfolio</h1>
            <div>
                {portfolioArray.map(entry => {
                    return (<ProjectImages portfolioArray={entry}></ProjectImages>)
                })}
            </div>
            </div>
        </section>
    )
}
export default Portfolio;