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
      if(config.method == 'get'){
        config.params.token = store.state.cookie.token
        config.params.uuid = store.state.cookie.uuid
      }
        return config
    })
    $axios.onError(error => {      
    	console.log(error)
    })
  }