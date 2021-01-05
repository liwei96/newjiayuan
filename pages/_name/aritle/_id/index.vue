<template>
  <div id="aritle">
    <header>
      <img class="back" src="~/assets/goback.png" alt @click="back" />
      <!-- <img class="logo" src="~/assets/logo1.png" alt /> -->
      <img v-if="host == 0" class="logo" src="~/assets/logo.png" alt />
    <img v-if="host == 1" class="logo" src="~/assets/logos.png" alt />
      <img src="~/assets/mapcai.png" alt class="list" @click="btn" />
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
      <div class="pop" v-if="article.description.length != 0">
        <span>摘要：</span>
        {{ article.description }}
      </div>
      <div class="ari" v-html="article.content"></div>
      <div class="type" v-if="article.tags.length">
        标签：
        <span v-for="(item, key) in article.tags" :key="key">{{ item }}</span>
      </div>
      <div class="project" v-if="project.length!=0">
        <nuxt-link :to="'/'+this.jkl+'/content/'+project.id">
        <div class="ject-top">
          <div class="top-left">
            <img :src="project.img" alt />
          </div>
          <div class="top-right">
            <h4>
              {{project.name}}
              <span>{{project.state}}</span>
            </h4>
            <p class="pri">
              <span>{{project.price}}</span>元/m²
            </p>
            <p
              class="typemsg"
            >{{project.type}} | {{project.city}}-{{project.country?project.country.substr(0,2):project.country}} | {{project.area}}m²</p>
            <p class="icon">
              <span class="zu">{{project.decorate}}</span>
              <span v-for="(item,key) in project.features" :key="key">{{item}}</span>
            </p>
          </div>
        </div>
        </nuxt-link>
        <div class="bom">
          <a :href="'tel:'+phone">
            <button>电话咨询</button>
          </a>
          <button class="wen" @click="pop('咨询服务', 104, '详情页+咨询服务')">在线问</button>
        </div>
      </div>
      <p class="icon">
        <img src="~/assets/typeicon.png" alt />
        {{ article.source_type }}
      </p>
      <div class="agre" @click="like">
        <img :src="img" alt />
        <p>{{ article.like_num }}</p>
      </div>
      <p class="free">
        <span>免责声明：</span>
        凡本站注明
        “来自：XXX(非{{txt}}网)”的资讯稿件和图片作品，系本站转载自其它媒体，转载目的在于信息传递，并不代表本站赞同其观点和对其真实性负责。如有资讯稿件和图片作品的内容、版权以及其它问题的，请联系本站，电话：400-718-6686
      </p>
      <div class="other">
        <h4>大家都在看</h4>
        <template v-for="(item, key) in others">
          <nuxt-link :key="key" :to="'/' + jkl + '/aritle/' + item.id">
            <div class="pro">
              <div class="left">
                <h5>{{ item.title }}</h5>
                <p v-if="item.tags.length">
                  <span v-for="(val, k) in item.tags" :key="k">{{ val }}</span>
                </p>
                <p v-if="!item.tags.length">
                  {{ item.source }} &nbsp;&nbsp;&nbsp;&nbsp;{{ item.time }}
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
    <van-popup
      v-model="tan"
      :style="{ background: 'rgba(0,0,0,0)' }"
      @click-overlay="typebtn = 0"
    >
      <tan-view
        :txt="remark"
        :typenum="typenum"
        :id="id"
        :name="name"
        @close="cli($event)"
        :typebtn="typebtn"
      ></tan-view>
    </van-popup>
  </div>
