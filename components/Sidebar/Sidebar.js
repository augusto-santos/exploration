import React, { Component } from 'react'
import s from './Sidebar.css'

class Sidebar extends Component{
  render(){
    return(
      <aside className={`${s.wrapper_sidebar}`}>
        <div className={`${s.container_sidebar}`}>
          <div className={`${s.user_area}`}>
            <div className={`${s.avatar_user}`}></div>
          </div>
          <nav className={`${s.nav_wrapper}`}>
            <ul>
              <li className={`${s.active}`}>
                <i className="material-icons">content_paste</i>
              </li>
              <li>
                <i className="material-icons">event</i>
              </li>
              <li>
                <i className="material-icons">library_books</i>
              </li>
              <li>
                <i className="material-icons">equalizer</i>
              </li>
              <li>
                <i className="material-icons">folder_shared</i>
              </li>
              <li>
                <i className="material-icons">school</i>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    )
  }
}

export default Sidebar