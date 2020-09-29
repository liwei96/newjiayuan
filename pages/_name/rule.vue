<template>
  <div id="Rule">
    <header>
      <img class="back" src="~/assets/goback.png" alt @click="home" />
      <img class="logo" src="~/assets/logo.png" alt @click="home" />
      <img class="home" src="~/assets/home-about.png" alt @click="home" />
    </header>
    <div class="con">
      <p>
        <span>交通：</span>3公里内 存在 地铁站（6分）、火车站（2分）、飞机场（1分）、长途汽车站（1分）;1000米内存在公交站（4分）最高10分
      </p>
      <p>
        <span>医疗：</span>3公里内 存在综合医院 （4分）急救中心（3分）专科医院 （2分） 诊所（2分）最高10分
      </p>
      <p>
        <span>商业：</span>3公里内 存在 购物中心（4分）百货商场（3分） 超市 (2分) 便利店 （1分)
      </p>
      <p>
        <span>休闲：</span>3公里内 存在 旅游景点（5分）2公里内运动健身（3分）2公里休闲娱乐（2分）
      </p>
      <p>
        <span>教育：</span>3公里内 存在 中学（4分）小学（3分）幼儿园（2分）高等院校（1分）
      </p>
      <p>
        <span>层高：</span>【住宅】层高2.8为基准5分，多0.1加1分，少0.1减1分，最低0分，最高10分。【公寓】小于2.8的0分，大于等于2.8小于2.9的1分，大于等于2.9小于3的2分，大于等于3小于3.2的3分，大于等于3.2小于3.3的4分，大于等于3.3小于3.9的5分，大于等于3.9小于4.5的6分，大于等于4.5小于4.7的7分，大于等于4.7小于5得8分，大于等于5小于5.1得9分，大于等于5.1得10分
      </p>
      <p>
        <span>品质：</span>容积率（总分8分）：小于等于1.2的8分，大于1.2小于等于2.5的6分，大于2.5小于等于3的4分，大于3小于等于5的2分，大于5的1分;
        车位比（总分1分）: 按"X:1"(X代表小区车位数，1代表小区住户数)计算 车位：户数小于1得0分，大于1得1分;
        绿化率（总分1分）:30%及以上 1分，小于30%0分。
      </p>
      <p>
        <span>户型：</span>40方以内：以1室1卫基准分5分，多1室的加3分，多1卫加2分。
        40-80方：以2室1卫基准分5分，多1室的加3分，多1卫加2分。
        80-90方：以3室1卫基准分5分，多1室的加3分，多1卫加2分。
        90-100方:以3室2卫基准分5分，多1室加3分，多1卫加2分。
        100-120方:以3室2卫基准分5分，多1室加3分，多1卫加2分。
        120-140方：以4室2卫基准分5分，多1室加3分，多1卫加2分。
        140-180方：以5室2卫为基准分5分，多1室加3分，多1卫加2分
        180方以上：以5室3卫基准5分，多1室加3分，多1卫加2分
      </p>
    </div>
  </div>
</template>
<script>
import '@/static/css/foot.css'
export default {
  head() {
    return {
      title: "家园新房-雷达图评分规则",
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
    return {};
  },
  methods: {
    home() {
      this.$router.go(-1);
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
}
.con {
  padding: 0 4%;
  padding-top: 1.25rem;
  p {
    font-size: 0.875rem;
    color: #646566;
    margin-bottom: 1.25rem;
    span {
      font-size: 1rem;
      color: #000;
    }
  }
}
</style>