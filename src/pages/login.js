import React from 'react'
import {Link} from 'react-router-dom'

import '../css/main.css'
import '../css/util.css'

class LogIn extends React.Component{
    render(){
        return(
            <div>
                <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-43">
						Войдите для продолжения
					</span>
					
					
					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" />
						<span class="focus-input100"></span>
						<span class="label-input100">Email</span>
					</div>
					
					
					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<input class="input100" type="password" name="pass" />
						<span class="focus-input100"></span>
						<span class="label-input100">Пароль</span>
					</div>

					<div class="flex-sb-m w-full p-t-3 p-b-32">
						<div class="contact100-form-checkbox">
							<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
							<label class="label-checkbox100" for="ckb1">
								Запомнить меня
							</label>
						</div>

						<div>
							<a href="#" class="txt1">
								Забыли пароль?
							</a>
						</div>
					</div>
			

					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Войти
						</button>
					</div>
					
					<div class="text-center p-t-46 p-b-20">
						<span class="txt2">
							Или <Link to={{pathname: "/signup", fromDashboard: false}} class="txt1">
                            зарегистрируйтесь
							</Link> прямо сейчас!
						</span>
					</div>

					<div class="login100-form-social flex-c-m">
						<a href="#" class="login100-form-social-item flex-c-m bg1 m-r-5">
							<i class="fa fa-facebook-f" aria-hidden="true"></i>
						</a>

						<a href="#" class="login100-form-social-item flex-c-m bg2 m-r-5">
							<i class="fa fa-google" aria-hidden="true"></i>
						</a>
					</div>
				</form>

				<div class="login100-more" >
				</div>
			</div>
		</div>
	</div>
            </div>
        );
    }
}

export default LogIn;