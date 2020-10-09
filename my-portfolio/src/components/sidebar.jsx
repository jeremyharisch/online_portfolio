import React, { Component } from 'react'
import '../css/style.css'
import data from '../mydata';

import { GoMarkGithub } from "react-icons/go";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



export default class Sidebar extends Component {
    render() {
        return (
        <div>
            <div className="sidebar" >
                <ul className="sidebar">
                    <li><a  href="#">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#timeline">Timeline</a></li>
                    <li><a href={data.social[1].url} target="_blank" rel="noopener noreferrer"><SiLinkedin/></a></li>
                    <li><a href={data.social[0].url} target="_blank" rel="noopener noreferrer"><GoMarkGithub/></a></li>
                    <li><a href={data.social[2].url} target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a></li>
                    <li><a href={data.social[3].url} target="_blank" rel="noopener noreferrer"><ImInstagram/></a></li>
                </ul>
            </div>
        </div>
        )
    }
}
