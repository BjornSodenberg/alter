<script lang="ts">
export default {
  data() {
    return {
      cases: [
        {
          case: "Самооценка",
          description:
            "У меня ничего не получится\nЯ себе не нравлюсь, ругаю себя\nЯ плохой человек, не верю в себя",
          icon: "✨",
        },
        {
          case: "Эмоциональное выгорание",
          description:
            "Я ничего не хочу делать\nУ меня больше нет сил\nМеня все раздражает",
          icon: "❄️",
        },
        {
          case: "Депрессия",
          description:
            "Не знаю, как встать с кровати\nНе понимаю, зачем мне жить\nНе могу найти сил на жизнь",
          icon: "⛈️",
        },
        {
          case: "Фобии и тревоги",
          description:
            "Мне часто неспокойно\nСильный страх, не могу справиться\nЧасто тревожные мысли перед сном",
          icon: "🌪",
        },
        {
          case: "Отношения",
          description:
            "Мне тяжело после расставания\nУ нас много конфликтов\nЯ не могу найти пару",
          icon: "💚",
        },
        {
          case: "Принятие решений и мотивация",
          description:
            "Тяну до последнего и нервничаю\nНе могу принять важное решение\nНет уверенности в своих действиях",
          icon: "☄️",
        },
      ],
    };
  },
};
</script>

<template>
  <ul class="mx-20 mt-16 grid grid-cols-3 grid-rows-2 gap-4 text-center">
    <li v-for="item in cases" v-bind:key="item.case">
      <a href="/">
        <div class="relative h-40 bg-white p-6">
          <img
            src="../assets/comment_mess.png"
            alt="comment_mess"
            class="absolute h-9 w-9"
          />
          <p class="pre-formatted">{{ item.description }}</p>
          <div class="absolute left-[calc(50%_-_24px)] bottom-6">
            <a href="/" class="absolute text-5xl">{{ item.icon }}</a>
          </div>
        </div>
      </a>
      <a href="/"
        ><h3 class="mt-9">{{ item.case }}</h3></a
      >
      <a href="/" class="text-alter-green">найти психолога</a>
    </li>
  </ul>
</template>
