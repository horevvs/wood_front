<template>
  <div class="bg-gray-100 h-screen">
    <myheader />
    <div id="catalog">
      <div class=" w-4/5  mx-auto pt-12 ">
        <h2 class="text-start -ms-2 text-3xl">Каталог пиломатериалов</h2>
        <hr class="w-48 h-1 my-2  -ms-2   bg-amber-500 border-0 rounded-sm">
        <div class=" flex">
          <img class=" w-72 h-72 my-12" :src=store.getdatastory.image_address alt="" />
          <div class="p-5">
            <h5 class="mb-2 text-xl mt-5 font-bold tracking-tight text-gray-900 dark:text-white"> {{
              store.getdatastory.name }} - размером: {{ store.getdatastory.size }} мм</h5>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"> {{
              store.getdatastory.description }}</h5>
            <button @click="visible_modal4 = true, store.show_modal = true"
              class="inline-flex mt-12 size items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-500 rounded-lg hover:bg-amber-700 ц-агдд ">
              Оформить заказ
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>

            <Dialog v-model:visible="visible_modal4" modal header="Укажите ваши контакты" :style="{ width: '25rem' }">
              <div v-if="store.show_modal">
                <div class="flex items-center gap-4 mb-4">
                  <InputText v-model="store.name" id="username" class="flex-auto custom-focus"
                    placeholder="Укажите количество товара" :value="store.getdatastory.name" autocomplete="off" />
                </div>
                <div class="flex items-center gap-4 mb-4">
                  <InputText id="username" v-model="store.phone_id" class="flex-auto custom-focus"
                    placeholder="Укажите  ваш номер" autocomplete="off" />
                </div>
                <div class="flex items-center gap-4 mb-4">
                  <InputText id="username" v-model="store.quantity" class="flex-auto custom-focus"
                    placeholder="сколько штук надо?" autocomplete="off" />
                </div>
                <div class="flex justify-end gap-2">
                  <Button label="Custom Style" class="custom-button "
                    @click="store.product_item(store.getdatastory.name)">Отправить</Button>
                </div>
              </div>
              <div v-else class=" h-32  ">
                <div class="text-center my-5 flex justify-center flex-col ">
                  <p class="mt-5 text-xl">Ваш запрос успешно отправлен! </p>
                </div>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
    <myfooter class="absolute bottom-0 w-full" />
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/store";
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router'; // Импортируйте useRoute
const store = useCounterStore();
const route = useRoute(); // Получите объект маршрута
const visible_modal4 = ref(false);
onBeforeMount(async () => {
  await store.getid(route.params.id); // Предполагается, что у вас есть метод fetchData в вашем хранилище
});
</script>