<template>
  <div id="searchname">
    <header>
      <img class="back" src="~/assets/goback.png" alt @click="back" />
      <input type="text" placeholder="请输入楼盘名称" v-model="name" />
      <span @click="ss">搜索</span>
      <img src="~/assets/search.png" alt class="search" />
    </header>
    <div class="hot">
      <h5><img src="~/assets/search-hot.png" />大家都在搜</h5>
      <p>
        <template v-for="(item, key) in hots">
          <nuxt-link
            :key="key"
            :to="'/' + jkl + '/content/' + item.id"
            v-if="key < 5"
          >
            <span>{{ item.name }}</span>
          </nuxt-link>
        </template>
      </p>
    </div>
    <div class="view" v-if="false">
      <h5><img src="~/assets/search-view.png" />大家都在看</h5>
      <p>
        <span>住宅</span>
        <span>50m²以下</span>
      </p>
    </div>
    <div class="result" v-show="ll">
      <div id="kk">
        <p class="tit">
          为您找到如下“<span>{{ name }}</span
          >”相关搜索
        </p>
        <template v-for="(item, key) in list">
          <div class="li" @click="go(item.id, item.name)" :key="key">
            <h4>
              <strong v-html="item.name"></strong> <i>{{ item.city }}</i>
              <span class="kk">在售</span>
            </h4>
            <div class="msg">
              <p>{{ item.country }} - <span v-html="item.address"></span></p>
              <span>{{ item.price }}元/m²起</span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { souname } from "@/api/api";
