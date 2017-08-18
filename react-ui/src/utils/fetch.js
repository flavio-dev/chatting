import 'whatwg-fetch'

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  throw new Error(response.statusText)
}

export const whatwgFetch = (url, options) => {
  return fetch(url, options)
    .then(response => {
      return checkStatus(response).text()
    })
    .then(body => JSON.parse(body))
}

export default whatwgFetch
