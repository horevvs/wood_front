<template>
    <div class=" bg-slate-100">
        <div class=" w-4/5  mx-auto pt-12 ">
            <h2 class="text-start  -ms-2 text-3xl">Наши клиенты</h2>
            <hr class="w-48 h-1 my-2  -ms-2   bg-amber-500 border-0 rounded-sm">
            <div class="flex flex-wrap justify-around">

                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl m-12 ">
                    <img class=" img_size3  mx-auto" src="../public/images/client_logo/logo-inter-rao-ees.png" />
                </div>

                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl m-12 ">
                    <img class=" img_size3  mx-auto" src="../public/images/client_logo/logo-metalloinvest.png" />
                </div>

                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl m-12 ">
                    <img class=" img_size3  mx-auto" src="../public/images/client_logo/logo-sinara.png" />
                </div>

                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl m-12 ">
                    <img class=" img_size3  mx-auto" src="../public/images/client_logo/logo-metabo.png" />
                </div>

                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl m-12 ">
                    <img class=" img_size3  mx-auto" src="../public/images/client_logo/logo-metabo.png" />
                </div>

                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl m-12 ">
                    <img class=" img_size3  mx-auto" src="../public/images/client_logo/logo-mr-doors.png" />
                </div>

            </div>
        </div>
    </div>

</template>


<script setup>
import { useCounterStore } from '~/stores/store'

const store = useCounterStore()


</script>