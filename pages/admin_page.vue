<template>
    <div>
        <div v-if=store.getdata>
            <form class="mt-32 flex justify-center" action="#" method="POST">
                <div class="container border-1 border-amber-500 w-96">
                    <div class="m-4">
                        <input v-model="store.admin_login" type="text" id="name" placeholder="login" autocomplete="name"
                            required=""
                            class="block w-60  rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2  " />
                    </div>
                    <div class="m-4">
                        <input v-model="store.admin_password" type="text" id="name" placeholder="password"
                            autocomplete="name" required=""
                            class="block w-60  rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2  " />
                    </div>
                    <div class="m-4">
                        <button type='button' @:click="store.admin_auth()"
                            class='py-2.5 px-6 text-sm bg-amber-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-amber-700'>
                            Отправить
                        </button>
                    </div>
                </div>
            </form>
        </div>

        <div v-else>
            <div class="m-5">Добавить пользователя </div>
            <div class="container   ">
                <div class="m-4"> <input type="text" id="name" placeholder="name" v-model="store.name_to_db"
                        class="block  rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2  " />
                </div>
                <div class="m-4"> <input type="text" id="name" placeholder="size" v-model="store.size"
                        class="block  rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2  " />
                </div>
                <div class="m-4"> <input type="text" id="name" placeholder="description" v-model="store.description"
                        class="block  rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2  " />
                </div>
                <div class="m-4"> <input type="text" id="name" placeholder="price_for_one_beam"
                        v-model="store.price_for_one_beam"
                        class="block  rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2  " />
                </div>
                <div class="m-4"> <input type="text" id="name" placeholder="price_per_cubic_meter"
                        v-model="store.price_per_cubic_meter"
                        class="block  rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2  " />
                </div>
                <input @change="handleFileUpload" class="bg-gray-300 mx-4 border-gray-300 te text-sm rounded-lg block p-2.5"
                    id="file" ref="file" type="file" accept=".jpg,.jpeg,.png,.pdf,.zip,.doc,.docx">
                <div class="m-4">
                    <button type='button' @:click="store.uploads()"
                        class='py-2.5 px-6 text-sm bg-amber-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-amber-700'>
                        добавить товар
                    </button>
                </div>
            </div>

            <div v-for="(item, index) in store.data_getlist" v-bind:key="index">
                <div class="flex m-5 justify-start ">
                    <img class=" img_size_admin" :src=item.image_address alt="" />
                    <p class="m-2"> {{ item.name }} </p> <br>
                    <p class="m-2"> {{ item.description }} </p>
                    <p class="m-2"> {{ item.size }} </p>
                    <p class="m-2"> {{ item.price_for_one_beam }} рублей. </p>
                    <p class="m-2"> {{ item.price_per_cubic_meter }} рублей. </p>
                    <button type='button' @:click="store.admin_delete(item.id)"
                        class='py-2.5 px-6 text-sm bg-amber-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-amber-700'>
                        Удалить
                    </button>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/store";
const store = useCounterStore();
store.getlist()


const handleFileUpload = (event) => {
    const file = event.target.files[0]
    const formdata = new FormData();
    formdata.append("file", file);
    const requestOptions = {
        method: "POST",
        body: formdata,
        mode: 'no-cors', // Убедитесь, что это действительно необходимо
    };

    fetch("http://localhost:3002/upload", requestOptions)
        .then((response) => {
            return response.json(); // Предполагаем, что сервер возвращает JSON
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log('There was a problem with the fetch operation:', error)
        })
};


</script>
