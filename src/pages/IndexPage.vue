<template>
  <q-page class="row items-center justify-evenly q-pa-md q-pt-xl">
    <section class="q-pt-xl" :class="{ row: $q.screen.gt.md }">
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
            :title="item.title"
          >
            <q-icon :name="item.icon" size="md" />
          </q-btn>
        </q-list>
      </div>
    </section>
    <q-separator />
    <section class="row full-width justify-center">
      <h4 v-t="'texts.aboutMe'" class="q-ml-md"></h4>
      <div class="q-gutter-xl" :class="{ row: $q.screen.gt.sm }">
        <div class="col">
          <q-timeline color="secondary">
            <q-timeline-entry heading tag="h5">
              {{ $t('words.formation') }}
            </q-timeline-entry>

            <q-timeline-entry
              v-for="item in formation"
              :key="item.title"
              :title="item.title"
              :subtitle="item.subtitle"
              class="animate__animated animate__fadeIn"
            >
              <p v-text="item.description" class="text-justify"></p>
            </q-timeline-entry>
          </q-timeline>
        </div>
        <div class="col">
          <q-timeline color="secondary">
            <q-timeline-entry heading tag="h5">
              {{ $t('words.experience') }}
            </q-timeline-entry>

            <q-timeline-entry
              v-for="item in experience"
              :key="item.title"
              :title="item.title"
              :subtitle="item.subtitle"
              class="animate__animated animate__fadeIn"
            >
              <p v-text="item.description" class="text-justify"></p>
              <q-chip
                v-for="stack in item.stacks"
                :key="stack"
                :label="stack"
              />
            </q-timeline-entry>
          </q-timeline>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { openURL } from 'quasar';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

defineOptions({
  name: 'IndexPage',
});

const { t, d } = useI18n();

const socialMedia = [
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
];

const formation = computed(() => [
  {
    title: t('texts.formations.technicalTitle'),
    subtitle: `${t('words.formations.technical')}: ${d(
      new Date('2013-08-01'),
      'short'
    )} - ${d(new Date('2016-12-01'), 'short')}`,
    description: t('texts.formations.technicalDescription'),
  },
  {
    title: t('texts.formations.graduationTitle'),
    subtitle: `${t('words.formations.graduation')}: ${d(
      new Date('2017-08-01'),
      'short'
    )} - ${d(new Date('2023-08-01'), 'short')}`,
    description: t('texts.formations.graduationDescription'),
  },
  {
    title: t('texts.formations.postGraduationTitle'),
    subtitle: `${t('words.formations.postGraduation')}: ${d(
      new Date('2024-08-06'),
      'short'
    )} - ${t('words.present')}`,
    description: t('texts.formations.postGraduationDescription'),
  },
]);

const experience = computed(() => [
  {
    title: `${t('words.experiences.golfarma')} - ${t('texts.techLead')}/${t(
      'texts.fullStackDeveloper'
    )}`,
    subtitle: `${d(new Date('2021-04-19'), 'short')} - ${d(
      new Date('2023-08-08'),
      'short'
    )}`,
    description: t('texts.experiences.golfarma'),
    stacks: [
      'PHP',
      'Laravel',
      'TypeScript',
      'Vue.js',
      'Docker',
      'SQL Server',
      'Cordova',
      'Capacitor',
      'S3',
      'Nginx',
      'AWS',
      'Git',
      'REST',
    ],
  },
  {
    title: `${t('words.experiences.conexa')} - ${t(
      'texts.fullStackDeveloper'
    )}`,
    subtitle: `${d(new Date('2023-08-14'), 'short')} - ${d(
      new Date('2024-08-09'),
      'short'
    )}`,
    description: t('texts.experiences.conexa'),
    stacks: [
      'PHP',
      'Yii',
      'Vue.js',
      'Docker',
      'MySQL',
      'Cordova',
      'Docker',
      'REST',
      'JQuery',
    ],
  },
  {
    title: `${t('words.experiences.sjba')} - ${t('texts.fullStackDeveloper')}`,
    subtitle: `${d(new Date('2024-08-06'), 'short')} - ${t('words.present')}`,
    description: t('texts.experiences.sjba'),
    stacks: [
      'Java',
      'Spring',
      'Vue.js',
      'Docker',
      'Javascript',
      'TypeScript',
      'REST',
      'Web Service',
    ],
  },
]);
</script>
