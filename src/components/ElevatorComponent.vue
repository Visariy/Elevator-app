<template>
    <div
      :class="['elevator', { 'elevator-waiting': isWaiting }]"
      :style = "{transform: `translateY(${elevatorState.transform}px)`,
      'transition-duration': `${elevatorState.transitionDuration}s`}"
      @transitionend="nextFloor"
    >
      <div
        v-if="elevatorState.moveDirection !== 'stop'"
        class="elevator-direction-container"
      >
        <span>
          {{elevatorState.currentFloor}}
        </span>
        <img
          :src="require(`@/assets/icons/directionsArrow/arrow-${elevatorState.moveDirection}.svg`)"
          alt="Направление"
          class="direction-info"
        >
      </div>
    </div>
</template>

<script setup lang="ts">
import { useElevatorState } from '@/store/state';
import { onMounted, ref } from 'vue';
import { useElevatorActions } from '@/store/actions';

const elevatorState = useElevatorState();

const elevatorActions = useElevatorActions();

const isWaiting = ref(false);

function nextFloor() {
  if (!elevatorState.queue.length) {
    return false;
  }
  isWaiting.value = true;

  setTimeout(() => {
    elevatorState.preventFloor = elevatorState.currentFloor;
    elevatorActions.removeCurrentFloor();
    elevatorActions.goNextFloor();
    isWaiting.value = false;
  }, 3000);

  return true;
}

onMounted(() => {
  nextFloor();
});

</script>

<style lang="scss" scoped>
 @use '@/assets/styles/components/ElevatoComponentStyle.scss';
</style>
