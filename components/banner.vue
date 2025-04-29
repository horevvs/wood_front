<template>
    <div v-if="visible" class=" py-5 flex justify-center  bg-amber-50 ">
        <p class="mt-2 ">Мы используем куки для улучшения вашего опыта на нашем сайте. Продолжая использовать сайт, вы
            соглашаетесь с нашей <NuxtLink to="/conf" class="result dark:text-red-500 hover:underline"> с политикой
                конфеденциальности </NuxtLink>.</p>
        <button type='button' @click="acceptCookies"
            class='py-2  px-6 mx-24 text-sm bg-amber-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-amber-700'>
            Принять
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
        };
    },
    mounted() {
        this.checkCookieConsent();
    },
    methods: {
        checkCookieConsent() {
            const consent = localStorage.getItem('cookie-consent');
            if (!consent) {
                this.visible = true;
            }
        },
        acceptCookies() {
            localStorage.setItem('cookie-consent', 'true');
            this.visible = false;
        },
    },
};
</script>
