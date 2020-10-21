<template>
    <div id="talklist">
        <header>
        <img class="back" src="~/assets/goback.png" alt="" @click="back" />
        在线咨询
      </header>
      <ul class="con">
          <li>
              <div class="left">
                  <img src="~/assets/people.png" alt="">
                  <p>1</p>
              </div>
              <div class="right">
                  <p class="top">
                      李华 <span class="pro">越秀缦云府</span>
                    <span class="time">11:24</span>
                  </p>
              </div>
          </li>
      </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{

    },
    mounted(){
        $('#foott').css('display','none')
    }
}
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
  border-bottom: 0.03125rem solid #F7F7F7;
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
        
    }
}
</style>