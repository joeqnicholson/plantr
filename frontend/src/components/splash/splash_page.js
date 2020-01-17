import React from 'react'
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import './splash_page.css'
import { fetchAllPlants } from "../../actions/plant_actions"

class SplashPage extends React.Component{
  componentWillUnmount () {
    this.props.fetchAllPlants();
  }

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



const mdp = dispatch => ({
  fetchAllPlants: () => dispatch(fetchAllPlants())
});


export default connect(null, mdp)(SplashPage)