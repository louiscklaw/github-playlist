

function helloworld(){
  console.log('helloworld')
  return 'helloworld'
}

function getAllRepoNames(all_repo_json){
  return all_repo_json.map(x => x.full_name)
}

export {
  helloworld,
  getAllRepoNames
}
