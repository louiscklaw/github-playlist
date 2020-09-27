function helloworld(){
  return 'helloworld'
}

function getAllRepoNames(all_repo_json){
  if (typeof all_repo_json !== 'undefined'){
    return all_repo_json.map(x => x.full_name)
  }else{
    return ['louiscklaw/github-playlist']
  }
}

export {
  helloworld,
  getAllRepoNames
}
