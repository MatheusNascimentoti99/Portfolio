<template>
  <div class="container">
    <div class="bar bar1"></div>
    <div class="ball rounded-borders"></div>
    <div class="bar bar2"></div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import anime from 'animejs/lib/anime.es.js'

onMounted(() => {
  const loop = true
  const easing = 'linear'
  const direction = 'alternate'

  anime({
    targets: '.ball',
    translateX: '98vw',
    translateY: 100,
    easing,
    loop,
    direction,
    background: [
      { value: '#573796' },
      { value: '#FB89FB' },
      { value: '#FBF38C' },
      { value: '#18FF92' },
      { value: '#5A87FF' },
    ],
  })
  const ballTimeline = anime.timeline({
    loop,
    direction,
  })
  const bar2Timeline = anime.timeline({
    loop,
    direction,
  })
  const bar1Timeline = anime.timeline({
    loop,
    direction,
  })
  ballTimeline
    .add({
      targets: '.ball',
      translateY: 100,
      translateX: '98vw',
      easing,
    })
    .add({
      targets: '.ball',
      translateY: 0,
      translateX: 0,
      easing,
    })
    .add({
      targets: '.ball',
      translateY: '-80',
      translateX: '98vw',
      easing,
    })
  bar2Timeline
    .add({
      targets: '.bar2',
      translateY: 100,
      easing,
      background: '#573796',
    })
    .add({
      targets: '.bar2',
      translateY: 0,
      easing,
      background: '#FB89FB',
    })
    .add({
      targets: '.bar2',
      translateY: '-100',
      easing,
      background: '#FBF38C',
    })
  bar1Timeline
    .add({
      targets: '.bar1',
      translateY: '-80',
      easing,
      background: '#18FF92',
    })
    .add({
      targets: '.bar1',
      translateY: 10,
      easing,
      background: '#5A87FF',
    })
    .add({
      targets: '.bar1',
      translateY: 60,
      easing,
      background: '#FF1461',
    })
})
</script>
<style scoped>
.container {
  width: 100%;
  display: inline-block;
  transform: translateY(200px);
}
.bar {
  background: #ffffff;
  width: 10px;
  height: 100px;
}
.bar1 {
  float: left;
}
.bar2 {
  float: right;
}
.ball {
  background: #ffffff;
  width: 10px;
  height: 10px;
  position: relative;
  top: 45px;
  left: 10px;
}
</style>
