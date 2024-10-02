import axios from "axios";
import {getCookie, setCookie} from "./cookieUtil.jsx";
import {MEMBER} from "../api/config.js";

const jwtAxios = axios.create()

const refreshJwt = async (accessToken, refreshToken) => {
  const header = {headers: {'Authorization': `Bearer ${accessToken}`}}
  const res = await axios.post(`${MEMBER}/refresh`, {refreshToken}, header)

  return res.data
}

const beforeReq = (config) => {
  console.log('before request..........')
  const memberInfo = getCookie('member');
  if (!memberInfo) {
    console.log('MEMBER NOT FOUND')
    return Promise.reject(
        {
          response: {
            data: {ERROR: "REQUIRED_LOGIN"}
          }
        }
    )
  }
  const {accessToken} = memberInfo
  console.log('--------------------' + accessToken)
  config.headers.Authorization = `Bearer ${accessToken}`
  return config
}

const requestFail = (err) => {
  console.log('request error-------------')
  return Promise.reject(err)
}

const beforeRes = async (res) => {
  console.log('before return response ...........')

  const data = res.data

  if (data && data.ERROR === 'ERROR_ACCESS_TOKEN') {
    const memberCookieValue = getCookie('member')
    const result = await refreshJwt(memberCookieValue.accessToken,
        memberCookieValue.refreshToken)
    memberCookieValue.accessToken = result.accessToken
    memberCookieValue.refreshToken = result.refreshToken

    setCookie('member',JSON.stringify(memberCookieValue),1)

    const originalRequest = res.config
    originalRequest.headers.Authorization = `Bearer ${result.accessToken}`
    return axios(originalRequest);
  }

  return res
}

const responseFail = (err) => {
  console.log('response fail error-----------')
  return Promise.reject(err)
}

jwtAxios.interceptors.request.use(beforeReq, requestFail)
jwtAxios.interceptors.response.use(beforeRes, responseFail)

export default jwtAxios