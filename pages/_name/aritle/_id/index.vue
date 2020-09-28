<template>
  <div id="aritle">
    <header>
      <img class="back" src="~/assets/goback.png" alt @click="back" />
      <img class="logo" src="~/assets/logo.png" alt />
      <img src="~/assets/mapcai.png" alt class="list" @click="btn"/>
      <ul class="cailist" v-if="list">
        <li class="cmn">
          <router-link :to="'/' + jkl">
            <span></span>
            <img src="~/assets/barhome.png" />
            <p>首 页</p>
          </router-link>
        </li>
        <li>
          <router-link :to="'/' + jkl + '/search'">
            <img src="~/assets/barsearch.png" />
            <p>楼盘查询</p>
          </router-link>
        </li>
        <li>
          <router-link :to="'/' + jkl + '/home'">
            <img src="~/assets/barsearch.png" />
            <p>个人中心</p>
          </router-link>
        </li>
        <li>
          <router-link :to="'/' + jkl + '/weike/before/56'">
            <img src="~/assets/barke.png" />
            <p>买房百科</p>
          </router-link>
        </li>
        <li>
          <router-link :to="'/' + jkl + '/infos/46'">
            <img src="~/assets/barxun.png" />
            <p>房产资讯</p>
          </router-link>
        </li>
      </ul>
    </header>
    <div class="con">
      <h3>{{ article.title }}</h3>
      <p class="time">
        发布： {{ article.begin }}
        <span>来源：{{ article.source }}</span>
        <i>浏览： {{ article.visit_num }}</i>
      </p>
      <div class="pop">
        <span>摘要：</span>
        {{ article.description }}
      </div>
      <div class="ari" v-html="article.content"></div>
      <div class="type" v-if="article.tags.length">
        标签：
        <span v-for="(item, key) in article.tags" :key="key">{{ item }}</span>
      </div>
      <p class="icon">
        <img src="~/assets/typeicon.png" alt />
        买房资格
      </p>
      <div class="agre" @click="like">
        <img src="~/assets/noclick.png" alt />
        <p>{{ article.like_num }}</p>
      </div>
      <p class="free">
        <span>免责声明：</span>
        凡本站注明
        “来自：XXX(非家园网)”的资讯稿件和图片作品，系本站转载自其它媒体，转载目的在于信息传递，并不代表本站赞同其观点和对其真实性负责。如有资讯稿件和图片作品的内容、版权以及其它问题的，请联系本站，电话：400-718-6686
      </p>
      <div class="other">
        <h4>大家都在看</h4>
        <template v-for="(item, key) in others">
          <nuxt-link :key="key" :to="'/' + jkl + '/aritle/' + item.id">
            <div class="pro">
              <div class="left">
                <h5>{{ item.title }}</h5>
                <p>
                  <span v-for="(val, k) in item.tags" :key="k">{{ val }}</span>
                </p>
              </div>
              <div class="right">
                <img :src="item.img" alt />
              </div>
            </div>
          </nuxt-link>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { infolike } from '@/api/api'
