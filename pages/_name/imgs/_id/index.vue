<template>
  <div id="imgs">
    <top-view :jkl="jkl"></top-view>
    <div class="con">
      <div class="imgs">
        <h4>效果图(4）</h4>
        <div class="imgbox">
          <img v-lazy="item.small" alt v-for="(item,key) in efects" :key="key" @click="big(efectsbig,key)"/>
        </div>
      </div>
      <div class="imgs">
        <h4>实景图(5)</h4>
        <div class="imgbox">
          <img v-lazy="item.small" alt v-for="(item,key) in reals" :key="key" @click="big(realbig,key)"/>
        </div>
      </div>
      <div class="imgs">
        <h4>样板房(4)</h4>
        <div class="imgbox">
          <img v-lazy="item.small" alt v-for="(item,key) in templates" :key="key" @click="big(examplebig,key)"/>
        </div>
      </div>
      <div class="imgs">
        <h4>配套(4)</h4>
        <div class="imgbox">
          <img v-lazy="item.small" alt v-for="(item,key) in matchings" :key="key" @click="big(matchingbig,key)"/>
        </div>
      </div>
      <div class="imgs">
        <h4>交通图(1)</h4>
        <div class="imgbox">
          <img v-lazy="item.small" alt v-for="(item,key) in traffics" :key="key" @click="big(trafficbig,key)"/>
        </div>
      </div>
      <div class="huimg">
        <h4>户型图(5)</h4>
        <div class="imgbox">
          <div class="img" v-for="(item,key) in apartments" :key="key" @click="big(departmentsbig,key)">
            <img v-lazy="item.small" alt />
          </div>
        </div>
      </div>
    </div>
    <nav-view :phone="phone" @fot="chang($event)"></nav-view>
    <van-popup v-model="tan" :style="{background:'rgba(0,0,0,0)'}" @click-overlay="typebtn = 0">
      <tan-view :txt="remark" :typenum="typenum" :id="id" :name="name" @close="cli($event)" :typebtn="typebtn"></tan-view>
    </van-popup>
  </div>
</template>
<script>
import topView from "@/components/header.vue";
import nav from "@/components/nav.vue";
import tan from "@/components/tan.vue";
import { ImagePreview } from 'vant';
export default {
  components: {
    "top-view": topView,
    "nav-view": nav,
    "tan-view":tan
  },
  async asyncData(context) {
    let id = context.params.id;
    let token = context.store.state.cookie.token;
    let jkl = context.params.name;
    let other = context.query.other;
    let [res] = await Promise.all([
      context.$axios
        .get("/jy/imgs/phone", {
          params: {
            id: id,
            token: token,
            other: other,
          },
        })
        .then((resp) => {
          let data = resp.data;
          data.efectsbig = []
          for(let val of data.imgs.effect){
              data.efectsbig.push(val.big)
          }
          data.trafficbig = []
          for(let val of data.imgs.traffic){
              data.trafficbig.push(val.big)
          }
          data.matchingbig = []
          for(let val of data.imgs.matching){
              data.matchingbig.push(val.big)
          }
          data.realbig = []
          for(let val of data.imgs.real){
              data.realbig.push(val.big)
          }
          data.examplebig = []
          for(let val of data.imgs.example){
              data.examplebig.push(val.big)
          }
          data.departmentsbig = []
          for(let val of data.imgs.departments){
              data.departmentsbig.push(val.big)
          }
          // console.log(data)
          return data;
        }),
    ]);
    return {
      efects: res.imgs.effect,
      efectsbig:res.efectsbig,
      traffics: res.imgs.traffic,
      matchings: res.imgs.matching,
      reals: res.imgs.real,
      templates: res.imgs.example,
      apartments: res.imgs.departments,
      phone: res.common.phone,
      trafficbig:res.trafficbig,
      matchingbig:res.matchingbig,
      realbig:res.realbig,
      examplebig:res.examplebig,
      departmentsbig:res.departmentsbig,
      jkl: jkl,
    };
  },
  head() {
    return {
      title: "家园新房-楼盘相册",
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
      navnum: 0,
      efects:[],
      traffics:[],
      matchings:[],
      reals:[],
      templates:[],
      phone:'',
      jkl:'',
      efectsbig:[],
      tan:false,
      typenum:0,
      typebtn:1,
      name:'',
      remark:'',
    };
  },
  methods: {
    big(arr, k) {
      ImagePreview({
        images: arr,
        startPosition: k,
        onClose() {
          // do something
        },
      });
    },
    cli(e) {
      this.tan = e;
    },
    chang(data) {
      this.typenum = data.position;
      this.name = data.name;

      this.typebtn = 1
      this.tan = true
      this.remark='相册页+预约看房'
    },
  },
};
</script>
<style lang="less" scoped>
.con {
  padding: 0 4%;
  padding-top: 3.875rem;
  padding-bottom: 3.75rem;
  .imgs {
    h4 {
      color: #2f3133;
      font-size: 1rem;
      margin-bottom: 1.125rem;
    }
    .imgbox {
      margin-bottom: 1.5rem;
      img {
        width: 6.75rem;
        height: 5rem;
        border-radius: 0.1875rem;
        margin-right: 0.37rem;
        margin-bottom: 0.4rem;
      }
      img:nth-of-type(3n) {
        margin-right: 0;
      }
    }
  }
  .huimg {
    h4 {
      color: #2e3033;
      font-size: 1rem;
      margin-bottom: 1.125rem;
    }
    .imgbox {
      overflow: hidden;
      .img {
        float: left;
        background-color: #fafafa;
        margin-bottom: 0.625rem;
        margin-right: 0.625rem;
        width: 6.75rem;
        height: 5rem;
        display: flex;
        justify-content: center;
        img {
          height: 5rem;
          max-width: 100%;
        }
      }
    }
    .img:nth-of-type(3n) {
      margin-right: 0;
    }
  }
}
</style>