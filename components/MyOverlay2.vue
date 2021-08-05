<template>
  <bm-overlay
    ref="customOverlay"
    :class="active < 13 ? 'sample' : (active==13?'sample1':'samples')"
    pane="labelPane"
    @draw="draw">
    <div class="city" v-html="text" @click="handleClick"></div>
  </bm-overlay>
</template>

<script>
export default {
  props: ['text', 'position', 'active'],
  watch: {
    position: {
      handler () {
        this.$refs.customOverlay.reload()
      },
      deep: true
    }
  },
  methods: {
    handleClick () {
    },
    draw ({el, BMap, map}) {
      const {longitude, latitude} = this.position
      const pixel = map.pointToOverlayPixel(new BMap.Point(longitude, latitude))
      el.style.left = pixel.x - 45 + 'px'
      el.style.top = pixel.y - 45 + 'px'
    }
  },
}
</script>

<style lang="less" scoped>
.sample {
  width: 5rem;
  height: 3.75rem;
  border-radius: .75rem;
  border: 0.5px solid #C6CACC;
  background: #fff;
  box-shadow: 0px 0px .28125rem .03125rem rgba(0, 0, 0, 0.05);
  overflow: hidden;
  color: #0F161A;
  text-align: center;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sample1 {
  width: 8.125rem;
  height: 2.5rem;
  border-radius: .75rem;
  background: #fff;
  border: 0.5px solid #C6CACC;
  box-shadow: 0px 0px .28125rem .03125rem rgba(0, 0, 0, 0.05);
  overflow: hidden;
  color: #0F161A;
  text-align: center;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  .city {
    display: flex;
    /deep/#m_name {
      font-size: .875rem;
    }
    /deep/#m_num {
      font-size: .875rem;
      margin-left: .75rem;
    }
  }
}
.samples {
  height: 2.6875rem;
  border-radius: .75rem;
  position: absolute;
  background: #FFFFFF;
  padding: 0 1.375rem;
  border: 0.5px solid #C6CACC;
  box-shadow: 0px 0px .28125rem .03125rem rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  .city {
    /deep/#b_price {
      display: none;
    }
  }
}
.dv {
  height: 3.375rem;
  background-color: #D1A23D!important;
  color: #fff;
  .city {
    /deep/#b_name {
      color: #fff;
      margin-bottom: .375rem;
    }
    /deep/#b_price {
      display: block;
      color: #fff;
      font-size: .75rem;
    }
  }
}
.samples::after {
  display: inline-block;
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -29%;
  border-width: 0.5rem;
  border-style: solid dashed dashed dashed;
  border-color: #fff transparent transparent transparent;
}
.dv {
  z-index: 2;
}
.dv::after {
  border-color: #D1A23D transparent transparent transparent;
}
</style>