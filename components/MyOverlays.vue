<template>
  <bm-overlay
    ref="customOverlay"
    :class="{ samples: true, active }"
    pane="labelPane"
    @draw="draw"
  >
    <div v-html="text"></div>
  </bm-overlay>
</template>

<script>
export default {
  props: ["text", "position", "active", "projectid"],
  watch: {
    // position: {
    //   handler () {
    //     this.$refs.customOverlay.reload()
    //   },
    //   deep: true
    // }
  },
  methods: {
    draw({ el, BMap, map }) {
      const { lng, lat } = this.position;
      const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat));
      el.style.left = pixel.x - 68 + "px";
      el.style.top = pixel.y - 18 + "px";
    },
  },
};
</script>

<style>
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