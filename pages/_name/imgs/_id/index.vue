<template>
    <div id="imgs">
        <top-view></top-view>
        <div class="con">
            <div class="imgs">
                <h4>效果图(4）</h4>
                <div class="imgbox">
                    <img src="~/assets/lun02.jpg" alt="">
                    <img src="~/assets/lun02.jpg" alt="">
                    <img src="~/assets/lun02.jpg" alt="">
                    <img src="~/assets/lun02.jpg" alt="">
                </div>
            </div>
            <div class="imgs">
                <h4>实景图(5)</h4>
                <div class="imgbox">
                    <img src="~/assets/lun02.jpg" alt="">
                    <img src="~/assets/lun02.jpg" alt="">
                    <img src="~/assets/lun02.jpg" alt="">
                    <img src="~/assets/lun02.jpg" alt="">
                </div>
            </div>
            <div class="imgs">
                <h4>样板房(4)</h4>
                <div class="imgbox">
                    <img src="~/assets/lun02.jpg" alt="">
                    <img src="~/assets/lun02.jpg" alt="">
                    <img src="~/assets/lun02.jpg" alt="">
                    <img src="~/assets/lun02.jpg" alt="">
                </div>
            </div>
            <div class="imgs">
                <h4>配套(4)</h4>
                <div class="imgbox">
                    <img src="~/assets/lun02.jpg" alt="">
                    <img src="~/assets/lun02.jpg" alt="">
                    <img src="~/assets/lun02.jpg" alt="">
                    <img src="~/assets/lun02.jpg" alt="">
                </div>
            </div>
            <div class="imgs">
                <h4>交通图(1)</h4>
                <div class="imgbox">
                    <img src="~/assets/lun02.jpg" alt="">
                    <img src="~/assets/lun02.jpg" alt="">
                    <img src="~/assets/lun02.jpg" alt="">
                    <img src="~/assets/lun02.jpg" alt="">
                </div>
            </div>
            <div class="huimg">
                <h4>户型图(5)</h4>
                <div class="imgbox">
                    <div class="img">
                        <img src="~/assets/hu.png" alt="">
                    </div>
                    <div class="img">
                        <img src="~/assets/hu.png" alt="">
                    </div>
                    <div class="img">
                        <img src="~/assets/hu.png" alt="">
                    </div>
                    <div class="img">
                        <img src="~/assets/hu.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <nav-view></nav-view>
    </div>
</template>
<script>
import topView from "@/components/header.vue";
import nav from "@/components/nav.vue";
export default {
  components: {
    "top-view": topView,
    "nav-view": nav,
  },
  data() {
    return {
      navnum: 0,
    };
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
            color: #2F3133;
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
            color: #2E3033;
            font-size: 1rem;
            margin-bottom: 1.125rem;
        }
        .imgbox {
            overflow: hidden;
            .img {
                float: left;
                background-color: #FAFAFA;
            margin-bottom: 0.625rem;
            margin-right: 0.625rem;
                width: 6.75rem;
                height: 5rem;
                display: flex;
                justify-content: center;
                img{
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