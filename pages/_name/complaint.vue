<template>
  <div id="complaint">
    <top-view :jkl="jkl"></top-view>
    <div class="con">
      <textarea placeholder="输入您的宝贵建议" v-model="txt"></textarea>
      <p>
        您有任何问题需要帮助可以写在这里，我们的人员将在最短时间
        内回复您，感谢您对允家新房的支持！
      </p>
      <button @click="btn">确定</button>
    </div>
  </div>
</template>
<script>
import topView from "@/components/header.vue";
import { put } from "@/api/api";
import '@/static/css/foot.css'
export default {
  components: {
    "top-view": topView,
  },
  async asyncData(context) {
    let jkl = context.params.name;
    return {
      jkl: jkl,
    };
  },
  head() {
    return {
      title: "家园新房-提交问题",
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
      txt: "",
    };
  },
  methods: {
    btn() {
      let txt = this.txt;
      if (!txt) {
        this.toast("不能为空");
        return;
      }
      let tel = $cookies.get("phone");
      let ip = ip_arr["ip"];
      let city = $cookies.get("city");
      let kid = $cookies.get("kid");
      let other = $cookies.get("other");
      put({
        tel: tel,
        city: city,
        page: 4,
        source: "线上推广1",
        kid: kid,
        other: other,
        position: 107,
        remark: txt,
        ip: ip,
        staff_id: 106,
      }).then(res=>{
        if(res.data.code == 200){
          console.log(res)
          this.toast('提交成功')
        }
      })
    },
  },
};
</script>
<style lang="less" scoped>
.con {
  padding: 0 4%;
  padding-top: 3.625rem;
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
    margin-bottom: 0.625rem;
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
    color: #7f7f80;
    font-size: 0.75rem;
    line-height: 1.125rem;
    margin-bottom: 2.25rem;
  }
  button {
    width: 100%;
    height: 2.75rem;
    border-radius: 0.25rem;
    text-align: center;
    line-height: 2.75rem;
    border: 0;
    background: linear-gradient(-270deg, #20c466, #3fd6a7);
    color: #fff;
    font-size: 1rem;
  }
}
</style>