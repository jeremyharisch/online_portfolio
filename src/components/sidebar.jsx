import React, { Component } from 'react'
import '../css/style.css'
import data from '../mydata';

import { GoMarkGithub } from "react-icons/go";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";


import logo from '../public/logos/JH_main_logo_grey.png'


export default class Sidebar extends Component {
    render() {
        return (
        <div>
            <div className="sidebar" >

                <ul className="sidebar">
                    <div className="sidebar_logo"><img className="sidebar_logo" src={logo} /></div>
                    <li><a  href="#">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    {/*<li><a href="#skills">Skills</a></li>*/}
                    <li><a href="#timeline">Timeline</a></li>
                    <li><a href={data.social[1].url} target="_blank" rel="noopener noreferrer"><SiLinkedin/></a></li>
                    <li><a href={data.social[0].url} target="_blank" rel="noopener noreferrer"><GoMarkGithub/></a></li>
                </ul>
            </div>
        </div>
        )
    }
}
