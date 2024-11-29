<template>
  <q-page class="row items-center justify-evenly q-pa-md">
    <section :class="{ row: $q.screen.gt.md }">
      <div
        class="col-4 animate__animated animate__fadeInRight"
        v-if="$q.screen.gt.md"
      >
        <q-avatar size="26rem" color="primary">
          <q-img
            src="src/assets/images/foto_perfil.png"
            alt="Foto do perfil"
            fit="scale-down"
            class="rotate-90"
          />
        </q-avatar>
      </div>

      <div
        v-else
        class="row items-center justify-center animate__animated animate__fadeInRight"
      >
        <q-avatar size="14rem" color="primary">
          <q-img
            src="src/assets/images/foto_perfil.png"
            alt="Foto do perfil"
            fit="scale-down"
            class="rotate-90"
          />
        </q-avatar>
      </div>
      <div class="col animate__animated animate__fadeInRight">
        <h2 v-t="'texts.welcomePortfolio'" class="q-my-md"></h2>
        <p v-t="'texts.myDescription'" class="text-justify"></p>
        <q-list>
          <q-btn
            v-for="item in socialMedia"
            :key="item.icon"
            clickable
            v-ripple
            fab
            padding="sm"
            flat
            @click="openURL(item.url)"
          >
            <q-icon :name="item.icon" size="md" />
          </q-btn>
        </q-list>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { openURL } from 'quasar';

defineOptions({
  name: 'IndexPage',
});

const socialMedia = [
  {
    icon: 'mdi-github',
    url: 'https://github.com/MatheusNascimentoti99',
  },
  {
    icon: 'mdi-linkedin',
    url: 'https://www.linkedin.com/in/matheus-nascimento-322a0b181/',
  },
  {
    icon: 'mdi-instagram',
    url: 'https://www.instagram.com/matheus_n9/',
  },
];
</script>
