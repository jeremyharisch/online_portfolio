import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

import '../css/style.css'

import data from '../mydata';

export default class Introduction extends Component {
    render() {
        return (
            <div id="child">
                <div className="intro_chapter">
                    <div className="intro_box">
                        <FadeIn>
                            <h1>Hi 👾 You found me! I'm Jeremy</h1>

                        </FadeIn>
                    </div>

                    <a href="#" className="scroll-down">
                        <div className="mouse">
                            <span></span>
                        </div>
                        <div className="arrow">
                            <span></span>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}
