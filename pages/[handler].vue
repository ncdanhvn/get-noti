<template>
  <div>
    <h1 class="text-2xl font-bold text-center tracking-widest mb-3">
      {{ handler }}
    </h1>
    <div v-if="notiList">
      <!-- Use Tailwind to display 4 column with 4 headers: "timestamp", "app", "title" and "message" -->
      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-1">
          <p class="text-sm font-bold">timestamp</p>
        </div>
        <div class="col-span-1">
          <p class="text-sm font-bold">app</p>
        </div>
        <div class="col-span-1">
          <p class="text-sm font-bold">title</p>
        </div>
        <div class="col-span-1">
          <p class="text-sm font-bold">message</p>
        </div>
      </div>
      <!-- Use tailwind to display 4 columns of 4 fields of noti: timestamp, package, title and message -->
      <ul>
        <li v-for="noti in notiList" :key="noti.id">
          <DisplayNoti :noti="noti" />
        </li>
      </ul>
    </div>
    <div v-else>
      <p class="text-center">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import getNoti from "@/services/getNoti.js";

const route = useRoute();
const handler = route.params.handler;

const { notiList, error } = getNoti(handler);
</script>

<style lang="scss" scoped></style>
