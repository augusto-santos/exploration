import React, { Component } from 'react'
import s from './Sidemenu.css'

class Sidemenu extends Component{
  render(){
    return(
      <div className={`${s.wrapper_sidemenu}`}>
        <div className={`${s.topo_sidemenu}`}>
          <div className={`${s.button_icon}`}>
            <i className="material-icons">keyboard_backspace</i>
          </div>
          <div className={`${s.topo_title}`}>
            Disciplina Regular
          </div>
        </div>
        <div className={`${s.rate_wrapper}`}>
          <div className="stars_rate">
            <i className="material-icons">star_rate</i>
            <i className="material-icons">star_rate</i>
            <i className="material-icons">star_rate</i>
            <i className="material-icons">star_rate</i>
            <i className="material-icons">star_rate</i>
          </div>
          <div className="num_rate">9/10 <small>(1,578 reviews)</small></div>
        </div>
      </div> 
    )
  }
}

export default Sidemenu