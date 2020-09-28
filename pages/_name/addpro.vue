<template>
  <div id="PK">
    <top-view :jkl="jkl"></top-view>
    <div class="pks">
      <van-checkbox-group v-model="result" :max="4">
        <template v-for="(item,key) in list">
          <van-checkbox :name="item.id" checked-color="#1FC365" class="new" :key="key">
            <div class="pro">
              <div class="left">
                <img :src="item.img" alt />
              </div>
              <div class="right">
                <h6>{{item.name}}</h6>
                <p class="pri">
                  <span>{{item.price}}</span>元/m²
                </p>
                <p
                  class="msg"
                >{{item.type}} | {{item.city}}-{{item.country.substr(0,2)}} | {{item.area}}m²</p>
                <p class="type">
                  <span class="zhuang">{{item.decorate}}</span>
                  <span v-for="(val,k) in item.feature" :key="k">{{val}}</span>
                </p>
              </div>
              <img class="newimg" v-if="key==0" src="~/assets/new-view.png" alt="">
            </div>
          </van-checkbox>
        </template>
        <div class="line"></div>
        <!-- <div class="slid"></div> -->
        <!-- <h3>浏览足迹</h3>
        <van-checkbox name="c" checked-color="#1FC365">
          <div class="pro">
            <div class="left">
              <img src="~/assets/lun02.jpg" alt />
            </div>
            <div class="right">
              <h6>锦云澜天里</h6>
              <p class="pri">
                <span>17000</span>元/m²
              </p>
              <p class="msg">住宅 | 杭州-江干 | 80-140m²</p>
              <p class="type">
                <span class="zhuang">精装</span>
                <span>地铁楼盘</span>
              </p>
            </div>
          </div>
        </van-checkbox> -->
      </van-checkbox-group>
    </div>
    <div class="bombtn">
      <button class="pkbtn" @click="add">添加楼盘</button>
    </div>
  </div>
</template>
<script>
import top from "@/components/header";
export default {
  async asyncData(context) {
    let id = context.params.id;
    let token = context.store.state.cookie.token;
    let city = context.store.state.city;
    let jkl = context.params.name;
    let other = context.query.other;
    let [res] = await Promise.all([
      context.$axios
        .get("/jy/compare/some", {
          params: {
            city: city,
            token: token,
            other: other,
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
      list: res.data,
    };
  },
  data() {
    return {
      checked: true,
      result: [],
      isadd: false,
      list: [],
    };
  },
  head() {
    return {
      title: "家园新房-PK添加楼盘",
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
  components: {
    "top-view": top,
  },
  methods: {
    add() {
      let id = $cookies.get("ids");
      let ids;
      if (id) {
        let k = $cookies.get("ids").split(",").concat(this.result);
        let kk = [];
        for (let val of k) {
          if (kk.indexOf(String(val)) == -1) {
            kk.push(val);
          }
        }
        ids = kk.join(",");
        $cookies.set("ids", ids);
      } else {
        $cookies.set("ids", this.result);
        ids = this.result.join(",");
      }
      this.$router.push("/" + this.jkl + "/pk/" + ids);
    },
  },
  watch: {
    result(val, old) {
      if (val.length > old.length) {
        this.isadd = true;
        let that = this;
        setTimeout(() => {
          that.isadd = false;
        }, 1000);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.pks {
  padding-top: 4rem;
  padding-bottom: 3.75rem;
  /deep/.van-checkbox-group {
    position: relative;
    .van-checkbox {
      margin-bottom: 1.5rem;
      .van-checkbox__icon {
        margin-left: 0.9375rem;
        margin-right: 1.3125rem;
      }
    }
  }
  .line {
    width: 20rem;
    height: 0.0625rem;
    background-color: #f2f2f2;
    position: absolute;
    right: 0;
    top: 6.375rem;
  }
  /deep/.new {
    padding-bottom: 1.25rem;
  }
  .delete-button {
    height: 100%;
  }
  .pro {
    display: flex;
    position: relative;
    height: 5rem;
    .left {
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
        position: relative;
        top: -2px;
      }
      .pri {
        color: #ff5454;
        font-size: 0.75rem;
        span {
          color: #ff5454;
          font-size: 0.875rem;
          font-weight: bold;
        }
      }
      .msg {
        color: #7d7e80;
        font-size: 0.75rem;
        margin-bottom: 0.125rem;
      }
      .type {
        span {
          padding: 0.1875rem 0.3125rem;
          background-color: #f5f5f5;
          border-radius: 0.125rem;
          color: #7d7e80;
          font-size: 0.75rem;
          margin-right: 0.375rem;
        }
        .zhuang {
          background-color: #f0f5f9;
          color: #49abf1;
        }
      }
    }
    .newimg {
      position: absolute;
      width: 5rem;
      transform: rotate(-45deg);
      // height: 2.25rem;
      top: 1.5rem;
      right: -0.5625rem
    }
  }
  h3 {
    color: #323233;
    font-size: 1rem;
    margin-top: 1.25rem;
    padding: 0 4%;
    margin-bottom: 1.125rem;
    font-weight: bold;
  }
  .slid {
    width: 100%;
    height: 0.625rem;
    background-color: #f7f7f7;
  }
}
.bombtn {
  width: 100%;
  height: 3.75rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .pkbtn {
    width: 92%;
    height: 2.5rem;
    border-radius: 0.25rem;
    background-color: #1fc365;
    text-align: center;
    line-height: 2.5rem;
    position: fixed;
    left: 4%;
    bottom: 0.625rem;
    color: #fff;
    font-size: 0.9375rem;
    border: 0;
    font-weight: bold;
  }
}
</style>