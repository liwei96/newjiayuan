<template>
  <div id="response">
    <top-view :jkl="jkl"></top-view>
    <div class="con">
      <p class="tit">{{txt}}在线咨询师帮您解答</p>
      <div class="text">
        <textarea
          v-model="text"
          placeholder="在这里输入您的问题"
          maxlength="50"
        ></textarea>
        <p>{{ textnum }}/50</p>
      </div>
      <button @click="put">发布提问</button>
    </div>
  </div>
</template>
<script>
import topView from "@/components/header.vue";
import { ask } from "@/api/api";
import '@/static/css/foot.css'
export default {
  components: {
    "top-view": topView,
  },
  async asyncData(context) {
    let host = context.store.state.host
    let jkl = context.params.name;
    let id = context.params.id;
    return {
      jkl: jkl,
      id: id,
      host:host
    };
  },
  head() {
    return {
      title: "家园新房-提交问题页",
      meta: [
        {
          name: "description",
          content:
            "家园新房"
        },
        {
          name: "Keywords",
          content: "家园新房"
        }
      ]
    };
  },
  data() {
    return {
      textnum: 0,
      text: "",
      jkl: "",
      id: "",
      txt: '家园'
    };
  },
  methods: {
    put() {
      let that = this;
      let token = $cookies.get("token");
      let city = $cookies.get("city");
      ask({
        token: token,
        project: that.id,
        city: city,
        question: that.text,
      }).then((res) => {
        if (res.data.code == 200) {
          this.toast("提交成功");
          this.$router.push("/" + that.jkl + "/questions/" + that.id);
        }
      });
    },
  },
  mounted() {
    if(this.host == 0) {
      this.txt = '家园'
    }else {
      this.txt = '易得房'
    }
  },
  watch: {
    text(val) {
      if (val.length <= 50) {
        this.textnum = val.length;
      } else {
        this.textnum = 50;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.con {
  padding: 0 4%;
  padding-top: 3.625rem;
  .tit {
    color: #323333;
    font-size: 1rem;
    margin-bottom: 1.25rem;
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