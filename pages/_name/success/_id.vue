<template>
  <div id="Dyna">
    <header>
      <img class="back" src="~/assets/goback.png" alt @click="back" />
      <img class="logo" src="~/assets/logo.png" alt />
      <img src="~/assets/searchtop.png" alt class="search" @click="search"/>
      <img src="~/assets/mapcai.png" alt class="list" @click="btns"/>
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
      <h5>{{article.title}}</h5>
      <p class="name">客户：{{article.source}}</p>
      <p class="txt" v-html="article.content"></p>
      <p class="time">{{article.time.substr(0,10)}}</p>
      <nuxt-link :to="'/'+jkl+'/content/'+building.id">
      <div class="ject-top">
        <div class="top-left">
          <img :src="building.img" alt />
        </div>
        <div class="top-right">
          <h4>
            <i>{{building.name}}</i>
            <span>{{building.state}}</span>
          </h4>
          <p class="pri">
            <span>{{building.price}}</span>元/m²
          </p>
          <p
            class="typemsg"
          >{{building.type}} | {{building.cityname}}-{{building.country.substr(0,2)}} | {{building.area}}m²</p>
          <p class="icon">
            <span class="zu">{{building.decorate}}</span>
            <span v-for="(item,key) in building.feature" :key="key">{{item}}</span>
          </p>
        </div>
      </div>
      </nuxt-link>
      <div class="peo">
        <img :src="staff.head_img" alt />
        <div class="peomsg">
          <h6>
            {{staff.name}}
            <span>满意度5分</span>
          </h6>
          <p>为客户提供专业的购房建议</p>
        </div>
        <button @click="pop('免费咨询',104,'成交案例详情页+免费咨询')">免费咨询</button>
      </div>
    </div>
    <div class="line"></div>
    <div class="other">
      <h3>本楼盘户型</h3>
      <ul>
        <template v-for="(item,key) in apartments">
          <nuxt-link :key="key" :to="'/'+jkl+'/hu/'+item.id">
        <li>
          <div class="left">
            <img :src="item.small" alt />
          </div>
          <div class="right">
            <h5>
              {{item.title}}
              <span>{{item.state}}</span>
            </h5>
            <p>
              建面：
              <span>{{item.area}}m²</span>
            </p>
            <p class="type">
              类型：
              <span>{{item.type}}</span>
            </p>
            <p>
              总价：
              <span class="pri">
                约
                <i>290</i>万/套
              </span>
            </p>
          </div>
        </li>
        </nuxt-link>
        </template>
      </ul>
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
    <nav-view :phone="phone" @fot="chang($event)"></nav-view>
  </div>
