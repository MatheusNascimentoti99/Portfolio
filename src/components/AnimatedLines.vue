<template>
  <div class="container">
    <div class="bar bar1"></div>
    <div class="ball rounded-borders"></div>
    <div class="bar bar2"></div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { animate, createTimeline } from 'animejs' // [1, 6]

onMounted(() => {
  // As variáveis de configuração são definidas.
  // O parâmetro 'loop' agora define o número de vezes que a animação se repete [4].
  // Para uma repetição infinita, o valor 'Infinity' é comumente usado, embora os fontes
  // não especifiquem diretamente a substituição de 'true' por 'Infinity',
  // o comportamento de 'loop' como um contador de repetições [4] sugere isso para loops infinitos.
  const loopValue = Infinity

  // O parâmetro 'easing' foi renomeado para 'ease' [2, 3, 7, 8].
  const easeValue = 'linear'

  // O parâmetro 'direction' foi substituído por 'reversed' e 'alternate' [3].
  // 'direction: "alternate"' agora se torna 'alternate: true' [3].
  const alternateValue = true

  // Refatorando a primeira chamada 'animate':
  // O parâmetro 'targets' foi substituído pelo primeiro argumento obrigatório da função 'animate' [1].
  animate('.ball', {
    translateX: '98vw',
    translateY: 100,
    ease: easeValue, // 'easing' foi renomeado para 'ease' [2, 3, 7, 8].
    loop: loopValue, // 'loop' agora define o número de repetições [4].
    alternate: alternateValue, // 'direction: "alternate"' foi substituído por 'alternate: true' [3].
    background: [
      // Na sintaxe de objeto para propriedades, 'value' foi renomeado para 'to' [3, 5].
      { to: '#573796' },
      { to: '#FB89FB' },
      { to: '#FBF38C' },
      { to: '#18FF92' },
      { to: '#5A87FF' },
    ],
  })

  // Refatorando a criação das Timelines:
  // Timelines agora são criadas usando o import 'createTimeline' em vez de 'anime.timeline()' [6].
  // Parâmetros padrão para os filhos da Timeline (como 'loop' e 'direction')
  // agora são definidos dentro de um objeto 'defaults' [6].
  const ballTimeline = createTimeline({
    defaults: {
      loop: loopValue, // 'loop' dentro de 'defaults' também segue o novo comportamento [4].
      alternate: alternateValue, // 'direction' dentro de 'defaults' também se torna 'alternate' [3].
    },
  })
  const bar2Timeline = createTimeline({
    defaults: {
      loop: loopValue,
      alternate: alternateValue,
    },
  })
  const bar1Timeline = createTimeline({
    defaults: {
      loop: loopValue,
      alternate: alternateValue,
    },
  })

  // Refatorando as adições à Timeline 'ballTimeline':
  ballTimeline
    .add('.ball', {
      // O parâmetro 'targets' permanece como uma propriedade em chamadas '.add()' de timeline.
      translateY: 100,
      translateX: '98vw',
      ease: easeValue, // 'easing' foi renomeado para 'ease' [2, 3, 7, 8].
    })
    .add('.ball', {
      translateY: 0,
      translateX: 0,
      ease: easeValue,
    })
    .add('.ball', {
      translateY: '-80',
      translateX: '98vw',
      ease: easeValue,
    })

  // Refatorando as adições à Timeline 'bar2Timeline':
  bar2Timeline
    .add('.bar2', {
      translateY: 100,
      ease: easeValue,
      background: '#573796', // 'background' como valor direto não é afetado pela mudança de 'value' para 'to'.
    })
    .add('.bar2', {
      translateY: 0,
      ease: easeValue,
      background: '#FB89FB',
    })
    .add('.bar2', {
      translateY: '-100',
      ease: easeValue,
      background: '#FBF38C',
    })

  // Refatorando as adições à Timeline 'bar1Timeline':
  bar1Timeline
    .add('.bar1', {
      translateY: '-80',
      ease: easeValue,
      background: '#18FF92',
    })
    .add('.bar1', {
      translateY: 10,
      ease: easeValue,
      background: '#5A87FF',
    })
    .add('.bar1', {
      translateY: 60,
      ease: easeValue,
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
