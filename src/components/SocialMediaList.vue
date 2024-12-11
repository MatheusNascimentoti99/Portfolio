<template>
  <q-list class="q-pa-none q-ma-none">
    <q-btn
      v-for="item in socialMedia"
      :key="item.icon"
      clickable
      v-ripple
      flat
      padding="sm"
      @click="openURL(item.url)"
      :title="item.title"
    >
      <q-icon :name="item.icon" :size="size" />
    </q-btn>
  </q-list>
</template>
<script lang="ts" setup>
import { openURL } from 'quasar'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

defineProps({
  size: {
    type: String,
    default: 'md',
  },
})

const socialMedia = computed(() => [
  {
    icon: 'mdi-github',
    url: 'https://github.com/MatheusNascimentoti99',
    title: t('words.github'),
  },
  {
    icon: 'mdi-linkedin',
    url: 'https://www.linkedin.com/in/matheus-nascimento-322a0b181/',
    title: t('words.linkedin'),
  },
  {
    icon: 'mdi-instagram',
    url: 'https://www.instagram.com/matheus_n9/',
    title: t('words.instagram'),
  },
])
</script>
<style lang="scss" scoped></style>
