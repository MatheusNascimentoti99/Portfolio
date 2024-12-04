import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

import messages from 'src/i18n';

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: 'pt-BR',
    fallbackLocale: 'en-US',
    legacy: false,
    messages,
    datetimeFormats: {
      'pt-BR': {
        short: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        },
        long: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          weekday: 'short',
          hour: 'numeric',
          minute: 'numeric',
        },
      },
      'en-US': {
        short: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        },
        long: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          weekday: 'short',
          hour: 'numeric',
          minute: 'numeric',
        },
      },
    },
    numberFormats: {
      'pt-BR': {
        currency: {
          style: 'currency',
          currency: 'BRL',
        },
      },
      'en-US': {
        currency: {
          style: 'currency',
          currency: 'USD',
        },
      },
    },
  });

  // Set i18n instance on app
  app.use(i18n);
});
