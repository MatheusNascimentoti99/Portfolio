<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <q-select
          v-model="locale"
          :options="localeOptions"
          :label="$t('words.language')"
          emit-value
          map-options
          borderless
          stack-label
          style="min-width: 100px"
        />
        <q-btn
          padding="none"
          flat
          :ripple="false"
          :icon="$q.dark.isActive ? 'dark_mode' : 'light_mode'"
          @click="$q.dark.toggle()"
          :title="$t('texts.toggleDarkMode')"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';

defineOptions({
  name: 'MainLayout',
});

const $q = useQuasar();
const { locale, t } = useI18n({ useScope: 'global' });

const localeOptions = computed(() => [
  { value: 'en-US', label: t('languages.en') },
  { value: 'pt-BR', label: t('languages.pt') },
]);

const linksList: EssentialLinkProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
