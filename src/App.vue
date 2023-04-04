<template>
  <elevator-app-page />
</template>

<script setup lang="ts">
import ElevatorAppPage from '@/view/ElevatorAppPage.vue';
import { onMounted } from 'vue';

onMounted(() => {
  // localStorage.setItem('stack', JSON.stringify([] as number[]));
  // localStorage.setItem('transform', JSON.stringify(0 as number));
  // localStorage.setItem('currentLevel', JSON.stringify(1 as number));
  // localStorage.setItem('preventLevel', JSON.stringify(0 as number));
  // localStorage.setItem('direction', 'stop');
  // localStorage.setItem('duration', JSON.stringify(1 as number));

  localStorage.stack = JSON.stringify([] as number[]);
});

</script>

<style lang="scss">
@use '@/assets/styles/AppStyle.scss';
</style>
