import React, { Component } from 'react'

import { Route, Link } from 'react-router-dom';
import Themes from '../components/course-themes';
import VideoJS from '../components/player';
import Sidebar from '../components/sidebar'
import '../css/gym-detail.scss'

class Passing extends React.Component{
    render(){
        return(
            <div>
                
                <Sidebar />
            <main>
                <div className="section-list-projects">
                    <div className="list__group-text">
                        <h2 className="list__title">Тема 1. Каково быть дизайнером</h2>
                        <div class="wrapper">
    <a href="#demo-modal">Начать</a>
</div>

<div id="demo-modal" class="modal">
    <div class="modal__content">
        <h1>Каково это – быть дизайнером</h1>
        <br/>
        <p>
            Темы курса
        </p>
        <br/>
            <ul>
                <li><a class="theme-list">1. Front-end<p class="theme-hours">9 часов</p></a></li>
                <li><a class="theme-list">2. JavaScript<p class="theme-hours">10 часов</p></a></li>
                <li><a class="theme-list">3. Animation<p class="theme-hours">200 часов</p></a></li>
                <li><a class="theme-list">4. Back-end<p class="theme-hours">90 часов</p></a></li>
            </ul>
        <div class="modal__footer">
            <i class="fa fa-heart"></i>by <a href="" target="_blank">@Elab.Asia</a>
        </div>

        <a href="#" class="modal__close">&times;</a>
    </div>
</div>
                    </div>
                    <VideoJS />
                                       <Themes />
                </div>
            </main>

            </div>
        );
    }
}

export default Passing;