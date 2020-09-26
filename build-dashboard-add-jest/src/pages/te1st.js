import React from 'react'

function fetchAllRepos(){
  return fetch('/all_repos.json')
    .then(r => r.json())
}

function TestBox(){
  console.log(fetchAllRepos())
  let [result, setResult] = React.useState()

  React.useEffect(()=>{
    fetchAllRepos()
      .then(r_json => {
        setResult(JSON.stringify(r_json, null, 2))
      })
  })

  return(
    <>
      <pre>
        {result}
      </pre>
    </>
  )
}

export default TestBox
