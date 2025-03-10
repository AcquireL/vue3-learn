<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{ options?: string[] }>();

const defaultOptions = [
  '奖品 A', '奖品 B', '奖品 C', '谢谢参与', '奖品 D', '奖品 E'
];

const options = computed(() => props.options && props.options.length > 0 ? props.options : defaultOptions);

const spinning = ref(false);
const degree = ref(0);
const audio = new Audio('spin-sound.mp3'); // 添加音效

const segmentAngle = computed(() => 360 / options.value.length);
const colors = ['#FFDDC1', '#FFABAB', '#FFC3A0', '#D5AAFF', '#85E3FF', '#B9FBC0'];

const getSegmentStyle = (index: number) => {
  return {
    transform: `rotate(${index * segmentAngle.value}deg)`,
    background: colors[index % colors.length],
    clipPath: 'polygon(50% 50%, 100% 0, 100% 50%, 50% 50%)', // 确保扇形均匀分布
  };
};

const getLabelStyle = (index: number) => {
  return {
    transform: `rotate(${index * segmentAngle.value + segmentAngle.value / 2}deg) translate(90px) rotate(900deg)`,
  };
};

const spin = () => {
  if (spinning.value) return;
  spinning.value = true;

  audio.play(); // 播放音效

  const extraRotation = 360 * 5; // 额外旋转 5 圈
  const randomStop = Math.floor(Math.random() * 360); // 随机停止角度
  degree.value += extraRotation + randomStop;

  setTimeout(() => {
    spinning.value = false;
  }, 3000);
};
</script>

<template>
  <div class="wheel-container">
    <div class="pointer"></div>
    <div class="wheel" :style="{ transform: `rotate(${degree}deg)`, transition: spinning ? 'transform 3s cubic-bezier(0.25, 1, 0.5, 1)' : 'none' }">
      <div v-for="(option, index) in options" :key="index" class="segment" :style="getSegmentStyle(index)">
        <span class="segment-label" :style="getLabelStyle(index)">{{ option }}</span>
      </div>
    </div>
    <button @click="spin" :disabled="spinning">旋转</button>
  </div>
</template>

<style scoped>
.wheel-container {
  position: relative;
  width: 300px;
  height: 300px;
}
.pointer {
  position: absolute;
  top: 0;
  left: 50%;
  width: 20px;
  height: 40px;
  background: red;
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  transform: translateX(-50%);
  z-index: 10;
}
.wheel {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 5px solid black;
  position: relative;
  background: white;
  overflow: hidden;
}
.segment {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform-origin: 50% 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.segment-label {
  position: absolute;
  transform-origin: center;
  font-size: 10px;
  font-weight: bold;
  color: black;
  white-space: nowrap;
}
button {
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}
button:disabled {
  background-color: gray;
  cursor: not-allowed;
}
button:hover:not(:disabled) {
  background-color: darkblue;
}
</style>