import axios from 'axios'

axios.defaults.withCredentials = true;


export const aritles = (msg) => {
  return axios.request({
    method: 'get',
    url: '/jy/article/info',
    params: msg
  })
}
export const dynamics = (msg) => {
  return axios.request({
    method: 'get',
    url: '/jy/dynamic/info/phone',
    params: msg
  })
}
export const questions = (msg) => {
  return axios.request({
    method: 'get',
    url: '/jy/question/list/phone',
    params: msg
  })
}
export const comments = (msg) => {
  return axios.request({
    method: 'get',
    url: '/jy/comments/phone',
    params: msg
  })
}
export const address_start = (msg) => {
  return axios.request({
    method: 'post',
    url: '/api/first/city',
    data: msg
  })
}
export const pros = (msg) => {
  return axios.request({
    method: 'get',
    url: '/jy/search/info',
    params: msg
  })
}
export const souname = (name) => {
  return axios.request({
    method: 'get',
    url: '/api/project/e_search',
    params: {
      'name': name
    }
  })
}
export const souari = (name) => {
  return axios.request({
    method: 'get',
    url: '/api/article/e_search',
    params: name
  })
}


