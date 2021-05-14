import React from 'react'

import Navbar from '../components/navbar'

import backgroundImg1 from '../img/review-bg.jpg'
import backgroundVideo1 from '../img/video-bg.jpg'

class Home extends React.Component{
    render(){
        return(
            <div>

<div class="site_wrap">

<Navbar />

<div class="eco--promo--3 eco--pd--140 eco--pd--140 c1-bg eco--bg--ptrn--2">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-lg-offset-6 col-md-7 col-md-offset-5">
                <div class="eco--inner eco--ml-50">
                    <div class="eco--sec--title--white eco--small">
                        <span>Demo</span>
                        <h1>SUCCESS STARTS HERE.</h1>
                    </div>
                    <div class="eco--content eco--mt35">
                       <p>Demo</p>
                        <div class="eco--btn--wrap eco--mt70">
                            <a href="/signup" class="eco--btn eco--bordered--white">Регистрация <i class="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="eco--promo--image--3">
            <img src="assets/img/item-05.jpg" alt="" />
        </div>
    </div>
</div> 

<div class="eco--video--area--1 eco--pd--100 eco--overlay--1" style={{ backgroundImage: `url(${backgroundVideo1})` }}>
	<div class="container">
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<div class="eco--sec--title--white eco--small text-center">
					<h1>SUCCESS START HERE</h1>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12 text-center">
				<div class="eco--btn--wrap eco--mt120">
					<a href="https://www.youtube.com/watch?v=Vj9fDIS7ie0" target="_blank" class="eco--video--btn--1 eco--popup fa fa-play"></a>
					<span> video</span>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="eco--promo--2 eco--pd--200" id="promo2">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-lg-offset-6 col-md-8 col-md-offset-4">
                <div class="eco--inner eco--ml-30">
                    <div class="eco--sec--title">
                        <span>Обзор нашей платформы</span>
                        <h1>Чего ты добьешься с нами?</h1>
                    </div>
                    <ul class="eco--promo--list--1 eco--mt50">
                        <li>
                            <i class="fa fa-code"></i>
                            Научись полностью создавать приложения!
                        </li>
                        <li>
                            <i class="fa fa-book"></i>
                            Погрузись в образование!
                        </li>
                        <li>
                            <i class="fa fa-briefcase"></i>
                            Получи работу в ведущих специальностях!
                        </li>
                        <li>
                            <i class="fa fa-home"></i>
                            Открой свой бизнес!
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="eco--promo--image--2">
            <img src="assets/img/item-03.jpg" alt="" />
        </div>
    </div>
</div> 

<div class="eco--promo--1 eco--pd--140 c1-bg eco--bg--ptrn--1">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="eco--sec--title--white text-center">
                    <span>Обзор нашей платформы</span>
                    <h1>SUCCESS START HERE</h1>
                </div>
            </div>
        </div>
        <div class="eco--promo--image--1">
            <img src="assets/img/item-02.png" alt="" />
        </div>
    </div>
</div> 

<div class="eco--review--area--1 eco--overlay--1 eco--pd--100" style={{ backgroundImage: `url(${backgroundImg1})` }}>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="eco--review--slider--1">
                    <div class="eco--single--slide">
                        <h3>Having worked in the electronics retail industry for years now, I've seen scores of Smart devices come and go. Until now, nobody quite got it right. In the Echo Dot, Amazon has created a near perfect blend of hardware and software. </h3>
                    </div>
                    <div class="eco--single--slide">
                        <h3>Having worked in the electronics retail industry for years now, I've seen scores of Smart devices come and go. Until now, nobody quite got it right. In the Echo Dot, Amazon has created a near perfect blend of hardware and software. </h3>
                    </div>
                    <div class="eco--single--slide">
                        <h3>Having worked in the electronics retail industry for years now, I've seen scores of Smart devices come and go. Until now, nobody quite got it right. In the Echo Dot, Amazon has created a near perfect blend of hardware and software. </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> 
<div class="eco--feature--area--1 eco--pd--100">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<div class="eco--feature--1">
                <h1 style={{marginBottom: 50}}>Почему именно мы?</h1>
					<div class="eco--single--feature--1">
						<span class="eco--feature--left">01</span>
						<div class="eco--feature--right">
							<h3>Большое количество специализаций</h3>
							<p>Огромное.</p>
						</div> 
					</div> 
					<div class="eco--single--feature--1">
						<span class="eco--feature--left">02</span>
						<div class="eco--feature--right">
							<h3>Уникальная система обучения</h3>
							<p>Уникальная.</p>
						</div> 
					</div> 
					<div class="eco--single--feature--1">
						<span class="eco--feature--left">03</span>
						<div class="eco--feature--right">
							<h3>Сертифицированные тьюторы</h3>
							<p>Умные.</p>
						</div> 
					</div> 
				</div> 
			</div>
		</div>
        <div class="eco--feature--image--1">
            <img src="assets/img/item-04.jpg" alt="" />
        </div>
	</div>
</div>

<div class="eco--feature--area--1 eco--pd--100">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<div class="eco--feature--1">
                <h1 style={{marginBottom: 50}}>Почему именно мы?</h1>
					<div class="eco--single--feature--1">
						<span class="eco--feature--left">01</span>
						<div class="eco--feature--right">
							<h3>Большое количество специализаций</h3>
							<p>Огромное.</p>
						</div> 
					</div> 
					<div class="eco--single--feature--1">
						<span class="eco--feature--left">02</span>
						<div class="eco--feature--right">
							<h3>Уникальная система обучения</h3>
							<p>Уникальная.</p>
						</div> 
					</div> 
					<div class="eco--single--feature--1">
						<span class="eco--feature--left">03</span>
						<div class="eco--feature--right">
							<h3>Сертифицированные тьюторы</h3>
							<p>Умные.</p>
						</div> 
					</div> 
				</div> 
			</div>
		</div>
        <div class="eco--feature--image--1">
            <img src="assets/img/item-04.jpg" alt="" />
        </div>
	</div>
</div>

<div class="eco--feature--area--1 eco--pd--100">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<div class="eco--feature--1">
                <h1 style={{marginBottom: 50}}>Почему именно мы?</h1>
					<div class="eco--single--feature--1">
						<span class="eco--feature--left">01</span>
						<div class="eco--feature--right">
							<h3>Большое количество специализаций</h3>
							<p>Огромное.</p>
						</div> 
					</div> 
					<div class="eco--single--feature--1">
						<span class="eco--feature--left">02</span>
						<div class="eco--feature--right">
							<h3>Уникальная система обучения</h3>
							<p>Уникальная.</p>
						</div> 
					</div> 
					<div class="eco--single--feature--1">
						<span class="eco--feature--left">03</span>
						<div class="eco--feature--right">
							<h3>Сертифицированные тьюторы</h3>
							<p>Умные.</p>
						</div> 
					</div> 
				</div> 
			</div>
		</div>
        <div class="eco--feature--image--1">
            <img src="assets/img/item-04.jpg" alt="" />
        </div>
	</div>
</div>
{/* <div class="eco--specification--1 eco--pd--100">
	<div class="container">
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
                <div class="eco--sec--title eco--small text-center">
                    <span>you will love eco to see</span>
                    <h1>Technical Details</h1>
                </div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-10 col-md-offset-1">
				<div class="eco--inner">
					<ul class="eco--specification--list--1 eco--mt100">
						<li> 
							<div class="eco--title">Size</div>
							<div class="eco--desc">1.3" x 3.3" x 3.3" (32 mm x 84 mm x 84 mm)</div>
						</li>
						<li> 
							<div class="eco--title">Weight</div>
							<div class="eco--desc">5.7 oz. (163 grams)</div>
						</li>
						<li> 
							<div class="eco--title">Wi-Fi <br /> Connectivity</div>
							<div class="eco--desc">Dual-band Wi-Fi supports 802.11 a/b/g/n (2.4 and 5 GHz) networks. Does not support connecting to ad-hoc (or peer-to-peer) Wi-Fi networks.</div>
						</li>
						<li> 
							<div class="eco--title">Bluetooth <br /> Connectivity</div>
							<div class="eco--desc">Advanced Audio Distribution Profile (A2DP) support for audio streaming from your mobile device to Echo Dot or from Echo Dot to your Bluetooth speaker.</div>
						</li>
						<li> 
							<div class="eco--title">Audio</div>
							<div class="eco--desc">Built-in speaker for voice feedback when not connected to external speakers. 3.5 mm stereo audio output for use with external speakers (audio cable not included).</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div> */}

<div class="eco--review--area--2 eco--pd--100 c6-bg eco--arrow--style--2">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="eco--review--slider--2">
                    <div class="eco--single--slide">
                        <div class="eco--inner">
                            <h1 class="eco--quote">“</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <div class="eco--review">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <h5>Delowar Hossain</h5>
                        </div>
                    </div>
                    <div class="eco--single--slide">
                        <div class="eco--inner">
                            <h1 class="eco--quote">“</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <div class="eco--review">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <h5>Ohidul Islam</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> <div class="eco--faq--area--1 eco--pd--100">
    <div class="container">
        <div class="row">
			<div class="col-md-10 col-md-offset-1">
                <div class="eco--sec--title eco--small text-center">
                    <span>Find what you really need</span>
                    <h1>Questions & Answers</h1>
                </div>
			</div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="eco--faq--1 eco--mt100 eco--pr50">
                    <div class="eco--single--faq">
                        <h4>Would 3 2nd gen echo dots in one 1000 square foot home sync with eachother or would there be issues?</h4>
                        <p>Another solution to avoid multiple devices responding is to use a different wake-up name for each. Currently we are limited to 3 choices: Alexa, Echo and Amazon. I have one Alexa and two first gen Dots. Each of the Dots are using "Echo" as their wake-up word and at opposite ends of the house, no prob.</p>
                    </div>
                    <div class="eco--single--faq">
                        <h4>Would 3 2nd gen echo dots in one 1000 square foot home sync with eachother or would there be issues?</h4>
                        <p>Another solution to avoid multiple devices responding is to use a different wake-up name for each. Currently we are limited to 3 choices: Alexa, Echo and Amazon. I have one Alexa and two first gen Dots. Each of the Dots are using "Echo" as their wake-up word and at opposite ends of the house, no prob.</p>
                    </div>
                    <a class="eco--more--faq" href="#">See more questions and answers</a>
                </div>
            </div>
            <div class="col-md-6">
                <div class="eco-faq-img eco--mt100">
                    <img src="assets/img/item-06.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
</div><div class="eco--brand--area--1">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <h6 class="eco--subtitle">We are featured in</h6>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 eco--pdb--100 eco--mt15">
                <div class="eco--brand--slider--1">
                    <a href="#" class="eco--single--slide">
                        <img src="assets/img/brand-1.jpg" alt="" />
                    </a>
                    <a href="#" class="eco--single--slide">
                        <img src="assets/img/brand-2.jpg" alt="" />
                    </a>
                    <a href="#" class="eco--single--slide">
                        <img src="assets/img/brand-3.jpg" alt="" />
                    </a>
                    <a href="#" class="eco--single--slide">
                        <img src="assets/img/brand-4.jpg" alt="" />
                    </a>
                    <a href="#" class="eco--single--slide">
                        <img src="assets/img/brand-5.jpg" alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</div><div class="eco--newsletter--area--1 c1-bg eco--pd--100">
    <div class="container">
		<div class="row">
			<div class="col-md-10 col-md-offset-1">
                <div class="eco--sec--title--white eco--small text-center">
                    <span>Get latest news in your inbox</span>
                    <h1>Subscribe now</h1>
                </div>
			</div>
		</div>
       <div class="row">
           <div class="col-md-8 col-md-offset-2 eco--mt70">
               <form action="//crazycafe.us13.list-manage.com/subscribe/post?u=8b098ef4cf6323e5b448b2b8b&amp;id=43e059c09c" class="eco--mc--form1">
                   <div class="eco--newsletter--1">
                       <div class="eco--inner">
                           <input type="email" placeholder="enter your email address" required="" />
                           <button type="submit">Subscribe Now &nbsp; <i class="fa fa-spinner fa-pulse hidden submitSpinner"></i></button>
                       </div>
                        <span class="eco--btm--txt"><i class="fa fa-lock"></i> &nbsp; we never share your email with others</span>
                   </div>
               </form>
           </div>
       </div>
    </div>
</div>
<div class="eco--footer eco--pd--100">
    <div class="container">
        <div class="row">
            <div class="col-sm-3">
                <div class="widget footer_widget">
                    <div class="eco--inner">
                        <p>Admiration we surrounded possession frequently Remarkably did increasing occasional too its difficulty far especially. You day real less till dear read. Considered use dispatched.</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="widget footer_widget">
                   <div class="eco--inner">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">Dhrubok</a></li>
                            <li><a href="#">Huuudai</a></li>
                            <li><a href="#">Ux-theme</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="widget footer_widget">
                    <div class="eco--inner">
                        <h4>Important</h4>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Testimonials</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="widget footer_widget">
                    <div class="eco--inner">
                        <h4>Contact</h4>
                        <ul>
                            <li>phone: <a href="tel: +313-450-4322">+313-450-4322</a></li>
                            <li>Email: <a href="mailto: eco@sitename.com">eco@sitename.com</a></li>
                            <li>Ny, USA</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
            </div>
        );
    }
}

export default Home;