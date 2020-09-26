import React, { Component } from 'react'

import '../css/style.css'

import data from '../mydata';

export default class Introduction extends Component {
    render() {
        return (
            <div id="child">
                <div className="intro-box">
                    <h1>Hello World!!!</h1>
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
        )
    }
}
