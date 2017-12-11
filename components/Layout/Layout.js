import React, { PropTypes } from 'react'
import Sidebar from '../Sidebar'
import s from './Layout.css'

function Layout(props) {
  return (
    <div className={s.root}>
      <Sidebar />  
      <main className={s.content}>
        <div {...props} className={`${props.className ? ` ${props.className}` : ''}`} />
      </main>
    </div>
  );
}

Layout.propTypes = { className: PropTypes.string };

export default Layout;
