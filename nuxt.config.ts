// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages:true,

  css: [
    '@/assets/style.css'
  ],

    modules:  [
                '@nuxtjs/i18n',
              ],
        i18n: {
            debug: true,
            strategy: 'prefix_except_default',
            defaultLocale: 'it',
            locales: [
              {
                code: 'en',
                name: 'EN',
                file: 'en.json'
              },
              {
                code: 'it',
                name: 'IT',
                file: 'it.json'
              },
            ],
            customRoutes: 'config',
            pages: {
                'vini/index': {
                    en: '/wines',
                    it: '/vini'
                },
                'vini/[slug]': {
                  en: '/wines/[slug]',
                  it: '/vini/[slug]'
              },
            },
            lazy: false,
            langDir: 'locales',
        },
    
})
