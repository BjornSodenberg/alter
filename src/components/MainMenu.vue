<script lang="ts">
export default {
  data() {
    return {
      menuItems: [
        { title: "О нас" },
        { title: "Каталог психологов" },
        { title: "Психологам" },
        { title: "Для бизнеса" },
        { title: "Направления психотерапии" },
      ],
    };
  },
};
</script>

<template>
  <ul class="flex flex-1 flex-row justify-end justify-items-center space-x-4">
    <li v-for="(item, index) in menuItems" v-bind:key="index">
      <a
        href="/"
        class="text-s font-futura transition duration-150 ease-out hover:text-alter-green hover:ease-in"
        >{{ item.title }}</a
      >
    </li>
    <li>
      <button
        class="font-bold text-alter-green"
        type="button"
        data-modal-toggle="authentication-modal"
      >
        Вход
      </button>
    </li>
    <li>
      <button class="font-bold text-alter-green" type="button">
        Регистрация
      </button>
    </li>
  </ul>
</template>
