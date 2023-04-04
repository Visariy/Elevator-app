<template>
  <div class="app-container">
    <elevator-shaft-component />
    <floor-list-component />
  </div>
</template>

<script setup lang="ts">
import ElevatorShaftComponent from '@/components/ElevatorShaftComponent.vue';
import FloorListComponent from '@/components/FloorListCompont.vue';

</script>

<style lang="scss" scoped>
@use '@/assets/styles/view/ElevatorAppPageStyle.scss';
</style>
