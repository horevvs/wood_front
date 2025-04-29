<template>
    <div class=" z-50 sticky top-0 bg-gray-200 flex md:justify-center  md:justify-around mx-auto  md:h-24 h-32 ">
        <div class="hidden md:h-24 h-32 md:block ">
            <img src="../public/images/logotip.png" alt="s" class="md:h-20  mx-5">
        </div>
        <div class="border-4  p-1">
            <div class="mt-5 flex text-xl  md:text-2xl ">
                <ul class="flex justify-center flex-wrap">
                    <li>
                        <a href="/#mainpage"
                            class="flex items-center mx-5 justify-between text-gray-500  hover:text-amber-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">Главная
                        </a>
                    </li>
                    <li>
                        <a href="/#about"
                            class="flex items-center mx-5 justify-between text-gray-500  hover:text-amber-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">
                            Мы
                        </a>
                    </li>
                    <li>
                        <a href="/#catalog"
                            class="flex items-center mx-5 justify-between text-gray-500  hover:text-amber-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">Каталог
                        </a>
                    </li>
                    <li>
                        <a href="/#contacts"
                            class="flex items-center mx-5 justify-between text-gray-500  hover:text-amber-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">Контакты
                        </a>
                    </li>
                    <li>
                        <button type='button' label="Show" @click="visible = true, store.show = true"
                            class='py-2.5 size glare-button2 px-6  text-sm bg-amber-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-amber-700'>
                            Оставить заявку
                        </button>
                    </li>
                </ul>
            </div>
        </div>

        <Dialog v-model:visible="visible" modal header="Укажите ваши контакты" :style="{ width: '25rem' }"
            @hide="resetStore">
            <div v-if="store.show">
                <div class="flex items-center gap-4 mb-4">
                    <InputText v-model="store.name" id="username" class="flex-auto custom-focus"
                        placeholder="Укажите ваше имя" autocomplete="off" />
                </div>
                <div class="flex items-center gap-4 mb-4">
                    <InputText id="username" v-model="store.phone" class="flex-auto custom-focus"
                        placeholder="Укажите  ваш номер" autocomplete="off" />
                </div>
                <div class="flex items-center gap-8 mb-8 ">
                    <InputText id="email" v-model="store.text" class="flex-auto custom-focus h-32"
                        placeholder="Опишите какой материл вы хотите?" autocomplete="off" />
                </div>

                <div class="flex items-center gap-2">
                    <Checkbox v-model="store.box" inputId="ingredient1" name="pizza" value="Cheese" />
                    <label for="ingredient1"> Согласен на обработку данных </label>
                </div>

                <div class="flex justify-end gap-2 mt-5">
                    <Button label="Custom Style" class="custom-button " @click="store.sendmessage()">Отправить</Button>
                </div>
            </div>

            <div v-else-if="store.errors_msg" class=" h-32  ">
                <div class="text-center my-5 flex justify-center flex-col ">
                    <p class="mt-5 text-xl">Введите пожалуйста все данные верно </p>
                </div>
            </div>

            <div v-else class=" h-32  ">
                <div class="text-center my-5 flex justify-center flex-col ">
                    <p class="mt-5 text-xl">Ваш запрос успешно отправлен! </p>
                </div>
            </div>
        </Dialog>

    </div>
</template>

<style scoped>
/* Изменение цвета активного состояния чекбокса */
.p-checkbox .p-checkbox-box {
    border-color: #ff5733;
    /* Цвет рамки */
}

.p-checkbox .p-checkbox-box:checked {
    background-color: #ff5733;
    /* Цвет фона при выборе */
}

.p-checkbox .p-checkbox-box:checked::after {
    background-color: #ff5733;
    /* Цвет галочки при выборе */
}

/* Если хотите изменить цвет текста метки */
label[for="ingredient1"] {
    color: #333;
    /* Замените на нужный вам цвет текста */
}
</style>

<script setup>
import { useCounterStore } from "@/stores/store";
const store = useCounterStore();
import { ref } from "vue";
const visible = ref(false);
const resetStore = () => {
    store.name = null;
    store.phone = null;
    store.text = null;
    store.box = false;
    store.errors_msg = null; // Или любое другое значение по умолчанию
    store.show = true; // Если нужно вернуть к начальному состоянию
};
</script>
