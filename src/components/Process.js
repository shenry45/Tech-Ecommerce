import React from 'react';

import RecycleMachine from '../img/recycling-machine.jpg';
import PCBScrap from '../img/PCB_Scrap2.jpg';
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
                <p>Est aliqua officia eiusmod enim tempor excepteur nisi ipsum commodo elit commodo. Sint deserunt ut cupidatat veniam nisi est esse reprehenderit cupidatat sunt. Duis anim nostrud enim consequat in ea quis veniam id. Eu proident dolor laboris sunt quis esse eiusmod ipsum reprehenderit officia consequat nulla occaecat nisi.</p>
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