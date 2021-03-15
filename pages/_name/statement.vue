<template>
  <div id="privacy">
    <top-view :jkl="jkl"></top-view>
    <div class="con">
      <h2>{{txt}}新房版权声明</h2>
      <p>
        1、{{txt}}新房转载的或者任何信息发布人通过{{txt}}新房平台发布的信息或内容，并不代表{{txt}}新房的意见及观点，也不意味着本网赞同其观点或证实其内容的真实性。
      </p>
      <p>
        2、{{txt}}新房转载的或者任何通过{{txt}}新房平台发布的信息、文字、图片、音视频等资料均由本网站用户提供，其真实性、准确性和合法性由信息发布人负责。{{txt}}新房不提供任何保证，并不承担任何法律责任。若任何人发现上述内容中存在任何侵犯第三方合法权益情形的，{{txt}}新房随时接受用户反馈，并愿意为用户维权提供便利条件。
      </p>
      <p>
        3、{{txt}}新房所转载的或者任何通过{{txt}}新房平台发布的信息、文字、图片、音视频等资料，如果侵犯了第三方的知识产权或其他权利，责任由信息发布者或转载者本人承担，本网站对此不承担责任。
      </p>
      <p>
        4、对本网版权所有之内容，已经本网书面许可的单位或个人，在使用时必须注明“稿件来源：{{txt}}新房”，并标明本网网址www.jy1980
        .com，违者本网将依法追究其相关法律责任。
      </p>
      <p>
        5、转载或引用本网内容必须是以新闻性或资料性公共免费信息服务为目的的合理、善意使用，不得对本网内容原意进行曲解、修改，同时必须保留本网注明的“稿件来源”，并自负版权等法律责任。
      </p>
      <p>
        6、凡本网注明“来源：XXX
        ”的文/图等资料，本网转载出于传递更多信息之目的，并不意味着赞同其观点或证实其内容的真实性。
      </p>
      <p>
        7、转载或引用本网其他版权所有之内容须注明“转自（或引自）{{txt}}新房”字样，并标明本网网址www.jy1980
        .com。转载或引用本网中的署名文章，请按规定向作者支付稿酬。
      </p>
      <p>
        8、除注明“来源：{{txt}}新房”或“来源：{{txt}}新房××（频道）”的内容外，本网以下内容亦不可任意转载：
      </p>
      <p>A、本网所指向的非本网内容的相关链接内容；</p>
      <p>B、已作出不得转载或未经许可不得转载声明的内容；</p>
      <p>C、未由本网署名或本网引用、转载的他人作品等非本网版权内容；</p>
      <p>D、本网中特有的图形、标志、页面风格、编排方式、程序等；</p>
      <p>E、本网中必须具有特别授权或具有注册用户资格方可知晓的内容；</p>
      <p>F、其他法律不允许或本网认为不适合转载的内容。</p>
      <p>9、转载或引用本网内容不得进行如下活动：</p>
      <p>A、损害本网、他人或其他社会群体利益的行为；</p>
      <p>B、任何违反法律法规的行为。</p>
      <p>
        10、对于不当转载或引用本网内容而引起的纷争等或因纠纷等造成的任何损失，本网不承担相关法律责任。
      </p>
      <p>
        11、对不遵守本声明的用户或其他违法、恶意使用本网内容者，本网保留追究其法律责任的权利。
      </p>
      <p>
        12、本声明未涉及的问题请参见国{{txt}}关法律法规，当本声明与国{{txt}}关法律法规冲突时，以国家法律法规为准。
      </p>
      <p>13、本网站相关声明版权及其修改权、更新权和解释权均属{{txt}}新房所有。</p>
    </div>
  </div>
</template>
<script>
import "@/static/css/foot.css";
import topView from "@/components/header.vue";
export default {
  components: {
    "top-view": topView,
  },
  async asyncData(context) {
    let host = context.store.state.host
    let jkl = context.params.name;
    let city = context.store.state.city;
    let token = context.store.state.cookie.token;
    let [res] = await Promise.all([
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
      title:res.common.header.title,
      description:res.common.header.description,
      keywords:res.common.header.keywords,
      host:host
    };
  },
  head() {
    return {
      title: this.title || "家园新房-版权声明",
      meta: [
        {
          name: "description",
          content: this.description || 
            "家园新房"
        },
        {
          name: "Keywords",
          content: this.keywords || "家园新房"
        }
      ]
    };
  },
  data(){
    return {
      txt: '家园'
    }
  },
  mounted(){
    if(this.host == 0) {
      this.txt = '家园'
    }else {
      this.txt = '易得房'
    }
  }
};
</script>
<style lang="less" scoped>
.con {
  padding: 0 4%;
  padding-top: 3.875rem;
  h2 {
    color: #323233;
    font-size: 0.9375rem;
    margin-bottom: 0.75rem;
  }
  p {
    color: #4b4c4d;
    font-size: 0.8125rem;
    line-height: 1.4375rem;
    margin-bottom: 0.75rem;
  }
}
</style>