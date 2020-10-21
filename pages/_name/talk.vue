<template>
  <div id="Talk">
    <div class="talk">
      <header>
        <img class="back" src="~/assets/goback.png" alt="" @click="back" />
        允家李华为您服务
        <div class="status doen">
          <img src="~/assets/talk-list.png" alt="">
          <p>1</p>
        </div>
      </header>
      <div class="con">
        <p class="time">11:24</p>
        <div class="you">
          <img src="~/assets/people.png" alt="" />
          <p class="txt">
            您好！很高兴为您服务,看楼盘项目 本人可提供免费接送服务
          </p>
        </div>
        <div class="peo">
          <img src="~/assets/talk-peo.png" alt="" />
          <p class="txt">
            您好！很高兴为您服务,看楼盘项目 本人可提供免费接送服务
          </p>
        </div>
        <div class="peo-pro">
          <img src="~/assets/talk-peo.png" alt="" />
          <div class="pro">
            <img src="~/assets/lun02.jpg" alt="" />
            <div class="pro-msg">
              <p class="name">临安宝龙广场</p>
              <p class="area">建面 80-120/m²</p>
              <p class="price">
                均价<span><i>25000</i>元/m²</span>
              </p>
            </div>
          </div>
        </div>
        <div class="gettel">
          <img src="~/assets/people.png" alt="" class="peoimg" />
          <div class="telbox">
            <img src="~/assets/talk-tel.jpg" alt="" />
            <div class="telbox-bom">
              <p class="tit">为您制定专属分析报告</p>
              <p class="msg">
                向咨询师免费领取专属分析报告,内附有购房 流程全盘解读
              </p>
              <button>免费领取</button>
            </div>
          </div>
        </div>
        <div class="putcard">
          <img src="~/assets/people.png" alt="" class="peoimg" />
          <div class="cardbox">
            <div class="top">
              <img src="~/assets/people.png" alt="" />
              <div class="top-right">
                <h5>王烨城 <span>新房咨询</span></h5>
                <p>从业咨询服务6年</p>
              </div>
            </div>
            <div class="bom">
              <div class="txt">
                <p class="num"><span>134</span>人</p>
                <p class="type">服务客户</p>
              </div>
              <div class="txt">
                <p class="num"><span>134</span>次</p>
                <p class="type">带看客户</p>
              </div>
              <div class="txt">
                <p class="num"><span>99</span>%</p>
                <p class="type">好评率</p>
              </div>
            </div>
            <button>电话咨询</button>
          </div>
        </div>
        <div class="imgbox">
          <img src="~/assets/people.png" alt="" class="peoimg" />
          <div class="right">
            <img src="~/assets/lun02.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="nav">
        <div class="top">
          <p :class="txt ? 'active' : ''" @click="txt = !txt">大家都在问</p>
          <a href="tel:400">
          <p :class="teltype ? 'hid' : ''">电话咨询</p>
          </a>
        </div>
        <div class="bom">
          <input
            class="inu"
            type="text"
            v-model="talktxt"
            placeholder="在这输入内容"
          />
          <img src="~/assets/talk-icon.png" alt="" @click="icon = !icon" />
          <img src="~/assets/talk-img.png" alt="" v-show="!msg" />
          <input type="file" id="upload" v-show="!msg" />
          <span v-if="msg" @click="send">发送</span>
        </div>
      </div>
      <div class="icons" v-if="icon">
        <img v-for="item in faces" :key="item.con" :src="item.img" alt @click="seticon(item.con)"/>
      </div>
      <div class="words" v-if="txt">
        <div class="word">
          <div class="txt">
            <p v-if="type" class="showmsg" @click="settxt('您好，我想咨询项目详情？')">
              您好，我想咨询项目详情？
            </p>
          </div>
          <div class="txt">
            <p v-if="type" class="showmsg">
              您好，项目什么时候开盘？
            </p>
          </div>
        </div>
      </div>
    </div>

    <van-popup v-model="show" :style="{ background: 'rgba(0,0,0,0)' }">
      <div class="addtxt">
        <img src="~/assets/w-del.png" alt="" @click="show = false" />
        <h2>添加常用语</h2>
        <textarea
          placeholder="编辑您的常用语"
          v-model="addtxt"
          maxlength="50"
        ></textarea>
        <p>{{ addtxtnum }}/50</p>
        <button>确定</button>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      faces: [
        "[微笑]",
        "[嘻嘻]",
        "[哈哈]",
        "[可爱]",
        "[可怜]",
        "[挖鼻]",
        "[吃惊]",
        "[害羞]",
        "[挤眼]",
        "[闭嘴]",
        "[鄙视]",
        "[爱你]",
        "[泪]",
        "[偷笑]",
        "[亲亲]",
        "[生病]",
        "[太开心]",
        "[白眼]",
        "[右哼哼]",
        "[左哼哼]",
        "[嘘]",
        "[衰]",
        "[委屈]",
        "[吐]",
        "[哈欠]",
        "[抱抱]",
        "[怒]",
        "[疑问]",
        "[馋嘴]",
        "[拜拜]",
        "[思考]",
        "[汗]",
        "[困]",
        "[睡]",
        "[钱]",
        "[失望]",
        "[酷]",
        "[色]",
        "[哼]",
        "[鼓掌]",
        "[晕]",
        "[悲伤]",
        "[抓狂]",
        "[黑线]",
        "[阴险]",
        "[怒骂]",
        "[互粉]",
        "[心]",
        "[伤心]",
        "[猪头]",
        "[熊猫]",
        "[兔子]",
        "[ok]",
        "[耶]",
        "[good]",
        "[NO]",
        "[赞]",
        "[来]",
        "[弱]",
        "[草泥马]",
        "[神马]",
        "[囧]",
        "[浮云]",
        "[给力]",
        "[围观]",
        "[威武]",
        "[奥特曼]",
        "[礼物]",
        "[钟]",
        "[话筒]",
        "[蜡烛]",
        "[蛋糕]",
      ],
      icon: false,
      type: true,
      txt: false,
      show: false,
      addtxt: "",
      addtxtnum: 0,
      teltype: false,
      cardtype: false,
      status: false,
      msg: false,
      talktxt: "",
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    settxt(k){
      this.talktxt = k
      this.txt = false
    },
    send() {
      let img = require("~/assets/talk-peo.png");
      let msg = this.talktxt;
      let that = this
      if (msg.split("face").length !== 0) {
        let index = msg.indexOf("face");
        while (index != -1) {
          var reg = /face\[[\u4e00-\u9fa5_a-zA-Z]+\]/s;
          var match = msg.match(reg);
          if (match) {
            var title = match[0].replace("face", "");
          }
          for (let val in that.faces) {
            if (that.faces[val].con == title) {
              let img = require(`~/assets/${val}.gif`);
              let h = `<img src="${img}">`;
              msg = msg.replace(`face${title}`, h);
            }
          }
          index = msg.indexOf("face", index + 4);
        }
      }
      let dv = document.createElement("div");
      dv.className = "peo";
      dv.innerHTML = `
          <img src="${img}" alt="" />
              <p class="txt">
                ${msg}
              </p>
        `;
      $(".con").append(dv);
      dv.scrollIntoView();
      this.talktxt = ''
    },
    seticon(con) {
      this.talktxt = this.talktxt + "face" + con;
      this.icon = false;
    },
  },
  created() {
    let that = this;
    for (let val in that.faces) {
      that.faces[val] = {
        img: require(`~/assets/${val}.gif`),
        con: that.faces[val],
      };
    }
  },
  mounted() {
      $('#foott').css('display','none')
    document.getElementById("upload").addEventListener("change", function (e) {
      var file = event.currentTarget.files[0];
      if ((file.size / 1000).toFixed(0) < 2000) {
        let r = new FileReader(); //本地预览
        r.onload = function (e) {
          var imgFile = e.target.result; //或e.target都是一样的
          let img = require("~/assets/talk-peo.png");
          let dv = document.createElement("div");
          dv.className = "imgbox";
          dv.innerHTML = `
            <img src="${img}" alt="" class="peoimg" />
            <div class="right">
              <img src="${imgFile}" alt="">
            </div>
          `;
          let ig = ``;
          $(".con").append(dv);
          dv.scrollIntoView();
        };
        let base = r.readAsDataURL(file);
      } else {
        this.toast("请不要上传超过2M的图片");
      }
    });
  },
  watch: {
    talktxt(val) {
      if (val.length > 0) {
        this.msg = true;
      } else {
        this.msg = false;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.talk {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
header {
  height: 2.75rem;
  line-height: 2.75rem;
  text-align: center;
  color: #19191a;
  font-size: 1.125rem;
  position: relative;
  z-index: 1;
  .back {
    width: 1.5rem;
    position: absolute;
    left: 1rem;
    margin-top: 0.5625rem;
  }
  .status {
    position: absolute;
    color: #191919;
    font-size: 0.8125rem;
    display: flex;
    align-items: center;
    top: 0;
    right: 1rem;
    p {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: #49e641;
      margin-right: 0.25rem;
    }
  }
  .doen {
    img {
      width: 1.5rem;
      height: 1.5rem;
      margin-top: 0.6rem;
    }
    p {
      background-color: #FF4040;
      width: 0.8125rem;
      height: 0.8125rem;
      border-radius: 50%;
      position: absolute;
      text-align: center;
      line-height: 0.8125rem;
      color: #fff;
      font-size: 0.625rem;
      top: 0.375rem;
      right: -0.375rem;
    }
  }
}
.con {
  flex: 1;
  width: 92%;
  padding: 0 4%;
  background-color: #f5f7f7;
  overflow-y: auto;
  .time {
    margin-top: 1.125rem;
    font-size: 0.75rem;
    text-align: center;
    color: #afafb3;
    margin-bottom: 1.25rem;
  }
  /deep/.you {
    display: flex;
    flex-direction: row;
    margin-bottom: 1.5rem;
    img {
      width: 2.5rem;
      margin-right: 1rem;
      height: 2.5rem;
    }
    .txt {
      color: #fff;
      font-size: 0.875rem;
      padding: 0.75rem 0.625rem;
      border-radius: 0.1875rem 0 0.1875rem 0.1875rem;
      background-color: #52c2cc;
      position: relative;
      bottom: -0.625rem;
      max-width: 14.5rem;
      display: flex;
      align-items: center;
      img {
        width: 1rem;
        height: 1rem;
        margin-left: 0.25rem;
      }
    }
    .txt::after {
      content: "";
      display: block;
      position: absolute;
      border: 0.375rem solid transparent;
      border-top-color: #52c2cc;
      top: 0;
      left: -0.1875rem;
    }
  }
  /deep/.peo {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 1.5rem;
    img {
      width: 2.5rem;
      margin-left: 1rem;
      height: 2.5rem;
    }
    .txt {
      color: #323233;
      font-size: 0.875rem;
      padding: 0.75rem 0.625rem;
      border-radius: 0.1875rem 0 0.1875rem 0.1875rem;
      background-color: #e8eded;
      position: relative;
      bottom: -0.625rem;
      max-width: 14.5rem;
    }
    .txt::after {
      content: "";
      display: block;
      position: absolute;
      border: 0.375rem solid transparent;
      border-top-color: #e8eded;
      top: 0;
      right: -0.1875rem;
    }
  }
  /deep/.peo-pro {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 1.5rem;
    img {
      width: 2.5rem;
      margin-left: 1rem;
      height: 2.5rem;
    }
    .pro {
      width: 13.75rem;
      height: 12.5rem;
      border-radius: 0.375rem;
      overflow: hidden;
      background-color: #fff;
      img {
        width: 100%;
        height: 7.375rem;
      }
      .pro-msg {
        padding-left: 0.875rem;
        .name {
          color: #19191a;
          font-size: 0.9375rem;
          margin-bottom: 0.25rem;
          margin-top: 0.25rem;
        }
        .area {
          color: #969699;
          font-size: 0.75rem;
          margin-bottom: 0.25rem;
        }
        .price {
          color: #969699;
          font-size: 0.75rem;
          span {
            color: #ff5454;
            font-size: 0.625rem;
            i {
              font-style: normal;
              font-weight: bold;
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
  /deep/.gettel {
    display: flex;
    flex-direction: row;
    margin-bottom: 1.5rem;
    .peoimg {
      width: 2.5rem;
      margin-right: 1rem;
      height: 2.5rem;
    }
    .telbox {
      width: 15rem;
      height: 14.375rem;
      border-radius: 0.375rem;
      overflow: hidden;
      background-color: #fff;
      img {
        width: 100%;
      }
      .telbox-bom {
        padding: 0 0.9375rem;
        .tit {
          color: #323232;
          font-size: 0.9375rem;
          margin-bottom: 0.375rem;
          margin-top: 0.25rem;
        }
        .msg {
          color: #999999;
          font-size: 0.6875rem;
          line-height: 0.9375rem;
        }
        button {
          margin-top: 0.625rem;
          width: 100%;
          height: 1.875rem;
          border-radius: 0.25rem;
          border: 0;
          outline: none;
          text-align: center;
          line-height: 1.875rem;
          background-color: #52c2cc;
          font-size: 0.75rem;
          color: #fff;
          font-weight: bold;
        }
      }
    }
  }
  /deep/.putcard {
    display: flex;
    flex-direction: row;
    margin-bottom: 1.5rem;
    .peoimg {
      width: 2.5rem;
      margin-right: 1rem;
      height: 2.5rem;
    }
    .cardbox {
      width: 13.125rem;
      height: 8.125rem;
      border-radius: 0.375rem;
      background-color: #fff;
      padding: 0.9375rem;
      .top {
        display: flex;
        margin-bottom: 1rem;
        img {
          width: 2.25rem;
          height: 2.25rem;
          margin-right: 0.625rem;
        }
        .top-right {
          h5 {
            color: #1f1f1f;
            font-size: 0.875rem;
            font-weight: bold;
            position: relative;
            top: -0.125rem;
            span {
              color: #52c2cc;
              font-size: 0.6875rem;
              padding: 0.125rem 0.25rem;
              font-weight: 400;
              border-radius: 0.09375rem;
              background-color: #ebf9fa;
              margin-left: 0.3125rem;
            }
          }
          p {
            color: #646466;
            font-size: 0.75rem;
            margin-top: 0.125rem;
          }
        }
      }
      .bom {
        display: flex;
        margin-bottom: 0.75rem;
        .txt {
          width: 33%;
          .num {
            color: #121212;
            font-size: 0.625rem;
            padding-bottom: 0.25rem;
            border-right: 0.03125rem solid #f0f0f2;
            span {
              font-size: 1rem;
              font-weight: bold;
            }
          }
          .type {
            color: #646466;
            font-size: 0.6875rem;
            position: relative;
          }
        }
        .txt:nth-of-type(2) {
          text-align: center;
          width: 40%;
        }
        .txt:nth-of-type(3) {
          text-align: right;
          width: 27%;
          border: 0;
        }
      }
      button {
        width: 100%;
        height: 1.875rem;
        background-color: #52c2cc;
        text-align: center;
        line-height: 1.875rem;
        border-radius: 0.25rem;
        color: #fff;
        font-weight: bold;
        font-size: 0.75rem;
        border: 0;
        outline: none;
      }
    }
  }
  /deep/.imgbox {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 1.5rem;
    .peoimg {
      width: 2.5rem;
      margin-left: 1rem;
      height: 2.5rem;
    }
    .right {
      img {
        max-width: 7.5rem;
      }
    }
  }
}
.nav {
  width: 92%;
  height: 6.625rem;
  background-color: #fff;
  padding: 0 4%;
  .top {
    color: #646466;
    font-size: 0.8125rem;
    display: flex;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    p {
      color: #646466;
      padding: 0.375rem 1rem;
      border-radius: 0.9375rem;
      border: 0.03125rem solid #cccccc;
      margin-right: 0.625rem;
    }
    .active {
      border-color: #51c1cb;
      color: #51c1cb;
    }
    .hid {
      border-color: #d9d9d9;
      color: #d9d9d9;
    }
  }
  .bom {
    display: flex;
    align-items: center;
    position: relative;
    .inu {
      background-color: #ebeded;
      width: 14.9375rem;
      height: 2.5rem;
      border-radius: 0.25rem;
      border: 0;
      outline: none;
      padding-left: 0.9375rem;
      margin-right: 0.9375rem;
      font-size: 0.9375rem;
    }
    img {
      width: 1.75rem;
      height: 1.75rem;
    }
    img:nth-of-type(2) {
      margin-left: 1rem;
    }
    #upload {
      width: 1.75rem;
      height: 1.75rem;
      opacity: 0;
      position: absolute;
      right: 0;
    }
    span {
      width: 2.5rem;
      height: 2.125rem;
      border-radius: 0.25rem;
      line-height: 2.125rem;
      text-align: center;
      color: #fff;
      font-size: 0.875rem;
      background-color: #52c2cc;
      margin-left: 0.5rem;
    }
  }
}
.icons {
  padding: 1.5rem 4%;
  border-top: 0.03125rem solid #f2f2f2;
  height: 11.25rem;
  overflow-y: auto;
  img {
    width: 1.625rem;
    height: 1.625rem;
    margin-right: 1.1875rem;
    margin-bottom: 1.375rem;
  }
  img:nth-of-type(8n) {
    margin-right: 0;
  }
}
.words {
  padding: 0 4%;
  height: 13.75rem;
  .word {
    height: 13.25rem;
    overflow-y: auto;
    .txt {
      color: #313133;
      font-size: 0.8125rem;
      border-bottom: 0.03125rem solid #f2f2f2;
      .ll {
        display: flex;
        align-items: center;
      }
      .showmsg {
        padding: 1.25rem 0;
      }
      .tt {
        border: 0;
        outline: none;
        color: #313133;
        line-height: 1.1875rem;
        width: 19.5rem;
        font-size: 13px;
        padding: 1.25rem 0;
      }
      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
}
.addtxt {
  width: 19.6875rem;
  height: 17.5rem;
  border-radius: 0.375rem;
  box-shadow: 0px 0px 0.5625rem 0px rgba(51, 70, 87, 0.24);
  background-color: #fff;
  position: relative;
  img {
    position: absolute;
    width: 1rem;
    top: 1rem;
    right: 1rem;
  }
  h2 {
    color: #323233;
    font-size: 1.25rem;
    text-align: center;
    padding-top: 1.5rem;
    margin-bottom: 1.2rem;
  }
  textarea {
    width: 15.3125rem;
    height: 5.625rem;
    border-radius: 0.25rem;
    background-color: #f7f7f7;
    border: 0;
    outline: none;
    margin-left: 1.25rem;
    padding: 0.9375rem;
    margin-bottom: 1.4rem;
  }
  button {
    font-size: 0.9375rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
    background-color: #51c1cb;
    border: 0;
    outline: none;
    width: 17.1875rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    line-height: 2.5rem;
    margin-left: 1.25rem;
  }
  p {
    color: #7c7e7f;
    font-size: 0.75rem;
    position: absolute;
    right: 1.5rem;
    bottom: 6rem;
  }
}
.delmsg {
  width: 17.1875rem;
  height: 9.875rem;
  border-radius: 0.625rem;
  background-color: #fff;
  .tit {
    color: #333333;
    font-size: 1.125rem;
    text-align: center;
    padding-top: 1.25rem;
    margin-bottom: 1.125rem;
  }
  .msg {
    color: #7c7e7f;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .bom {
    border-top: 0.03125rem solid #f7f7f7;
    display: flex;
    padding-top: 0.375rem;
    p {
      width: 50%;
      font-size: 1rem;
      color: #7d7d7f;
      text-align: center;
      line-height: 2.375rem;
    }
    .btn {
      border-left: 0.03125rem solid #f2f2f2;
      color: #51c1cb;
    }
  }
}
</style>