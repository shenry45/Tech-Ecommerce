import React from 'react';

import MousePointer from "../img/mouse-pointer.png";

const Stats = () => {
    return <section className="stats">
        <h3>Funding Raised for the Latest Recycler</h3>
        <p>Nostrud anim dolore ex adipisicing consectetur laboris tempor minim. Nostrud anim dolore ex adipisicing consectetur laboris tempor minim consectetur laboris tempor minim. Nostrud anim dolore ex adipisicing consectetur laboris tempor minim.</p>
        <div className="progress section">
            <div className="level"><img src={MousePointer} alt="mouse pointer" title="Our progress! How exciting..." /></div>
        </div>
    </section>
}

export default Stats;