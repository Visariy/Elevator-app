import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const useElevatorState = defineStore('elevatorState', () => {
  const queue = useLocalStorage('queue', [] as number []);
  const transform = useLocalStorage('transform', 0);
  const currentFloor = useLocalStorage('currentLevel', 1);
  const preventFloor = useLocalStorage('preventLevel', 0);
  const moveDirection = useLocalStorage('direction', 'stop');
  const transitionDuration = useLocalStorage('duration', 1);

  return {
    queue, transform, currentFloor, preventFloor, moveDirection, transitionDuration,
  };
});
