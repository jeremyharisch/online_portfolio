import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../css/style.css'

import {IoIosCodeWorking, IoIosSchool} from "react-icons/io";
import {AiFillStar, MdWork} from "react-icons/all";
import data from "../mydata";

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
                                contentStyle={{ background: 'rgb(98,98,98)', color: '#fff', boxShadow:'0px 2px 15px rgba(0, 0, 0, 0.5)' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(95, 95, 95)' }}
                                iconStyle={{ background: 'rgb(5,203,203)', color: '#ffffff', boxShadow:'0px 2px 15px rgba(0, 0, 0, 0.5)' }}
                                icon={<IoIosSchool/>}
                            >
                                <h3 className="vertical-timeline-element-title">M.Sc. Informatics</h3>
                                <h4 className="vertical-timeline-element-subtitle"><a className="webpage-links" href={"https://www.tum.de/en/"} target="_blank" rel="noopener noreferrer">Technical University of Munich</a>, Germany</h4>
                                <p style={{fontSize: "1.5rem"}}>
                                    In my master studies, I want to focus mainly on data-/IT-security, as well as on
                                    engineering software-intensive systems.
                                </p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="December 2019 - present"
                                contentStyle={{ background: 'rgb(98,98,98)', color: '#fff', boxShadow:'0px 2px 15px rgba(0, 0, 0, 0.5)' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(95, 95, 95)' }}
                                iconStyle={{ background: 'rgb(5,203,203)', color: '#ffffff', boxShadow:'0px 2px 15px rgba(0, 0, 0, 0.5)' }}
                                icon={<MdWork/>}
                            >
                                <h3 className="vertical-timeline-element-title">Software-Developer | Working Student</h3>
                                <h4 className="vertical-timeline-element-subtitle"><a className="webpage-links" href={"https://www.blickfeld.com/"} target="_blank" rel="noopener noreferrer">Blickfeld GmbH</a>, Munich, Germany</h4>
                                <p style={{fontSize: "1.5rem"}}>
                                    At Blickfeld, my team and I are developing a software for the End-Of-Line testing
                                    for the Blickfeld-Cubes(Lidar). This software includes solving mathematical equations,
                                    processing point-clouds, analyzing captured frames, and more. Besides, I collaborate
                                    in the process of optimizing the verification-process for the Lidar-Scanners.
                                </p>
                                <h5>Used Technologies: Python, Google ProtocolBuffers, Git, GitLab, RedMine</h5>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="November 2017 - December 2019"
                                contentStyle={{ background: 'rgb(98,98,98)', color: '#fff', boxShadow:'0px 2px 15px rgba(0, 0, 0, 0.5)' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(95, 95, 95)' }}
                                iconStyle={{ background: 'rgb(5,203,203)', color: '#ffffff', boxShadow:'0px 2px 15px rgba(0, 0, 0, 0.5)' }}
                                icon={<MdWork/>}
                            >
                                <h3 className="vertical-timeline-element-title">Quality-Management / Test-Automation | Working Student</h3>
                                <h4 className="vertical-timeline-element-subtitle"><a className="webpage-links" href={"https://www.isys.de/"} target="_blank" rel="noopener noreferrer">iSYS Software GmbH</a>, Munich, Germany</h4>
                                <p style={{fontSize: "1.5rem"}}>
                                    At iSYS Software GmbH I was in the quality management team for a specific program, which was a still-in-progress project. I did general tasks in the field of quality assurance, such as penetration testing, vulnerability scanning, etc. - Furthermore, my team developed an automatic test-framework for regression/implementation/feature-tests, with the help of QF-Test and various Groovy scripts.
                                    Additionally, I set up an Elastic-Search-Stack(ELK) to monitor the development process.
                                    Besides all this, I developed in-house applications using Java.
                                </p>
                                <h5>Used Technologies: Java, QF-Test, Groovy, Python, Git, Gerrit, Jira</h5>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="May 2017 - November 2017"
                                contentStyle={{ background: 'rgb(98,98,98)', color: '#fff', boxShadow:'0px 2px 15px rgba(0, 0, 0, 0.5)' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(95, 95, 95)' }}
                                iconStyle={{ background: 'rgb(5,203,203)', color: '#ffffff', boxShadow:'0px 2px 15px rgba(0, 0, 0, 0.5)' }}
                                icon={<MdWork/>}
                            >
                                <h3 className="vertical-timeline-element-title">Marketing / System-Administration | Working Student</h3>
                                <h4 className="vertical-timeline-element-subtitle"><a  className="webpage-links" href={"https://www.computer-bauer.de/"} target="_blank" rel="noopener noreferrer">Computer Bauer Gmbh</a>, Munich, Germany</h4>
                                <p style={{fontSize: "1.5rem"}}>
                                    My first main tasks was making myself familiar with the applications from the company, to sell
                                    them to potential new customers using cold calling or visiting them personally. My second task
                                    was the administration of the in-house, as well as the customers, hardware-infrastructure.
                                </p>
                                <h5>Used Technologies: Diverse CRM Tools, Linux</h5>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="October 2016 - October 2020"
                                contentStyle={{ background: 'rgb(98,98,98)', color: '#fff', boxShadow:'0px 2px 15px rgba(0, 0, 0, 0.5)' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(95, 95, 95)' }}
                                iconStyle={{ background: 'rgb(5,203,203)', color: '#ffffff', boxShadow:'0px 2px 15px rgba(0, 0, 0, 0.5)' }}
                                icon={<IoIosSchool/>}
                            >
                                <h3 className="vertical-timeline-element-title">B.Sc. Informatics</h3>
                                <h4 className="vertical-timeline-element-subtitle"><a className="webpage-links" href={"https://www.tum.de/en/"} target="_blank" rel="noopener noreferrer">Technical University of Munich</a>, Germany</h4>
                                <p style={{fontSize: "1.5rem"}}>
                                    The most part of this studies was fixed by the university. The elective courses did not have any
                                    focus on a specific topic. I tried myself if various subjects like machine learning,
                                    blockchain or even computer-vision.
                                    My bachelor's practical course and my final thesis then have been at the high-performance-computing chair.
                                </p>
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
