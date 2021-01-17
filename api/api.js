import axios from 'axios'

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  // 处理请求之前的配置
  if (config.method == 'get') {
    config.params.uuid = $cookies.get('uuid')
  } else {
    if (config.data) {
      config.data.uuid = $cookies.get('uuid')
    } else {
      config.params.uuid = $cookies.get('uuid')
    }
  }
  return config
}, function (error) {
  // 请求失败的处理
  return Promise.reject(error)
})

export const aritles = (msg) => {
  return axios.request({
    method: 'get',
    url: '/jy/article/info',
    params: msg
  })
}
export const luck = (msg) => {
  return axios.request({
    method: 'post',
    url: '/jy/prize/draw',
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
export const answer = (msg) => {
  return axios.request({
    method: 'post',
    url: '/jy/question/answer',
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
export const collect = (msg) => {
  return axios.request({
    method: 'post',
    url: '/jy/collect',
    params: msg
  })
}
export const souname = (name, k, city) => {
  return axios.request({
    method: 'get',
    url: '/api/project/e_search',
    params: {
      'name': name,
      page: k,
      limit: 10,
      city: city
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
export const search_start = (msg) => {
  return axios.request({
    method: 'post',
    url: '/api/project/search',
    data: msg
  })
}
export const mapSearch = (msg) => {
  return axios.request({
    method: 'post',
    url: '/api/map/area',
    data: msg
  })
}
export const index_start = (msg) => {
  return axios.request({
    method: 'post',
    url: '/api/location/get_city',
    data: msg
  })
}
export const content_data = (msg) => {
  return axios.request({
    method: 'post',
    url: '/api/project/detail',
    data: msg
  })
}
export const mapProject = (msg) => {
  return axios.request({
    method: 'post',
    url: '/api/map/detail',
    data: msg
  })
}
export const agreeanswer = (msg) => {
  return axios.request({
    method: 'post',
    url: '/jy/question/like',
    params: msg
  })
}
export const commentback = (msg) => {
  return axios.request({
    method: 'post',
    url: '/flow/comment/save',
    params: msg
  })
}
export const heng = (msg) => {
  return axios.request({
    method: 'post',
    url: '/api/custom/identity',
    params: msg
  })
}
export const infolike = (msg) => {
  return axios.request({
    method: 'post',
    url: '/jy/article/like',
    params: msg
  })
}
export const activity = (msg) => {
  return axios.request({
    method: 'get',
    url: '/jy/mobile/activity_info',
    params: msg
  })
}
export const discount = (msg) => {
  return axios.request({
    method: 'get',
    url: '/jy/mobile/discount/info',
    params: msg
  })
}
export const list = (msg) => {
  return axios.request({
    method: 'get',
    url: '/jy/mobile/discount/list',
    params: msg
  })
}
export const get = (id, other) => {
  return axios.request({
    method: 'get',
    url: '/detail',
    params: {
      id: id,
      other: other
    }
  })
}

export const msg = (msg) => {
  return axios.request({
    method: 'post',
    url: '/front/flow/send',
    data: msg
  })
}

export const verification = (msg) => {
  return axios.request({
    method: 'post',
    url: '/front/flow/sure',
    data: msg
  })
}


export const top_sure = (msg) => {
  return axios.request({
    method: 'post',
    url: '/front/flow/sign',
    data: msg
  })
}