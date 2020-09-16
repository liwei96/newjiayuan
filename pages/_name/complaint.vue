<template>
  <div id="complaint">
    <top-view></top-view>
    <div class="con">
      <textarea placeholder="输入您的宝贵建议"></textarea>
      <p>
        您有任何问题需要帮助可以写在这里，我们的人员将在最短时间
        内回复您，感谢您对允家新房的支持！
      </p>
      <button>确定</button>
    </div>
  </div>
</template>
<script>
import topView from "@/components/header.vue";
export default {
  components: {
    "top-view": topView,
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