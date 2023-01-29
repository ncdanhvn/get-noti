<template>
  <!-- Use tailwind to display 4 columns of 4 fields of noti: timestamp, package, title and message -->
  <div class="grid grid-cols-4 gap-4">
    <div class="col-span-1">
      <p class="text-sm">{{ timestamp }}</p>
    </div>
    <div class="col-span-1">
      <p class="text-sm">{{ noti.package }}</p>
    </div>
    <div class="col-span-1">
      <p class="text-sm">{{ noti.title }}</p>
    </div>
    <div class="col-span-1">
      <p class="text-sm">{{ noti.message }}</p>
    </div>
  </div>
</template>

<script setup>
// Get the noti as props
const { noti } = defineProps(["noti"]);
// Convert timestamp to human readable format
const timestamp = noti.timestamp.toDate().toLocaleString();
</script>

<style></style>