export default {
  async asyncData(context) {
    let other = context.store.state.cookie.other;
    let city = context.store.state.city;
    let token = context.store.state.cookie.token;
    let jkl = context.params.name;
    let id = context.params.id;
    let [res] = await Promise.all([
      context.$axios
        .get("/jy/phone/article/detail", {
          params: {
            id: id,
            other: other,
            city: city,
          },
        })
        .then((resp) => {
          let data = resp.data;
          // data.article.content = decodeURIComponent(data.article.content);
          //   console.log(data)
          return data;
        }),
    ]);
    return {
      jkl: jkl,
      article: res.article,
      others: res.others,
    };
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          name: "description",
          content:
            "家园新房"
        },
        {
          name: "keywords",
          content: "家园新房"
        }
      ]
    };
  },
  data() {
    return {
      article: {},
      others: [],
      list:false
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    btn(){
      if(this.list){
        this.list=false
      }else{
        this.list= true
      }
    },
    like(){
      let token = $cookies.get("token");
      let id = this.article.id
      if (token) {
        infolike({ token: token, id: id }).then((res) => {
          if (res.data.code == 200) {
            if(this.article.my_like){
              this.article.like_num = this.article.like_num-1
              this.toast('取消成功')
            }else{
              this.article.like_num = this.article.like_num+1
              this.toast('点赞成功')
            }
          }
        });
      } else {
        let url = this.$route.path;
        sessionStorage.setItem("path", url);
        this.$router.push("/" + this.jkl + "/login");
      }
    }
  },
};
</script>
<style lang="less" scoped>
header {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2.75rem;
  z-index: 1;
  background-color: #fff;
  // position: relative;
  .back {
    width: 1.25rem;
    margin-left: 1rem;
  }
  .logo {
    width: 3.125rem;
  }
  .home {
    width: 1.25rem;
    margin-right: 1rem;
  }
  .list {
    width: 1.25rem;
    margin-right: 4%;
  }
  .cailist {
    width: 9.375rem;
    background: rgba(41, 41, 41, 0.9);
    position: absolute;
    top: 2.5rem;
    border-radius: 0.375rem;
    z-index: 20000;
    right: 4%;
    li {
      position: relative;
      color: #e6e6e6;
      font-size: 0.9375rem;
      line-height: 3.125rem;
      a {
        width: 100%;
        display: flex;
        align-items: center;
      }
      p {
        border-bottom: 0.5px solid #545454;
        flex: 1;
        color: #e6e6e6;
      }
      img {
        width: 1.125rem;
        margin: 0;
        margin-left: 1.625rem;
        margin-right: 0.875rem;
        height: 1.125rem;
      }
    }
    .cmn {
      span {
        display: block;
        border: 0.4375rem solid transparent;
        border-bottom-color: rgba(41, 41, 41, 0.9);
        position: absolute;
        top: -0.875rem;
        right: 0.625rem;
      }
    }
  }
}
.con {
  margin-top: 2.75rem;
  padding: 0 4%;
  h3 {
    color: rgba(50, 50, 51, 1);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.8125rem;
    padding-top: 0.625rem;
    margin-bottom: 1rem;
  }
  .time {
    color: rgba(150, 151, 153, 1);
    font-size: 0.8125rem;
    margin-bottom: 1.125rem;
    span {
      margin-left: 1rem;
    }
    i {
      font-style: normal;
      float: right;
    }
  }
  .pop {
    background: rgba(247, 247, 247, 1);
    border-radius: 0.25rem;
    padding: 0.9375rem 0.875rem;
    color: rgba(98, 100, 102, 1);
    font-size: 0.875rem;
    line-height: 1.5rem;
    span {
      color: rgba(64, 162, 244, 1);
    }
  }
  /deep/.ari {
    padding-top: 1.25rem;
    p {
      color: #2f3133;
      font-size: 0.9375rem;
      line-height: 1.75rem;
    }
    img {
      width: 100%;
    }
  }
  .type {
    color: rgba(47, 49, 51, 1);
    font-size: 0.9375rem;
    margin-top: 1.25rem;
    
    span {
      color: rgba(150, 151, 153, 1);
      margin-right: 0.6875rem;
    }
  }
  .icon {
    margin-top: 1.125rem;
    color: #2f3133;
    font-size: 0.9375rem;
    margin-bottom: 1.25rem;
    img {
      width: 1rem;
    }
  }
  .agre {
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 50%;
    border: 0.03125rem solid #e8e9ed;
    text-align: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 1.25rem;
    img {
      width: 1.125rem;
      margin-top: 0.75rem;
    }
    p {
      color: #797e86;
      font-size: 0.75rem;
    }
  }
  .free {
    border: 0.0625rem dashed #ededed;
    padding: 0.625rem 0.875rem;
    border-radius: 0.375rem;
    color: #969799;
    font-size: 0.75rem;
    line-height: 1.25rem;
    margin-bottom: 1.75rem;
    span {
      color: #2f3133;
    }
  }
  .other {
    h4 {
      color: #2f3133;
      font-size: 1rem;
      margin-bottom: 1.375rem;
    }
    .pro {
      display: flex;
      height: 4.375rem;
      margin-bottom: 0.625rem;
      .left {
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
        }
        p {
          position: absolute;
          bottom: 0.4375rem;
          span {
            padding: 0.15625rem 0.3125rem 0.1875rem 0.3125rem;
            border-radius: 0.125rem;
            background-color: #f5f5f5;
            color: #626466;
            font-size: 0.625rem;
            margin-right: 0.5rem;
          }
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
}
</style>