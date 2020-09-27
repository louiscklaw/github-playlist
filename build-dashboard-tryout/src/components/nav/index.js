import React from 'react'
import {Link} from 'gatsby'

import active_style from '../../scss/flatly/bulmaswatch.module.scss'

import {combineStyles} from '../../utils/common'

import {entry_href, first_page} from '../../config'

function Navbar(props){
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
        <a className={active_style.navbarItem} href={first_page}>
          Github build dashboard
        </a>

        <a role="button" className={[active_style.navbarBurger, active_style.burger]} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={active_style.navbarMenu}>
        <div className={active_style.navbarStart}>

          <Link to='dashboard'
            className={combineStyles([active_style.navbarItem, checkActivePage('dashboard')])} >
            Dashboard
          </Link>
          <Link to='list_failed_branches'
            className={combineStyles([active_style.navbarItem, checkActivePage('list_failed_branches')])} >
            list failed branches
          </Link>
          <Link to='branch_fail_statistics'
            className={combineStyles([active_style.navbarItem, checkActivePage('branch_fail_statistics')])} >
            branch fail statistics
          </Link>
          <Link to='list_failed_branch_live'
            className={combineStyles([active_style.navbarItem, checkActivePage('list_failed_branch_live')])} >
            list failed branch (live)
          </Link>
          <Link to='documentation'
            className={combineStyles([active_style.navbarItem, checkActivePage('documentation')])} >
            documentation
          </Link>

        </div>


        <div className={active_style.navbarEnd}>
          <div className={active_style.navbarItem}>
            <div className={active_style.buttons}>
              <a className={combineStyles([active_style.button, active_style.isPrimary])}>
                <i class="fab fa-github-square"></i>
                <strong>Source</strong>
              </a>

              <a className={combineStyles([active_style.button, active_style.isPrimary])}>
                <strong>Sign up</strong>
              </a>
              <a className={combineStyles([active_style.button, active_style.isLight])}>
                Log in
              </a>
            </div>
          </div>
        </div>

      </div>

    </nav>
  )
}

export default Navbar
