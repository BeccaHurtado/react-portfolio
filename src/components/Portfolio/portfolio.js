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
            img: './images/javascript-quiz.jpeg'
        },
        {
            name: 'Dashboard',
            github: '',
            img: './images/moveies.png'
        },
        {
            name: 'Dashboard',
            github: '',
            img: './images/team-portfolio.png'
        },
        {
            name: 'Dashboard',
            github: '',
            img: './images/weather-dashboard.png'
        },
        {
            name: 'Dashboard',
            github: '',
            img: './images/workday-scheduler.jpeg'
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