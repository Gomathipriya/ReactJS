import React from 'react';
import LoginComponent from './LoginComponent.jsx';
import RegComponent from './RegComponent.jsx';

const NavComponent = React.createClass({
	getInitialState:function(){
    return {register:false,login:true}
  },
  switch:function(word){
    var register,login;
    if(word == "register"){register = true;login = false;}
    else{login = true; register = false;}
    return this.setState({login:login,register:register})
    
  },
  render:function(){
    
        var self = this;
        return (
             <div>
				<div className="top-bar">
					<div className="top-bar-left">
						<label> Navigation Bar</label>
					</div>
					<div className="top-bar-right">
						<button id="registerButton" onClick={self.switch.bind(null,"register")}>Register</button>
						<button id="loginButton" onClick={self.switch.bind(null,"login")}> Login</button>
					</div>
				</div>
                <div className="mainDiv">
                   {self.state.register?<RegComponent/> : null}
                   {self.state.login? <LoginComponent/> : null}
				</div>
				<div className= "successDiv">
					hi
				</div>
             </div>
        
        )
  }
});
  export default NavComponent;