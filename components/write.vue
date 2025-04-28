<template>
    <div class="border-4 border-gray-400    bg-gray-100 mx-auto h-96 xl:h-72 xl:w-1/2 my-12 ">
        <div class=" text-gray-500 text-center mt-5">
            <h3 class="text-2xl xl:text-3xl"> Не знаете, что выбрать?</h3>
            <h4 class="text-xl md:text-2xl mt-2"> Укажите свои данные и мы бесплатно проконсультируем вас!</h4>
        </div>

        <div class="text-gray-500   mx-4 text-center mt-5 flex justify-center">
            <form class=" xl:mt-5" action="#" method="POST">
                <div class="flex flex-col xl:flex-row   container mx-auto items-center">

                    <div class="m-4">
                        <input v-model="store.consult_name" type="text" id="name" placeholder="Укажите имя"
                            autocomplete="name" required
                            class="block xl:w-52  w-72  rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2" />
                    </div>

                    <div class="m-4">
                        <InputMask v-model="store.consult_phone" type="tel" id="phone" mask="8-999-999-99-99"
                            placeholder="укажите ваш номер телефона" autocomplete="phone" required
                            class="!block xl:w-52  w-72 -mt-5  md:-mt-0  !rounded-md !bg-white !px-3 !py-1.5 !text-base !text-gray-900 !outline !outline-1 !-outline-offset-1 !outline-gray-300 !placeholder:text-gray-400 !focus:outline-2 !focus:-outline-offset-2 !focus:outline-red-600" />
                    </div>

                    <div class="m-4">  
                        <button type='button' @click="store.sendmessage_consult()"
                            class='py-2.5 px-6 text-sm bg-amber-500  -mt-5  md:-mt-0  text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-amber-700'>
                            Отправить
                        </button>
                    </div>

                </div>

                <div class=" text-center ">
                    <label for="link-checkbox1" class=" text-sm font-medium  dark:text-gray-300">Нажимая
                        “отправить”, Вы соглашаетесь<NuxtLink to="/conf"
                            class="result dark:text-red-500 hover:underline"> с политикой
                            конфеденциальности </NuxtLink>.
                    </label>
                </div>
            </form>
        </div>

        <Dialog v-model:visible="store.write" modal header="Укажите ваши контакты" :style="{ width: '25rem' }"
            @hide="resetStore2">
            <div class="text-center my-5 flex justify-center flex-col ">
                <img class="h-20 w-20 mx-auto" src="../public/images/tree.png" alt="">
                <p class="mt-5 text-xl">Ваш запрос успешно отправлен! </p>
            </div>
        </Dialog>

        <Dialog v-model:visible="store.errors_write" modal header="Укажите ваши контакты" :style="{ width: '25rem' }"
            @hide="resetStore2">
            <div class="text-center my-5 flex justify-center flex-col ">
                <img class="h-20 w-20 mx-auto" src="../public/images/err.jpg" alt="">
                <p class="mt-5 text-xl">Введите пожалуйста все данные корректно</p>
            </div>
        </Dialog>
    </div>
</template>

<script setup>
import Button from 'primevue/button';
import { useCounterStore } from '@/stores/store'
const store = useCounterStore();

import { ref } from "vue";
const visible_window = ref(false);


const resetStore2 = () => {
    store.consult_name = null;
    store.consult_phone = null;
    store.errors_write = null;
    store.write = false;

};
</script>