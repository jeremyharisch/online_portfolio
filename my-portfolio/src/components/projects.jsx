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
                            <div className="project">
                                <h2>TrustCar</h2>
                                <h4>Blockchain-Based Car Checkbook</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid in maiores. Animi assumenda
                                    culpa delectus dignissimos, distinctio dolores ea eaque incidunt ipsam iste laboriosam porro,
                                    quia sint tempore voluptatibus!</p>
                                <hr/>
                                <span className="label label-default project_src">Ethereum</span>
                                <span className="label label-default project_src">Solidity</span>
                                <span className="label label-default project_src">JavaScript</span>
                                <span className="label label-default project_src">HTML</span>
                                <span className="label label-default project_src">CSS</span>
                                <hr/>
                                <div className="project_link flat-ui-colors">
                                    <a className="label label-primary project_link" href="#">GitHub</a>
                                    <a className="label label-primary project_link" href="#">Documentation</a>
                                </div>
                            </div>

                            <div className="project">
                                <h2>Digit-Recognition</h2>
                                <h4>Digit-Recognition Through Finger Movement</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid in maiores. Animi assumenda
                                    culpa delectus dignissimos, distinctio dolores ea eaque incidunt ipsam iste laboriosam porro,
                                    quia sint tempore voluptatibus!</p>
                                <hr/>
                                <span className="label label-default project_src">Ethereum</span>
                                <span className="label label-default project_src">Solidity</span>
                                <span className="label label-default project_src">JavaScript</span>
                                <span className="label label-default project_src">HTML</span>
                                <span className="label label-default project_src">CSS</span>
                                <hr/>
                                <div className="project_link flat-ui-colors">
                                    <a className="label label-primary project_link" href="#">GitHub</a>
                                    <a className="label label-primary project_link" href="#">Documentation</a>
                                </div>
                            </div>

                            <div className="project">
                                <h2>IronMan-Experience</h2>
                                <h4>Virtual-Reality Game</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid in maiores. Animi assumenda
                                    culpa delectus dignissimos, distinctio dolores ea eaque incidunt ipsam iste laboriosam porro,
                                    quia sint tempore voluptatibus!</p>
                                <hr/>
                                <span className="label label-default project_src">Ethereum</span>
                                <span className="label label-default project_src">Solidity</span>
                                <span className="label label-default project_src">JavaScript</span>
                                <span className="label label-default project_src">HTML</span>
                                <span className="label label-default project_src">CSS</span>
                                <hr/>
                                <div className="project_link flat-ui-colors">
                                    <a className="label label-primary project_link" href="#">GitHub</a>
                                    <a className="label label-primary project_link" href="#">Documentation</a>
                                </div>
                            </div>

                        </div>
                    </div>

            </div>
        )
    }
}
