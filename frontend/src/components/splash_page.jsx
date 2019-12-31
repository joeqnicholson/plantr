import React from 'react'
import './splash_page.css'
class SplashPage extends React.Component{
    render(){
      return(
        <div class='homepage'>
            <div class='navbar'>
                <div class='login-prompt'>
                    <button class='login-button'>
                        Login
                    </button>
                </div>
                <div class='signup-prompt'>
                    <button class='signup-button'>
                        Signup 
                    </button>
                </div>
            </div>
                <div class='main-content'>
                    <div class= 'image-background'>
                            <div class='plantr-center-wrapping'>
                                <div class='plantr-logo'></div>
                                <div class='plantr-text-logo'></div>
                            </div>
                    </div>
                </div>
        </div>
      ) 
  }
}
export default SplashPage
