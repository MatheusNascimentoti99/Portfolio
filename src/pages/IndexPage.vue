<template>
  <q-page class="row items-center justify-evenly q-pa-lg q-pt-xl">
    <section
      class="q-pt-xl"
      :class="{ row: $q.screen.gt.md }"
      id="home"
      v-intersection.once="
      (entry: IntersectionObserverEntry) => {
        findIntersection(entry, 'home')
        return true
      }"
    >
      <div
        class="col-4 animate__animated animate__fadeInRight"
        v-if="$q.screen.gt.md"
      >
        <q-avatar size="26rem" color="primary">
          <q-img
            src="~assets/images/foto_perfil.png"
            alt="Foto do perfil"
            fit="scale-down"
            class="rotate-90"
          />
        </q-avatar>
      </div>

      <div
        v-else
        class="row items-center justify-center"
        :class="{
          'animate__animated animate__fadeInRight': intersections.home,
        }"
      >
        <q-avatar size="14rem" color="primary">
          <q-img
            src="~assets/images/foto_perfil.png"
            alt="Foto do perfil"
            fit="scale-down"
            class="rotate-90"
          />
        </q-avatar>
      </div>
      <div
        class="col"
        :class="{
          'animate__animated animate__fadeInRight': intersections.home,
        }"
      >
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
    <section class="row full-width justify-center" id="aboutMe">
      <h4 v-t="'texts.aboutMe'" class="q-ml-md"></h4>
      <div
        class="q-gutter-xl"
        :class="{ row: $q.screen.gt.sm }"
        v-intersection.once="
        (entry: IntersectionObserverEntry) => {
          findIntersection(entry, 'aboutMe')
          return true
        }
      "
      >
        <div
          class="col"
          :class="{
            'animate__animated animate__slideInUp': intersections.aboutMe,
          }"
        >
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
        <div
          class="col"
          :class="{
            'animate__animated animate__slideInUp': intersections.aboutMe,
          }"
        >
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
    <section
      v-intersection="
        (entry: IntersectionObserverEntry) => {
          findIntersection(entry, 'skills')
          return true
        }
      "
      class="row full-width justify-center"
      id="skills"
    >
      <h4 v-t="{ path: 'words.skill', plural: 2 }" class="q-ml-md"></h4>
      <div
        class="row no-wrap scroll"
        :class="{
          'animate__animated animate__bounceInLeft': intersections.skills,
        }"
      >
        <q-card v-for="item in skills" :key="item.title" class="q-ma-sm">
          <q-card-section class="card-projects">
            <q-item>
              <q-item-section avatar>
                <q-icon :name="item.icon" size="2rem" />
              </q-item-section>
              <q-item-section>
                <q-item-label header>
                  {{ item.title }}
                </q-item-label>
                <q-item-label caption>
                  <q-chip
                    v-for="stack in item.items"
                    :key="stack"
                    :label="stack"
                    size="sm"
                    color="secondary"
                  />
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
      </div>
    </section>
    <section class="full-width row justify-center q-my-md" id="projects">
      <h4
        v-t="{ path: 'words.project', plural: 2 }"
        class="q-ml-md text-center full-width"
      ></h4>
      <div
        class="row no-wrap overflow-auto"
        v-intersection.once="
          (entry: IntersectionObserverEntry) => {
            findIntersection(entry, 'projects')
            return true
        }"
        :class="{
          'animate__animated animate__slideInLeft': intersections.projects,
        }"
      >
        <q-card
          v-for="item in projects"
          :key="item.title"
          class="q-ma-sm q-pt-md q-px-sm"
        >
          <q-img
            :src="item.image"
            alt="FogLedger Indy"
            height="80px"
            fit="scale-down"
            class="q-ma-sm"
          />
          <q-card-section class="card-projects">
            <q-item>
              <q-item-section>
                <q-item-label header class="q-mb-sm q-pa-none">
                  {{ item.title }}
                </q-item-label>
                <q-item-label caption>
                  {{ item.description }}
                </q-item-label>
                <q-item-label caption>
                  <q-chip
                    v-for="stack in item.stacks"
                    :key="stack"
                    :label="stack"
                    color="secondary"
                    size="sm"
                  />
                </q-item-label>
                <q-item-label caption class="row justify-end">
                  <q-btn
                    flat
                    color="accent"
                    label="Acessar"
                    @click="openURL(item.link)"
                  />
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { openURL } from 'quasar';
import { computed, Ref, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import IndyLogo from 'src/assets/images/indy-logo.png';
import UnityLogo from 'src/assets/images/unity-logo.svg';
import JavaLogo from 'src/assets/images/java-logo.png';
import OpenCVLogo from 'src/assets/images/openCV-logo.png';

defineOptions({
  name: 'IndexPage',
});

const { t, d } = useI18n();

const intersections = ref({
  home: false,
  aboutMe: false,
  skills: false,
  projects: false,
  news: false,
}) as Ref<{ [key: string]: boolean }>;

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

const skills = computed(() => [
  {
    title: t('words.skills.language', 2),
    icon: 'mdi-code-greater-than-or-equal',
    items: ['JavaScript', 'TypeScript', 'Java', 'PHP', 'Python', 'C', 'C#'],
  },
  {
    title: t('words.skills.frontendFramework', 2),
    icon: 'mdi-vuejs',
    items: ['Vue.js', 'Angular', 'JQuery', 'React'],
  },
  {
    title: t('words.skills.backendFramework', 2),
    icon: 'mdi-laravel',
    items: ['Spring', 'Laravel', 'Yii', 'Node.js', 'Express'],
  },
  {
    title: t('words.skills.database', 2),
    icon: 'mdi-database',
    items: ['MySQL', 'SQL Server', 'PostgreSQL', 'MongoDB', 'Firebase'],
  },
  {
    title: t('words.skills.devOps'),
    icon: 'mdi-source-branch',
    items: [
      'Docker',
      'Nginx',
      'Apache2',
      'AWS',
      'Git',
      'GitHub',
      'GitLab',
      'Bitbucket',
      'CI/CD',
    ],
  },
  {
    title: t('words.skills.mobile'),
    icon: 'mdi-cellphone',
    items: ['Cordova', 'Capacitor', 'Android'],
  },
  {
    title: t('words.skills.other', 2),
    icon: 'mdi-head-lightbulb',
    items: ['Scrum', 'Kanban', 'XP', 'SOLID'],
  },
]);

const projects = computed(() => [
  {
    title: 'FogLedger-Indy',
    description: t('texts.projects.fogLedgerIndy'),
    link: 'https://larsid.github.io/FogLedger-Indy/',
    stacks: ['Python', 'Docker', 'Hyperledger Indy', 'Aries'],
    image: IndyLogo,
  },
  {
    title: 'AssociaSom',
    description: t('texts.projects.associaSom'),
    link: 'https://github.com/MatheusNascimentoti99/AssociaSom',
    stacks: ['C#', 'Unity', 'Firebase'],
    image: UnityLogo,
  },
  {
    title: t('texts.projects.recognitionTransitSigns'),
    description: t('texts.projects.recognitionTransitSignsDescription'),
    link: 'https://github.com/MatheusNascimentoti99/ReconhecimentoPlacasTransito-',
    stacks: ['Python', 'OpenCV', 'Perceptron', 'KNN'],
    image: OpenCVLogo,
  },
  {
    title: t('texts.projects.flightReservation'),
    description: t('texts.projects.flightReservationDescription'),
    link: 'https://github.com/ThatsJojo/MI-Redes-3',
    stacks: ['Java', 'Socket', 'UDP', 'TCP', 'HTTP'],
    image: JavaLogo,
  },
]);

const findIntersection = (entry: IntersectionObserverEntry, key: string) => {
  intersections.value[key] = entry.isIntersecting;
  return true;
};
</script>
<style lang="scss" scoped>
.card-projects {
  width: 24rem;
}

.scroll {
  overflow: hidden;
}

.scroll:hover {
  overflow-x: scroll;
}
</style>
