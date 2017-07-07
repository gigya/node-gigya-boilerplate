import queryString from 'query-string'

const apiUrl = process.env.GIGYA_APIURL
const userKey = process.env.GIGYA_USER_KEY
const secret = process.env.GIGYA_SECRET

const gigya = (method, params, dataCenter) => {
  const auth = { userKey, secret }
  if (typeof (userKey) !== 'string') {
    throw Error
  }
  const qs = queryString.stringify(Object.assign(auth, params))
  if (dataCenter) {
    const url = `https://accounts.${dataCenter}.gigya.com/${method}?${qs}`
    return url
  } else {
    const url = `${apiUrl + method}?${qs}`
    return url
  }
}

export default gigya
