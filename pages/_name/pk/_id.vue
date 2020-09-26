<template>
  <div id="PK">
    <top-view :jkl="jkl"></top-view>
    <nuxt-link :to="'/' + jkl + '/addpro'">
      <button class="add">添加楼盘</button>
    </nuxt-link>
    <div class="isnull" v-if="list.length == 0">
      <img src="~/assets/pk-null.png" alt />
      <h5>您尚未添加楼盘</h5>
      <p>请点击添加</p>
    </div>
    <div class="pks" v-if="list.length != 0">
      <van-checkbox-group v-model="result" :max="2">
        <template v-for="(item, key) in list">
          <van-swipe-cell :key="key">
            <van-checkbox :name="item.id" checked-color="#1FC365">
              <div class="pro">
                <div class="left">
                  <img :src="item.img" alt />
                </div>
                <div class="right">
                  <h6>{{ item.name }}</h6>
                  <p class="pri">
                    <span>{{ item.price }}</span
                    >元/m²
                  </p>
                  <p class="msg">
                    {{ item.type }} | {{ item.city }}-{{ item.country }} |
                    {{ item.area }}m²
                  </p>
                  <p class="type">
                    <span class="zhuang">{{ item.decorate }}</span>
                    <span v-for="(val, k) in item.feature" :key="k">{{
                      val
                    }}</span>
                  </p>
                </div>
              </div>
            </van-checkbox>
            <template #right>
              <van-button
                square
                text="删除"
                type="danger"
                class="delete-button"
                @click="del(item.id)"
              />
            </template>
          </van-swipe-cell>
        </template>
      </van-checkbox-group>
      <button class="pkbtn" @click="gopk">开始对比</button>
      <div class="totast" v-if="isadd">已加入对比</div>
      <div class="totast" v-if="isok">请选择两个楼盘</div>
    </div>
  </div>
</template>
<script>
import top from "@/components/header";
export default {
  components: {
    "top-view": top,
  },
  async asyncData(context) {
    let id = context.params.id;
    let token = context.store.state.cookie.token;
    let jkl = context.params.name;
    let other = context.query.other;
    let city = context.store.state.city;
    let res = {
      data: [],
    };
    if (id) {
      [res] = await Promise.all([
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
    }
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
      isok: false,
    };
  },
  methods: {
    gopk() {
      let that = this;
      if (this.result.length == 2) {
        let ids = this.result.join(",");
        if(sessionStorage.getItem('pktype') == 1){
          this.$router.push("/" + this.jkl + "/pkdetail/" + ids);
        }else{
          this.$router.push("/" + this.jkl + "/leipk/" + ids);
        }
      } else {
        this.isok = true;
        setTimeout(() => {
          that.isok = false;
        }, 1500);
      }
    },
    del(id) {
      let ids = $cookies.get("ids").split(",");
      let kk = ids.splice(ids.indexOf(String(id)), 1);
      $cookies.set("ids", ids);
      let k = ids.join(",");
      this.$router.push("/" + this.jkl + "/pk/" + k);
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
header {
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
  .zixuns {
    margin-right: 1.25rem;
    position: absolute;
    right: 9%;
    top: 0.68rem;
    img {
      width: 1.5rem;
    }
    p {
      position: absolute;
      width: 0.8125rem;
      height: 0.8125rem;
      border-radius: 50%;
      text-align: center;
      line-height: 0.8125rem;
      background-color: #ff4040;
      color: #fff;
      font-size: 0.625rem;
      top: -0.40625rem;
      right: -0.1875rem;
    }
  }
  .list {
    width: 1.25rem;
    margin-right: 4%;
  }
}
.add {
  width: 92%;
  height: 3rem;
  border-radius: 0.25rem;
  border: 0.03125rem solid #1fc365;
  background-color: #f1f8f4;
  color: #1fc365;
  font-size: 0.9375rem;
  text-align: center;
  line-height: 3rem;
  font-weight: bold;
  margin-top: 4rem;
  margin-left: 4%;
  margin-bottom: 1.5rem;
}
.isnull {
  padding: 0 4%;
  img {
    width: 11.625rem;
    left: 50%;
    margin-left: -5.8125rem;
    position: relative;
    margin-top: 11.6875rem;
  }
  h5 {
    color: #323233;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 0.625rem;
  }
  p {
    color: #969799;
    font-size: 0.8125rem;
    text-align: center;
  }
}
.pks {
  /deep/.van-checkbox-group {
    .van-swipe-cell {
      margin-bottom: 1.75rem;
      .van-checkbox {
        .van-checkbox__icon {
          margin-left: 0.9375rem;
          margin-right: 1.3125rem;
        }
      }
    }
  }
  .delete-button {
    height: 100%;
  }
  .pro {
    display: flex;
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
  }
  .pkbtn {
    width: 92%;
    height: 2.5rem;
    border-radius: 0.25rem;
    background-color: #51d78a;
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
  .totast {
    width: 8.125rem;
    height: 3.125rem;
    border-radius: 0.25rem;
    text-align: center;
    line-height: 3.125rem;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 18.75rem;
    left: 50%;
    margin-left: -4.0625rem;
    color: #e6e6e6;
    font-size: 1rem;
  }
}
</style>