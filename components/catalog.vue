<template>
    <div class="bg-slate-100" id="catalog">
        <div class=" w-4/5  mx-auto pt-12 ">
            <h2 class="text-start -ms-2 text-3xl">Каталог пиломатериалов</h2>
            <hr class="w-48 h-1 my-2  -ms-2   bg-amber-500 border-0 rounded-sm">
            <div class=" flex flex-wrap justify-center md:justify-evenly mt-12">
                <div v-for="(item, index) in store.data_getlist" v-bind:key="index">
                    <div
                        class="max-w-sm bg-white mt-12 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <img class=" img_size" :src=item.image_address alt="" />
                        <div class="p-5">
                            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"> {{
                                item.name }} - размером: {{ item.size }} мм</h5>
                            <h5 class="mb-2 font-medium tracking-tight text-gray-900 dark:text-white"> {{
                                item.description }} </h5>
                            <h5 class="mb-2 font-medium tracking-tight text-gray-900 dark:text-white"> Стоимость за
                                1м<sup>3</sup> - {{ item.price_for_one_beam }} рублей. </h5>
                            <nuxt-link :to="`/data/${item.id}`">
                                <button @:click="store.getid(item.id)"
                                    class="inline-flex  size items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-500 rounded-lg hover:bg-amber-700 ц-агдд ">
                                    Оформить заявку
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useCounterStore } from '~/stores/store'
const store = useCounterStore()
</script>