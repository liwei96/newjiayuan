<template>
  <div id="detail">
    <top-view :jkl="jkl"></top-view>
    <div class="name">
      <h2>{{building.name}}</h2>
      <p>
        <span class="zhuang">{{building.decorate}}</span>
        <span v-for="(item,key) in building.features" :key="key">{{item}}</span>
      </p>
    </div>
    <div class="line"></div>
    <div class="basic">
      <h3>基本信息</h3>
      <ul>
        <li class="pri">
          参考单价：
          <span>
            <i>{{building.price}}</i>元/m²
          </span>
        </li>
        <li class="pri">
          参考总价：
          <span>
            <i>{{building.total_price}}</i>万起
          </span>
          <button>询底价</button>
        </li>
        <li>
          类 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 型：
          <span>{{building.type}}</span>
        </li>
        <li>
          户 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 型：
          <span>{{building.room_types}}</span>
          <p>
            更多户型
            <img src="~/assets/j-more.png" alt />
          </p>
        </li>
        <li class="address">
          楼盘地址：
          <span>{{building.address}}</span>
        </li>
      </ul>
    </div>
    <div class="line"></div>
    <div class="basic">
      <h3>销售信息</h3>
      <ul>
        <li>
          开盘时间：
          <span>{{building.open_time}}</span>
          <button>最新开盘通知</button>
        </li>
        <li>
          加推时间：
          <span>{{building.push_time}}</span>
        </li>
        <li>
          交房时间：
          <span>{{building.give_time}}</span>
        </li>
        <li>
          预 售 证：
          <span>{{building.license}}</span>
        </li>
        <li>
          产权年限：
          <span>{{building.year}}年</span>
        </li>
        <li>
          开 发 商：
          <span>{{building.developer}}</span>
        </li>
      </ul>
    </div>
    <div class="line"></div>
    <div class="basic">
      <h3>建筑信息</h3>
      <ul>
        <li>
          户型面积：
          <span>{{building.area}}m²</span>
        </li>
        <li>
          建筑面积：
          <span>{{building.built_area}}m²</span>
        </li>
        <li>
          容&nbsp;积&nbsp;率：
          <span>{{building.capacity_rate}}</span>
        </li>
        <li>
          绿&nbsp;化&nbsp;率：
          <span>{{parseInt(building.green_rate)}}%</span>
        </li>
        <li>
          层&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高：
          <span>{{building.height}}</span>
        </li>
        <li>
          车位情况：
          <span>{{building.parking_num}}</span>
        </li>
        <li>
          装修状况：
          <span>{{building.decorate}}</span>
        </li>
        <li  class="traffic">
          公交路线：
          <span>{{building.traffic}}</span>
        </li>
        <li>
          物业费用：
          <span>{{building.property_fee}}</span>
        </li>
        <li>
          物业公司：
          <span>{{building.proprety_company}}</span>
        </li>
      </ul>
    </div>
    <div class="line"></div>
    <div class="intro">
      <h3>项目介绍</h3>
      <p>
        <i v-if="!showmore">{{building.introduce.substr(0,46)}}...</i>
        <span @click="showmore=true" v-if="!showmore">[展开]</span>
        <i v-if="showmore">{{building.introduce}}</i>
      </p>
    </div>
    <nav-view></nav-view>
  </div>
</template>
<script>
import topView from "@/components/header.vue";
import nav from "@/components/nav.vue";
export default {
  components: {
    "top-view": topView,
    "nav-view": nav,
  },
  async asyncData(context) {
    let other = context.query.other;
    let city = context.store.state.city;
    let jkl = context.params.name;
    let position = context.params.id;
    let [res] = await Promise.all([
      context.$axios
        .get("/jy/project/base/phone", {
          params: {
            city: city,
            position: position,
            page: 1,
            limit: 10,
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
      phone: res.common.phone,
      building: res.building,
    };
  },
  data() {
    return {
      jkl: "",
      phone: "",
      building: {},
      showmore:false
    };
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
  position: fixed;
  top: 0;
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
.name {
  padding: 2.75rem 4% 1.0625rem 4%;
  h2 {
    color: #121212;
    font-size: 1.25rem;
    margin-top: 1.125rem;
    margin-bottom: 0.5rem;
  }
  p {
    span {
      padding: 0.125rem 0.25rem;
      color: #7d7d80;
      font-size: 0.6875rem;
      background-color: #f5f5f5;
      margin-right: 0.375rem;
      border-radius: 0.125rem;
    }
    .zhuang {
      color: #fff;
      background-color: #2ac66d;
    }
  }
}
.basic {
  margin-left: 4%;
  padding-right: 4%;
  h3 {
    color: #2f3133;
    font-size: 1rem;
    margin-bottom: 1.125rem;
    padding-top: 1.125rem;
    font-weight: bold;
  }
  ul {
    li {
      height: 2.9375rem;
      line-height: 2.9375rem;
      border-top: 0.03125rem solid #f2f2f2;
      color: #808080;
      font-size: 0.875rem;
      span {
        color: #323233;
        font-size: 0.875rem;
      }
      p {
        color: #5f7891;
        font-size: 0.875rem;
        float: right;
        img {
          width: 1rem;
          margin-left: 0.25rem;
          margin-bottom: -0.125rem;
        }
      }
      button {
        width: 5.625rem;
        background-color: #f1f8f4;
        height: 1.75rem;
        border-radius: 0.1875rem;
        text-align: center;
        line-height: 1.75rem;
        font-size: 0.8125rem;
        border: 0;
        color: #2ac66d;
        float: right;
        margin-top: 0.625rem;
      }
    }
    .pri {
      span {
        color: #fe582f;
        font-size: 0.5625rem;
        i {
          font-style: normal;
          font-size: 1rem;
          font-weight: bold;
        }
      }
      button {
        background-color: #f1f8f4;
        width: 4.625rem;
        height: 1.75rem;
        border-radius: 0.1875rem;
        text-align: center;
        line-height: 1.75rem;
        border: 0;
        color: #2ac66d;
        float: right;
        font-size: 0.8125rem;
        margin-top: 0.625rem;
      }
    }
    .address {
      span {
        width: 270px;
        display: inline-block;
        overflow: hidden;
        height: 20px;
        line-height: 26px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .traffic {
      position: relative;
      span {
        display: block;
        position: absolute;
        width: 16.875rem;
        height: 1.25rem;
        line-height: 1.25rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        top: 0.75rem;
        left: 4.5rem
      }
    }
  }
}
.line {
  background-color: #f7f7f7;
  height: 0.625rem;
}
.intro {
  padding: 0 4%;
  padding-bottom: 4.375rem;
  h3 {
    color: #2f3133;
    font-size: 1rem;
    padding-top: 1.125rem;
    margin-bottom: 0.875rem;
  }
  p {
    color: #646566;
    font-size: 0.875rem;
    line-height: 1.625rem;
    text-indent: 1.75rem;
    span {
      color: #5f7891;
      font-size: 0.9375rem;
    }
    i {
      font-style: normal;
    }
  }
}
</style>