import { defineStore } from 'pinia';
import { useElevatorState } from '@/store/state';

export const useElevatorActions = defineStore('elevatorActions', () => {
  const elevatorState = useElevatorState();

  const addToQueue = (floor: number) => {
    if (!elevatorState.queue.includes(floor)) {
      elevatorState.queue.push(floor);
    }

    return true;
  };

  const removeCurrentFloor = () => {
    const index = elevatorState.queue.indexOf(elevatorState.currentFloor);
    if (index >= 0) {
      elevatorState.queue.splice(index, 1);
    }
  };

  const goNextFloor = () => {
    if (!elevatorState.queue.length) {
      elevatorState.moveDirection = 'stop';
      return elevatorState.queue.length;
    }

    const [first] = elevatorState.queue;
    elevatorState.currentFloor = first;
    elevatorState.transform = -((elevatorState.currentFloor - 1) * 150);

    if (elevatorState.currentFloor > elevatorState.preventFloor) {
      elevatorState.moveDirection = 'up';
      elevatorState.transitionDuration = elevatorState.currentFloor - elevatorState.preventFloor;
    } else {
      elevatorState.moveDirection = 'down';
      elevatorState.transitionDuration = elevatorState.preventFloor - elevatorState.currentFloor;
    }

    return elevatorState.transform;
  };

  return { addToQueue, removeCurrentFloor, goNextFloor };
});
