import React from 'react';

import RecycleMachine from '../img/recycling-machine.png';

const images = [
    {
        src: RecycleMachine,
        alt: 'recycle at its finest'
    },
    {
        src: RecycleMachine,
        alt: 'recycle at its finest'
    },
    {
        src: RecycleMachine,
        alt: 'recycle at its finest'
    }
]

class Process extends React.Component {
    state = {
        activeSlide: 0
    }

    slideLeft = e => {
        e.preventDefault();
        
        this.setState(state => {
            return {activeSlide: state.activeSlide--}
        });
    }

    slideRight = e => {
        e.preventDefault();
        
        this.setState(state => {
            return {activeSlide: state.activeSlide++}
        });
    }

    render() {
        return <section>
            <h3>The Process</h3>
                <button className="slide-left" onClick={this.slideLeft}>
                    ^
                </button>
            <div className="slider">
                <img
                    src={images[this.state.activeSlide].src}
                    alt={images[this.state.activeSlide].alt}
                />
            </div>
            <button className="slide-right" onClick={this.slideRight}>></button>
        </section>

    }
}

export default Process;