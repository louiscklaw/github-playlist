import React from 'react'
import {Link} from 'gatsby'

import ThemeContext from '../../contexts/ThemeContext'
import {combineStyles} from '../../utils/common'

function Navbar(props){
  const {active_style} = React.useContext(ThemeContext)

  const checkActivePage = (page_href) =>{
    if (typeof window !== `undefined`){
      var temp = '.+'+page_href+'$'
      var re = new RegExp(temp,'g')
      if (window.location.href.search(re) == 0){
        return active_style.isActive
      }else{
        return ''
      }
    }
  }

  return(
    <nav className={active_style.navbar} role="navigation" aria-label="main navigation">
      <div className={active_style.navbarBrand}>
        <a className={active_style.navbarItem} href="https://louiscklaw.github.io/github-playlist/">
          Github build dashboard
        </a>

        <a role="button" className={[active_style.navbarBurger, active_style.burger]} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>



    </nav>
  )
}

export default Navbar
