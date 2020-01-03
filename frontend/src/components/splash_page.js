import React from 'react'
import {Link} from 'react-router-dom';
import './splash_page.css'
class SplashPage extends React.Component{
    render(){
      return(
        <div className='homepage'>
          <div className='main-content'>
              <div className= 'image-background'>
                  <div className='plantr-center-wrapping'>
                  <Link to='/signup'><div className='plantr-logo'></div></Link>
                      <div className='plantr-text-logo'></div>
                  </div>
              </div>
          </div>
        </div>
      ) 
  }
}
export default SplashPage
