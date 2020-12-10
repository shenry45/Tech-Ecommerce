import React from 'react';

import RecycleMachine from '../img/recycling-machine.jpg';
import PCBScrap from '../img/old-hardware-scrap-bin.jpg';
import ScrapMachine from '../img/Industrialshredder.jpg'

const images = [
    {
        src: RecycleMachine,
        alt: 'recycle at its finest'
    },
    {
        src: PCBScrap,
        alt: 'recycle at its finest'
    },
    {
        src: ScrapMachine,
        alt: 'recycle at its finest'
    }
]

class Process extends React.Component {
    state = {
        activeSlide: 0
    }

    slideLeft = e => {
        e.preventDefault();

        if (this.state.activeSlide === 0) {
            this.setState({activeSlide: images.length - 1});
        } else {
            this.setState({activeSlide: this.state.activeSlide - 1});
        }
    }

    slideRight = e => {
        e.preventDefault();
        
        if (this.state.activeSlide === images.length - 1) {
            this.setState({activeSlide: 0});
        } else {
            this.setState({activeSlide: this.state.activeSlide + 1});
        }
    }

    render() {
        return <section className="two-col process">
            <div>
                <h3>The Process</h3>
                <p>Starting from our local landfill providing scrap electronics we sort based on type. Each type of electronic device get binned for the most efficient recycling process. PCBs are ground down for recycle pulp and raw materials are smelted for sale. All proceeds are poured into our facility and helping plant trees.</p>
            </div>
            <div className="slider">
                <div className="slide-left" onClick={this.slideLeft}>
                    <i className="fas fa-angle-left"></i>
                </div>
                <img
                    src={images[this.state.activeSlide].src}
                    alt={images[this.state.activeSlide].alt}
                    draggable="false"
                />
                <div className="slide-right" onClick={this.slideRight}><i className="fas fa-angle-right"></i></div>
            </div>
        </section>

    }
}

export default Process;