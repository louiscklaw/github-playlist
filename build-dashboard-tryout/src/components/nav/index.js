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
    <>
    </>
  )
}

export default Navbar
