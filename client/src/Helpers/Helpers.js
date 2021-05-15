export const makeRequest = (uri, data = null, method = 'GET') => {
  return new Promise((resolve, reject) => {
    const body = data ? JSON.stringify(data) : null

    fetch(uri, {
      method: method ? method : (data) ? 'PUT' : 'GET',
      headers: data ? {'Content-type': 'application/json'} : {},
      body
    })
    .then(async res => {
      const json = await res.json()

      if (res.status !== 200) {
        alert(`ERROR ${json.msg}`)
        return reject(json.msg)
      }

      resolve(json) 
    })
    .catch(err => reject(`Connection error (${err.message})`))
  })
}