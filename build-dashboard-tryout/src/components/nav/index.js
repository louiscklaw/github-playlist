import React from 'react'
import {Link} from 'gatsby'


import {combineStyles} from '../../utils/common'

import active_style from '../../scss/flatly/bulmaswatch.module.scss'

function Navbar(props){
  const location_href = typeof window !== undefined ? window.location.href: ''

  const navbarItemDashboardActive=location_href.search('dashboard') > 0
  const navbarItembranchFailStatisticsActive=location_href.search('branch_fail_statistics') > 0
  const navbarItemAboutActive=location_href.search('about') > 0

  return(
    <nav className={active_style.navbar} role="navigation" aria-label="main navigation">
      <div className={active_style.navbarBrand}>
        <a className={active_style.navbarItem} href="https://bulma.io">
          <img src="//bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

        <a role="button" className={[active_style.navbarBurger, active_style.burger]} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={active_style.navbarMenu}>
        <div className={active_style.navbarStart}>

          <Link to="/dashboard" className={combineStyles([active_style.navbarItem, navbarItemDashboardActive ? active_style.isActive: "" ])}>
            Dashboard
          </Link>
          <Link to="/branch_fail_statistics" className={combineStyles([
            active_style.navbarItem,
            navbarItembranchFailStatisticsActive ? active_style.isActive: ""
          ])}>branch_fail_statistics</Link>

          <Link to="/about" className={combineStyles([
            active_style.navbarItem,
            navbarItemAboutActive ? active_style.isActive: ""
          ])}>about</Link>

          {/*
            <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
              <a className={active_style.navbarLink}>
                More
              </a>

              <div className={active_style.navbarDropdown}>
                <a className={active_style.navbarItem}> About </a>


                <hr className={active_style.navbarDivider} />

                <a className={active_style.navbarItem}> Report an issue </a>

              </div>
            </div>
          */}

        </div>

        <div className={active_style.navbarEnd}>
          <div className={active_style.navbarItem}>
            <div className={active_style.buttons}>

              <Link to="/sign_up" className={combineStyles([active_style.button, active_style.isPrimary])}>
                <strong>Sign up</strong>
              </Link>

              <Link to="/log_in" className={combineStyles([active_style.button, active_style.isLight])}>
                Log in
              </Link>

            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
