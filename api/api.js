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
export const ask = (msg) => {
  return axios.request({
    method: 'get',
    url: '/jy/ask',
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
export const put = (name) => {
  return axios.request({
    method: 'get',
    url: '/front/flow/sign',
    params: name
  })
}
export const send = (name) => {
  return axios.request({
    method: 'post',
    url: '/flow/send',
    params: name
  })
}
export const check = (name) => {
  return axios.request({
    method: 'post',
    url: '/flow/sure',
    params: name
  })
}
export const jiameng = (msg) => {
  return axios.request({
    method: 'post',
    url: '/api/map/cooperate',
    data: msg
  })
}
export const comm = (msg) => {
  return axios.request({
    method: 'post',
    url: '/flow/comment/save',
    params: msg
  })
}
export const delcomm = (msg) => {
  return axios.request({
    method: 'post',
    url: '/flow/comment/delete',
    params: msg
  })
}
export const likecomm = (msg) => {
  return axios.request({
    method: 'post',
    url: '/flow/comment/like',
    params: msg
  })
}

