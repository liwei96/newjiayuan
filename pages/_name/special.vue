<template>
  <div id="special">
    <top-view></top-view>
    <div class="con">
      <img src="~/assets/special.jpg" alt class="topimg" />
      <div class="box">
        <h3>
          限时优惠抢
          <img src="~/assets/jy-question.png" alt />
        </h3>
        <div class="cards">
          <div class="card" v-for="(item,key) in discounts" :key="key">
            <div class="bg">
              <div class="bg2">
                <div class="pri">
                  <p class="msg">最 高</p>
                  <p class="num">¥5000</p>
                </div>
                <button @click="pop('领取优惠', 94, '特价房页+领取优惠')">抢优惠</button>
              </div>
              <nuxt-link :to="'/'+jkl+'/content/'+item.id">
              <div class="bg-top">
                <h4>
                  {{item.name}}
                  <img src="~/assets/te-more.png" alt />
                </h4>
                <p>{{item.address}}</p>
              </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <h3>今日特价房</h3>
        <ul class="pro">
          <li v-for="(item,key) in specials" :key="key">
            <nuxt-link :to="'/'+jkl+'/content/'+item.id">
            <div class="top">
              <div class="img">
                <img :src="item.img" alt />
              </div>
              <div class="right">
                <h6>{{item.name}}</h6>
                <div class="pri">
                  <p class="old">
                    原价
                    <span>{{parseInt(item.original/10000)}}</span>万元
                  </p>
                  <p class="new">
                    现价
                    <span>{{parseInt(item.now/10000)}}</span>万元
                  </p>
                </div>
                <p class="type">{{item.type}} | {{item.city}}-{{item.country.substr(0,2)}} | {{item.area}}m²</p>
                <p class="icon">
                  <span class="zhang">{{item.decorate}}</span>
                  <span v-for="(val,k) in item.features" :key="k">{{val}}</span>
                </p>
              </div>
              <p class="num">立省{{parseInt(item.diff/10000)}}万</p>
            </div>
            </nuxt-link>
            <div class="bom">
              <van-notice-bar
                left-icon="volume-o"
                color="#646566"
                background="#F7F7F7"
                :text="item.dynamic"
              />
              <button @click="pop('领取优惠', 94, '特价房页+领取优惠')">马上抢</button>
            </div>
          </li>
        </ul>
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
import top from "@/components/header.vue";
import tan from "@/components/tan.vue";
export default {
  components: {
    "top-view": top,
    'tan-view':tan
  },
  async asyncData(context) {
    let city = context.store.state.city;
    let token = context.store.state.cookie.token;
    let jkl = context.params.name;
    let [res] = await Promise.all([
      context.$axios
        .get("/jy/special/mobile", {
          params: {
            city: city,
            token: token,
          },
        })
        .then((resp) => {
          let data = resp.data;
          //   console.log(data);
          return data;
        }),
    ]);
    return {
      jkl: jkl,
      specials: res.specials,
      discounts:res.discounts
    };
  },
  data() {
    return {
      specials: [],
      discounts:[],
      tan: false,
      typenum: 0,
      typebtn: 1,
      name: "",
      remark: "",
      id:'0'
    };
  },
  methods:{
    pop(name, position, txt) {
      this.name = name;
      this.typebtn = 1;
      this.typenum = position;
      this.tan = true;
      this.remark = txt;
    },
    cli(e) {
      this.tan = e;
    },
  }
};
</script>
<style lang="less" scoped>
.con {
  padding-top: 2.75rem;
  .topimg {
    width: 100%;
    margin-bottom: 1.125rem;
  }
  .box {
    padding: 0 4%;
    h3 {
      color: #313233;
      font-size: 1rem;
      margin-bottom: 1.125rem;
      img {
        width: 1rem;
        margin-left: 0.25rem;
        margin-bottom: -0.125rem;
      }
    }
    .cards {
      overflow: hidden;
      margin-bottom: 0.625rem;
      .card {
        float: left;
        position: relative;
        padding-top: 1.46875rem;
        margin-right: 0.5rem;
        margin-bottom: 1.25rem;
        .bg {
          width: 10.46875rem;
          height: 7.71875rem;
          border-radius: 0.375rem;
          background: linear-gradient(0deg, #f5243d, #ff812d);
          .bg2 {
            width: 100%;
            z-index: 1;
            height: 5.875rem;
            border-radius: 0 0 0.375rem 0.375rem;
            position: absolute;
            bottom: 0;
            background: linear-gradient(0deg, #f5243d, #ff812d);
            left: 0;
            .pri {
              display: flex;
              justify-content: center;
              margin-top: 0.875rem;
              .msg {
                color: #ffffff;
                font-size: 0.625rem;
                width: 0.75rem;
                margin-right: 0.125rem;
              }
              .num {
                color: #fff;
                font-size: 1.75rem;
                font-weight: bold;
              }
            }
            button {
              width: 5.625rem;
              height: 1.625rem;
              border-radius: 0.8125rem;
              background: linear-gradient(130deg, #fce4c5, #f0b27f);
              text-align: center;
              line-height: 1.625rem;
              border: 0;
              color: #5d0808;
              font-size: 0.75rem;
              position: relative;
              left: 50%;
              margin-left: -2.8125rem;
              margin-top: 0.625rem;
            }
          }
          .bg-top {
            width: 7.96875rem;
            height: 7.34375rem;
            border-radius: 0.5rem;
            background: linear-gradient(130deg, #fce4c5, #f0b27f);
            box-shadow: 0px 0px 1.9375rem 0px rgba(32, 30, 28, 0.08);
            top: 0;
            left: 50%;
            margin-left: -4.578125rem;
            position: absolute;
            padding: 0 0.625rem;
            h4 {
              color: #5d0808;
              font-size: 0.8125rem;
              padding-top: 0.625rem;
              margin-bottom: 0.25rem;
              img {
                width: 0.75rem;
                height: 0.75rem;
                float: right;
              }
            }
            p {
              color: #6d2519;
              font-size: 0.625rem;
              width: 7.9375rem;
              height: 1rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
      .card:nth-of-type(2n) {
        margin-right: 0;
      }
    }
    .pro {
      li {
        padding: 0.9375rem 0.625rem 0.9375rem 0.78125rem;
        border-radius: 0.5rem;
        box-shadow: 0px 0px 1.1875rem 0.0625rem rgba(0, 0, 0, 0.03);
        border: 0.03125rem solid #ededed;
        margin-bottom: 1.75rem;
        .top {
          position: relative;
          display: flex;
          margin-bottom: 0.75rem;
          .img {
            img {
              width: 6.875rem;
              height: 5rem;
              border-radius: 0.1875rem;
              margin-right: 0.875rem;
            }
          }
          .right {
            h6 {
              color: #46494d;
              font-size: 0.9375rem;
              margin-bottom: 0.125rem;
              position: relative;
              top: -0.1875rem;
            }
            .pri {
              display: flex;
              margin-bottom: 0.25rem;
              .old {
                color: #7d7e80;
                font-size: 0.625rem;
                text-decoration: line-through;
                margin-right: 0.125rem;
                span {
                  font-weight: bold;
                  font-size: 0.875rem;
                }
              }
              .new {
                color: #ff4040;
                font-size: 0.625rem;
                span {
                  font-weight: bold;
                  font-size: 0.875rem;
                }
              }
            }
            .type {
              color: #7d7e80;
              font-size: 0.75rem;
              margin-bottom: 0.25rem;
            }
            .icon {
              span {
                color: #7d7e80;
                font-size: 0.75rem;
                padding: 0.1875rem 0.3125rem;
                background-color: #f5f5f5;
                border-radius: 0.125rem;
                margin-right: 0.375rem;
              }
              .zhang {
                background-color: #f0f5f9;
                color: #49abf1;
              }
            }
          }
          .num {
            position: absolute;
            color: #ff5751;
            font-size: 0.625rem;
            background: url(~assets/te-bg.png) no-repeat;
            background-size: 100%;
            right: 0;
            width: 3.1875rem;
            height: 1rem;
            text-align: center;
            line-height: 1rem;
            top: -0.375rem;
          }
        }
        .bom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .van-notice-bar {
            padding: 0 0.625rem 0 0.25rem;
            width: 14.625rem;
            height: 1.125rem;
            font-size: 0.625rem;
          }
          button {
            color: #fff;
            font-size: 0.75rem;
            width: 3.75rem;
            height: 1.5rem;
            border-radius: 0.75rem;
            text-align: center;
            line-height: 1.5rem;
            border: 0;
            background-color: #ff5751;
          }
        }
      }
    }
  }
}
</style>