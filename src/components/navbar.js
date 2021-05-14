import React from 'react'

import App from '../App'

import {Link} from 'react-router-dom'


class Navbar extends React.Component{
    render(){
        return(
            <div>
               <div class="eco--header--wraper eco--header--1">
    <div class="eco--header--top">
        <div class="container">
            <div class="row">
                <div class="col-md-2 col-xs-4">
                    <div class="eco--logo">
                        <a href="index.html">GYM-BRAIN</a>
                    </div>
                </div>
                <div class="col-md-10 col-xs-8">
                    <div class="eco--header--btn text-right">
                        <Link to={{pathname: "/login", fromDashboard: false}} class="eco--btn">Войти</Link>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <div class="eco--header--bottom">
        <div class="container">
            <div class="row">
                <div class="col-md-7 eco--menu--col col-sm-6 clearfix">
                                    <nav class="eco--main--menu">
                        <ul>
                            <li><Link to={{pathname: "/", fromDashboard: false}}>Главная</Link></li>
                            <li class="current-menu-item"><a href="index.html">Chto to</a>
                                <ul class="sub-menu">
                                    <li><a href="home-1.html">Home - 1</a></li>
                                    <li><a href="home-2.html">Home - 2</a></li>
                                    <li><a href="home-3.html">Home - 3</a></li>
                                    <li><a href="home-4.html">Home - 4</a></li>
                                    <li><a href="home-5.html">Home - 5</a></li>
                                    <li><a href="home-6.html">Home - 6</a></li>
                                </ul>
                            </li>
                            <li><a href="#">О нас</a></li>
                            <li><a href="#">Модули тренажера</a>
                                <ul class="sub-menu">
                                    <li><a href="#">Программирование</a>
                                    <ul class="sub-menu">
                                            <li><Link to={{pathname: "/gym1", fromDashboard: false}}>Веб-разработка</Link></li>
                                            <li><a href="#">Язык программирования Java-Script</a></li>
                                            <li><a href="#">Язык программирования Python</a></li>
                                            <li><a href="#">Front-end разработка</a></li>
                                            <li><a href="#">Back-end разработка</a></li>
                                        </ul></li>
                                    <li><a href="#">Label A-2</a>
                                    <ul class="sub-menu">
                                            <li><a href="#">Label B-1</a></li>
                                            <li><a href="#">Label B-2</a></li>
                                            <li><a href="#">Label B-3</a></li>
                                            <li><a href="#">Label B-4</a></li>
                                            <li><a href="#">Label B-5</a></li>
                                        </ul></li>
                                    <li><a href="#">Label A-3</a>
                                        <ul class="sub-menu">
                                            <li><a href="#">Label B-1</a></li>
                                            <li><a href="#">Label B-2</a></li>
                                            <li><a href="#">Label B-3</a></li>
                                            <li><a href="#">Label B-4</a></li>
                                            <li><a href="#">Label B-5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Label A-4</a>
                                    <ul class="sub-menu">
                                            <li><a href="#">Label B-1</a></li>
                                            <li><a href="#">Label B-2</a></li>
                                            <li><a href="#">Label B-3</a></li>
                                            <li><a href="#">Label B-4</a></li>
                                            <li><a href="#">Label B-5</a></li>
                                        </ul></li>
                                    <li><a href="#">Label A-5</a>
                                    <ul class="sub-menu">
                                            <li><a href="#">Label B-1</a></li>
                                            <li><a href="#">Label B-2</a></li>
                                            <li><a href="#">Label B-3</a></li>
                                            <li><a href="#">Label B-4</a></li>
                                            <li><a href="#">Label B-5</a></li>
                                        </ul></li>
                                </ul>
                            </li>
                            <li><a href="#">Наши контакты</a></li>
                        </ul>
                    </nav>                </div>
                <div class="col-md-5 col-sm-6  clearfix">
                    <nav class="eco--right--nav">
                        <ul>
                            <li><a href="#">Поддержка</a></li>
                            <li><a href="#">Правила & Документация</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div> 
</div> 
            </div>
            
        );
    }
}

export default Navbar;