</template>
<script>
import nav from "@/components/nav.vue";
import tan from "@/components/tan.vue";
export default {
  components: {
    "nav-view": nav,
    'tan-view':tan
  },
  async asyncData(context) {
    let id = context.params.id;
    let other = context.query.other;
    let token = context.store.state.cookie.token;
    let jkl = context.params.name;
    let [res] = await Promise.all([
      context.$axios
        .get("/jy/deal/phone", {
          params: {
            id: id,
            token: token,
            other: other,
          },
        })
        .then((resp) => {
          let data = resp.data;
          data.article.content = decodeURIComponent(data.article.content);
          //   console.log(data)
          return data;
        }),
    ]);
    return {
      jkl: jkl,
      article: res.article,
      building: res.buidling,
      apartments: res.apartments,
      phone: res.common.phone,
      staff: res.common.staff.staff,
    };
  },
  head() {
    return {
      title: "家园新房-"+this.article.title,
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
      btn: true,
      article: {},
      building: {},
      phone: "",
      staff: {},
      tan: false,
      typenum: 0,
      typebtn: 1,
      name: "",
      remark: "",
      id:'0',
      list:false
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    cli(e) {
      this.tan = e;
    },
    chang(data) {
      this.typenum = data.position;
      this.name = data.name;
      this.typebtn = 1;
      this.tan = true;
      this.remark = "成交案例详情页+预约看房";
      this.id =String(this.building.id)
    },
    btns(){
      if(this.list){
        this.list=false
      }else{
        this.list= true
      }
    },
    pop(name,position,txt){
      this.name = name
      this.typebtn = 1
      this.typenum = position
      this.tan = true
      this.remark=txt
      this.id =String(this.building.id)
    },
    search(){
      this.$router.push('/'+this.jkl+'/searchname')
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
  .search {
    width: 1.25rem;
    position: absolute;
    right: 3.5625rem;
    top: 0.75rem;
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
  padding: 0 4%;
  margin-top: 2.75rem;
  h5 {
    color: #323233;
    font-size: 0.9375rem;
    padding-top: 0.75rem;
    margin-bottom: 0.6rem;
  }
  .name {
    color: #646566;
    font-size: 0.75rem;
  }
  .txt {
    color: #646566;
    font-size: 0.875rem;
    line-height: 1.5rem;
    margin-bottom: 0.6rem;
  }
  .time {
    color: #969799;
    font-size: 0.75rem;
    margin-bottom: 1.125rem;
  }
  .ject-top {
    display: flex;
    box-shadow: 0px 0px 1.1875rem 0.09375rem rgba(0, 0, 0, 0.03);
    border-radius: 0.5rem;
    padding: 0.9375rem 0.75rem;
    margin-bottom: 1.25rem;
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
        i {
          font-style: normal;
          display: inline-block;
          width: 10rem;
          height: 1.25rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
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
  .peo {
    display: flex;
    align-items: center;
    margin-bottom: 0.625rem;
    img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
    .peomsg {
      h6 {
        color: #131313;
        font-size: 0.9375rem;
        margin-bottom: 0.1rem;
        position: relative;
        top: -0.125rem;
        span {
          padding: 0.125rem;
          color: #fff;
          font-size: 0.625rem;
          background-color: #ff761a;
          border-radius: 0.125rem;
          margin-left: 0.1875rem;
          font-weight: 400;
        }
      }
      p {
        color: #96989a;
        font-size: 0.75rem;
      }
    }
    button {
      margin-left: auto;
      background: linear-gradient(270deg, #20c466, #3fd6a7);
      box-shadow: 0.03125rem 0.15625rem 0.3125rem 0px rgba(44, 204, 128, 0.2);
      border-radius: 0.8125rem;
      text-align: center;
      line-height: 1.625rem;
      width: 4.375rem;
      height: 1.625rem;
      color: #fff;
      font-size: 0.75rem;
      border: 0;
    }
  }
}
.line {
  width: 100%;
  height: 0.625rem;
  background-color: #f8f8f8;
}
.other {
  padding: 0 4%;
  h3 {
    color: #121212;
    font-size: 1.0625rem;
    padding-top: 1.125rem;
    margin-bottom: 1.375rem;
  }
  ul {
    margin-bottom: 3.75rem;
    li {
      display: flex;
      padding-bottom: 0.875rem;
      border-bottom: 0.03125rem solid #f2f2f2;
      margin-bottom: 0.875rem;
      .left {
        width: 6.875rem;
        height: 5rem;
        border-radius: 0.1875rem;
        background-color: #f5f5f5;
        text-align: center;
        img {
          width: 3.5rem;
          height: 100%;
        }
      }
      .right {
        margin-left: 0.75rem;
        flex: 1;
        h5 {
          color: #323233;
          font-size: 1rem;
          font-weight: 400;
          margin-bottom: 0.375rem;
          span {
            float: right;
            width: 2.125rem;
            height: 1rem;
            text-align: center;
            line-height: 1rem;
            border-radius: 0.125rem;
            background-color: #2cd264;
            color: #fff;
            font-size: 0.6875rem;
          }
        }
        p {
          color: #7d7e80;
          font-size: 0.75rem;
          span {
            color: #323233;
            font-size: 0.8125rem;
          }
          .pri {
            color: #fe582f;
            font-size: 0.625rem;
            i {
              font-style: normal;
              font-size: 1rem;
            }
          }
        }
        .type {
          margin-top: 0.125rem;
        }
      }
    }
    li:nth-last-of-type(1) {
      border: 0;
      margin-bottom: 0;
    }
  }
}
.nav {
  position: fixed;
  width: 92%;
  height: 3.75rem;
  background-color: #fff;
  padding: 0 4%;
  bottom: 0;
  display: flex;
  z-index: 1000;
  align-items: center;
  .nav-peo {
    position: relative;
    margin-right: 1.25rem;
    margin-left: 0.625rem;
    text-align: center;
    img {
      width: 1.5rem;
    }
    span {
      display: block;
      width: 0.8125rem;
      height: 0.8125rem;
      border-radius: 50%;
      text-align: center;
      line-height: 0.8125rem;
      font-size: 0.625rem;
      color: #fff;
      position: absolute;
      top: 0;
      right: 0;
      background-color: #f34f4f;
    }
    p {
      color: #626466;
      font-size: 0.75rem;
    }
  }
  .nav-msg {
    margin-right: 1.25rem;
    h5 {
      color: #222324;
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 0.25rem;
    }
    p {
      color: #696a6d;
      font-size: 0.75rem;
    }
  }
  button {
    width: 8rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    background: linear-gradient(270deg, #348aff, #6accff);
    text-align: center;
    line-height: 2.5rem;
    color: #fff;
    font-size: 0.9375rem;
    border: 0;
    img {
      width: 0.9375rem;
      margin-bottom: -0.125rem;
      margin-right: 0.25rem;
    }
  }
  .nav-tel {
    margin-left: 0.625rem;
    color: #fff;
    background: linear-gradient(270deg, #1fc365, #3fd6a6);
  }
}
</style>