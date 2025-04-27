<template>
    <div class="bg-slate-100">
        <div class="w-4/5 mx-auto pt-12">
            <h2 class="text-start -ms-2 text-3xl">Почему вам стоит работать с нашей компанией</h2>
            <hr class="w-48 h-1 my-2 -ms-2 bg-amber-500 border-0 rounded-sm">
            <div class="flex flex-wrap justify-around">
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl m-5">
                    <img class=" img_size2 mx-auto" src="../public/images/change1.png" />
                    <p class="mb-3 font-normal mt-5 text-gray-700 text-justify">Наша пилорама использует современное
                        оборудование и технологии, что позволяет нам обеспечивать высокое качество древесины. Мы
                        тщательно контролируем каждый этап производства, чтобы гарантировать, что вы получите только
                        лучший материал для своих проектов. </p>
                </div>
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl m-5 ">
                    <img class=" img_size2 mx-auto" src="../public/images/change2.png" />
                    <p class="mb-3 font-normal mt-5 text-gray-700 text-justify">Мы понимаем, что каждый клиент
                        уникален. Наша команда готова предложить индивидуальные решения, учитывая ваши потребности и
                        требования. Мы всегда открыты для обсуждения и готовы адаптироваться под ваши запросы. </p>
                </div>
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl m-5 ">
                    <img class=" img_size2 mx-auto" src="../public/images/change3.png" />
                    <p class="mb-3 font-normal mt-5 text-gray-700 text-justify">Мы предлагаем разумные и
                        конкурентоспособные цены на всю нашу продукцию. Работая с нами, вы получаете отличное
                        соотношение цены и качества, что позволяет вам экономить на материалах без ущерба для
                        результата. </p>
                </div>

                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl m-5 ">
                    <img class=" img_size2 mx-auto" src="../public/images/change4.png" />
                    <p class="mb-3 font-normal mt-5 text-gray-700 text-justify">Мы предлагаем разнообразные виды
                        древесины и пиломатериалов, что позволяет вам выбрать именно то, что нужно для вашего проекта. У
                        нас есть все - от стандартных до уникальных решений.</p>
                </div>

                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl m-5 ">
                    <img class=" img_size2 mx-auto" src="../public/images/change5.png" />
                    <p class="mb-3 font-normal mt-5 text-gray-700 text-justify">Наша команда состоит из опытных
                        специалистов, которые готовы помочь вам на каждом этапе — от выбора материала до его обработки.
                        Мы всегда готовы ответить на ваши вопросы и предоставить профессиональные рекомендации.</p>
                </div>

                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl m-5 ">
                    <img class=" img_size2 mx-auto" src="../public/images/change6.png" />
                    <p class="mb-3 font-normal mt-5 text-gray-700 text-justify">Мы ценим каждого клиента и стремимся к
                        долгосрочному сотрудничеству. Работая с нами, вы можете рассчитывать на надежного партнера,
                        который всегда поддержит вас и поможет в реализации ваших проектов.</p>
                </div>
            </div>
        </div>
    </div>

</template>


<script setup>
import { useCounterStore } from '~/stores/store'
const store = useCounterStore()
</script>