<template>
  <div id="searchari">
    <div class="input">
      <img src="~/assets/goback.png" alt class="back" @click="back"/>
      <input type="text" placeholder="搜搜你想要了解的房产知识吧" v-model="name" />
      <img class="search" src="~/assets/search.png" alt />
      <span>搜索</span>
    </div>
    <div class="con" v-if="!isnull">
      <h3><img src="~/assets/search-hot.png">最近热搜</h3>
      <template v-for="(item,key) in recommends">
        <nuxt-link :to="'/'+jkl+'/info/'+item.id" :key="key" v-if="key<4">
          <div class="pro">
            <div class="left">
              <h5>{{item.title}}</h5>
              <p>
                {{item.source}} &nbsp; {{item.begin.substr(0,10)}}
              </p>
            </div>
            <div class="right">
              <img :src="item.img?item.img:img" alt />
            </div>
          </div>
        </nuxt-link>
      </template>
    </div>
    <div class="con list" v-if="isnull">
      <p class="tit">共为您搜索到<span>{{num}}</span>条关于“<span>{{name}}</span>”的资讯</p>
      <template v-for="(item,key) in list">
        <nuxt-link :to="'/'+jkl+'/info/'+item.id" :key="key">
          <div class="pro">
            <div class="left">
              <h5 v-html="item.replace.title.indexOf('em')!=-1?item.replace.title:item.replace.description"></h5>
              <p>
                {{item.source}} &nbsp; {{item.time.substr(0,10)}}
              </p>
            </div>
            <div class="right">
              <img :src="item.img?item.img:img" alt />
            </div>
          </div>
        </nuxt-link>
      </template>
    </div>
  </div>
</template>
<script>
import { souari } from "@/api/api";
import '@/static/css/foot.css'
export default {
  async asyncData(context) {
    let id = context.params.id;
    let token = context.store.state.cookie.token;
    let city = context.store.state.city;
    let jkl = context.params.name;
    let other = context.query.other;
    let [res,res1] = await Promise.all([
      context.$axios
        .get("/jy/article/recommends", {
          params: {
            city: city,
            token: token,
            limit: 10,
            page: 1,
          },
        })
        .then((resp) => {
          let data = resp.data;
          return data;
        }),
      context.$axios
        .get("/jy/phone/head/foot", {
          params: {
            city: city,
            token: token,
          },
        })
        .then((resp) => {
          let data = resp.data;
          return data;
        }),
    ]);
    return {
      jkl: jkl,
      id: id,
      recommends: res.recommends,
      title:res1.common.header.title,
      description:res1.common.header.description,
      keywords:res1.common.header.keywords
    };
  },
  head() {
    return {
      title: this.title || "家园新房-文章搜索",
      meta: [
        {
          name: "description",
          content: this.description || 
            "家园新房"
        },
        {
          name: "keywords",
          content: this.keywords || "家园新房"
        }
      ]
    };
  },
  data() {
    return {
      list: [],
      jkl: "",
      id: 0,
      name: "",
      isnull: false,
      num:0,
      img:require('~/assets/default-info.png'),
      page:2,
      isok:true
    };
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
    sou() {
      let that = this
      let name = this.name;
      if (name) {
        this.isnull = true;
        souari({name:name,page:1,limit:10}).then(res=>{
          if(res.data.code == 200){
            that.list = res.data.data
            that.num = res.data.total
          }
        })
      } else {
        this.isnull = false;
      }
    },
    getmore() {
      let that = this;
      var scrollTop = window.scrollY;
      var scrollHeight = window.screen.availHeight;
      var windowHeight = document.body.scrollHeight;
      if (scrollTop + scrollHeight >= windowHeight) {
        if (that.isok &&that.name) {
          that.isok = false;
          souari({ name: that.name, page: that.page, limit: 10 }).then((res) => {
            that.isok = true;
            that.list = that.list.concat(res.data.data);
            that.page = that.page+1
          });
        }
      }
    },
  },
  mounted() {
    document.getElementById('foott').style.display = 'none'
    window.addEventListener("scroll", this.getmore);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.getmore);
    document.getElementById('foott').style.display = 'block'
  },
  watch: {
    name(val) {
      this.sou()
    },
  },
};
</script>
<style lang="less" scoped>
li {
  list-style: none;
}
.input {
  height: 2.5rem;
  padding: 0.25rem 4%;
  position: relative;
  
  input {
    border: 0;
    outline: none;
    width: 13.75rem;
    height: 2rem;
    margin-top: 0.25rem;
    border-radius: 0.25rem;
    background-color: rgba(245, 245, 245, 1);
    padding-left: 2rem;
  }
  ::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #959799;
    font-size: 0.875rem;
  }

  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #959799;
    font-size: 0.875rem;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #959799;
    font-size: 0.875rem;
  }
  .search {
    width: 1rem;
    position: absolute;
    top: 0.9rem;
    left: 3.4rem;
  }
  .back {
    width: 1rem;
    margin-right: 0.625rem;
  }
  span {
      color: #181819;
      font-size: 1rem;
      margin-left: 1.25rem;
  }
}
.con {
  padding: 0 4%;
  margin-top: 2.125rem;
  h3 {
    color: #191919;
    font-size: 0.9375rem;
    margin-bottom: 1.7rem;
    font-weight: 400;
    img {
        width: 1.125rem;
        margin-bottom: -0.125rem;
        margin-right: 0.375rem;
    }
  }
  .tit {
    color: #2F3133;
    font-size: 0.875rem;
    margin-bottom: 1.125rem;
    span {
      color: #FF3F3F;
    }
  }
  .pro {
    display: flex;
    height: 4.375rem;
    margin-bottom: 0.625rem;
    /deep/.left {
      position: relative;
      margin-right: 1.25rem;
      width: 14.0625rem;
      h5 {
        color: #2f3133;
        font-size: 0.875rem;
        line-height: 1.3125rem;
        font-weight: 400;
        position: relative;
        top: -0.25rem;
        height: 2.625rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        em {
          font-style: normal;
          color: #ff3f3f;
        }
      }
      p {
        position: absolute;
        bottom: 0.4375rem;
        color: #959799;
        font-size: 0.6875rem;
      }
    }
    .right {
      img {
        width: 6.25rem;
        height: 4.375rem;
        border-radius: 0.1875rem;
      }
    }
  }
}
.list {
  margin-top: 1.875rem;
}
</style>