import '@/static/css/foot.css'
export default {
  async asyncData(context) {
    let city = context.store.state.city;
    let token = context.store.state.cookie.token;
    let jkl = context.params.name;
    let other = context.query.other;
    let [res,res1] = await Promise.all([
      context.$axios
        .get("/jy/us/search", {
          params: {
            city: city,
            token: token,
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
      hots: res.hot_search,
      title:res1.common.header.title,
      description:res1.common.header.description,
      keywords:res1.common.header.keywords
    };
  },
  head() {
    return {
      title: this.title || "家园新房-楼盘名搜索",
      meta: [
        {
          name: "description",
          content: this.description || "家园新房",
        },
        {
          name: "Keywords",
          content: this.keywords || "家园新房",
        },
      ],
    };
  },
  data() {
    return {
      list: [],
      hots: [],
      name: "",
      ll: false,
      isok: true,
      page:2
    };
  },
  methods: {
    sou() {
      let data = this.builds;
      let dd = [];
      let name = this.name;
      if (!name) {
        this.ll = false;
      } else {
        this.ll = true;
        let city = localStorage.getItem('cityname')
        souname(name,1,city).then((res) => {
          for (let val of res.data.data) {
            var text = val.where.replace(/<[^<>]+>/g, "");
            if (text == val.name) {
              val.name == val.where;
            } else if (text == val.address) {
              val.address = val.where;
            }
          }
          this.list = res.data.data;
          if (res.data.data.length == 0) {
            that.$router.push("/" + that.jkl + "/search");
          }
        });
      }
    },
    back() {
      this.$router.go(-1);
    },
    go(id, name) {
      if (sessionStorage.getItem("order")) {
        sessionStorage.setItem("ordername", name);
        sessionStorage.removeItem("order");
        this.$router.push("/" + this.jkl + "/order");
      } else {
        this.$router.push("/" + this.jkl + "/content/" + id);
      }
    },
    ss(){
      this.$router.push('/'+this.jkl+'/search')
    }
  },
  mounted() {
    // let that = this;
    // $(".result").scroll(function () {
    //   let top = $(this).scrollTop();
    //   let h = $(this).height();
    //   let all = $("#kk").height();
    //   if (top + h > all) {
    //     if (that.isok) {
    //       that.isok = false;
    //       souname(that.name,that.page).then((res) => {
    //         that.isok = true
    //         that.page = that.page+1
    //         for (let val of res.data.data) {
    //           var text = val.where.replace(/<[^<>]+>/g, "");
    //           if (text == val.name) {
    //             val.name == val.where;
    //           } else if (text == val.address) {
    //             val.address = val.where;
    //           }
    //         }
    //         that.list = that.list.concat(res.data.data);
    //         if (res.data.data.length == 0) {
    //           that.$router.push("/" + that.jkl + "/search");
    //         }
    //       });
    //     }
    //   }
    // });
    document.getElementById('foott').style.display = 'none'
  },
  watch: {
    name(val) {
      this.sou();
    },
  },
  beforeDestroy() {
    document.getElementById('foott').style.display = 'block'
  },
};
</script>
<style lang="less" scoped>
header {
  height: 2.75rem;
  // line-height: 2.75rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  .back {
    width: 1.125rem;
    margin-left: 0.9375rem;
  }
  input {
    width: 13.75rem;
    height: 2rem;
    border-radius: 0.25rem;
    background-color: #f5f5f5;
    padding-left: 2rem;
    border: 0;
    outline: none;
    color: #4b4c4d;
    font-size: 0.875rem;
  }
  ::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #969799;
    font-size: 0.875rem;
  }

  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #969799;
    font-size: 0.875rem;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #969799;
    font-size: 0.875rem;
  }
  span {
    color: #19191a;
    font-size: 1rem;
    margin-right: 1.25rem;
  }
  .search {
    position: absolute;
    width: 1rem;
    top: 0.8125rem;
    left: 4rem;
  }
}
.hot {
  padding: 0 4%;
  margin-bottom: 2rem;
  h5 {
    color: #19191a;
    font-size: 0.9375rem;
    margin-bottom: 1.25rem;
    font-weight: 400;
    img {
      width: 1.125rem;
      margin-right: 0.5rem;
      margin-bottom: -0.125rem;
    }
  }
  p {
    a {
      margin-bottom: 1.5rem;
      display: inline-block;
    }
    span {
      color: #ff7519;
      font-size: 0.75rem;
      padding: 0.5rem 1rem;
      border-radius: 0.875rem;
      background-color: #fff7f2;
      margin-right: 0.75rem;
      margin-bottom: 0.75rem;
    }
    span:nth-of-type(3n) {
      margin-right: 0;
    }
  }
}
.view {
  padding: 0 4%;
  margin-bottom: 2rem;
  h5 {
    color: #19191a;
    font-size: 0.9375rem;
    margin-bottom: 1.25rem;
    font-weight: 400;
    img {
      width: 1.125rem;
      margin-right: 0.5rem;
      margin-bottom: -0.125rem;
    }
  }
  p {
    span {
      color: #525255;
      font-size: 0.75rem;
      padding: 0.5rem 1rem;
      border-radius: 0.875rem;
      background-color: #f7f7f7;
      margin-right: 0.75rem;
      margin-bottom: 0.75rem;
    }
  }
}
.result {
  position: fixed;
  width: 96%;
  top: 2.75rem;
  padding-left: 4%;
  padding-top: 1.25rem;
  background-color: #fff;
  height: 89vh;
  overflow: auto;
  .tit {
    color: #323233;
    font-size: 0.875rem;
    margin-bottom: 1.625rem;
    span {
      color: #ff5353;
    }
  }
  .li {
    padding-right: 4%;
    padding-bottom: 0.875rem;
    border-bottom: 0.03125rem solid #f2f4f7;
    margin-bottom: 0.875rem;
    /deep/h4 {
      color: #313233;
      font-size: 1rem;
      font-weight: 400;
      margin-bottom: 0.75rem;
      .kk {
        float: right;
        padding: 0.1875rem 0.4375rem;
        color: #20c657;
        font-size: 0.6875rem;
        background-color: #ebf7f0;
        border-radius: 0.125rem;
      }
      i {
        font-style: normal;
        font-size: 0.75rem;
      }
      strong {
        font-weight: 400;
        em {
          color: #ff5353;
        }
      }
    }
    .msg {
      display: flex;
      justify-content: space-between;
      /deep/p {
        color: #646566;
        font-size: 0.75rem;
        width: 14.0625rem;
        height: 0.875rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        span {
          color: #646566;
          font-size: 0.75rem;
          em {
            font-style: normal;
            color: #ff5353;
          }
        }
      }
      span {
        color: #646566;
        font-size: 0.75rem;
        em {
          font-style: normal;
          color: #ff5353;
        }
      }
    }
  }
}
</style>