<template>
    <div>
        <banner />
        <myheader />
        <image_and_text />
        <about />
        <catalog />
        <change />
        <client />
        <faq />
        <write />
        <contacts />
        <myfooter />
    </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/store";
const store = useCounterStore();
store.getlist()
useHead({
    title: 'WoodHome - купить пиломатериалы Томск" | услуги пилорамы',
    meta: [
        { name: 'description', content: 'Наша пилорама в Томске предлагает широкий ассортимент пиломатериалов. Быстрая доставка и высокое качество. Узнайте больше!"' }
    ],
})
</script>
