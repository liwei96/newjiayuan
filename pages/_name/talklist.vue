<template>
  <div id="talklist">
    <header>
      <img class="back" src="~/assets/goback.png" alt="" @click="back" />
      在线咨询
    </header>
    <ul class="con">
      <li @click="gotalk">
        <div class="left">
          <img src="~/assets/people.png" alt="" />
          <p>1</p>
        </div>
        <div class="right">
          <div class="top">
            李华
            <p class="pro">越秀缦云府越秀缦云府越秀缦云府</p>
            <span class="time">11:24</span>
          </div>
          <p class="txt">您好！很高兴为您服务您好！很高兴为您服务</p>
        </div>
      </li>
      <li>
        <div class="left">
          <img src="~/assets/people.png" alt="" />
          <p>1</p>
        </div>
        <div class="right">
          <div class="top">
            李华
            <p class="pro">越秀缦云府越秀缦云府越秀缦云府</p>
            <span class="time">11:24</span>
          </div>
          <p class="txt">您好！很高兴为您服务您好！很高兴为您服务</p>
        </div>
      </li>
    </ul>
    
  </div>
</template>
<script>
export default {
    async asyncData(context) {
    let token = context.store.state.cookie.token;
    let jkl = context.params.name;
    return {
      jkl: jkl,
    };
  },
  data() {
    return {};
  },
  methods: {
      gotalk() {
          this.$router.push('/'+this.jkl+'/talk')
      }
  },
  mounted() {
    $("#foott").css("display", "none");
  },
};
</script>
<style lang="less" scoped>
header {
  height: 2.75rem;
  line-height: 2.75rem;
  text-align: center;
  color: #19191a;
  font-size: 1.125rem;
  position: relative;
  z-index: 1;
  border-bottom: 0.03125rem solid #f7f7f7;
  .back {
    width: 1.5rem;
    position: absolute;
    left: 1rem;
    margin-top: 0.5625rem;
  }
}
.con {
  padding: 0 4%;
  li {
    display: flex;
    height: 4.875rem;
    align-items: center;
    .left {
      display: flex;
      position: relative;
      img {
        width: 3rem;
        height: 3rem;
      }
      p {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        text-align: center;
        line-height: 1rem;
        font-size: 0.6875rem;
        color: #fff;
        background-color: #f24949;
        position: absolute;
        right: 0;
        top: -0.125rem;
      }
    }
    .right {
      margin-left: 0.9375rem;
      flex: 1;
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      border-bottom: 0.03125rem solid #f2f2f2;
      .top {
        color: #19191a;
        font-size: 1rem;
        margin-bottom: 0.625rem;
        display: flex;
        .pro {
          padding: 0.125rem 0.3125rem 0.15625rem 0.3125rem;
          color: #52c2cc;
          font-size: 0.6875rem;
          background-color: #ebf9fa;
          margin-left: 0.5rem;
          width: 6.5625rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .time {
          color: #afafb3;
          font-size: 0.75rem;
          float: right;
          margin-top: 0.25rem;
          margin-left: auto;
        }
      }
      .txt {
        color: #7d7d80;
        font-size: 0.8125rem;
        width: 15.875rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}

</style>