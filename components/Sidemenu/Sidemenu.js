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
      </div> 
    )
  }
}

export default Sidemenu