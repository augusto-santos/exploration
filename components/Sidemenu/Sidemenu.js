import React, { Component } from 'react'
import s from './Sidemenu.css'

class Sidemenu extends Component{
  render(){
    return(
      <div className={`${s.wrapper_sidemenu}`}>
        <div className={`${s.topo_sidemenu}`}>
          <div className={`${s.topo_back}`}>
            <i className="material-icons">keyboard_backspace</i>
          </div>
          <div className="topo_title">
            ahue title
          </div>
        </div>
      </div> 
    )
  }
}

export default Sidemenu