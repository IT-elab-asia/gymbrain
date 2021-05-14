import React from 'react';
import { Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import '../css/main.css'
import $ from "jquery";

const Sidebar = () => {
    return (
        <div>
        <div class="sidenav">
        <div class="eco--logo">
                        <a href="index.html">GYM-BRAIN</a>
                    </div>
  <a href="#about">ВЕБ-РАЗРАБОТКА</a>
  <a href="#services">ЯЗЫК ПРОГРАММИРОВАНИЯ JAVA-SCRIPT</a>
  <a href="#clients">ЯЗЫК ПРОГРАММИРОВАНИЯ PYTHON</a>
  <a href="#contact">FRONT-END РАЗРАБОТКА</a>
  <a href="#contact">BACK-END РАЗРАБОТКА</a>
</div>
</div>
    );
};

export default Sidebar;
