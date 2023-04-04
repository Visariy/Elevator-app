<template>

  <div class="floor">
    <div class="floor-count">
      {{ props.number }} Floor
    </div>
    <div class="call-elevator-container">
      <button @click="addFloor(number)"
              :class="['call-elevator-button',
              {'call-elevator-button-disable': elevatorState.queue.includes(number)}]"
      >
      </button>
    </div>
  </div>

</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import { useElevatorActions } from '@/store/actions';
import { useElevatorState } from '@/store/state';

const elevatorState = useElevatorState();

const elevatorActions = useElevatorActions();

const props = defineProps({
  number: Number as PropType<number>,
});

const addFloor = (floor: number) => {
  if (elevatorActions.addToQueue(floor)) {
    elevatorActions.goNextFloor();
  }
};

</script>

<style lang="scss" scoped>
@use '@/assets/styles/components/FloorComponentStyle.scss';
</style>
