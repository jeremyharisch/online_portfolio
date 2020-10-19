import React, { Component } from 'react'
import data from '../mydata';


export default class Projects extends Component {
    render() {
        return (

            <div id="child">
                    <div className="chapter">
                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
                        <div className="chapter_box" id="projects">
                            <h1>Projects</h1>
                            <div className="project_box">
                                <div className="project">
                                    <h2>TrustCar</h2>
                                    <p className="project_header">Blockchain-Based Car Checkbook</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid in maiores. Animi assumenda
                                        culpa delectus dignissimos, distinctio dolores ea eaque incidunt ipsam iste laboriosam porro,
                                        quia sint tempore voluptatibus!</p>
                                    <hr/>
                                    <div className="project_link">
                                        <span className="label label-default project_src">Ethereum</span>
                                        <span className="label label-default project_src">Solidity</span>
                                        <span className="label label-default project_src">JavaScript</span>
                                        <span className="label label-default project_src">HTML</span>
                                        <span className="label label-default project_src">CSS</span>
                                    </div>
                                    <div className="project_link flat-ui-colors">
                                        <a className="label label-primary project_link" href="https://github.com/JeremyHarisch/TrustCar" target="_blank">GitHub</a>
                                        <a className="label label-primary project_link" href="https://github.com/JeremyHarisch/TrustCar/blob/master/TrustCar_Final_Report.pdf" target="_blank">Documentation</a>
                                    </div>
                                </div>

                                <div className="project">
                                    <h2>Digit-Recognition</h2>
                                    <p className="project_header">Through Finger Movement</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid in maiores. Animi assumenda
                                        culpa delectus dignissimos, distinctio dolores ea eaque incidunt ipsam iste laboriosam porro,
                                        quia sint tempore voluptatibus!</p>
                                    <hr/>
                                    <div className="project_link">
                                        <span className="label label-default project_src">Python</span>
                                        <span className="label label-default project_src">Keras</span>
                                    </div>
                                    <div className="project_link flat-ui-colors">
                                        <a className="label label-primary project_link" href="https://github.com/JeremyHarisch/DigitRecognitionThroughFingerMovement" target="_blank">GitHub</a>
                                        <a className="label label-primary project_link" href="https://github.com/JeremyHarisch/DigitRecognitionThroughFingerMovement/blob/master/digit_recognition_final_report.pdf" target="_blank">Documentation</a>
                                    </div>
                                </div>

                                <div className="project">
                                    <h2>PSE-Project</h2>
                                    <p className="project_header">Bachelor's Practical Course</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid in maiores. Animi assumenda
                                        culpa delectus dignissimos, distinctio dolores ea eaque incidunt ipsam iste laboriosam porro,
                                        quia sint tempore voluptatibus!</p>
                                    <hr/>
                                    <div className="project_link">
                                        <span className="label label-default project_src">C++</span>
                                        <span className="label label-default project_src">CMake</span>
                                    </div>
                                    <div className="project_link flat-ui-colors">
                                        <a className="label label-primary project_link" href="https://github.com/JeremyHarisch/IronMan-Experience" target="_blank">GitLab</a>
                                        <a className="label label-primary project_link" href="https://gitlab.lrz.de/ga87tan/psemoldyn_groupc/-/blob/master/README.md" target="_blank">Documentation</a>
                                    </div>
                                </div>

                                <div className="project">
                                    <h2>IronMan-Experience</h2>
                                    <p className="project_header">Virtual-Reality Game</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid in maiores. Animi assumenda
                                        culpa delectus dignissimos, distinctio dolores ea eaque incidunt ipsam iste laboriosam porro,
                                        quia sint tempore voluptatibus!</p>
                                    <hr/>
                                    <div className="project_link">
                                        <span className="label label-default project_src">C#</span>
                                        <span className="label label-default project_src">Unity</span>
                                    </div>
                                    <div className="project_link flat-ui-colors">
                                        <a className="label label-primary project_link" href="https://github.com/JeremyHarisch/IronMan-Experience" target="_blank">GitHub</a>
                                        <a className="label label-primary project_link" href="#" target="_blank">Documentation</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        )
    }
}
