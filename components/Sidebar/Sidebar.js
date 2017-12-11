import React, { Component } from 'react'
import Link from '../Link'
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
              <Link to="/" className={`${s.active} ${s.sidebar_items}`}>
                <i className="material-icons">content_paste</i>
              </Link>
              <Link to="/" className={`${s.sidebar_items}`}>
                <i className="material-icons">event</i>
              </Link>
              <Link to="/" className={`${s.sidebar_items}`}> 
                <i className="material-icons">library_books</i>
              </Link>
              <Link to="/" className={`${s.sidebar_items}`}>
                <i className="material-icons">equalizer</i>
              </Link>
              <Link to="/" className={`${s.sidebar_items}`}>
                <i className="material-icons">folder_shared</i>
              </Link>
              <Link to="/" className={`${s.sidebar_items}`}>
                <i className="material-icons">school</i>
              </Link>
            </ul>
          </nav>
        </div>
      </aside>
    )
  }
}

export default Sidebar