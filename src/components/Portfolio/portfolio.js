import React from "react";
import ProjectImages from '../../ProjectImg';


function Portfolio() {
    const { portfolioArray } = [
        {
            name: 'Dashboard',
            github: '',
            img: '../public/images/dashboard.png'
        },
        {
            name: 'Dashboard',
            github: '',
            img: '../public/images/dashboard.png'
        },
        {
            name: 'Dashboard',
            github: '',
            img: '../public/images/dashboard.png'
        },
        {
            name: 'Dashboard',
            github: '',
            img: '../public/images/dashboard.png'
        },
        {
            name: 'Dashboard',
            github: '',
            img: '../public/images/dashboard.png'
        },
        {
            name: 'Dashboard',
            github: '',
            img: '../public/images/dashboard.png'
        },
    ]
    return (
        <section>
            <div>
            <h1 className="header">My Portfolio</h1>
            </div>
            <div className='conatiner'>
                {portfolioArray.map(entry => {
                    return (<ProjectImages portfolioArray={entry}></ProjectImages>)
                })}
            </div>
        </section>
    )
}
export default Portfolio;