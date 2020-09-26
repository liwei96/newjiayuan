<template>
  <div id="comment">
    <top-view :jkl="jkl"></top-view>
    <div class="con">
      <div class="ject-top" v-for="(item,key) in list" :key="key">
        <div class="top-left">
          <img :src="item.img" alt />
        </div>
        <div class="top-right">
          <h4>
            {{item.name}}
            <span>在售</span>
          </h4>
          <p class="pri"><span>{{item.price}}</span>元/m²</p>
          <p class="typemsg">{{item.type}} | {{item.city}}-{{item.country.substr(0,2)}} | {{item.area}}m²</p>
          <p class="icon">
            <span class="zu">{{item.decorate}}</span>
            <span v-for="(val,k) in item.feature" :key="k">{{val}}</span>
          </p>
        </div>
      </div>
      <p class="tit">您看过该楼盘吗？</p>
      <div class="type">
        <p :class="typenum == 4 ? 'zhuang' : ''" @click="typenum = 4">未看房</p>
        <p :class="typenum == 5 ? 'zhuang' : ''" @click="typenum = 5">已看房</p>
      </div>
      <p class="tit">楼盘评价</p>
      <div class="ping">
        <van-rate
          v-model="value"
          :size="22"
          color="#FF7519"
          void-icon="star"
          void-color="#E8EBED"
        />
        <span>{{ msg }}</span>
      </div>
      <div class="text">
        <textarea
          v-model="text"
          placeholder="这个楼盘怎么样？我来说两句"
          maxlength="50"
        ></textarea>
        <p>{{ textnum }}/50</p>
      </div>
      <button @click="ask">发布点评</button>
    </div>
  </div>
</template>
<script>
import topView from "@/components/header.vue";
import { comm } from "@/api/api";
export default {
  components: {
    "top-view": topView,
  },
  async asyncData(context) {
    let id = context.params.id;
    let token = context.store.state.cookie.token;
    let jkl = context.params.name;
    let other = context.query.other;
    let city = context.store.state.city
     let  [res] = await Promise.all([
        context.$axios
          .get("/jy/compare/cards", {
            params: {
              ids: id,
              token: token,
              city: city,
            },
          })
          .then((resp) => {
            let data = resp.data;
            // console.log(data)
            return data;
          }),
      ]);
    return {
      jkl: jkl,
      id: id,
      list:res.data
    };
  },
  data() {
    return {
      value: 3,
      text: "",
      textnum: 0,
      typenum: 4,
      msg: "一般",
      list:[]
    };
  },
  methods: {
    ask() {
      let that = this;
      let token = $cookies.get('token')
      let id = this.$route.params.id
      comm({
        token: token,
        bid: id,
        content: that.text,
        counsider_buy: that.typenum,
        score: that.value,
      }).then(res=>{
        if(res.data.code == 200) {
          this.toast('点评成功')
          console.log(res)
          that.$router.push('/'+that.jkl+'/comments/'+that.id)
        }
      })
    },
  },
  watch: {
    text(val) {
      if (val.length <= 50) {
        this.textnum = val.length;
      } else {
        this.textnum = 50;
      }
    },
    value(val) {
      switch (val) {
        case 1:
          this.msg = "极差";
          break;
        case 2:
          this.msg = "差";
          break;
        case 3:
          this.msg = "一般";
          break;
        case 4:
          this.msg = "好";
          break;
        case 5:
          this.msg = "非常好";
          break;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.con {
  padding: 0 4%;
  padding-top: 3.6875rem;
  .ject-top {
    display: flex;
    box-shadow: 0px 0px 1.1875rem 0.09375rem rgba(0, 0, 0, 0.03);
    border-radius: 0.5rem;
    padding: 0.9375rem 0.75rem;
    margin-bottom: 1.5rem;
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
          font-weight: 400;
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
  .tit {
    color: #323233;
    font-size: 0.9375rem;
    margin-bottom: 0.875rem;
  }
  .type {
    display: flex;
    margin-bottom: 1.5rem;
    p {
      background-color: #f7f7f7;
      width: 4.375rem;
      height: 1.625rem;
      border-radius: 0.8125rem;
      text-align: center;
      line-height: 1.625rem;
      margin-right: 0.9375rem;
      color: #969699;
      font-size: 0.75rem;
    }
    .zhuang {
      background-color: #f1f8f4;
      color: #2ac66d;
    }
  }
  .ping {
    display: flex;
    align-items: center;
    margin-bottom: 1.875rem;
    span {
      color: #969799;
      font-size: 0.875rem;
      margin-left: 0.9375rem;
    }
  }
  .text {
    position: relative;
    margin-bottom: 2.1875rem;
    textarea {
      width: 92%;
      height: 9.125rem;
      border-radius: 0.375rem;
      padding-left: 4%;
      padding-right: 4%;
      padding-top: 0.875rem;
      background-color: #f7f7f7;
      border: 0;
      outline: none;
      line-height: 1.625rem;
    }
    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
      color: #7d7e80;
      font-size: 0.9375rem;
    }

    input:-moz-placeholder,
    textarea:-moz-placeholder {
      color: #7d7e80;
      font-size: 0.9375rem;
    }

    input::-moz-placeholder,
    textarea::-moz-placeholder {
      color: #7d7e80;
      font-size: 0.9375rem;
    }

    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
      color: #666;
      font-size: 16px;
    }
    p {
      position: absolute;
      right: 0.625rem;
      bottom: 0.5rem;
      color: #969799;
      font-size: 0.75rem;
    }
  }
  button {
    color: #2ac66d;
    font-size: 0.9375rem;
    font-weight: bold;
    text-align: center;
    line-height: 2.25rem;
    width: 100%;
    border-radius: 0.125rem;
    background-color: #f1f8f4;
    border: 0;
  }
}
</style>