import React from "react";
import ProjectImages from '../../ProjectImg';
import './portfolio.css'


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
        <section className="portfolio-background">
            <h1>My Recent Work</h1>
            <h2>Portfolio</h2>
            <div className="container portfolio-container">
                {portfolioArray.map(entry => {
                    return (<ProjectImages portfolioArray={entry}></ProjectImages>)
                })}
            </div>
        </section>
    )
}
export default Portfolio;