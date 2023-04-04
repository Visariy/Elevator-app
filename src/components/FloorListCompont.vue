<template>

  <div class="floor-list">
    <floor-component v-for="floor in floors" :key="floor" :number="floor"/>
  </div>

</template>

<script setup lang="ts">
import FloorComponent from '@/components/FloorComponent.vue';

const floors = 7;

</script>

<style lang="scss" scoped>
@use '@/assets/styles/components/FloorListComponentStyle.scss';
</style>
