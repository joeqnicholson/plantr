import React from 'react'
import './splash_page.css'
class SplashPage extends React.Component{
    render(){
      return(
        <div className='homepage'>
          <div className='main-content'>
              <div className= 'image-background'>
                  <div className='plantr-center-wrapping'>
                      <div className='plantr-logo'></div>
                      <div className='plantr-text-logo'></div>
                  </div>
              </div>
          </div>
        </div>
      ) 
  }
}
export default SplashPage
