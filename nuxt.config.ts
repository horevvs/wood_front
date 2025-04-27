// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },
    css: ['~/assets/css/main.css', 'typeface-montserrat/index.css'],
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@primevue/nuxt-module', '@nuxt/icon'],
    icon: {
        customCollections: [
            {
                prefix: 'my-icon',
                dir: './assets/my-icons'
            },
        ],
    },
    primevue: {
        options: {
            theme: {
                preset: Aura
            }
        }
    }

})