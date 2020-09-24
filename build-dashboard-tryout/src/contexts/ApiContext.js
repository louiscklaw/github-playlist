import React from 'react'

import {fetchAllRepos} from '../api/fetchAllRepos'


const default_value ={
  hello:'world',
  hello_func: () => {},
  active_style:{},
  lookUpStyleName: () => {}
}
const ApiContext = React.createContext(default_value)

function ApiContextProvider(props){
  const [hello, setHello] = React.useState(null)

  const test = fetchAllRepos()
  console.log(test)

  return(
    <ApiContext.Provider value={{
      hello, setHello,
    }}>
      {props.children}
    </ApiContext.Provider>
  )

}

export default ApiContext

export {ApiContextProvider}
