import React from 'react';

import MousePointer from "../img/mouse-pointer.png";

const Stats = () => {
    return <section className="stats">
        <h3>Funding Raised for the Latest Recycler</h3>
        <p>Our funding goal of $1,000,000 is to expand efforts to local towns and get planning started in the metropolitan landfills. Help us help the planet by donating to our drive to become zero waste!</p>
        <div className="progress section">
            <div className="level"><img src={MousePointer} alt="mouse pointer" title="Our progress! How exciting..." /></div>
        </div>
    </section>
}

export default Stats;