<template>
  <div id="response">
    <top-view :jkl="jkl"></top-view>
    <div class="con">
      <p class="tit">
        <span>问</span> {{question.question}}
        
      </p>
      <div class="text">
        <textarea
          v-model="text"
          placeholder="在这里输入您的解答"
          maxlength="50"
        ></textarea>
        <p>{{ textnum }}/50</p>
      </div>
      <button @click="put">提交回答</button>
    </div>
  </div>
</template>
<script>
import topView from "@/components/header.vue";
import { answer } from '@/api/api'
export default {
  components: {
    "top-view": topView,
  },
  async asyncData(context) {
    let other = context.query.other;
    let jkl = context.params.name;
    let id = context.params.id;
    let city = context.store.state.city;
    let token = context.store.state.cookie.token;
    let [res] = await Promise.all([
      context.$axios
        .get("/jy/want/answer", {
          params: {
            id: id,
            token: token,
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
      question: res.data,
      id: id,
    };
  },
  data() {
    return {
      textnum: 0,
      text: "",
      question:{},
      phone:''
    };
  },
  methods:{
    put(){
      let that = this
      answer({id:that.question.id,answer:that.text}).then(res=>{
        if(res.data.code == 200){
          that.toast('回答成功')
          that.$router.go(-1)
        }
      })
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
    font-size: 0.875rem;
    line-height: 1.40625rem;
    margin-bottom: 1.25rem;
    span {
      padding: 0.1875rem;
      border-radius: 0.125rem;
      background-color: #ff5454;
      color: #fff;
      font-size: 0.625rem;
    }
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