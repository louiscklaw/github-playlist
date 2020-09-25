
function fetchJson(json_path){
  return fetch(json_path)
    .then(r => r.json())
}

export {fetchJson}
