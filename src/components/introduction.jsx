import React, { Component } from 'react'
import data from '../mydata';

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <section id="colorlib-hero" className="js-fullheight" data-section="home">
              <div className="flexslider js-fullheight">
                <ul className="slides">
                  <li style={{backgroundImage: 'url(images/intro_pic_jeremy.jpeg)'}}>
                    <div className="overlay" />
                    <div className="color-overlay"></div>

                    <div className="row">
                      <div className="js-fullheight slider-text">
                        <div className="slider-text-inner js-fullheight">
                          <h1>{data.headerTagline[0]}</h1>
                          <h2>{data.headerTagline[1]}</h2>
                        </div>

                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </section>
      </div>
    )
  }
}
