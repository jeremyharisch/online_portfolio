import React, { Component } from 'react'


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
                                    <h2>Kyma</h2>
                                    <p className="project_header">Open-Source Kubernertes Runtime</p>
                                    <p className="project_description">I am collaborating on the open-source Kyma project during my employment at SAP. With Kyma, you can develop, run, and operate secure and scalable cloud-native applications by combining Kubernetes with a set of best-in-class tools and open-source components. I started with developing the observability stack of Kyma (including using other open-source software), but now I am involved in designing and developing the lifecycle management solution for Kyma using best practices of the cloud-native world.
                                    </p>
                                    <div className="project_link">
                                        <span className="label label-default project_src">Go</span>
                                        <span className="label label-default project_src">Prow</span>
                                        <span className="label label-default project_src">Shell-Scripting</span>
                                        <span className="label label-default project_src">...</span>
                                    </div>
                                    <div className="project_link flat-ui-colors">
                                        <a className="label label-primary project_link" href="https://github.com/kyma-project" target="_blank">GitHub</a>
                                        <a className="label label-primary project_link" href="https://kyma-project.io/docs/kyma/latest/" target="_blank">Documentation</a>
                                    </div>

                                </div>
                                <div className="project">
                                    <h2>PSE-Project</h2>
                                    <p className="project_header">Bachelor's Practical Course</p>
                                    <p className="project_description">This project was done due to the practical course "Scientific Computing (PSE) Molecular Dynamics" at the TUM.
                                        The main goal was to build up a scalable and robust
                                        molecular dynamic simulation framework. This framework handles MD-simulations with open,
                                        reflecting or periodic boundaries in a two or three dimensional environment. Furthermore,
                                        it is optimised due to a better runtime using various strategies like an adaption of the
                                        linked-cell algorithm. Simulation can be configured using an XML-input-file.
                                    </p>
                                    <div className="project_link">
                                        <span className="label label-default project_src">C++</span>
                                        <span className="label label-default project_src">CMake</span>
                                    </div>
                                    <div className="project_link flat-ui-colors">
                                        <a className="label label-primary project_link" href="https://gitlab.lrz.de/ga87tan/psemoldyn_groupc" target="_blank">GitLab</a>
                                        <a className="label label-primary project_link" href="https://gitlab.lrz.de/ga87tan/psemoldyn_groupc/-/blob/master/README.md" target="_blank">Documentation</a>
                                    </div>

                                </div>
                                <div className="project">
                                    <h2>TrustCar</h2>
                                    <p className="project_header">Blockchain-Based Car Checkbook</p>
                                    <p className="project_description">
                                        This online application is a digital replacement for the car's service book. It
                                        is based on the Ethereum-blockchain and uses the chain for storing the car's data, such
                                        as the car-ID, owner, last oil change, etc. - This was my approach for making car-history
                                        more transparent and safe. Additionally, there are different user-rolls
                                        (mechanics, car-ower) which have different rights to view and manipulate the history.
                                        The online-interface is written in HTML, CSS and JavaScript.
                                        The smart contracts for the blockchain are written in solidity.
                                    </p>
                                    <div className="project_links_group>">
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
                                </div>

                                <div className="project">
                                    <h2>Digit-Recognition</h2>
                                    <p className="project_header">Through Finger Movement</p>
                                    <p className="project_description">
                                        This project was the approach for facilitating the keyboard input on  smart watches,
                                        which have a built in camera. This algorithm tracks the finger tip, until now
                                        with the help of a green marker, saves the track ,and maps the in the air written number to a digital number
                                        , using a small neural network.
                                        This algorithm was implemented with Keras and OpenCV.
                                        Future-work would to be to include the latin alphabet and track the finger tip without
                                        using a green marker as a helper. Furthermore, the accuracy needs to be improved, until now it is ca. 92.12%.
                                    </p>
                                    <div className="project_links_group>">
                                        <div className="project_link">
                                            <span className="label label-default project_src">Python</span>
                                            <span className="label label-default project_src">Keras</span>
                                            <span className="label label-default project_src">OpenCV</span>
                                        </div>
                                        <div className="project_link flat-ui-colors">
                                            <a className="label label-primary project_link" href="https://github.com/JeremyHarisch/DigitRecognitionThroughFingerMovement" target="_blank">GitHub</a>
                                            <a className="label label-primary project_link" href="https://github.com/JeremyHarisch/DigitRecognitionThroughFingerMovement/blob/master/digit_recognition_final_report.pdf" target="_blank">Documentation</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="project">
                                    <h2>IronMan-VR</h2>
                                    <p className="project_header">Virtual-Reality Game</p>
                                    <p className="project_description">
                                        This VR-game is a survival shooter - The user uses his/her own hands as blasters
                                        like IronMan from the Marvel comics. Furthermore, the user can choose between different blasters,
                                        by using specific hand gestures. The game was implemented with the Unity engine and their tutorial
                                        third person shooter was used as a foundation.
                                        All the graphics were made of Unity assets. To track the users hand a Leap-Motion sensor
                                        has to be mounted in the front of the VR-googles. This game was tested with the
                                        Oculus Rift S.
                                    </p>
                                    <div className="project_links_group>">
                                        <div className="project_link">
                                            <span className="label label-default project_src">C#</span>
                                            <span className="label label-default project_src">Unity</span>
                                            <span className="label label-default project_src">Leap Motion</span>
                                        </div>
                                        <div className="project_link flat-ui-colors">
                                            <a className="label label-primary project_link" href="https://github.com/JeremyHarisch/IronMan-Experience" target="_blank">GitHub</a>
                                            <a className="label label-primary project_link" href="https://github.com/JeremyHarisch/IronMan-Experience/blob/master/IronMan_FinalReport.pdf" target="_blank">Documentation</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        )
    }
}
