<template>
  <q-layout view="hHh lpR fff">
    <q-header reveal>
      <q-toolbar>
        <q-toolbar-title> Matheus_n9 </q-toolbar-title>

        <q-select
          v-model="locale"
          :options="localeOptions"
          :label="$t('words.language')"
          emit-value
          map-options
          label-color="white"
          class="q-mr-md"
          style="min-width: 100px"
        >
          <template v-slot:selected-item="{ opt }">
            <span class="text-white text-caption">
              {{ opt.label }}
            </span>
          </template>
        </q-select>
        <q-btn
          v-if="$q.dark.isActive"
          padding="none"
          flat
          :ripple="false"
          :icon="'dark_mode'"
          @click="$q.dark.toggle()"
          :title="$t('texts.toggleDarkMode')"
          class="animate__animated animate__rotateIn"
          fab
        />
        <q-btn
          v-else
          padding="none"
          flat
          :ripple="false"
          :icon="'light_mode'"
          @click="$q.dark.toggle()"
          :title="$t('texts.toggleDarkMode')"
          class="animate__animated animate__rotateIn"
          fab
        />
      </q-toolbar>
    </q-header>
    <q-footer reveal>
      <q-toolbar>
        <q-toolbar-title class="text-caption">
          © 2024 Copyright: Matheus Nascimento
        </q-toolbar-title>
        <SocialMediaList size="sm" />
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition v-memo="[locale]">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'
import 'animate.css'
import SocialMediaList from 'src/components/SocialMediaList.vue'

defineOptions({
  name: 'MainLayout',
})

const $q = useQuasar()
const { locale, t } = useI18n({ useScope: 'global' })

const localeOptions = computed(() => [
  { value: 'en-US', label: t('languages.en') },
  { value: 'pt-BR', label: t('languages.pt') },
])
</script>
<style lang="scss" scoped></style>
