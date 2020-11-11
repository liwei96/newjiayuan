<template>
  <div id="collection">
    <top-view :jkl="jkl"></top-view>
    <div class="other" v-if="list.length">
      <template v-for="(item, key) in list">
        <nuxt-link :to="'/' + jkl + '/content/' + item.id" :key="key">
          <div class="pro">
            <img :src="item.img" alt />
            <div class="pro-msg">
              <h5>
                {{ item.name }}
                <span>{{ item.state }}</span>
              </h5>
              <p class="pro-price">
                <span>{{ item.price }}</span>
                <i>元/m²</i>
              </p>
              <p class="attr">
                {{ item.type }} | {{ item.city }}-{{
                  item.country.substr(0, 2)
                }}
                | {{ item.area }}m²
              </p>
              <p class="pro-icon">
                <span class="pro-icon-zhuang">{{ item.decorate }}</span>
                <span
                  class="pro-icon-type"
                  v-for="(val, k) in item.features"
                  :key="k"
                  >{{ val }}</span
                >
              </p>
            </div>
          </div>
        </nuxt-link>
      </template>
    </div>
    <div class="isnull" v-if="!list.length">
      <img src="~/assets/viewed.jpg" alt="" />
      <p>您暂无浏览记录，快去逛逛吧</p>
      <nuxt-link :to="'/' + jkl + '/search'">
        <button>去看楼盘</button>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import topView from "@/components/header.vue";
import '@/static/css/foot.css'
export default {
  components: {
    "top-view": topView,
  },
  async asyncData(context) {
    let city = context.store.state.city;
    let token = context.store.state.cookie.token;
    let jkl = context.params.name;
    let other = context.query.other;
    let [res,res1] = await Promise.all([
      context.$axios
        .get("/jy/mine/foots", {
          params: {
            token: token,
            page: 1,
            limit: 10,
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
          // console.log(data)
          return data;
        }),
    ]);
    return {
      jkl: jkl,
      list: res.data,
      title:res1.common.header.title,
      description:res1.common.header.description,
      keywords:res1.common.header.keywords
    };
  },
  head() {
    return {
      title: this.title || "家园新房-浏览足迹",
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
};
</script>
<style lang="less" scoped>
.other {
  padding: 0 4%;
  padding-top: 3.5rem;
  .pro {
    margin-bottom: 1.875rem;
    width: 100%;
    display: flex;
    text-decoration: none;
    img {
      width: 6.875rem;
      height: 5rem;
      margin-right: 0.75rem;
      border-radius: 0.1875rem;
    }
    .pro-msg {
      flex: 1;
      h5 {
        color: #5c5c5c;
        font-size: 1rem;
        font-weight: bold;
        margin-top: -0.25rem;
        margin-bottom: 0.125rem;
        span {
          color: #1fc365;
          font-size: 0.6875rem;
          float: right;
          padding: 0.1875rem 0.375rem;
          background-color: #f0faf1;
          border-radius: 0.125rem;
          font-weight: 400;
        }
      }
      .pro-price {
        color: #7a7a7a;
        font-size: 0.75rem;
        margin-bottom: 0.1875rem;
        span {
          color:#FF5454;
          font-size: 0.9375rem;
        }
        i {
          font-style: normal;
          color:#FF5454;
        }
      }
      .attr {
        color: #7a7a7a;
        font-size: 0.75rem;
        margin-bottom: 0.1875rem;
      }
      .pro-icon {
        .pro-icon-zhuang {
          color: #5aabe5;
          font-size: 0.6875rem;
          padding: 0.1875rem 0.375rem;
          background-color: #f0f5f9;
          margin-right: 0.375rem;
          border-radius: 0.125rem;
        }
        .pro-icon-type {
          color: #888a8f;
          font-size: 0.6875rem;
          padding: 0.1875rem 0.375rem;
          border-radius: 0.125rem;
          background-color: #f7f8fa;
          margin-right: 0.375rem;
        }
      }
    }
  }
}
.isnull {
  position: relative;
  img {
    width: 12.5rem;
    position: absolute;
    top: 10.625rem;
    left: 50%;
    margin-left: -6.25rem;
  }
  p {
    color: #7d7e80;
    font-size: 0.8125rem;
    position: relative;
    text-align: center;
    top: 22.5rem;
    margin-bottom: 1.5rem;
  }
  button {
    background: linear-gradient(270deg, #1fc365, #3fd6a6);
    box-shadow: 0px 0.15625rem 0.3125rem 0px rgba(44, 203, 128, 0.2);
    width: 10rem;
    height: 2.25rem;
    border-radius: 0.25rem;
    text-align: center;
    line-height: 2.25rem;
    color: #fff;
    font-size: 0.875rem;
    border: 0;
    position: relative;
    top: 23.4375rem;
    left: 50%;
    margin-left: -5rem;
  }
}
</style>