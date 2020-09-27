import React from 'react'

import { fetchAllReposJson } from '../api/fetchAllReposJson'

const default_value ={
  hello:'world',
  hello_func: () => {},
}
const ApiContext = React.createContext(default_value)

function ApiContextProvider(props){
  const [hello, setHello] = React.useState(null)
  const [all_repo_json, setAllRepoJson] = React.useState([])
  const [all_repo_names, setAllRepoNames] = React.useState(null)

  React.useState(()=>{
    fetchAllReposJson()
      .then(r_json => {
        setAllRepoJson(r_json)
      })
  },[])

  return(
    <ApiContext.Provider value={{
      hello, setHello,
      all_repo_json
    }}>
      {props.children}
    </ApiContext.Provider>
  )

}

export default ApiContext

export {ApiContextProvider}
