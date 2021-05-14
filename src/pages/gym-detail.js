import React from 'react'

import { Route, Link } from 'react-router-dom';
import Themes from '../components/course-themes';
import Sidebar from '../components/sidebar'
import '../css/gym-detail.scss'

class GymDetail extends React.Component{
    render(){
        return(
            <div>
                
                <Sidebar />
                <div class="eco--promo--1 eco--pd--140 c1-bg eco--bg--ptrn--1" style={{ height: '100vh', boxShadow: "0 0 4px 3px #00000026" }}>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="eco--sec--title--white text-center">
                    <span>Обзор нашей платформы</span>
                    <h1>Добро пожаловать</h1>
                </div>
            </div>
        </div>
        <div class="eco--promo--image--1">
            <img src="assets/img/item-02.png" alt="" />
        </div>
    </div>
</div> 
            <main>
                <div className="section-list-projects">
                    <div className="list__group-text">
                        <h2 className="list__title">Ваши темы</h2>
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
                    
                    <Themes />
                </div>
            </main>

            </div>
        );
    }
}

export default GymDetail;