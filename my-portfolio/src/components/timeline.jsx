import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../css/style.css'

import {IoIosCodeWorking, IoIosSchool} from "react-icons/io";
import {AiFillStar, MdWork} from "react-icons/all";

export default class Timeline extends Component {
    render() {

        return (

        <div id="child">
                <div className="chapter" id="timeline">
                    <div className="chapter_box">
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="October 2020 - present"
                                contentStyle={{ background: 'rgb(148,148,148)', color: '#fff', boxShadow:'0px 2px 15px rgba(0, 0, 0, 0.5)' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(95, 95, 95)' }}
                                iconStyle={{ background: 'rgb(5,203,203)', color: '#ffffff', boxShadow:'0px 2px 15px rgba(0, 0, 0, 0.5)' }}
                                icon={<IoIosSchool/>}
                            >
                                <h3 className="vertical-timeline-element-title">M.Sc. Informatics</h3>
                                <h4 className="vertical-timeline-element-subtitle">Technical University of Munich</h4>

                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="December 2019 - present"
                                contentStyle={{ background: 'rgb(148,148,148)', color: '#fff', boxShadow:'0px 2px 15px rgba(0, 0, 0, 0.5)' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(95, 95, 95)' }}
                                iconStyle={{ background: 'rgb(5,203,203)', color: '#ffffff', boxShadow:'0px 2px 15px rgba(0, 0, 0, 0.5)' }}
                                icon={<MdWork/>}
                            >
                                <h3 className="vertical-timeline-element-title">Software-Developer | Working Student</h3>
                                <h4 className="vertical-timeline-element-subtitle">Blickfeld GmbH, Munich, Germany</h4>
                                <p>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At enim in ipsum neque officiis, quae qui totam. Asperiores deleniti error expedita fuga perspiciatis voluptates? Dicta iste labore odio repellendus sed.</span>
                                </p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="November 2017 - December 2019"
                                contentStyle={{ background: 'rgb(148,148,148)', color: '#fff', boxShadow:'0px 2px 15px rgba(0, 0, 0, 0.5)' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(95, 95, 95)' }}
                                iconStyle={{ background: 'rgb(5,203,203)', color: '#ffffff', boxShadow:'0px 2px 15px rgba(0, 0, 0, 0.5)' }}
                                icon={<MdWork/>}
                            >
                                <h3 className="vertical-timeline-element-title">Quality-Management / Test-Automation | Working Student</h3>
                                <h4 className="vertical-timeline-element-subtitle">iSYS Software Gmbh, Munich, Germany</h4>
                                <p>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at consequatur deserunt distinctio eos error fugiat nisi omnis quam sit? Amet autem esse laboriosam maiores natus quidem quod suscipit tempora.</span>
                                </p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="May 2017 - November 2017"
                                contentStyle={{ background: 'rgb(148,148,148)', color: '#fff', boxShadow:'0px 2px 15px rgba(0, 0, 0, 0.5)' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(95, 95, 95)' }}
                                iconStyle={{ background: 'rgb(5,203,203)', color: '#ffffff', boxShadow:'0px 2px 15px rgba(0, 0, 0, 0.5)' }}
                                icon={<MdWork/>}
                            >
                                <h3 className="vertical-timeline-element-title">Marketing / System-Administration | Working Student</h3>
                                <h4 className="vertical-timeline-element-subtitle">Computer Bauer Gmbh, Munich, Germany</h4>
                                <p>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at consequatur deserunt distinctio eos error fugiat nisi omnis quam sit? Amet autem esse laboriosam maiores natus quidem quod suscipit tempora.</span>
                                </p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="October 2016 - October 2020"
                                contentStyle={{ background: 'rgb(148,148,148)', color: '#fff', boxShadow:'0px 2px 15px rgba(0, 0, 0, 0.5)' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(95, 95, 95)' }}
                                iconStyle={{ background: 'rgb(5,203,203)', color: '#ffffff', boxShadow:'0px 2px 15px rgba(0, 0, 0, 0.5)' }}
                                icon={<IoIosSchool/>}
                            >
                                <h3 className="vertical-timeline-element-title">B.Sc. Informatics</h3>
                                <h4 className="vertical-timeline-element-subtitle">Technical University of Munich</h4>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                iconStyle={{ background: 'rgb(5,203,203)', color: '#ffffff', boxShadow:'0px 2px 15px rgba(0, 0, 0, 0.5)' }}
                                icon={<IoIosCodeWorking/>}
                            />
                        </VerticalTimeline>
                    </div>

                </div>

        </div>
        )
    }
}