</template>
<script>
import { infolike } from "@/api/api";
import tan from "@/components/tan.vue";
import "@/static/css/foot.css";
export default {
  components: {
    'tan-view':tan
  },
  async asyncData(context) {
    let host = context.store.state.host
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
      project: res.project_info,
      phone: res.common.phone,
      title:res.common.header.title,
      description:res.common.header.description,
      keywords:res.common.header.keywords,
      host:host
    };
  },
  head() {
    return {
      title: this.title || this.article.title,
      meta: [
        {
          name: "description",
          content: this.description || "家园新房",
        },
        {
          name: "keywords",
          content: this.keywords || "家园新房",
        },
      ],
    };
  },
  data() {
    return {
      article: {},
      others: [],
      list: false,
      img: "",
      tan: false,
      typenum: 0,
      typebtn: 1,
      name: "",
      remark: "",
      id:'0',
      img1: require("~/assets/noclick.png"),
      img2: require("~/assets/checked.png"),
      txt: '家园'
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    btn() {
      if (this.list) {
        this.list = false;
      } else {
        this.list = true;
      }
    },
    pop(name, position, txt) {
      this.name = name;
      this.typebtn = 1;
      this.typenum = position;
      this.tan = true;
      this.remark = txt;
      this.id = this.project.id
    },
    like() {
      let token = $cookies.get("token");
      let id = this.article.id;
      if (token) {
        infolike({ token: token, id: id }).then((res) => {
          if (res.data.code == 200) {
            if (this.article.my_like) {
              this.article.like_num = this.article.like_num - 1;
              this.article.my_like = 0;
              this.toast("取消成功");
              this.img = this.img1
            } else {
              this.article.like_num = this.article.like_num + 1;
              this.article.my_like = 1;
              this.img = this.img2
              this.toast("点赞成功");
            }
          } else {
            let url = this.$route.path;
            sessionStorage.setItem("path", url);
            this.$router.push("/" + this.jkl + "/login");
          }
        });
      } else {
        let url = this.$route.path;
        sessionStorage.setItem("path", url);
        this.$router.push("/" + this.jkl + "/login");
      }
    },
  },
  mounted() {
    if(this.host == 0) {
      this.txt = '家园'
    }else {
      this.txt = '易得房'
    }
    if (this.article.my_like) {
      this.img = this.img2
    } else {
      this.img=this.img1
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
  border-bottom: 0.03125rem solid #F7F7F7;
  // position: relative;
  .back {
    width: 1.5rem;
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
    width: 1.5rem;
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
  .project {
    margin: 0 4%;
    height: 8.8rem;
    margin-top: 1.125rem;
    padding: 0.75rem;
    padding-bottom: 0;
    box-shadow: 0px 0px 1.1875rem 0.09375rem rgba(0, 0, 0, 0.03);
    border-radius: 0.25rem;
    margin-bottom: 1.25rem;
    .ject-top {
      display: flex;
      .top-left {
        img {
          width: 6.875rem;
          height: 5rem;
          border-radius: 0.1875rem;
          margin-right: 0.625rem;
        }
      }
      .top-right {
        flex: 1;
        h4 {
          color: #474a4e;
          font-size: 0.9375rem;
          margin-bottom: 0.3rem;
          span {
            float: right;
            display: block;
            width: 2.25rem;
            height: 1.0625rem;
            border-radius: 0.125rem;
            background-color: #e9f7ea;
            text-align: center;
            line-height: 1.0625rem;
            color: #20c658;
            font-size: 0.6875rem;
          }
        }
        .pri {
          color: #ff5454;
          font-size: 0.75rem;
          margin-bottom: 0.2rem;
          span {
            font-size: 0.875rem;
          }
        }
        .typemsg {
          color: #7d7f80;
          font-size: 0.75rem;
          margin-bottom: 0.2rem;
        }
        .icon {
          margin:0;
          margin-bottom: 1rem;
          span {
            color: #7d7f80;
            font-size: 0.75rem;
            padding: 0.1875rem 0.3125rem;
            background-color: #f5f5f5;
            border-radius: 0.125rem;
            margin-right: 0.375rem;
          }
          .zu {
            background-color: #f1f6f9;
            color: #4aabf2;
          }
        }
      }
    }
    .bom {
      text-align: right;
      button {
        width: 4.375rem;
        height: 1.5rem;
        border-radius: 0.25rem;
        background: linear-gradient(270deg, #348aff, #6acdff);
        box-shadow: 0.03125rem 0.15625rem 0.3125rem 0px rgba(78, 170, 255, 0.2);
        text-align: center;
        line-height: 1.5rem;
        color: #fff;
        border: 0;
        font-size: 0.75rem;
        color: #fff;
      }
      .wen {
        background: linear-gradient(270deg, #20c466, #3fd6a7);
        box-shadow: 0.03125rem 0.15625rem 0.3125rem 0px rgba(44, 204, 128, 0.2);
        margin-left: 0.75rem;
      }
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
          color: #626466;
          font-size: 0.625rem;
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