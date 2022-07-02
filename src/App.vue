<script setup lang="ts">
import MainMenu from "./components/MainMenu.vue";
import RegisterCases from "./components/RegisterCases.vue";
import CommonBannerVue from "./components/CommonBanner.vue";
import LoginModalVue from "./components/LoginModal.vue";
</script>

<template>
  <header class="mx-12 mt-6 flex flex-row">
    <img src="./assets/alter_logo_green.svg" alt="alter" class="flex-none" />
    <MainMenu />
    <LoginModalVue />
  </header>
  <div class="mt-9 flex w-screen flex-col text-center">
    <h1 class="mt-9 font-futura text-5xl font-bold text-alter-gray">
      Подберите психолога,<br />
      который вас поймет
    </h1>
    <p class="mt-9 font-futura text-2xl font-light text-alter-gray">
      заполните анкету и получите список психологов<br />
      для работы с вашей проблемой
    </p>
    <div>
      <button
        class="mt-9 w-96 rounded-full bg-alter-green py-5 text-xl font-medium text-white"
      >
        ПОДОБРАТЬ ПСИХОЛОГА
      </button>
    </div>
  </div>
  <RegisterCases />
  <CommonBannerVue />
  <!-- TODO create component -->
  <div class="mx-32 mt-20 flex items-center justify-between">
    <div class="w-96">
      <h2 class="text-5xl font-medium">Найти своего психолога — сложно</h2>
      <p class="mt-6">
        Не&nbsp;каждый психолог работает с&nbsp;вашей проблемой. А&nbsp;если
        работает, то&nbsp;не&nbsp;факт, что достаточно эффективно.
      </p>
      <div class="mt-6">
        <a href="/" class="font-medium text-alter-green">Alter поможет.</a>
        <p>
          Мы&nbsp;подберем профессионального специалиста, который работает
          именно с&nbsp;вашим запросом.
        </p>
      </div>
    </div>
    <div class="w-3/5">
      <img src="./assets/select_therapist.png" alt="select therapist" />
    </div>
  </div>
  <!-- TODO create component -->
  <div class="mx-32 mt-20">
    <div class="flex justify-between">
      <div class="w-96">
        <h3 class="mb-6 text-2xl font-medium">
          1. Выберите психолога, который вам понравился. Все наши специалисты
          проходят тщательный отбор&nbsp;&mdash; только&nbsp;13% попадает
          в&nbsp;базу Alter.
        </h3>

        <ul>
          <li>
            <span class="mr-2">✔️</span>Подтверждение профильного образования
          </li>
          <li><span class="mr-2">✔️</span>Успешные кейсы по специализациям</li>
          <li><span class="mr-2">✔️</span>Больше 50 часов супервизии</li>
          <li><span class="mr-2">✔️</span>Беседы с интервьюерами Alter</li>
          <li><span class="mr-2">✔️</span>600+ проверенных психологов</li>
        </ul>
        <button
          class="text-l mt-9 w-64 rounded-full bg-alter-green py-3 font-medium text-white"
        >
          ПОДОБРАТЬ ПСИХОЛОГА
        </button>
      </div>
      <div class="w-3/5">
        <img src="./assets/pablita-517.png" alt="first-step" />
      </div>
    </div>
  </div>
</template>
