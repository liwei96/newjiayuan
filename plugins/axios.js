export default function ({
    store,
    redirect,
    app: {
      $axios
    }
  }) {
    // 数据访问前缀
    // $axios.defaults.baseURL = 'http://ll.edefang.net/'
  
    $axios.onRequest(config => {
      if (config.method == 'get') {
        config.params.host = store.state.hostname
        config.params.token = store.state.cookie.token
        config.params.uuid = store.state.cookie.uuid
        config.params.pinyin = store.state.pinyin
      }
        return config
    })
    $axios.onError(error => {      
    	console.log(error)
    })
  }