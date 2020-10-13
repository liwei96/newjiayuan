<template>
  <bm-overlay
    ref="customOverlay"
    :class="active < 14 ? 'sample' : 'samples'"
    pane="labelPane"
    @draw="draw">
    <div v-html="text" @click="handleClick"></div>
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
      const {lng, lat} = this.position
      const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat))
      el.style.left = pixel.x - 45 + 'px'
      el.style.top = pixel.y - 45 + 'px'
    }
  }
}
</script>

<style>
.sample {
  width: 4.375rem;
  height: 4.375rem;
  border-radius: 50%;
  background: linear-gradient(270deg, #20C466, #3FD6A7);
  box-shadow: 1px 5px 10px 0px rgba(44, 204, 128, 0.2);
  overflow: hidden;
  color: #fff;
  text-align: center;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}
.samples {
  width: 8.5rem;
  height: 2.25rem;
  border-radius: 1.125rem;
  position: absolute;
  background: linear-gradient(270deg, #20c466, #3fd6a7);
  box-shadow: 1px 5px 10px 0px rgba(44, 204, 128, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}
.samples::after {
  display: inline-block;
  content: "";
  position: absolute;
  left: 50%;
  margin-left: -0.625rem;
  bottom: -44%;
  border-width: 0.5rem;
  border-style: solid dashed dashed dashed;
  border-color: #20c466 transparent transparent transparent;
}
.dv {
  background: linear-gradient(270deg, #FF8D41, #FFAE2D)!important;
  z-index: 2;
}
.dv::after {
  border-color: rgb(255, 174, 45) transparent transparent transparent;
}
</style>