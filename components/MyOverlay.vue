<template>
  <bm-overlay
    ref="customOverlay"
    :class="{sample: true, active}"
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
</style>